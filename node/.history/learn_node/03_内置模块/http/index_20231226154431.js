const http = require('http');

const server = http.createServer((req,res)=>{ //req前端的请求 res后端的响应
    res.statusCode = 200; //状态码
    res.setHeader('Content-Type', 'text/html');//设置返回结果内容的类型是html 所以下面会返回成html

    console.log(url);
    console.log(req.url,req.method);//要用的

    const {url} = req //解构
    if(url === '/home'){
        res.end('<h1>Home 首页</h1>');
    }
    res.end('<h1>hello world</h1>');
})

server.listen(3000,()=>{
    console.log('server listening on port 3000');
})
