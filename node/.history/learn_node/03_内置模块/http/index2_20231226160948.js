//定义post接口
const http = require('http');
const fs = require('fs');



const server = http.createServer((req,res)=>{
    if(req.url.startsWith('/movie')){
        
        fs.readFileSync('./data.json')
        res.end()
    }
})

server.listen(300,()=>{
    console.log('项目已在3000端口运行');
})