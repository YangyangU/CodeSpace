const http = require('http');

let sessions = {
    sessionId:null
};

const server = http.createServer((req, res) => {

    sessions.sessionId = 'this-is-a-sessionID'//假设是第一次登录
    res.writeHead(200,{
        "access-control-allow-credentials": "true",
        "access-control-allow-origin": 'http://127.0.0.1:5501',
        'Set-Cookie':`sessionId=${sessions.sessionId};SameSite=None`
    });
    const data = 'hello session'
    res.end(JSON.stringify(data))
})

server.listen(3000,()=>{
    console.log('listening on port 3000');
})