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

//query
app.get('/user', (req, res) => {
    console.log(req.query);
    res.send(req.query)
})
// app.use(express.static('./kiss'))

app.listen(80,()=>{
    console.log('正在访问');
});