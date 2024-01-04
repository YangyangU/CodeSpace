const Koa = require('koa');
const app = new Koa();

//错误的集中处理
const handle = ()=>{
    
}
const main= (ctx)=>{
    ctx.body = 'Hello, world'
}

app.use(main)
app.listen(3000,()=>{
    console.log('项目运行在3000端口');
});