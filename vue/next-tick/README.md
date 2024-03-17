- yarn create vite next-tick --template vue

# next-tick
1. 在DOM更新后执行回调 （起到了等待DOM渲染完成的作用）
2. nextTick 是异步 微任务
3. 页面渲染完成后执行

处理场景：
1. 保证DOM更新完成后再执行回调（挂载完成还是渲染完成）渲染完成