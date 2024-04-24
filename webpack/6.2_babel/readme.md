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

在编写js代码时，经常需要使用一些js中的新特性，而新特性在旧的浏览器中兼容性并不好。此时就导致我们无法使用些新的特性。
但是我们现在希望能够使用新的特性，我们可以采用折中的方案。依然使用新特性编写代码，但是代码编写完成时我
们可以通过一些工具将新代码转换为旧代码。
babel就是这样一个工具，可以将新的js语法转换为旧的js，以提高代码的兼容性
我们如果希望在webpack支持babel，则需要向webpack中引入babel的loader

- yarn add -D babel-loader @babel/core @babel/preset-env

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
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/, //排除node_modules中的文件
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
```
```json
"browserslist": [
    "defaults",
    "not ie <= 11",
    "last 2 versions",
    "> 1%",
    "iOS 7",
    "last 3 iOS versions"
  ]
```