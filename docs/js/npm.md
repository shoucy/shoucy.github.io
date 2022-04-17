## NPM？ YES！

npm是全球最大的包共享平台

网站： [https://www.npmjs.com/](https://www.npmjs.com/)

包下载网址：[https://registry.npmjs.org](https://registry.npmjs.org/)

## 基本操作

### 安装

使用`npm install [包的完成名称]` 或 `npm i [包的完成名称]`

```shell
$ npm install moment

added 1 package in 22s
```

指定版本安装

```shell
$ npm install moment@2.22.2
```

一次安装很多包

```shell
$ npm install axois art-template

added 34 packages in 22s
```

读取 `package.json` 中引入的依赖

```shell
$ npm install

added 35 packages in 27s
```

### 卸载

```shell
$ npm uninstall axois

removed 1 package in 672ms
```



### 查看需要更新的组件库

cd到package.json目录中，执行`npm outdated`

```shell
$ npm outdated
Package         Current         Wanted  Latest  Location               Depended by
vuepress  2.0.0-beta.27  2.0.0-beta.39   1.9.7  node_modules/vuepress  shoucy.github.io
```

| Package | Current  | Wanted                                                      | Latest         | Location |
| ------- | -------- | ----------------------------------------------------------- | -------------- | -------- |
| 包名    | 当前版本 | 满足semer版本的最高版本（及在兼容的前提下能更新的最高版本） | 当前最高的版本 |          |

红色：可以立即更新
黄色：需要进行兼容，慎重更新

#### 

## 配置文件

### package.json



#### 版本

使用3位数字表示版本号

第一位数字：大版本（底层重构需要加1）

第二位数字：功能版本

第三位数字：bug修复版本

前面的版本号增长，后面的版本就要归零



#### devDependencies

如果有的包，只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到devDependencies节点中。

```shell
$ npm install --save-dev webpack

added 72 packages in 1m
```

## 下载慢怎么办？

查看当前镜像源

```shell
$ npm config get registry
https://registry.npmmirror.com/
```

设置为淘宝镜像源为默认镜像源

```shell
$ npm config set registry=https://registry.taobao.org/
```



### 常用镜像

```
npm ---------- https://registry.npmjs.org/
yarn --------- https://registry.yarnpkg.com/
tencent ------ https://mirrors.cloud.tencent.com/npm/
cnpm --------- https://r.cnpmjs.org/
taobao ------- https://registry.npmmirror.com/
npmMirror ---- https://skimdb.npmjs.com/registry
```

### nrm

一个搜索及切换镜像的小工具

```
```





