const path = require('path');

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
        filename: "[name]-[id]-[hash].js",//区分版本，一般用不到
        clean: true, //每次打包前清除上次打包的文件,path是谁就清谁
        path: path.resolve(__dirname, 'hello'), //打包后的文件存放路径，必须要绝对路径
    }
}