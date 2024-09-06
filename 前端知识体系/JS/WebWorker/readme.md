HTML5引入

```js
// 主线程代码
const worker = new Worker('worker.js');
worker.postMessage('Hello from the main thread!');
worker.onmessage = (event) => {
  console.log('Message from Web Worker:', event.data);
};

// worker.js
self.onmessage = (event) => {
  console.log('Message from main thread:', event.data);
  self.postMessage('Hello from the Web Worker!');
};
```

SharedWorker可以在多个浏览器Tab中访问到同一个Worker实例, 可实现多Tab共享数据, 如共享webSocket连接等。然而看起来很美好, 但兼容性问题一度严重。特别是safari从12年ios5开始支持，到在ios7~15中一度不支持，再到ios16又支持，真是一波三折纠结死了！
ServiceWorker可以拦截和处理网络请求，实现离线缓存、推送通知和其他高级网络功能，也非常有意思。做过PWA的同学知道SW是其核心一环。