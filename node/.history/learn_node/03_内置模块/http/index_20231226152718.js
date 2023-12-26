const http = require('http');

const server = http.createServer((req,res)=>{ //req前端的请求 res后端的响应
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('<h1>hello world</h1>');
})