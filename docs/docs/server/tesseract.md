

## 参考资料

tesseract-ocr github：https://github.com/tesseract-ocr/tesseract

至今（2021.11.10），最新的（基于 LSTM 的）稳定版本是**[4.1.1](https://github.com/tesseract-ocr/tesseract/releases/tag/4.1.1)**，发布于 2019 年 12 月 26 日。



leptonica官方网站：http://www.leptonica.org/

目前最新版本是1.81.1



## 安装依赖

```shell
$ yum -y update
$ yum -y groupinstall "Development Tools"

yum install -y libtool  libpng-devel libjpeg-devel libtiff-devel

$ yum install -y wget

```



```shell
yum install libjpeg-devel libpng-devel libtiff-devel zlib-devel
```



## 安装leptonica

```shell
$ wget http://www.leptonica.org/source/leptonica-1.81.1.tar.gz
```



注意：若没有 `wget` 工具，先通过 `yum` 安装：

```shell
$ yum -y install wget
```

解压

```shell
$ tar -zxvf leptonica-1.81.1.tar.gz
```

安装

```shell
$ cd leptonica-1.81.1

```



## 安装tesseract-ocr

下载tesseract-ocr，目前的最新版本是4.4.1（今天是2021年7月23日）

```shell
$ wget https://codeload.github.com/tesseract-ocr/tesseract/tar.gz/4.1.1 -O tesseract-ocr4.1.1
```

解压并进入目录：

```shell
$ tar -xzvf tesseract-ocr4.1.1
$ cd tesseract-4.1.1/
```



### 可能会遇到错误

在执行 `./configure` 是可能会遇见：

```shell
configure: error: Leptonica 1.74 or higher is required. Try to install libleptonica-dev package
```

解决方案如下：

通过 `vi /etc/profile` 把下面配置添加到最后

```
export LD_LIBRARY_PATH=$LD_LIBRARY_PAYT:/usr/local/lib
export LIBLEPT_HEADERSDIR=/usr/local/include
export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig
```

再执行 `source /etc/profile` 命令，让配置立即生效。

然后重新 `./configure` 。

libjpeg libtiff libpng libz libwebp libgif libopenjp2