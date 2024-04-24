module.exports = {
    mode:'production',//设置打包的模式,production为生产模式,development为开发模式
    // entry:'./hello/hello.js', //指定打包入口文件  默认./src/index.js
    // entry:['./src/a.js','./src/b.js'],//两个入口文件
    entry:{ //对象
        a:'./src/a.js', //key:value 将value文件打包成key文件
        b:'./src/b.js'
    },
}