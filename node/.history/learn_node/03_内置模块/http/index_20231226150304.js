const https = require('https')
// 用于向客户端应答请求

//后端也要发送请求
https.get('https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike',
    (res)=>{
    let content = ''
    res.on('data',(chunk)=>{
        content += chunk
    })
    res.on('end',()=>{//请求结束end触发
        console.log(content); //拿到一串Buffer流
    });
})