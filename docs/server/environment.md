## 安装JDK

### 下载

当前最新版本下载地址：http://www.oracle.com/technetwork/java/javase/downloads/index.html

历史版本下载地址：　　https://www.oracle.com/java/technologies/downloads/archive/

可下载rpm安装包与tar.gz压缩包，我在这里**选择使用tar.gz**。

### 解压

```shell
$ tar -zxvf jdk-7u80-linux-x64.tar.gz -C /usr/local/
```

### 配置环境变量

在 `/etc/profile` 进行环境变量配置，我这里使用Xftp工具打开，直接用vscode进行编辑的。

编写位置在文件最下方，应在 `unset -f pathmunge` 之下。

```
# java environment
export JAVA_HOME=/usr/local/java/jdk1.7.0_80
export CLASSPATH=.:${JAVA_HOME}/jre/lib/rt.jar:${JAVA_HOME}/lib/dt.jar:${JAVA_HOME}/lib/tools.jar
export PATH=$PATH:${JAVA_HOME}/bin
```

配置完毕后是这个样子：

![image-20220304100646535](./java-environment.assets/image-20220304100646535.png)

（`export TMOUT=300` 是我的服务器自带的，我看别人的好像没有）

编辑完毕，使用 `source /etc/profile` 命令使配置文件生效。

### 验证

正确的显示应如下：

```shell
$ java -version
java version "1.7.0_80"
Java(TM) SE Runtime Environment (build 1.7.0_80-b15)
Java HotSpot(TM) 64-Bit Server VM (build 24.80-b11, mixed mode)
```



## 安装Tomcat

当前最新版本下载地址：https://tomcat.apache.org/

历史版本下载地址：　　https://archive.apache.org/dist/tomcat/

下载历史版本时，安装包在bin目录下：

![image-20220304103507370](./java-environment.assets/image-20220304103507370.png)

下载以tar.gz为后缀的版本：

![image-20220304142816042](java-environment.assets/image-20220304142816042.png)

### 解压

```shell
$ tar -zxvf apache-tomcat-7.0.99.tar.gz -C /usr/local/
```

https://dev.mysql.com/get/mysql80-community-release-fc35-2.noarch.rpm





