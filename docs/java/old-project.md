## 当我们在启动老Java web项目时，我们在骂些什么？

#### idea启动tomcat应用，卡在 `Deployment of web application directory` 不动了

检查 tomcat文件夹， bin 目录下 catalina.bat 文件。可能增加了 `JAVA_OPTS` 配置。注释掉即可。

修改前为：

```bat
set JAVA_OPTS=-Xms1024m -Xmx4096m -XX:PermSize=128m -XX:MaxPermSize=256m
```

注释掉之后为：

```bat
@REM set JAVA_OPTS=-Xms1024m -Xmx4096m -XX:PermSize=128m -XX:MaxPermSize=256m
```

#### 提示找不到某个类，可lib已经正确引入了

原来的开发者可能并没有将对应的jar包放在应用的lib中，而是tomcat的lib中。我们需要知道自己的tomcat相比项目开发者的，少了些什么。我的做法是直接拷贝同事所使用的tomcat进行使用。