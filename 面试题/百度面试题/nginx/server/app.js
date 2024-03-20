const http = require('http');

const server = http.createServer((req, res) => {
    let data ={
        msg:'Hello nginx-proxy'
    }
    res.end(JSON.stringify(data));
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});