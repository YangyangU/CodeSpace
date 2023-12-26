const http = require('http');

const server = http.createServer((req,res)=>{ //req前端的请求 res后端的响应
    res.statusCode = 200;
})