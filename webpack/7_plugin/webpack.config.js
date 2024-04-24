const path = require('path');

const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'production',//设置打包的模式,production为生产模式,development为开发模式
    // entry:'./hello/hello.js', //指定打包入口文件  默认./src/index.js
    // entry:['./src/a.js','./src/b.js'],//两个入口文件
    // entry:{ //对象
    //     a:'./src/a.js', //key:value 将value文件打包成key文件
    //     b:'./src/b.js'
    // },
    output:{ //配置代码打包后的地址
        // filename: "bundle.js", //打包后的文件名字 ,一样会替换，不一样不会清除
        // filename: "[name].js", //打包后的文件名字,[name]为打包的文件名,多文件打包
        // filename: "[name]-[id]-[hash].js",//区分版本，一般用不到
        // clean: true, //每次打包前清除上次打包的文件,path是谁就清谁
        // path: path.resolve(__dirname, 'hello'), //打包后的文件存放路径，必须要绝对路径
    },
    /* webpack默认情况下，只会处理js文件，如果我们希望它可以处理其他类型的文件，则要为其引入loader
        以css为例：
            - css-loader: 解析css文件
            - 步骤：
                - 安装css-loader
                - 在webpack.config.js中配置css-loader
                - 在需要使用css文件的文件中，引入css文件
                - 运行webpack打包

     */
    // module:{
    //     rules:[
    //         {
    //             test:/\.css$/, //匹配文件
    //             use:'css-loader' //可以打包css文件
    //         }
    //     ]
    // }
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
    },
    plugins:[
        //自动创建html文件
        new HTMLPlugin({
            title:'Hello Webpack',
            template:'./src/index.html' //以什么为模版创建
        })
    ]
}