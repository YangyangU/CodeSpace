# 什么是diff 算法
- vue/react 等现代MVVM开发框架基于VDOM的
- 组件渲染返回VDOM，VDOM 通过DOM显示
- 当响应式数据更新后，会生成新的VDOM
- 比较新旧两模虚拟DOM树，并找到差异的算法，叫diff算法

# 为什么要diff算法
出发点，时间复杂度，性能不好  1000
- 前-时间复杂度O(n^3)
- 后-时间复杂度O(n)
    - 每一个节点跟另一模树的所有节点都比较O(n) key
        v-if/v-show v-for
            todolist 翻页
    - 相同key 节点 所有属性都要对比下 O(n)
    - 对比完所有节点 O(n)

# diff算法
    Vue2
    - 简单diff算法
        只做同层的对比，type变了就不再对比子节点 跨层需要比较的场景比较少
        （刘强东/奶茶妹）
    - 双端diff
        O(n)
    Vue3
    - 递增子序列的diff算法