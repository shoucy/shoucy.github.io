# LibreOffice

## LibreOffice? Yes!

LibreOffice是OpenOffice.org办公套件衍生版， 同样自由开源，以Mozilla Public License V2.0分发源代码 [3]  ，但相比OpenOffice增加了很多特色功能。LibreOffice拥有强大的数据导入和导出功能，能直接导入PDF文档、微软Word(.doc文件)、LotusWord，支持主要的OpenXML格式。软件本身并不局限于Debian和Ubuntu平台，现已支持Windows、Mac和其它Linux发行版等多个系统平台。

下载地址：[https://zh-cn.libreoffice.org/download/libreoffice/](https://zh-cn.libreoffice.org/download/libreoffice/)

## Linux 下的安装方法

作为一般的原则，我们建议您通过您的特定Linux发行版推荐的方式安装 LibreOffice (比如Ubuntu的软件中心)，因为一般情况下这是使得安装的软件与您的系统最佳集成的最简单方式。并且，很有可能在您安装 Linux 操作系统时 LibreOffice 默认就已经为您安装好了。

以下的示例只适用于通过 LibreOffice 官方网站下载的安装包的安装方法：

### 下载并解压缩安装包

Linux系统下的安装包请到下载页面获取。有两种打包方式：适用于 Debian/Ubuntu 的 ".deb" 包，以及适用于 Fedora/SUSE/Mandriva 的 ".rpm" 包。请选择适合您的操作系统的类型。

安装包分为“主安装程序”，“已翻译的语言包”，以及“离线帮助”。若要使用中文界面，您必须同时下载中文语言包。

比如，您将安装包下载并解压缩到您用户主目录的”下载“目录。

### 安装

**Debian/Ubuntu系统 (.deb包):**

```shell
# 切换到安装包所在的目录$ cd ~/下载/# 安装主安装程序的所有deb包
$ sudo dpkg -i ./LibreOffice_X.Y.Z_Linux_x86_deb/DEBS/*.deb
# 安装中文语言包中的所有deb包
$ sudo dpkg -i ./LibreOffice_4.x.x_Linux_x86_deb_langpack_zh-CN/DEBS/*.deb
# 安装中文离线帮助文件中的所有deb包
$ sudo dpkg -i ./LibreOffice_4.x.x_Linux_x86_deb_helppack_zh-CN/DEBS/*.deb
```

**Fedora/SUSE/Mandriva系统 (.rpm包):**

```shell
# 切换到安装包所在的目录
$ cd ~/download/
# 安装主安装程序的所有rpm包
$ sudo yum install ./LibreOffice_4.x.x_Linux_x86_rpm/RPMS/*.rpm
# 安装中文语言包中的所有rpm包
$ sudo yum install ./LibreOffice_4.x.x_Linux_x86_rpm_langpack_zh-CN/RPMS/*.rpm
# 安装中文离线帮助文件中的所有rpm包
$ sudo yum install ./LibreOffice_4.x.x_Linux_x86_rpm_helppack_zh-CN/RPMS/*.rpm
```

### 奇奇怪怪の问题

如果遇到：

```shell
$ libreoffice7.2 --version
/opt/libreoffice7.2/program/soffice.bin: error while loading shared libraries: libSM.so.6: cannot open shared object file: No such file or directory
```

解决：

```shell
$ yum install -y libSM 
```

可能用到的：

```shell
yum install cairo -y 
yum install cups-libs -y 
```

查看路径：

```shell
$ which libreoffice7.2
/usr/bin/libreoffice7.2
$ ll /usr/bin/libreoffice7.2
lrwxrwxrwx 1 root root 35 Jun  8 09:21 /usr/bin/libreoffice7.2 -> /opt/libreoffice7.2/program/soffice
```


### 作为服务启动

如果需要作为服务启动的话：

```shell
nohup /usr/bin/libreoffice7.2 --headless --accept="socket,host=127.0.0.1,port=8100;urp;" --nofirststartwizard &
```

### 卸载

**Debian/Ubuntu系统 (.deb包):**

```shell
# 移除所有类似libreoffice4.x-*的包。--purge表示卸载的同时移除所有相关的配置文件
$ sudo apt-get remove --purge libreoffice4.x-*
```

**Fedora/SUSE/Mandriva系统 (.rpm包):**

```shell
# 移除所有类似libreoffice4.x-*的包。
$ sudo yum remove libreoffice4.x-*
```

### 如何安装字体

将解压后的字体文件夹复制到 /usr/share/fonts 目录下，然后运行 fc-cache -fv 命令以更新字体缓存。



