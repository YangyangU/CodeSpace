const http = require('http');

const server = http.createServer((req, res) => {
    // 跨域是浏览器不接受后端的响应
    // 想个办法，让浏览器不得接受
    res.writeHead(200,{
        // 'access-control-allow-origin':'*'//白名单
        'access-control-allow-origin':'http://127.0.0.1:5501'
    })
    let data ={
        msg:'Hello world'
    }

    res.end(JSON.stringify(data)); //想前段返回数据
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});