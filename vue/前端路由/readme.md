# 路由
服务端用于描述路径的

前端借鉴路由的称呼，来描述，url 和代码片段（组件）的映射关系  path和component

# 实现路由需要解决的问题
1. 如何修改url，还不引起页面刷新
2. 如何知道url变化了


# hash
哈希模式 createWebHashHistory 多了个/# 后面的值被当作哈希值
history模式 createWebHistory

在浏览器url 后面拼接#xxx 会被认为是hash值，而hash值的变更，是不会引起浏览器页面的刷新的

- 修改url方式
1. a标签
2. 浏览器前进后退
3. window.location

以上方式导致url变更都会触发 onHashChange 

# history
https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState
`pushState()`
在 HTML 文档中，history.pushState() 方法向浏览器的会话历史栈增加了一个条目。
该方法是异步的。为 popstate 事件增加监听器，以确定导航何时完成。state 参数将在其中可用。

history 提供了一个pushState方法,可以修改url且不引起页面刷新,提供了popState事件,仅当浏览器前进后退时生效.