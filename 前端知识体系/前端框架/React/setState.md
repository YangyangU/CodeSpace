- React 中的 setState 是用来更新类组件状态的方法

# React 18之前
1. 异步情况：在 React 的合成事件、生命周期方法中，setState 是异步的，状态更新会被推迟到事件处理完成后进行。

2. 同步情况：在原生 DOM 事件或 setTimeout、Promise 中，setState 会同步更新。

3. setState 调用栈
每次调用 setState，会触发 React 的内部更新机制，基本调用流程如下：

setState 调用时，将状态更新请求推入队列。
React 判断当前上下文（合成事件/生命周期或非合成事件），决定是立即更新还是延迟批量更新。
在批量更新时，React 会根据更新队列，合并状态变化，重新计算组件的 state。
React 使用新的状态重新渲染组件，进行虚拟 DOM 的 diff 过程，判断是否需要实际的 DOM 更新。
如果发生 DOM 更新，React 最终会触发重新渲染。

# React 18之后
React 18 引入了 Concurrent Mode，使得 setState 变为异步更新。这意味着在并发模式下，React 会根据任务的优先级来决定何时更新状态，从而提高应用的响应性和性能。

在 React 18 中，setState 仍然是异步的，但它的行为更加灵活。React 会根据当前的任务优先级来决定何时更新状态，而不是简单地推迟到事件处理完成后进行。这意味着在并发模式下，React 可以更早地更新状态，从而提高应用的响应速度。

在 React 18 中，可以使用 flushSync 函数来强制同步更新状态