const Koa = require('koa');
const app = new Koa();


const mian= ()=>{
    throw(500)
}

app.use(main)
app.listen(3000,()=>{
    console.log('项目运行在3000端口');
});