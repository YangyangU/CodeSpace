# 问题
1. 服务器启动速度慢，而且其启动时间是跟应用规模成正比的。
2. 在更新时，即便使用了HMR，但是其热更新的时间仍是会随着应用规模的增长而直线下降。

# 流程
1. vite会创建一个http服务器
2. 使用connect中间件来服务请求，有处理CORS,Proxy等的中间件，其中transformMiddleware中间件用于转换代码。
3. 在transformMiddleware中间件中，会先查询moduleGraph中是否存在当前模块，存在则返回，不存在则会调用transformRequest转换源码。
4. 最终在transformResult中使用vite plugin完成了对源码的转换，转换后会缓存到moduleGraph中，方便下次直接使用。

# 为什么比webpack快
Vite 借助新版本浏览器可以读懂模块化语法的特点，将项目中的模块化引入统一以一个又一个http请求的方式响应给浏览器，这样做的好处就是省去了 Webpack 构建过程中递归做依赖收集的耗时步骤，又因为Vite是开发环境的工具，绝大多数情况下我们不用不考虑兼容性，不会有人开发时还用老版本的浏览器吧>_<