const Koa = require('koa');

const a = () =>{
    console.log('a');
}

const app = new Koa();

app.listen(3000,()=>{
    console.log('项目运行在3000端口');
});