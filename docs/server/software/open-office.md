# OpenOffice

::: tip

通常情况下，LibreOfiice会是比OpenOffice更好的选择。

:::

## 安装

下载地址：[https://www.openoffice.org/download/](https://www.openoffice.org/download/)

![image-20220305162509689](./open-office.assets/image-20220305162509689.png)

下载完毕传输到服务器。

安装步骤：

```shell
# 解压
$ tar -zxvf Apache_OpenOffice_4.1.11_Linux_x86-64_install-rpm_zh-CN.tar.gz 
# 进入RPMS目录，其中有一堆rpm和一个叫desktop-integration文件夹
$ cd ./zh-CN/RPMS/
# 一口气将RPMS目录下的rpm全安装了
$ yum install -y *.rpm
# 再装desktop-integration下的rpm
$ cd desktop-integration/
$ yum install -y openoffice4.1.11-redhat-menus-4.1.11-9808.noarch.rpm
```

安装成功后会在/opt下出现一个openoffice4文件。

## 启动服务

**临时启动**

```shell
$ /opt/openoffice4/program/soffice -headless -accept="socket,host=127.0.0.1,port=8100;urp;" -nofirststartwizard
```

**后台启动**

```shell
$ /opt/openoffice4/program/soffice -headless -accept="socket,host=127.0.0.1,port=8100;urp;" -nofirststartwizard &
```

**查看启动状态**

```shell
# 方式1
$ netstat -lnp | grep 8100
# 方式2
$ ps -ef | grep soffice
```

::: tip

如果启动时出现：

```shell
$ /opt/openoffice4/program/soffice -headless -accept="socket,host=127.0.0.1,port=8100;urp;" -nofirststartwizard
/opt/openoffice4/program/soffice.bin: error while loading shared libraries: libXext.so.6: cannot open shared object file: No such file or directory
```

这个是找不到 `libXext.so.6` 文件。去系统里面的 `/usr/lib64` 中或者 `/usr/lib` ，查看有没有这个文件。

如果没有，需要先安装：`yum install libXext.x86_64` （64位） 或 `yum install libXext.i686` （32位）。

将 `libXext.so.6` copy到 `/opt/openoffice4/program/` 目录里面，并赋予 `chmod 777` 权限 。

```shell
$ yum install -y libXext.x86_64
$ cp /usr/lib64/libXext.so.6 /opt/openoffice4/program/
$ chmod 777 /opt/openoffice4/program/libXext.so.6
```

:::

::: tip

如果启动时提醒 `no suitable windowing system found, exiting`, 需要：

```shell
$ yum groupinstall -y "X Window System"
```

:::

## 作为开机自启

在 `/etc/rc.d/rc.local` 中添加：

```
/opt/openoffice4/program/soffice -headless -accept="socket,host=127.0.0.1,port=8100;urp;" -nofirststartwizard &
```

确保或修改rc.local文件为可执行

```shell
chmod +x rc.local  
```

## 卸载

```shell
$ rpm -e `rpm -qa |grep openoffice` `rpm -qa |grep ooobasis`
```

