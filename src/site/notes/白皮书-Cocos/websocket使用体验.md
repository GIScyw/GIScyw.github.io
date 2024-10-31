---
{"dg-publish":true,"permalink":"/白皮书-Cocos/websocket使用体验/","tags":["gardenEntry"]}
---


目前在开发的一款cocos新游戏中，我们大面积用到了websocket，用来作为我们的网络请求，整个游戏只有刚进入游戏鉴权的时候会发送http接口，用户进入游戏时会请求ws服务建立连接，然后进入游戏后所有的地方都是websocket请求，不管是实时的战斗模块还是UI模块都是ws。其中， 前端用的是Javascript，后端服务用的是Java。而在我们团队内也经历了短轮询、IM、websocket的数据更新手段，每种方式下面我们都沉淀了一套对应的技术方案。

#### 技术方案

这是一个WebSocket管理器的实现类,主要功能包括:
1. WebSocket连接管理
	- 创建和维护WebSocket连接
	- 处理连接、断开、错误等事件
	- 实现心跳保活机制

2. 消息处理
	- 发送消息(send方法)
	- 接收消息处理(onMessage方法)
	- 消息监听器管理(addListener/removeListener等)

3. 重连和错误处理
	- 自动重连机制
	- 请求超时重试
	- 错误状态上报

4. 后台切换处理
	- 监听应用切后台事件
	- 重新检查登录状态
	- 暂存和重发请求




#### 有哪些数据实时更新方案

> [!NOTE]
> 数据实时更新方案，可以使用短轮询、长轮询、SSE、HTTP2 Server Push、Websocket、IM，在目前的业务中用的最多的就是短轮询、websocket、IM的方案。
>  `接口短轮询`延迟高、浪费带宽(比如活动挂件的场景，我们有一套接口轮询的方案)
>  `长轮询`也比较浪费带宽
>  `SSE`是单向传输、只能支持纯文本，浏览器兼容性不好。SSE的本质其实就是一个HTTP的长连接，只不过它给客户端发送的不是一次性的数据包，而是一个stream流，格式为text/event-stream。所以客户端不会关闭连接，会一直等着服务器发过来的新的数据流。
>  `Server push`主要用于提升页面加载性能，不适合用于实现即时通信
>  `websocket`延迟低、双向通信、支持二进制更少的数据传输
>  `IM`是指即时通信的场景，它底层的实现技术可以是上面的几种方式，目前公司内主要用的是网易云信提供的Web IM即时通讯能力，IM本质上就是用websocket实现，只不过只需要服务端单向发送的场景（比如心遇的打怪兽、派对的打年兽）
> 



#### 设计IM需要考虑的方面
网络异常、掉线重连、较大数据量处理、兼容性处理


#### 可选的数据传输格式
1. JSON
2. ArrayBuffer
3. ProtocolBuffer
4. Plain text
5. 私有二进制
6. Object Url
7. Base64
8. DataUrl
9. File

- Blob是纯粹的二进制数据，它可以存储任何类型的数据，但不具有文件的元数据（如文件名、最后修改时间等）
- File是Blob的子类，File对象除了具有Blob的所有属性和方法之外，还包含文件的元数据，如文件名和修改时期。可以将File对象看作带有文件信息的Blob
- stream是数据流，建立通道之后不断传输；buffer是缓冲区，数据是直接取就可以

在前端，我们只需做字符串级别的操作，很少接触字节、进制等底层操作，一方面这足以满足日常需求，另一方面Javascript这种应用层语言并不是干这个的；然而在后端，处理文件、网络协议、图片、视频等时是非常常见的，尤其像文件、网络流等操作处理的都是二进制数据。为了让javascript能够处理二进制数据，node封装了一个Buffer类，主要用于操作字节，处理二进制数据。

在http协议的请求和响应中, 可以通过content-type字段指定数据类型。
  
[http 的请求和响应都有哪些传输数据格式【热度: 149】 · Issue #892 · pro-collection/interview-question](https://github.com/pro-collection/interview-question/issues/892)
#### WebSocket的主要缺点

> [!NOTE]
> 对于前端来说，websocket的兼容性问题倒是还好，Chrome 4+ 版本就开始支持 WebSocket，连接管理复杂的问题可以通过代码来解决，倒是调试没有http方便的问题在开发中更能体会到。对于服务端来说，成本问题在我们大公司还好，主要是扩展性问题，弹性伸缩没有http服务器方便。
> 

具体的
前端:
1. 兼容性问题
- 一些老旧浏览器不支持WebSocket。但是在项目中, 没有遇到浏览器的兼容性问题, 对于App所有用户的手机都是可以支持的。 Chrome 4+ 版本就开始支持 WebSocket
- 某些代理服务器可能不支持WebSocket协议
- 某些防火墙可能会阻止WebSocket连接

2. 连接管理复杂
- 需要处理连接断开和重连机制
- 服务器需要维护大量并发连接，增加服务器负载
- 需要实现心跳机制来检测连接状态

服务端:
1. 扩展性挑战
- 水平扩展较困难，因为需要在多个服务器之间同步连接状态
- 负载均衡配置较为复杂
- 服务器内存消耗较大，每个连接都需要维护状态
2. 成本问题
- 长连接维护需要更多服务器资源
- 带宽使用可能增加
- 需要专门的运维监控方案

双端:
 1. 调试困难
- 实时通信的调试比HTTP请求更复杂。对前端来说, 比如怎么抓包直接看到数据(实际上抓到的是二进制的数据), 不好修改接口数据(因为是二进制数据), 也不好利用mock工具mock数据。对服务端来说, 不能像http那种单个接口无状态, 测试接口只需要重新请求接口就行了, 但是websocket测试一个接口, 也需要前置的连接, 重连等等, 不好调试单个接口。
- 错误处理机制需要更完善的设计
- 开发工具对WebSocket的支持不如HTTP完善

2. 安全性考虑
- 需要额外的安全措施来防止恶意连接
- 容易受到DOS攻击
- 跨域问题需要特别处理

在某些场景下，可以考虑使用以下替代方案：
- HTTP长轮询
- Server-Sent Events (SSE)
- HTTP/2 推送
- 定时轮询

选择是否使用WebSocket应该根据具体的业务需求来权衡利弊。如果不需要真正的双向实时通信，使用其他技术方案可能更简单可靠。


#### 最佳实践建议
- 使用 WSS 而不是 WS 协议
- 实现完善的错误处理
- 添加重连机制
```ts
// 重连示例
function connect() {
    ws = new WebSocket(URL);
    ws.onclose = () => {
        console.log('连接断开，尝试重连...');
        setTimeout(connect, 1000);
    };
}
```
- 实现心跳检测, 心跳检测主要用于保活, 这里每10s发送一次ping
```ts
// 启动心跳，用于ws保活
    heartbeat() {
        if (this._timer) {
            return;
        }
        this._timer = setInterval(() => {
            this._ws.send({
                cmdCode: 0,
                data: []
            });
        }, 10000);
    }
```
- 在建立连接前检查浏览器兼容性

如果需要更好的兼容性保证，可以考虑使用一些成熟的 WebSocket 客户端库，如：
- Socket.IO
- SockJS
- ws
这些库通常会自动处理兼容性问题，并提供降级方案。















[Cocos Creator 通用框架设计 —— 网络 - Creator 2.x - Cocos中文社区](https://forum.cocos.org/t/topic/84649/109)
[Cocos Creator《Protobuf WebSocket服务器对接详解》网络模块 ##教程#Cocos Creator游戏开发#3.x#3.0_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1JW4y1S7Kz/?vd_source=a8b1305f972550cca03c75e206912c6b)
[浏览器中的二进制以及相关转换 | 山月行](https://shanyue.tech/post/binary-in-frontend/#_3-%E5%A6%82%E4%BD%95%E6%8A%8A-json-%E6%95%B0%E6%8D%AE%E8%BD%AC%E5%8C%96%E4%B8%BA-demo-json-%E5%B9%B6%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6)
[浅尝IM方案在H5活动场景中的应用本文主要介绍在对数据实时行要求比较高的业务场景中，使用IM方案来保证数据更新的实时性， - 掘金](https://juejin.cn/post/7236915296962248760)
[轻松篡改WebSocket数据包 - CNode技术社区](https://cnodejs.org/topic/5b4b7b90e374eeab6929d70c)