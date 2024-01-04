const Koa = require('koa');
const app = new Koa();


const main= (ctx)=>{
    // throw(500)

    ctx.response.status = 404;
}

app.use(main)
app.listen(3000,()=>{
    console.log('项目运行在3000端口');
});