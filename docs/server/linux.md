## 常用命令

#### tar

用于解压 `.tar.gz` 结尾的压缩文件。

```shell
# tar -zxvf [压缩包]
$ tar -zxvf nginx-1.20.2.tar.gz
# 通过-C 指定解压后文件位置
$ tar -zxvf apache-tomcat-7.0.99.tar.gz -C /usr/local/
```



### 文件操作

#### mkdir

创建文件夹

```shell
# mkdir [文件夹名]
$ mkdir temp
# -p 递归创建目录，即使上级目录不存在，会按目录层级自动创建目录
$ mkdir /var/temp/nginx -p
```

#### cp

用于复制文件或文佳佳到指定文件夹

```shell
# cp [文件或文件夹] [新的地址]
$ cp mysql-5.7.26-linux-glibc2.12-x86_64 /usr/local/mysql
# -r 可以做文件夹的递归复制
$ cp -r /home/dir1 /opt/dir2
```

#### mv

用于移动文件或文件夹

```shell
# mv [文件或文件夹] [新的地址]
$ mv mysql-5.7.26-linux-glibc2.12-x86_64 /usr/local/mysql
```

### 软链接

在 Linux 中的连结有两种，一种是类似 Windows 的快捷方式功能的档案，可以让你快速的链接到目标档案(或目彔)； 另一种则是透过文件系统的 inode 连结来产生新的文档名，而不是产生新档案！这种称为实体链接 (hard link)。

Hard Link (实体链接, 硬式连结或实际连结)，这种链接实际中用的比较少，这里先不讲，以后再讲。
Symbolic Link (符号链接，亦即是快捷方式)。 Symbolic link 就是在建立一个独立的文档，而这个文档会让数据的读取指向他 link 的那个文档！

```shell
$ ln [-sf] 来源文件 目标文件
```

选项与参数：

- `-s` ：如果不加任何参数就进行连结，那就是 hard link，至亍 -s 就是 symbolic link

- `-f`：如果 目标文件 存在时，就主动的将目标文件直接移除后再建立！

示例

服务器只有20G的系统盘，但是挂载了一块500G的云硬盘。我将mysql默认的数据存放位置软链接到了云硬盘上。

```shell
$ ln -sf /disk1/mysql /var/lib/mysql
$ ll
total 92
...
lrwxrwxrwx  1 root    root      12 May 30 14:35 mysql -> /disk1/mysql
drwxr-x---  2 mysql   mysql   4096 Mar 22 02:00 mysql-files
drwxr-x---  2 mysql   mysql   4096 Mar 22 02:00 mysql-keyring
...
```





### 查看日志

#### tail

可以查看最后几行

```shell
# tail -f [文件名]
$ tail -f nohup.out
```

#### less

我最爱用的linux文件阅读工具

```shell
# less [文件名]
$ less - nohup.out
```

阅读状态拥有很多命令：

- `q` ：退出
- `g` ：跳转到首页
- `G` ：跳转到尾页
- `b` ：上一页
- `space` ：下一页

如果不够用可以：

- `h` ：查看帮助文档
- 百度一下:dog:(国际狗头)





