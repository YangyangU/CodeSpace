1. webpack 的插件本质上就是一个 拥有 apply 方法的函数或类

2. webpack 在初始化时就会调用这个 apply 方法，并传入一个参数 compiler 对象。

3. compiler 包含了 当前 webpack 环境的各种配置信息，以及关于模块和编译的所有信息。

4. 找到对应的 hook 并注册，然后在回调函数中使用传入的上下文参数实现逻辑的过程