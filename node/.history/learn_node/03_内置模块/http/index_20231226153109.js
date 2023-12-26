const http = require('http');

const server = http.createServer((req,res)=>{ //req前端的请求 res后端的响应
    res.statusCode = 201; //状态码
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>hello world</h1>');
})

server.listen(3000,()=>{
    console.log('server listening on port 3000');
})