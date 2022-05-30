## mysql主从搭建

### 前置条件

1. 主从数据库版本一致
2. 主从数据库**当前数据完全一致**！最好是新搭建的数据库。

### 为从服务器创建账号

```sql
mysql> create user 'synchronize'@'xxx.xxx.xxx.xxx' identified by 'psssword';
Query OK, 0 rows affected (0.01 sec)

mysql> grant replication slave on *.* to 'synchronize'@'xxx.xxx.xxx.xxx';
Query OK, 0 rows affected (0.01 sec)
```

`replication slave`是文件同步权限。

`*.*`是指所有库的所有表。



### 配置修改

主：

```ini
# 主从配置（主）
# 唯一id，主数据库必须比从数据库小
server-id=1
# logbin文件
log-bin=mysql_bin
```

从：

```ini
# 主从配置（从）
# 唯一id，主数据库必须比从数据库小
server-id=2
# 中继日志文件，用来存放I/O线程获取的日志信息
relay-log=slave_relay_bin
```

配置后需要在当前服务器重启mysql

```shell
$ systemctl restart mysqld.service
```

### 开启主从同步

使用root账号，登录mysql**主数据库**，执行以下命令：

```sql
mysql> show master status;
+------------------+----------+--------------+------------------+-------------------+
| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+------------------+----------+--------------+------------------+-------------------+
| mysql_bin.000001 |      154 |              |                  |                   |
+------------------+----------+--------------+------------------+-------------------+
1 row in set (0.00 sec)
```

该语句提供有关主服务器二进制日志文件的状态信息。它需要`SUPER`或`REPLICATION CLIENT`特权。

`mysql_bin.000001` 为日志文件名，154为数据库Position



使用root账号，登录mysql**从数据库**，执行以下命令：

```sql
mysql> change master to
    -> master_host='10.189.11.103',
    -> master_port=3308,
    -> master_user='synchronize',
    -> master_password='Jingbo@file0530',
    -> master_log_file='mysql_bin.000001',
    -> master_log_pos=154;
Query OK, 0 rows affected, 2 warnings (0.01 sec)
```

解释

- `master_host` ：主数据库的ip
- `master_port` ：主数据库的端口号
- `master_user` ：主数据库授权的远程登录账号
- `master_password` ：主数据库授权的远程登录密码
- `master_log_file：主数据库的日志文件`
- `master_log_pos`：主数据库日志文件中的Position值。据说，我是说据网友说，这里是可以直接写0的，系统会自动匹配。

启动从数据库配置：

```sql
mysql> start slave;
Query OK, 0 rows affected (0.00 sec
```

启动后我们需要检查是否正常开启同步：

```sql{13-14}
mysql> show slave status\G
*************************** 1. row ***************************
               Slave_IO_State: Waiting for master to send event
                  Master_Host: 10.189.11.103
                  Master_User: synchronize
                  Master_Port: 3308
                Connect_Retry: 60
              Master_Log_File: mysql_bin.000001
          Read_Master_Log_Pos: 154
               Relay_Log_File: slave_relay_bin.000002
                Relay_Log_Pos: 320
        Relay_Master_Log_File: mysql_bin.000001
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
              Replicate_Do_DB: 
          Replicate_Ignore_DB: 
           Replicate_Do_Table: 
       Replicate_Ignore_Table: 
      Replicate_Wild_Do_Table: 
  Replicate_Wild_Ignore_Table: 
                   Last_Errno: 0
                   Last_Error: 
                 Skip_Counter: 0
          Exec_Master_Log_Pos: 154
              Relay_Log_Space: 527
              Until_Condition: None
               Until_Log_File: 
                Until_Log_Pos: 0
           Master_SSL_Allowed: No
           Master_SSL_CA_File: 
           Master_SSL_CA_Path: 
              Master_SSL_Cert: 
            Master_SSL_Cipher: 
               Master_SSL_Key: 
        Seconds_Behind_Master: 0
Master_SSL_Verify_Server_Cert: No
                Last_IO_Errno: 0
                Last_IO_Error: 
               Last_SQL_Errno: 0
               Last_SQL_Error: 
  Replicate_Ignore_Server_Ids: 
             Master_Server_Id: 1
                  Master_UUID: f0afa1fc-dfe3-11ec-8b3c-52540183090b
             Master_Info_File: /var/lib/mysql/master.info
                    SQL_Delay: 0
          SQL_Remaining_Delay: NULL
      Slave_SQL_Running_State: Slave has read all relay log; waiting for more updates
           Master_Retry_Count: 86400
                  Master_Bind: 
      Last_IO_Error_Timestamp: 
     Last_SQL_Error_Timestamp: 
               Master_SSL_Crl: 
           Master_SSL_Crlpath: 
           Retrieved_Gtid_Set: 
            Executed_Gtid_Set: 
                Auto_Position: 0
         Replicate_Rewrite_DB: 
                 Channel_Name: 
           Master_TLS_Version: 
1 row in set (0.00 sec)
```

`Slave_IO_Running` 与 `Slave_SQL_Running` 这两项显示都是YES才为正常。

如果出现no或者connecting，就要查看错误日志，根据错误原因来排除故障。一般的ip错误、端口错误、用户名或密码错误、该用户在当前host没有 `replication slave` 权限等。

### 清除主从

从数据库：

```sql
mysql> stop slave;
Query OK, 0 rows affected, 1 warning (0.00 sec)
mysql> reset slave all;
Query OK, 0 rows affected (0.00 sec)
```

停止同步数据，并清除关于同步的配置。

主数据库：

```sql
mysql> RESET MASTER;
Query OK, 0 rows affected (0.00 sec)
```

`RESET MASTER` 是删除所有的二进制日志，创建一个.000001的空日志。RESET MASTER并不会影响SLAVE服务器上的工作状态，所以盲目的执行这个命令会导致slave找不到master的binlog，造成同步失败，我们要删除同步，所以必须执行它。

再进行对master的查看：

```sql
mysql> show master status;
+------------------+----------+--------------+------------------+-------------------+
| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+------------------+----------+--------------+------------------+-------------------+
| mysql_bin.000001 |      154 |              |                  |                   |
+------------------+----------+--------------+------------------+-------------------+
1 row in set (0.00 sec)
```

