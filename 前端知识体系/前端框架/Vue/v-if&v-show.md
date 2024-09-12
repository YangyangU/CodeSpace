# v-if & v-show
- v-show 在挂载前控制display是否为none
- v-if render函数通过表达式的值来决定是否生成DOM

# 总结
v-if 与 v-show 都能控制dom元素在页面的显示
v-if 相比 v-show 开销更大的（直接操作dom节点增加与删除）

如果需要非常频繁地切换，则使用 v-show 较好
如果在运行时条件很少改变，则使用 v-if 较好