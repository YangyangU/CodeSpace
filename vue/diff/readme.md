# 虚拟DOM
1. 虚拟DOM是vue中的编译器将模版代码编译成对象


# diff
将新旧 VDOM 的不同点找到并生成一个补丁  

- 过程
1. 同层比较，是不是相同的节点，不相同直接废弃旧DOM
2. 是相同节点，比较节点上的属性，产生一个补丁包
3. 继续比较下一层的子节点，采用双端队列的方式，尽量复用，产生一个补丁包
4. 同上


# vue中为什么不建议使用index做key？
- 为什么要有key？
让diff比较的效率更高，如果两个相同的元素，会找不到匹配目标，浪费其他资源

- 为什么不能用index？
因为index是数组下标，下标永远是固定的，从0开始，哪怕数据只是位置变更，key就会变，变了就导致原本可以复用的节点被认定为不可复用，浪费渲染性能


- 可不可以用随机数做key？
不能，不能保证对应节点的key的随机数不变