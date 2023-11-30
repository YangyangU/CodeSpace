const express = require('express')

const app = express()

app.get('/user', (req, res) => {
    res.send({name: '徐阳阳'})
})

app.post('/user', (req, res) => {
    res.send('请求成功')
})
// app.use(express.static('./kiss'))

app.listen(80,()=>{
    console.log('正在访问');
});