const https = require('https');

https.get('https://movie.douban.com/top250',(res)=>{
    // console.log(res);
    res.on('data',()=>{//监听数据的读取 //读取到数据的时候data事件触发 

    })
})