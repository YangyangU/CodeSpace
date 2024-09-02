# 问题
- 需要通过模块化的方式来开发
- 使用一些高级的特性，比如通过ES6+、TypeScript
- 监听文件的变化来并且反映到浏览器上，提高开发的效率
- JavaScript 代码需要模块化，HTML 和 CSS 这些资源文件也会面临需要被模块化的问题
- 开发完成后我们还需要将代码进行压缩、合并以及其他相关的优化

# 流程
1. 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数
2. 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译
3. 确定入口：根据配置中的 entry 找出所有的入口文件
4. 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行编译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
5. 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

简单来说：
1. 初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler
2. 编译：从 entry 出发，针对每个 Module 串行调用对应的 loader 去翻译文件的内容，再找到该 Module 依赖的 Module，递归地进行编译处理
3. 输出：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中

# 常见loader
webpack只支持对js和json文件进行打包,css、html、png等文件需要相应的loader进行解析转换。
1. css-loader
2. style-loader
3. image-loader
4. babel-loader

# 常见的plugin
打包优化、资源管理、环境变量注入，运行在webpack的不同阶段，解决loader干不了的事。
1. html-webpack-plugin - 简化 HTML 文件创建 (依赖于 html-loader)
2. mini-css-extract-plugin - 分离样式文件，CSS 提取为独立文件
3. clean-webpack-plugin - 目录清理

# loader和plugin的区别
1. loader 模块转换器，用于将模块的原内容按照需求转换成新的内容
2. plugin 扩展插件，在webpack构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情

# webpack热更新
应用运行过程中，修改模块内容不会导致页面重新加载，而是部分更新
## 原理
1. 核心：客户端从服务端拉去更新后chunk-diff
2. webpack-dev-server监听本地文件，与浏览器之间维护了一个websocket
3. 当本地资源发生变化时，webpack-dev-server会向浏览器推送更新，带上构建时的hash，并对比
4. webpack根据hash定位到需要更新的模块进行更新

# tree-shaking
ES6模块的静态特性,能够识别出哪些模块的代码在最终的应用中没有被使用，然后在打包时将这些未使用的代码“摇掉”（即移除）。
- 副作用：副作用函数是指模块执行时除了导出成员之外还附带了其他行为，比如修改了全局变量,默认保留，可以在package.json中配置sideEffects:false属性以声明无副作用

