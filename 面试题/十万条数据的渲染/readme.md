# 1. 不做任何操作


# 2. setTimeout 一次加载20条

往回滑回留白，刷新率  dom结构的渲染和页面的刷新率不同步造成闪烁

# 3. requestAnimationFrame + fragment （时间分片）

浏览器不需要一次性渲染上万条数据

 根据刷新率更新

# 4. 虚拟列表