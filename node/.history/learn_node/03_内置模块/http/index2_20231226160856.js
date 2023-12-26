//定义post接口
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url.startsWith('/movie')){
        
        res.end()
    }
})

server.listen(300,()=>{
    console.log('项目已在3000端口运行');
})