指定打包入口文件  默认./src/index.js

```js
entry:['./src/a.js','./src/b.js']
```
两个入口文件打包成一个文件

```js
entry:{
    a:'./src/a.js',
    b:'./src/b.js'
},
```
对象形式 key:value 将value文件打包成key文件