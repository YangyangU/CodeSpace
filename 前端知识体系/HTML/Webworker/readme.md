## 介绍

- JavaScript 脚本通常运行在浏览器的主线程中，即 UI 线程中。
- 如果 JavaScript 脚本执行时间过长，会导致页面卡顿，影响用户体验。

- Web Workers 是一种在浏览器后台线程中运行 JavaScript 的机制。

(工具 http-server 或者 serve 运行代码查看)

## 使用

1. 创建worker文件

```js
// worker.js
self.addEventListener('message', function(e) {
  const n = e.data;
  const result = fibonacci(n);
  self.postMessage(result);
}, false);

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
``` 

2. 创建webworker对象

```js
const worker = new Worker('./worker.js');
worker.postMessage(data);
worker.addEventListener('message', function(e) {
  result.textContent = e.data;
 }, false);
```

3. 停止worker

```js
worker.terminal();
```

## 分类

- Dedicated Worker: 独立 worker，只能被创建它的脚本使用。
- Shared Worker: 共享 worker，可以被多个脚本使用。
  - 监听 `onconnect` 事件
  - 监听端口的 `message` 事件
- Service Worker: 服务 worker，主要用于离线缓存、消息推送等。
