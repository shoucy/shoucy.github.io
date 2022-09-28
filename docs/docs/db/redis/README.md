## Redis

Redis诞生于2009年，全称**Re**mote **Di**ctionary **S**erver，远程词典服务器，是一个基于内存的键值型NoSql数据。

官网：[https://redis.io](https://redis.io)

作者是意大利人，网名叫antirez，拥有非常茂密的头发。

特点：

- 键值型，value支持丰富的数据结构。
- 单线程，每个命令具有原子性。
- 低延迟、速度快（**基于内存**、IO多路复用、良好的编码）
- 支持数据持久化
- 支持主从集群和分片集群
- 支持多语言客户端

## 安装

Redis是基于C语言编写的，因此首先需要安装Redis所需要的gcc依赖：

```shell
yum install -y gcc tcl
```

下载并编译

```shell
# 找一个喜欢的目录
cd /usr/local/src
# 下载
wget https://download.redis.io/redis-stable.tar.gz
# 解压
tar -xzvf redis-stable.tar.gz
# 进入文件夹
cd redis-stable
# 编译
make
make install
```

测试

```shell
# 启动
redis-server
```

退出使用 `Ctrl-C` 。

::: tip

redis没有官方的windows版本，如果要使用windows版本，可以下载第三方打包的版本：

[https://github.com/tporadowski/redis/releases](https://github.com/tporadowski/redis/releases)(相对较新)

[https://github.com/microsoftarchive/redis/releases](https://github.com/microsoftarchive/redis/releases)

如果不想观赏小黑窗，可以把redis配置为windows服务自启，进入redis文件夹：

```shell
# 注册服务
redis-server --service-install redis.windows.conf
# 移除服务
redis-server --service-uninstall
```

:::

## 配置

可以修改redis.conf文件中的一些配置：

```properties
# 允许访问的地址，默认是127.0.0.1，会导致只能在本地访问。修改为0.0.0.0则可以在任意IP访问，生产环境不要设置为0.0.0.0
bind 0.0.0.0
# 守护进程，修改为yes后即可后台运行
daemonize yes 
# 密码，设置后访问Redis必须输入密码
requirepass 123321
```

Redis的其它常见配置：

```properties
# 监听的端口
port 6379
# 工作目录，默认是当前目录，也就是运行redis-server时的命令，日志、持久化等文件会保存在这个目录
dir .
# 数据库数量，设置为1，代表只使用1个库，默认有16个库，编号0~15
databases 1
# 设置redis能够使用的最大内存
maxmemory 512mb
# 日志文件，默认为空，不记录日志，可以指定日志文件名
logfile "redis.log"
```

以配置文件启动：

```shell
redis-server redis.conf
```

停止服务：

```shell
# 利用redis-cli来执行 shutdown 命令，即可停止 Redis 服务，
# 因为之前配置了密码，因此需要通过 -u 来指定密码
redis-cli -u 123321 shutdown
```

## 开机自启

我们也可以通过配置来实现开机自启。

首先，新建一个系统服务文件：

```shell
vi /etc/systemd/system/redis.service
```

内容如下：

```properties
[Unit]
Description=redis-server
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/bin/redis-server /usr/local/src/redis-6.2.6/redis.conf
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

然后重载系统服务：

```shell
systemctl daemon-reload
```

现在，我们可以用下面这组命令来操作redis了：

```shell
# 启动
systemctl start redis
# 停止
systemctl stop redis
# 重启
systemctl restart redis
# 查看状态
systemctl status redis
```

执行下面的命令，可以让redis开机自启：

```shell
systemctl enable redis
```

## Redis命令行客户端

Redis安装完成后就自带了命令行客户端：redis-cli，使用方式如下：

```shell
redis-cli [options] [commonds]
```

其中常见的options有：

- `-h 127.0.0.1`：指定要连接的redis节点的IP地址，默认是127.0.0.1
- `-p 6379`：指定要连接的redis节点的端口，默认是6379
- `-a 123321`：指定redis的访问密码 

其中的commonds就是Redis的操作命令，例如：

- `ping`：与redis服务端做心跳测试，服务端正常会返回`pong`

不指定commond时，会进入`redis-cli`的交互控制台

## 图形化桌面客户端

GitHub上的大神编写了Redis的图形化桌面客户端，地址：[https://github.com/uglide/RedisDesktopManager](https://github.com/uglide/RedisDesktopManager)

不过该仓库提供的是RedisDesktopManager的源码，并未提供windows安装包。

这个仓库可以找到安装包：[https://github.com/lework/RedisDesktopManager-Windows/releases](https://github.com/lework/RedisDesktopManager-Windows/releases)
