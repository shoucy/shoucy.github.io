# NIO

## Java NIO？YES

> 在丑陋的 Java I/O 编程方式诞生多年以后，Java终于简化了文件读写的基本操作。
>
> ——《on java》

NIO，有人认为NIO是指new IO，说明java旧的IO操作实在过于丑陋，终于迎来了全新的IO，用于替代旧的api。

也有人认为是指Non Blocking IO，代表着非阻塞的特性。

NIO支持面向缓冲区、基于通道的IO操作。NIO可以以更高效的方式进行读写操作。



IO 的操作方式通常分为几种：同步阻塞 BIO、同步非阻塞 NIO、异步非阻塞AIO。

**BIO** 与 NIO 一个比较重要的不同是，我们使用 BIO 的时候往往会引入多线程，每个连接对应一个单独的线程。

**NIO** 则是使用单线程或者只使用少量的多线程，让连接共用一个线程。

**AIO **也就是 NIO 2，在 Java 7 中引入了 NIO 的改进版 NIO 2,它是异步非阻塞的IO 模型。

