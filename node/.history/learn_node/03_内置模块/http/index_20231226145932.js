const https = require('https')
// 用于向客户端应答请求

//后端也要发送请求
https.get('https://juejin.cn/hot/articles/1',(res)=>{
    let content = ''
    res.on('data',(chunk)=>{//请求到了数据
        content += chunk
    })
    res.on('end',()=>{//请求结束end触发
        console.log(content); //拿到一串Buffer流
    });
})