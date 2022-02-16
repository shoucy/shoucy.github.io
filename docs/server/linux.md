## 常用命令

#### tar

用于解压 `.tar.gz` 结尾的压缩文件。

```shell
# tar -zxvf [压缩包]
$ tar -zxvf nginx-1.20.2.tar.gz
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

#### 

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





