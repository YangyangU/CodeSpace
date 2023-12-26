const http = require('http');

const server = http.createServer((req,res)=>{ //req前端的请求 res后端的响应
    res.statusCode = 200; //状态码
    res.setHeader('Content-Type', 'text/html');//设置返回结果内容的类型是html 所以下面会返回成html

    // console.log(req.url);
    // console.log(req.url,req.method);//要用的

    const {url} = req //解构

    //解析参数 Object.fromEntries()格式化成一个对象
    const query = Object.fromEntries(new URL(url,'http://localhost').searchParams)
    console.log(query);//URLSearchParams { 'id' => '123' }

    if(url === '/home'){
        res.end('<h1>Hello Home</h1>');
    }else if(url.startsWith('./detail')){//以什么开头
        if(query.id === '1'){

        }else if(query.id == 2){
            
        }
        res.end('<h1>Hello Details</h1>');
    }
    else{
        res.end('<h1>Hello world</h1>');
    }
})

server.listen(3000,()=>{
    console.log('server listening on port 3000');
})
