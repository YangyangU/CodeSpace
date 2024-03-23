const http = require('http');

let sessions = {
    sessionId:null
};

const server = http.createServer((req, res) => {

    sessions.sessionId = 'this-is-a-sessionID'//假设是第一次登录
    res.writeHead(200,{
        "access-control-allow-origin": "*",
        'Set-Cookie':`${sessions.sessionId}`
    });
    const data = 'hello session'
    res.end(JSON.stringify(data))
})

server.listen(3000,()=>{
    console.log('listening on port 3000');
})