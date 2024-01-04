const Koa = require('koa');
const app = new Koa();

const a = () =>{
    console.log('a');
}
const b = () =>{
    console.log('b');
}



app.listen(3000,()=>{
    console.log('项目运行在3000端口');
});