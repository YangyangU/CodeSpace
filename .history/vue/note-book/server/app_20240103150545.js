const Koa = require('koa');

const app = new Koa();


//主要逻辑
const main = (ctx)=>{
    if(ctx.url.startsWith('/login')){
        ctx.body = '登录成功';
    }
}
app.use(main)

app.listen(3000,()=>{
    console.log('listening on localhost 3000');
})