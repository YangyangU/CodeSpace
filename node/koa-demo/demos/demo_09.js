const Koa = require('koa');
const app = new Koa();


const main= (ctx)=>{
    const n = Number(ctx.cookies.get('view')|| 0) + 1
    ctx.cookies.set('view',n)
    ctx.body = n + 'view'
}

app.use(main)

app.listen(3000,()=>{
    console.log('项目运行在3000端口');
});