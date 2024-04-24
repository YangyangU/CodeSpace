webpack默认情况下，只会处理js文件，如果我们希望它可以处理其他类型的文件，则要为其引入loader
        以css为例：
            - css-loader: 解析css文件
            - 步骤：
                - 安装css-loader
                - 在webpack.config.js中配置css-loader
                - 在需要使用css文件的文件中，引入css文件
                - 运行webpack打包

```js
module:{
    rules:[
        {
            test:/\.css$/, //匹配文件
            use:['style-loader','css-loader'] //从后往前执行,有顺序要求
        },
        {
            test:/\.jpg$/,
            type:'asset/resource' //图片资源类型的数据,可以通过指定type来处理,相当于内置loader
        }
    ]
}
```

