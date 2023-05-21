

## maven的意义

1. 管理规模庞大的jar包。

2. 在脱离iea环境时，用来对项目进行构建（服务器构建项目）。

构建指将源码变为产品的过程：清理、**编译**、测试、报告、**打包**、安装、部署。

maven官网：[https://maven.apache.org](https://maven.apache.org/)

## 安装

下载地址：[https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)

windows平台下载 `.zip` 文件即可。确保解压目录非中文、没有空格。

## 配置

### 配置镜像

在国内环境，我们通常会配置maven镜像，以提升在国内的访问速度。其实访问官方公共仓库通常也花不了多少时间。但有时因工作需要突然要编译一个依赖繁杂的大型项目时，确实会耽误几小时的时间。

国内大家一般使用“阿里巴巴开源镜像站”作为maven的镜像仓库，配置方式需按照官网文档为准，因为镜像地址变过好几次，网上搜到的大部分都是过时的。请不要相信百度！

地址：[https://developer.aliyun.com/mirror/maven](https://developer.aliyun.com/mirror/maven)

此刻的配置方式为：

```xml
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

### 配置默认jdk版本

无论这里配不配，项目中的jdk版本还是要手动指定的。这里配了是为了外来可能避免些麻烦，谁让maven默认使用的jdk版本时1.5呢。

```xml
<profile>
  <id>jdk1.8</id>
  <activation>
    <activeByDefault>true</activeByDefault>
    <jdk>1.8</jdk>
  </activation>
  <properties>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
  </properties>
</profile>
```

### 配置环境变量

其实配不配都行，如果有在命令行使用maven的需求，就需要配置一下。如果需要，将bin目录配置在环境变量中即可。

## maven资源查询网站

1. (http://search.maven.org/)[http://search.maven.org/]

2. (http://mvnrepository.com/)[http://mvnrepository.com/]

3. (http://maven.outofmemory.cn/)[http://maven.outofmemory.cn/]