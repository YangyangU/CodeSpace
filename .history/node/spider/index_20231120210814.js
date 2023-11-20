const https = require('https');

https.get('https://movie.douban.com/top250',(res)=>{
    // console.log(res);
    let html = ''
    res.on('data',(chunk)=>{//监听数据的读取 //读取到数据的时候data事件触发 
        // console.log(chunk + '');//十六进制的数据  +''强行把十六进制转换成页面代码  或者toString
        html += chunk
    })
})