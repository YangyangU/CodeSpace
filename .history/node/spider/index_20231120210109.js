const https = require('https');

https.get('https://movie.douban.com/top250',(res)=>{
    console.log(res);
})