# 源码剖析ref和 reactive

# reactive
reactive只能将引用类型代理成响应式,是因为Proxy只接受引用类型

被代理对象中的任意熟悉发生修改,都应该将用到了这个属性的各个函数(副作用函数)重新执行一遍,那么再次执行

1. 用Proxy代理了对象
2. 在代理函数 get中对使用了的属性做 副作用函数的收集
3. 在代理函数 set中对修改了的属性做 副作用函数的触发

# Reflect
将ES6及之后的所有隶属于Object对象上的方法,挪到Reflect对象上 (Reflect主要解决了一些程序报错问题)

配合 Proxy 使用