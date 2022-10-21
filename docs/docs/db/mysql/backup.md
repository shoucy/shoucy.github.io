# Mysql数据备份

## mysqldump

mysqldump是mysql官方提供的用于备份数据的命令，它将数据备份为SQL脚本。其中包含从头重新创建数据库所必需的命令 `CREATE TABLE` , `INSERT` 等。恢复时，只需要在目标数据库执行该脚本即可。

### 命令

备份指定数据库：

```shell
mysqldump -u用户名 -p密码 数据库名 > 文件名.sql
```

备份指定数据库的指定表：

```shell
mysqldump -u用户名 -p密码 数据库名 表名1 表名2 > 文件名.sql
```

导出一切：

```shell
mysqldump -u用户名 -p密码 --all-databases > 文件名.sql
```

常用的参数：

- `--help` ：帮助

- `--host, -h`：目标主机ip地址。如果要备份远程mysql数据，你需要它。

- `--port, -P`：端口号。如果目标数据库使用了非3306端口，你需要它。

- `--all-databases , -A`导出全部数据库。

### 恢复方式

执行备份的sql即可。

1. 登录mysql：`mysql -uroot -p`

2. 选择数据库：`use <数据库名>`

3. 执行sql文件：`source <sql文件完整的路径>` 
