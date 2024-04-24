1. 初始化项目 yarn init -y
2. 安装依赖 yarn add webpack webpack-cli -D
3. 在项目中创建 src目录，编写代码
4. 执行 yarn webpack 来打包

```js
//自定义命令
"scripts": {
    "build": "webpack"
}
```

打包的时候,构建依赖图,为什么打包没有使用的jquery,因为jq源码里面调用函数,误认为被使用了