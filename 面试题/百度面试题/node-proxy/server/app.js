const http = require('http');

const server = http.createServer((req, res) => {
    let data ={
        msg:'Hello world'
    }
    res.end(JSON.stringify(data)); //想前段返回数据
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});