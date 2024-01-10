const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//引入插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//是一个用于提取CSS的插件，它可以将CSS样式表从JavaScript文件中提取出来，以独立的CSS文件形式输出。
const { VueLoaderPlugin } = require('vue-loader')

// 这个文件是给webpack看的
module.exports = {
    mode:'development',//开发模式  另一个是 production 生产模式
    entry:{
        main:'./src/main.js', //入口文件
    },
    output:{
        path:path.resolve(__dirname,'./dist'),//当前项目的文件夹绝对路径
        filename:'js/chunk-[contenthash].js',//webpack能读懂contenthash生成一个hash值
        clean:true,//自动清理上一次打包的结果  默认值true 代码变更hash变更且清除上一次的打包结果  如果false则留下上一次的结果
    },
    plugins: [
        new HtmlWebpackPlugin({template:'./public/index.html',filename:'index.html',inject:'body'}),
        new MiniCssExtractPlugin({filename:'styles/chunk-[contenthash].css',ignoreOrder:true}),
        new VueLoaderPlugin()
    ],
                                    //模板文件                      生成后的文件           植入到哪里
    module:{
        rules:[
            {
                test:/\.css$/i,//当遇到这个后缀的文件
                use:[MiniCssExtractPlugin.loader, 'css-loader'], //从右往左生效 先读懂在放入style标签
            },
            {
                test:/\.(png|jpe?g|gif|svg)$/,//选中这种后缀的图片
                type:'asset',//静态
                // parser:{//解析
                //     dataUrlCondition:{//转成base64
                //         maxSize:5 * 1024 * 1024//最大5mb的图片
                //     }
                // },
                generator:{//生成到这个文件夹下
                    filename:'images/[contenthash][ext][query]'
                }
            },
            {
                test:/\.js$/,//选中js文件
                exclude:/node_modules/,//排除这个文件夹
                use:['babel-loader']
            },
            {
                test:/\.vue$/,//选中vue文件
                use:'vue-loader',
            }
        ]
    }
}