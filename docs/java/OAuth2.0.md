## OAuth2.0

### 概念

官方文档：[https://oauth.net/2/](https://oauth.net/2/)

OAuth2.0是一个开放标准，允许用户授权第三方应用程序访问他们存储在另外的服务提供者上的信息，而不需要将用户名和密码提供给第三方应用或分享他们数据的所有内容。

OAuth2.0协议的认证流程，简单理解，就是允许我们将之前的授权和认证过程交给一个独立的第三方进行**担保**。

OAuth2.0有四种认证方式：授权码模式、简化模式、密码模式、客户端模式。其中最复杂的是授权码模式，也是最为常见的模式。授权码模式代表着在**三方互不信任**的情况下完成授权。



## 涉及方

1. 服务提供方，用户使用服务提供方来存储受保护的资源，如照片，视频，联系人列表。
2. 用户，存放在服务提供方的受保护的资源的拥有者。
3. 应用



## 开发流程

### 准备工作

第三方应用向服务提供商成功申请到了AppID和AppSecret。

第三方应用具备一个用于处理单点信息的后台接口。

### 操作流程

1. 第三方应用**引导**用户访问服务提供方进行身份验证，并在请求中携带验证成功后要重定向的地址（第三方应用的单点接口）。
   服务提供方验证成功身份，会重定向到第三方应用提供的接口地址，并携带授权临时票据（code）。
2. 第三方应用过AppID、AppSecret及刚刚拿到的code，通过服务提供方提供的接口换取access_token。
3. 通过access_token进行接口调用，获取用户基本数据资源或帮助用户实现基本操作。

::: tip

**引导**是个很宽泛的形容，可以重定向到服务提供方的登录页，或者弹出服务提供方的二维码。

:::

### 微信扫码登录参考

![微信扫码登录](./OAuth2.0.assets/wx_oauth.png)