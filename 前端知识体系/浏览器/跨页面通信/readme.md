1. localStorage、sessionStorage
    - 同一浏览器的多个页面之间共享数据
    - localStorage 在页面关闭后数据不会被清除
    - sessionStorage 数据会在页面关闭时自动清除

    - 不支持跨域
    - 监听storage事件

2. window.postMessage
    - 允许不同源的窗口或 iframe 之间进行安全通信
    - 监听message事件

3. SharedWorker
    - 允许不同页面之间共享同一个Worker线程。
    - 监听message事件

4. WebSocket
    - 允许在单个TCP连接上进行全双工通信。
    - 监听message事件

5. BroadcastChannel
    - 允许在同一个浏览器上下文中的多个窗口或 iframe 之间进行通信。
    - 监听message事件

6. IndexedDB
    - 允许在浏览器中存储大量结构化数据，包括文件和二进制数据。
    - 监听message事件

7. Service Worker
    - 允许在浏览器中运行后台任务，包括消息传递和缓存管理。
    - 监听message事件
