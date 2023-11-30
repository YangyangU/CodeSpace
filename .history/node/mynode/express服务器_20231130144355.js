const express = require('express')

const app = express()

//get请求
app.get('/user', (req, res) => {
    res.send({name: '徐阳阳'})
})

//post请求
app.post('/user', (req, res) => {
    res.send('请求成功')
})

//req.query可以获取客户端发过来的查询参数  默认是个空对象
app.get('/', (req, res) => {
    console.log(req.query);
    res.send(req.query)
})
// http://127.0.0.1/?name=xyy&age=20

// req.params访问到url中:匹配到的动态参数
app.get('/user/:ids', (req, res) => {
    console.log(req.params);
    res.send(req.params);
})


// app.use(express.static('./kiss'))

app.listen(80,()=>{
    console.log('正在访问');
});