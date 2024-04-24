
配置代码打包后的地址

```js
output:{
    filename: "bundle.js", //打包后的文件名字 ,一样会替换，不一样不会清除
    
    clean: true, //每次打包前清除上次打包的文件,path是谁就清谁
    path: path.resolve(__dirname, 'hello'), //打包后的文件存放路径，必须要绝对路径
}
```
`filename: "[name].js"` 打包多个文件匹配对应的文件名,`[name]`与 entry 中的 key 对应

`filename: "[name]-[id]-[hash].js"` 区分版本，一般用不到
