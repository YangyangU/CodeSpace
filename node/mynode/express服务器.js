const express = require('express')

const app = express()

// //get请求
// app.get('/user', (req, res) => {
//     res.send({name: '徐阳阳'})
// })

// //post请求
// app.post('/user', (req, res) => {
//     res.send('请求成功')
// })

// //req.query可以获取客户端发过来的查询参数  默认是个空对象
// app.get('/', (req, res) => {
//     console.log(req.query);
//     res.send(req.query)
// })
// // http://127.0.0.1/?name=xyy&age=20

// // req.params访问到url中:匹配到的动态参数
// app.get('/user/:id/:name', (req, res) => {
//     console.log(req.params);
//     res.send(req.params);
// })

//express.static()方法快速对外提供静态资源   
app.use(express.static('./wyymusic'))
app.use(express.static('./wyy')) //托管多个资源  按顺序查找所需文件
app.use('/font',express.static('./wyy')) //访问前缀
app.listen(80,()=>{
    console.log('正在访问');
});