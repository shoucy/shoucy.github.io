---
layout: Post
title: 基于Rsync的文件备份方案
subtitle: 球球天上掉下来个运维，让我专注开发吧
headerImage: /img/in-post/rsync.jpg
useHeaderImage: true
headerMask: rgba(40, 57, 101, .2)
date: 2022-08-13
tags:
- 运维
---

提供一种基于rsync的远程文件备份方案。

<!-- more -->

这不是关于rsync的教学，而是一种方案，它满足了我在工作中遇到的需求。rsync的玩法很多，如果对rsync本身感兴趣，或者有更为复杂的备份需求，可以学习阮一峰老师写的《[rsync 用法教程](https://www.ruanyifeng.com/blog/2020/08/rsync.html)》入门。

## rsync基础

rsync是一款**开源**的文件备份工具，通常用于跨设备之间的文件增量备份。

从字面上来理解：

- r（remote）： 远程

- sync：同步

它的官网是：[https://rsync.samba.org/](https://rsync.samba.org/)。（有趣的是域名中的samba是另一种~~历史上的~~文件共享方式。）

### 安装

```shell
yum install -y rsync
```

### 最基本的命令

```shell
# 将souerce文件夹下的内容同步到destination目录下，使两个文件夹保持一致（模拟）。
rsync -anv --delete /source/ /destination
```

- `-a`、`--archive`：存档模式，保存所有的元数据，比如修改时间（modification time）、权限、所有者等，并且软链接也会同步过去。其实就等同于`-tropgDl`，一堆常用选项的集合。

- `-v`：输出细节。`-vv`表示输出更详细的信息，`-vvv`表示输出最详细的信息。

- `-z`：指定同步时压缩数据。

- `--delete`：删除只存在于目标目录、不存在于源目标的文件，即保证目标目录是源目标的镜像。

- `-n`、`--dry-run`：模拟将要执行的操作，而并不真的执行。配合`-v`参数使用，可以看到哪些内容会被同步过去。

::: warning

`--delete` 会删除目标端有但数据源端没有的文件，使用这个参数前需要三思你是否真的需要删除它们。

:::

### 两种远程备份方式

rsync远程具备两种实现方式：通过ssh协议、通过守护进程。

使用ssh协议可以起到类似于 `scp` 的效果。只需拥有远端服务器的用户账号及密码，适用于远端服务器没有安装rsync的情况。从安全来讲，因为ssh连接的加密性，对数据来说是安全的，无法被劫持。可是在敲命令行时却会造成其它问题：

1. 命令行暴露了远端用户名，账户泄露可能造成的服务器安全隐患。

2. 使用远端用户需要确认该用户的权限可以访问目标文件。

3. 命令行暴露了真实的文件路径，安全隐患。

使用守护进程需要本机和远端服务器都安装rsync。它具有一些使用ssh没有的优点：

1. 可以将各个同步任务配置成一个个模组，用户通过模组进行访问，避免暴露真实文件路径。

2. 单独的用户管理，避免暴露服务器用户。

在访问守护进程时，使用的rsync协议并没有像shh一样对文件内容进行加密。rsync给了用户一个很蛋疼的选择题，它提供了一套标准且安全的操作流程，及一个并不如ssh安全的协议。因为通过socket传输，它比ssh快得多（其实很多时候相对传输文件，比对文件才是真正耗时的事情）。

通常情况，在架构层面上使用，**如果条件允许，多数人会考虑搭建守护进程服务**。

### 配置文件

配置文件所在位置：`/etc/rsyncd.config` 。

在不同的操作系统版本下，这个配置文件不一定会存在。可以通过 `rpm -ql rsync` 或 `rpm -qc rsync` 查找。

如果安装后有生成配置文件（不一定会有），会看到里面是一个全部配置都被注释了的官方示例：

```properties
# /etc/rsyncd: configuration file for rsync daemon mode

# See rsyncd.conf man page for more options.

# configuration example:

# uid = nobody
# gid = nobody
# use chroot = yes
# max connections = 4
# pid file = /var/run/rsyncd.pid
# exclude = lost+found/
# transfer logging = yes
# timeout = 900
# ignore nonreadable = yes
# dont compress   = *.gz *.tgz *.zip *.z *.Z *.rpm *.deb *.bz2

# [ftp]
#        path = /home/ftp
#        comment = ftp export area
```

配置文件分为全局参数和模块参数，中括号中写的是模块名，模块名下面的是关于这个模块的模块参数。

常见配置项：

- `uid`：运行进程的用户

- `gid`：运行进程的用户组

- `port`：监听端口

- `fake super`：无需让rsync以root身份运行，允许存储文件的完整属性（3.1版本之后）

- `use chroot`：是否启用假根

- `max connections`：最大连接数，默认不限制

- `timeout`：超时时间，默认无限制，理想数字为600（单位为秒）

- `ignore errors`：忽略错误信息

- `read only`：是否只开启读取权限

- `list`：指定当客户请求列出可以使用的模块列表时，该模块是否应该被列出。如果设置该选项为 false，可以创建隐藏的模块。

- `auth users`：指定由空格或逗号分隔的用户名列表，只有这些用户才允许连接该模块。这里的用户和系统用户没有任何关系。用户名和口令以明文方式存放在 secrets file 参数指定的文件中。

- `secrets file`：指定一个 rsync 认证口令文件。只有在 auth users 被定义时，该文件才起作用。

## 整体思路

假设我们有两台服务器：

1. 服务器A作为文件服务端，平时对于文件增、删、改都发生在这台服务器上。A服务器上的文件很重要，我们需要定期备份上面的文件。

2. 服务器B作为文件客户端，用来定期备份A上的文件。

两台服务器都安装rsync，其中：

1. A服务器的rsync作为守护进程启动，对B服务器提供服务。**配置文件在这台服务器上。**

2. B服务器的rsync作为访问A服务器的客户端工具使用。

## 编写配置文件

在服务端 `etc/rsyncd.conf` 下配置：

```properties
# uid和gid依业务实际情况而定
uid = root
gid = root
# 这两个配置组合为3.1版本之后的特色,使得不需要去改文件权限。
fake super = yes
use chroot = no
# 最大连接数
max connections = 200
# 连接超时:10分钟
timeout = 600
# 排除文件夹
exclude = lost+found/
# 忽略报错，反正也没人看
ignore errors

[backup]
path = /source
comment = test backup
# 只读
read only = true
```

## 启动守护进程

服务端运行。（不至于在服务端写配置在客户端运行吧...）

```shell
$ systemctl start rsyncd
# 检查进程
$ ps -ef | grep rsync
root      525163       1  0 12:02 ?        00:00:00 /usr/bin/rsync --daemon --no-detach
root      525334  514841  0 12:04 pts/0    00:00:00 grep --color=auto rsync
# 检查端口，默认是873
$ netstat -antlp | grep rsync
tcp        0      0 0.0.0.0:873             0.0.0.0:*               LISTEN      129621/rsync        
tcp6       0      0 :::873                  :::*                    LISTEN      129621/rsync
```

如果 `etc/rsyncd.confg` 中没有配置模块，会发现服务并没有真的被启动起来。

::: details 如果你在用centos8

可能会遇到：

```shell
$ systemctl start rsyncd
Failed to start rsyncd.service: Unit rsyncd.service not found.
```

真开心:slightly_smiling_face:

我这里服务器的系统版本是 `CentOS Stream release 8`。安装rsync时它并没有创建 `systemctl` 服务，只好自给自足了。

添加文件 `/etc/sysconfig/rsyncd`：

```properties
OPTIONS="" 
```

添加文件`/lib/systemd/system/rsyncd.service`：

```properties
[Unit]
Description=fast remote file copy program daemon
ConditionPathExists=/etc/rsyncd.conf

[Service]
EnvironmentFile=/etc/sysconfig/rsyncd
ExecStart=/usr/bin/rsync --daemon --no-detach "$OPTIONS"

[Install]
WantedBy=multi-user.target
```

再尝试：

```shell
$ systemctl status rsyncd
● rsyncd.service - fast remote file copy program daemon
   Loaded: loaded (/usr/lib/systemd/system/rsyncd.service; disabled; vendor preset: disabled)
   Active: active (running) since Sat 2022-08-06 12:12:51 CST; 1min 32s ago
 Main PID: 526549 (rsync)
    Tasks: 1 (limit: 23293)
   Memory: 300.0K
   CGroup: /system.slice/rsyncd.service
           └─526549 /usr/bin/rsync --daemon --no-detach
```

ok啦。

:::

如果想要设置开机自启：

```shell
 systemctl status rsyncd
```

## 测试守护进程

使用备份服务器（客户端）进行测试：

```shell
# 展示对外暴露的模块，前面是模块名，后面是配置文件中对该模块的介绍。
$ rsync rsync://124.223.110.101
backup             test backup
# 浏览模块下的内容
$ rsync 124.223.110.101::backup
drwxr-xr-x          4,096 2022/08/03 21:38:27 .
-rw-r--r--              0 2022/08/03 21:38:27 file.txt
# 测试文件备份
$ rsync -anv 124.223.110.101::backup /destination
receiving incremental file list
./
file.txt

sent 34 bytes  received 81 bytes  230.00 bytes/sec
total size is 0  speedup is 0.00 (DRY RUN)
```

此刻，文件同步服务便成功搭建了。

::: tip

客户端很长时间没有得到响应，可能是服务端内防火墙，或者外部防火墙、安全组没有打开873端口，参考所使用的云服务文档。

:::

## 服务端增加用户鉴权

如果我们搭建rsync服务是为了实现定期备份，那么应该是提供能固定的服务器的，而不是面向所有服务器。就需要有用户鉴权机制。

在 `/etc/rsyncd/rsyncd.secrets` 下设置rsync用户的账户及密码（没有就建一个）。

```
simba:tlk1994
```

冒号左边是账号，右边是密码。

添加后，记得 `secrets file` 文件必须赋予600权限：

```shell
chmod 600 /etc/rsyncd/rsyncd.secrets
```

配置文件上增加鉴权信息：

```properties{4,5,23,24}
# uid和gid依业务实际情况而定
uid = root
gid = root
# 指定访问密码文件
secrets file = /etc/rsyncd/rsyncd.secrets
# 这两个配置组合为3.1版本之后的特色,使得不需要去改文件权限。
fake super = yes
use chroot = no
# 最大连接数
max connections = 200
# 连接超时:10分钟
timeout = 600
# 排除文件夹
exclude = lost+found/
# 忽略报错，反正也没人看
ignore errors

[backup]
path = /source
comment = test backup
# 只读
read only = true
# 可访问用户
auth users = simba
```

再试着以原来的命令访问模块下的文件：

```shell
$ rsync 124.223.110.101::backup
Password: 
@ERROR: auth failed on module backup
rsync error: error starting client-server protocol (code 5) at main.c(1661) [Receiver=3.1.3]
```

会要求输入密码，并且输入什么都是错的（用户名都没提供）。

需要通过 `用户名@域名::模块名` 的方式访问。

```shell
$ rsync simba@124.223.110.101::backup
Password: 
drwxr-xr-x          4,096 2022/08/03 21:38:27 .
-rw-r--r--              0 2022/08/03 21:38:27 file.txt
```

连接成功！

::: tip

如果增加用户鉴权后连接失败了，可以参考 `/var/log.messages` 文件。

```shell
tail /var/log/messages
```

:::

## 客户端免密

为什么要想方设法免密呢？

因为通常我们会将rsync配置为自动脚本，脚本是不会有机会在执行命令后输入密码的:rofl:。我们要确保在脚本执行rsync命令后不需要输入密码。

### 方式1：编写密码文件

编写一个密码文件，每次连接服务端时调取密码文件。

```shell
echo "tlk1994" > /etc/rsyncd/rsyncd.password
chmod 600 /etc/rsyncd/rsyncd.password
rsync simba@124.223.110.101::backup --password-file=/etc/rsyncd/rsyncd.password 
```

### 方式2：定义密码变量（这个棒）

```shell
export RSYNC_PASSWORD=tlk1994
rsync simba@124.223.110.101::backup
```

不手写密码或指定密码文件，rsync会寻找有没有叫 `RSYNC_PASSWORD` 的变量。如果只是在ssh命令行 `export` 只会保存在这次会话。所以写脚本时，记得把 `export` 语句也写进去。

## 定时任务

配置一个任务脚本，用shell、python、rubby什么都可以。根据自身需要编写，这里提供一个最简单的示例：

```shell
# backup.sh
export RSYNC_PASSWORD=tlk1994
rsync -a 124.223.110.101::backup /destination
```

使用shell需要确定它具备可执行权限：

```shell
chomd +x backup.sh
```

打开定时任务配置文件：

```shell
crontab -e
```

编写文件内容：

```vim
0 20 * * * /somewhere/backup.sh
```

需要注意linux的crontab软件的表达式格式为：`分 时 天 月 周` ，和代码中常用的从秒开始不同。

定时任务软件重启一下：

```shell
# 重启定时任务软件
$ service restart crond
# 查看已配置的定时任务
$ crontab -l
0 20 * * * /somewhere/backup.sh
```

## 参考

- [使用 rsync 参数及设置](http://t.zoukankan.com/MRPUNK-p-3849305.html)

- [rsync 用法教程](https://www.ruanyifeng.com/blog/2020/08/rsync.html)
