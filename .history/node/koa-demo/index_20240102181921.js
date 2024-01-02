// 后端启动一个一直运行服务，提供接口给前端请求
const http = require('http');

const server = http.createServer((req,res)=>{

    //提供不同的接口
    if(req.url.startsWith('home')){
        res.end('Welcome to the node server')
    }else if(req.url.startsWith('/detail')){

    }
});

server.listen(3000,()=>{
    console.log('server listening on port');
})