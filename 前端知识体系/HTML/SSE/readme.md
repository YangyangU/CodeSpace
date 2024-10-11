# EventSource 对象

## 特点

- 单向通信：EventSource 对象只能从服务器接收数据，而不能向服务器发送数据。
- 自动重连：如果连接断开，EventSource 对象会自动尝试重新连接服务器，直到连接成功或达到最大重连次数为止。
- 事件处理：EventSource 对象可以监听来自服务器的事件，并在事件发生时触发相应的事件处理程序。

## 使用

1. 创建 EventSource 对象，连接服务器端点

```js
const eventSource = new EventSource('http://localhost:3000/sse');
```

2. 监听来自服务器的消息

当 EventSource 对象成功连接到服务器端点时，会触发 onopen 事件

```js
eventSource.onopen = function (event) {
  console.log("Connection opened.");
};
```

接收到从服务器发来的事件时，会触发 onmessage 事件

```js
eventSource.onmessage = function (event) {
  console.log("Received message:", event.data);
};
```

