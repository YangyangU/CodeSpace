const Koa = require('koa');

const app = new Koa();

const main = (ctx) =>{
    if(ctx.url.startsWith('/user')){

    }
}
app.use(main)

app.listen(3000,()=>{
    console.log('项目运行在3000端口');
}); 