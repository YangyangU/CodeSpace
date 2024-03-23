const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "access-control-allow-credentials": "true",
        "access-control-allow-origin": '*',
        'Set-Cookie': 'i-am-a-cookie'
        }
    )
    const data = 'hello cookie'
    
    res.end(JSON.stringify(data))
})

server.listen(3000,()=>{
    console.log('listening on port 3000');
})