const express = require('express')

const app = express()

app.use(express.static('./kiss'))

app.listen(80,()=>{
    console.log('正在访问');
});