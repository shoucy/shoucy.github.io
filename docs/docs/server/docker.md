
## Docker? Yes!

你是不是有以下苦恼？

- 一款产品，开发与上线搭建两套环境。好麻烦！
- 部署集群，每台机器都要部署环境（Redis，ES，Hadoop...），各种来回修改修改配置，好麻烦！
- 开发明明在电脑上可以运行，运维部署上后运行不了，因为版本差异导致服务不能用。运维口吐芬芳！
- windows开发一时爽，部署linux火葬场。
- 开发看运维不爽，想干掉运维，却又不知如何下手。

这些问题拥有共同的答案：Docker！

![docker的logo](./docker.assets/docker-logo.png)



Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。

Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。

容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。

Docker镜像逐渐成为企业交付的标准，必须要掌握。

官网：https://www.docker.com/



## Docker的历史

2010年搞IT的几个年轻人，在美国成立了一家公司——**DotCloud**。通过paas的云计算服务。他们将自己的容器化技术，命名为Docker。

Docker起步阶段，没有引起行业的注意，DotCloud眼看凉凉。2013年为了将技术延续下去，决定将Docker开源，一开惊人，越来越多人发现了Docker的优点！

2014年4月9日，Docker1.0发布！



## Docker与虚拟机的对比

虚拟机：

- 虚拟机是一种虚拟技术，完成的虚拟一台完整的操作系统，然后在这套虚拟系统安装和运行软件。
- 使用虚拟机占用资源十分多，冗余步骤多，启动很慢。

Docker：

- 容器化技术并不是模拟一个完整的操作系统，它没有自己的内核，也不虚拟硬件。容器内的应用直接运行在宿主机。
- 每个容器内都有属于自己的文件系统，互不影响。
- 一台物理机可以运行多个Docker实例。
- Docker容器技术，也是一种虚拟技术。Docker容器只虚拟最核心的环境，只有4兆，十分轻巧，秒级启动。



## DevOps

既是开发人员，又是运维人员。DevOps可以更快的交付和部署。

Docker让你一键运行打包镜像，发布测试。

Docker让你的开发、测试、生产高度一致。让你开发测试部署一条龙给客户提供服务。



## Docker安装

### 卸载旧的Docker

```shell
$ yum remove docker \
             docker-client \
             docker-client-latest \
             docker-common \
             docker-latest \
             docker-latest-logrotate \
             docker-logrotate \
             docker-engine
```

### 安装依赖

```shell
$ yum install -y yum-utils
```

### 设置镜像的仓库

```shell
$ yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

### 安装Docker

```shell
$ yum install docker-ce docker-ce-cli containerd.io
```

ps: docker-ce是社区版，ee是企业版。

### 启动

```shell
$ systemctl start docker
```

跑个helloword：

```shell
$ docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

```

### 卸载

```shell
# 卸载软件
$ yum remove docker-ce docker-ce-cli containerd.io
# 卸载后删除目录
$ rm -rf /var/lib/docker
$ rm -rf /var/lib/containerd
```



## 底层原理

### Docker是如何工作的？

一图胜千言：

![Docker Architecture Diagram](./docker.assets/architecture.svg)

Docker是一个Client-Server结构的系统，Docker的守护进程运行在主机上。通过Socket从客户端访问！

DockerServer接收到Docker-Client的指令，就会执行这个命令。

### Images

镜像是一种轻量级、可执行的独立软件包，用来打包运行环境和基于此环境开发的软件，它包含某个软件需要的所有内容，包括代码、运行时、库、环境变量和配置文件。

所有的应用，直接打包docker镜像，就可以直接跑起来。

如何得到镜像呢？

1. 从远程仓库下载
2. 拷贝
3. **制作一个镜像DockerFile**

### 联合文件系统

联合文件系统（UnionFS）是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下。
联合文件系统是 Docker 镜像的基础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。



## Docker命令

最常用的一些命令：

![docker常用命令](./docker.assets/command-line.jpg)

详情见文档：https://docs.docker.com/engine/reference/run/

查阅docker信息：

```shell
# 版本
docker version
# 镜像和容器的信息
docker info
# 帮助文档
dicker 命令 --help
```



### 镜像命令

文档：https://docs.docker.com/reference/

#### docker images

```shell
$ docker images
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
mysql         latest    c8562eaf9d81   6 months ago    546MB
centos        latest    300e315adb2f   7 months ago    209MB
hello-world   latest    bf756fb1ae65   18 months ago   13.3kB		
```

具体解释如下：

| 字段        | 解释             |
| ----------- | ---------------- |
| RESPOSITORY | 镜像的仓库源     |
| TAG         | 镜像的标签(版本) |
| IMAGE ID    | 镜像的ID         |
| CREATED     | 镜像创建时间     |
| SIZE        | 镜像大小         |

常用可选项：

| 缩写 | 完整    | 解释           |
| ---- | ------- | -------------- |
| -a   | --all   | 列出所有镜像   |
| -q   | --queit | 只显示镜像的id |

#### docker search

搜索镜像的命令。

但还是建议去官方的Docker Hub搜索，信息更全。

Docker Hub：https://hub.docker.com/

```shell
$ docker search mysql
NAME                       DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
mysql                      MySQL is a widely used, open-source relation…   11138     [OK]       
mariadb                    MariaDB Server is a high performing open sou…   4221      [OK]       
mysql/mysql-server         Optimized MySQL Server Docker images. Create…   829                  [OK]
centos/mysql-57-centos7    MySQL 5.7 SQL database server                   89                   
...
```

#### docker pull

拉取镜像

以下载mysql为例：

```shell
$ docker pull mysql # 如果要指定版本，就docker pull mysql[:tag]
Using default tag: latest # 默认latest
latest: Pulling from library/mysql
b4d181a07f80: Pull complete # 分层下载，联合文件系统，docker image的核心。
a462b60610f5: Pull complete 
578fafb77ab8: Pull complete 
524046006037: Pull complete 
d0cbe54c8855: Pull complete 
aa18e05cc46d: Pull complete 
32ca814c833f: Pull complete 
9ecc8abdb7f5: Pull complete 
ad042b682e0f: Pull complete 
71d327c6bb78: Pull complete 
165d1d10a3fa: Pull complete 
2f40c47d0626: Pull complete 
Digest: sha256:52b8406e4c32b8cf0557f1b74517e14c5393aff5cf0384eff62d9e81f4985d4b # 签名
Status: Downloaded newer image for mysql:latest # 真实地址
docker.io/library/mysql:latest
```

#### docker rmi

删除镜像

```bash
$ docker rmi c8562eaf9d81
Untagged: mysql@sha256:feada149cb8ff54eade1336da7c1d080c4a1c7ed82b5e320efb5beebed85ae8c
Deleted: sha256:c8562eaf9d81c779cbfc318d6e01b8e6f86907f1d41233268a2ed83b2f34e748
Deleted: sha256:1b649b85960473808c6b812fc30c3f6a3ff1c0ffdcba5c9435daf01cf7d5373a
Deleted: sha256:19cc889447050c16c797fd209fa114ee219de23facb37c00d4137a4ed4aad922
......
```

### 容器命令

#### docker run

创建容器并启动

```shell
docker run [可选参数] image
```

常用可选参数：

| 参数         | 说明                         |
| ------------ | ---------------------------- |
| --name="foo" | 指定容器名称                 |
| -d           | 后台运行                     |
| -it          | 交互式运行，进入容器查看内容 |
| -p           | 指定容器端口                 |

```shell
# 进入容器
$ docker run -it centos /bin/bash
[root@c663294f668f /]# ls
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
# 退出
$ exit    
exit
# 查看正在运行的容器
$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
# 现在与历史运行过的容器
$ docker ps -a
CONTAINER ID   IMAGE         COMMAND       CREATED          STATUS                       PORTS     NAMES
c663294f668f   centos        "/bin/bash"   11 minutes ago   Exited (127) 6 minutes ago             recursing_gould
9d91f4a82687   hello-world   "/hello"      8 hours ago      Exited (0) 8 hours ago                 frosty_snyder
...
```

关于退出容器

- exit：直接结束容器运行
- ctrl + p + q：容器在不停止的情况退出命令行

#### docker rm

删除指定容器

全部删除：

```shell
[root@bibiboy ~]# docker rm -f $(docker ps -aq)
c663294f668f
9d91f4a82687
7e4410476a9d
c55bb8d50716
1693844328e6
035a227f634a
000b68316321
```

#### docker start/restart/stop/kill

- docker start：启动
- docker restart：重启
- docker stop：停止
- docker kill：强制关闭

#### docker logs

```shell
# 查看日志，需要提供容器id,本示例所使用的CONTAINER ID为1c21173fb470
$ docker logs 1c21173fb470
# 带时间戳的日志
$ docker logs -tf 1c21173fb470
# 控制显示条数
$ docker logs --tail 10 1c21173fb470
```

#### docker top

查看容器内的进程信息，需要提供容器id

```shell
$ docker top 1c21173fb470
UID      PID      PPID      C      STIME      TTY       TIME      CMD
root     30254    30234     4      21:03      pts/0     00:00:00  /bin/bas
```

#### docker inspect

显示指定容器的详细信息，需提供容器id

```shell
docker inspect 1c21173fb470
```

#### docker exec

进入一个容器，并打开一个命令行工具。

```shell
docker exec -it 1c21173fb470 /bin/bash
```

#### docker attach

进入容器，并使用容器正在运行的命令行。

这在个人使用时很方便，但在多人使用时会出现共用控制台的情形。

```shell
$ docker attach 1c21173fb470
```

#### docker cp

```shell
# docker cp 容器id:容器内路径 目的地主机路径
$ docker cp 1c21173fb470:/root/dove.txt ./
```

#### docker states

检查各容器状态，主要用来查看cpu和内存的占用情况。



### 容器与镜像之间

#### commit

提交容器成为一个新的镜像

```shell
$ docker commit -m="提交的描述信息" -a="作者" 容器id 目标镜像名[:tag]
```



## 容器数据卷

docker的作用就是将环境与应用打包成镜像。但是数据怎么办呢？容器一删，数据就无了。

删库跑路so easy~

数据库产生的数据肯定是不能在容器中的！

Docker容器之间有种数据共享技术——数据卷！数据卷可以将Docker容器中产生的数据，同步到本地，也就是将容器内的目录挂载在Linux上。甚至可以做到容器间的数据共享。

### 方式一：使用命令`-v`挂载

在使用 `run` 时追加 `-v 宿主机目录:容器目录` 的形式在实现挂载。

```shell
$ docker run -it -v /home/test:/home centos /bin/bash
$ cd home/
$ touch test.test
# Ctrl + P + Q 退出容器
$ cd /home/test/ # docker自动创建了这个文件夹
$ ls
test.test
$ docker inspect c43d7f988b94 # 查寻容器信息，可以找到挂载信息
...
"Mounts": [
            {
                "Type": "bind",
                "Source": "/home/test",
                "Destination": "/home",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
...
```

mysql挂载：

```shell
$ docker pull mysql5.7
$ docker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7
```

#### 具名与匿名挂载

具名挂载：指定宿主机的挂载路径以及容器的挂载路径。

匿名挂载：只写容器内的路径，不写容器外的。会默认映射到docker容器的工作路径（`/var/lib/docker/volumes/xxx/_data`）。

### 方式二：使用DockerFile

docker file就是用来构建docker镜像的构建文件。

举个栗子：

```dockerfile
FROM centos

VOLUME ["volume01","volume02"] # 挂载了两个目录，还是匿名的

CMD echo "------end------"

CMD /bin/bash
```

如果没有在构建时指明挂载，那就只能在创建容器时手动 `-v` 了。

`--volumes-from` 可以实现容器间的数据共享。



## DockerFile

DockerFile用来构建Docker文件

1. 编写一个docker文件
2. 通过 `docker build` 构建成一个镜像
3. `docker run` 运行镜像
4. docker push 发布镜像（DockerHub、阿里云镜像）

DockerFile面向开发，做镜像就应该使用DockerFile。

完整的轨迹：

1. DockerFile：构建文件，定义一切的步骤，源代码。
2. DockerImages：通过DockerFile构建生成的镜像，最终发布和运行的产品。
3. DockerContaner：运行并提供服务

### 命令

![DockerFile指令](./docker.assets/dockerfile-command.jpg)



| DockerFile 指令 | 指令简介                                                     |
| --------------- | ------------------------------------------------------------ |
| FROM            | DockerFile的第一行指令必须是FROM，FROM后跟基础镜像的名称，我们将基于这个镜像构建我们的容器。 |
| MAINTAINER      | 镜像作者信息，标准格式：姓名+邮箱。                          |
| ENTERYPOINT | 容器启动时执行的命令。可以追加命令。 |
| CMD | 容器启动时运行的命令，只有最后一个生效 |
| RUN             | 镜像构建时需要运行的命令。                                   |
| ADD             | 拷贝本机文件或远程文件到镜像内。                             |
| WORKDIR         | 镜像的工作目录，为之后的RUN、CMD、ENTRYPOINT、COPY、ADD命令提供执行所在的目录。 |
| VOLUME          | 设置容器卷（挂载主机的目录）。                               |
| EXPOSE          | 指定容器对外暴露的端口。                                     |
| COPY | 将文件拷贝到镜像目录中。 |
| ENV | 构建时设置环境变量。 |
|                 |                                                              |
|                 |                                                              |
|                 |                                                              |
|                 |                                                              |
|                 |                                                              |
|                 |                                                              |
|                 |                                                              |
|                 |                                                              |

**ENTERYPOINT和CMD的区别**

在使用run命令时，追加的命令会将CMD指令内的内容覆盖，追加在ENTRYPOINT后

ENTRYPOINT指令，往往用于设置容器启动后的**第一个命令**，这对一个容器来说往往是固定的。
CMD指令，往往用于设置容器启动的第一个命令的**默认参数**，这对一个容器来说可以是变化的。
`docker run <command>` 往往用于给出替换CMD的**临时参数**。



### 示例

```dockerfile
FROM centos
MAINTAINER shoucy<shouchengyu@outlook.com>

WORKDIR /user/local
RUN yum -y install vim
RUN yum -y install net-tools

EXPOSE 80
CMD /bin/bash
```



运行DockerFile

```shell
$ docker build -f dockerfile -t 镜像名[:tag] .
```



研究他人镜像

通过 `docker history` :

```shell
docker history mysql
```

当然最好还是直接看dockerfile



### push

首先要登陆：docker login

然后docker push 

