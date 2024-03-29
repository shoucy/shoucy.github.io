## 传统的单体架构

将所有的业务在一个项目中进行开发，最终打成一个包进行部署。

使用单体架构，架构设计简单，开发简单，部署简单，服务器要求低，性能也好。所以我们在考虑使用分布式时，最好想清楚，我们是否真的打算把这些优点都抛弃掉？

## 分布式架构

**它可以解决大型项目中各模块之间耦合度过高，导致升级扩展困难的问题。**

根据业务功能，对系统进行拆分，每个业务模块作为独立的项目开发，称为一个服务。

但这么做会带来很多问题：

1. 服务拆分粒度如何？

2. 服务集群地址如何维护？

3. 服务之间如何实现远程调用？

4. 服务健康状态如何感知？

为了解决这些问题，市面上出现了很多种方案，比如web service、esb、dubbo等。近几年最火的方案是微服务方案。

::: warning

分布式建构解决了一个问题，却带来了一堆问题。选择它前，想清楚你是否真的需要它，并愿意解决这些问题？

:::

## 微服务

微服务是一种经过相对良好设计的分布式方案架构方案。

微服务架构特征：

1. 单一职责：微服务拆分粒度更小，每个服务都对应唯一的业务能力，做到单一指责。

2. 面向服务：微服务对外暴露业务接口。

3. 自治：团队独立，技术独立，数据独立，部署独立。

4. 隔离性强：服务调用做好隔离、容错、降级，避免出现级联问题。

以目前的眼光来看，一个常规的微服务需要包含：

1. 注册中心：用于管理服务

2. 服务远程调用：不同服务之间调接口的方式

3. 配置中心：统一管理配置

4. 服务网关：

5. 服务监控和保护：服务的统一管理平台

### 微服务技术对比

Dubbo：阿里比较早的微服务解决方案，没有实现配置中心和服务网关。必须实现统一的Double协议，只能使用java代码了。（没有必要考虑了）

SpringCloud：整合其他各个公司的开源技术，拼凑出了spring cloud体系。

SpringCloudAlibaba：在中国最火热的一套技术栈。主要是在和SpringCloud相同接口的条件下，可以兼容Double协议。
