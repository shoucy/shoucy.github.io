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

登录mysql，选择数据库并执行备份的sql文件即可：

1. 登录mysql：`mysql -uroot -p`

2. 选择数据库：`use <数据库名>`

3. 执行sql文件：`source <sql文件完整的路径>` 

或者也可以在不登陆数据库的情况执行sql文件：

```shell
mysql -uroot -pladygaga dbName < sqlFilePath
```

::: tip

尽可能不要使用navicat等数据库远程连接工具执行较大的sql文件，可能会出现 `MySQL server has gone away` 这类错误。

:::

### 如果使用windows服务器

可能再恢复数据时，时不时出现报错：

```shell
unknown command '\'
```

这是sql导出与导入时编码不一致导致的。导出时使用的是utf8编码，而导入时用的是GBK编码，备份文件恢复的时候可能就会出现格式错误。

我遇到的情形是在linux导出的sql文件，恢复到windows服务器上导致的。

需要记得使用utf8编码连接：

```shell
mysql -uroot -ppassword --default-character-set=utf8
```

以及，尽可能不要使用windows服务器。今年遇到了几个项目异常都是windows服务器默认使用GBK引起的:cry:。
