## 常用命令

#### tar

用于解压 `.tar.gz` 结尾的压缩文件。

```shell
# tar -zxvf [压缩包]
$ tar -zxvf nginx-1.20.2.tar.gz
```

#### mv

用于移动文件或文件夹

```shell
# mv [文件或文件夹] [新的地址]
$ mv mysql-5.7.26-linux-glibc2.12-x86_64 /usr/local/mysql
```

#### mkdir

创建文件夹

```shell
# mkdir [文件夹名]
$ mkdir temp
# -p 递归创建目录，即使上级目录不存在，会按目录层级自动创建目录
$ mkdir /var/temp/nginx -p
```

