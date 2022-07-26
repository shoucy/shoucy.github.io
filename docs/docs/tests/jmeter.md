## 接口测试分类

接口可以分为内部接口和外部接口。

内部接口：被测系统各子模块之间的接口，或者被测系统提供给子模块的接口。

外部接口：包括被测项目调用外部的接口，以及被测系统对外提供的接口。

接口测试的目的主要是为了：检查接口参数传递的正确性，接口功能的正确性，输出结果的正确性，以及对各种异常形况的容错处理，权限的控制，分页，调用次数的限制。

## 接口架构设计

1. 基于SOAP架构，基于xml规范。基于WebService协议。特点：接口以 `?wsdl` 结尾。（很老了，十几年了）
2. 基于RPC架构，基于dubbo协议、thrift协议、Spring Cloud微服务。适合数据量小，但是高并发的服务。（目前项目主流）
3. 基于RestFul结构，基于Json规范，基于HTTP协议。（占有量最高）

我们见到的结构占用市场份额最多的是RestFul接口。RestFul接口根据请求方式的不同（get、post、delete...）对同一个接口做不同的处理。

json数据格式只有两种数据类型：

1. 键值对 `{key:value}`
2. 数组 `[foo,bar]`

## 关于HTTP请求

一个restful接口就是一个http请求，请求分为请求行、请求头、请求体。

我们在做restful接口测试时，需要重点注意一些请求头：

- `Accept` 声明数据的格式
- `X-Requested-With:XMLHttpRequest` 声明异步请求
- `User-Agent` 用来说明客户端类型。是个什么浏览器，还是个爬虫什么的？
- `Content-Type` 声明类容的类型
- `Cookie` 请你吃小饼干

以及响应头：

- `Set-Cookie` 是服务器给我们强塞的小饼干



## 市面上常用的接口测试工具

Jmeter + Ant + Git + Jenkins 是很多公司的选择

Postman + Newman + Git + Jenkins 是另一个主流的组合