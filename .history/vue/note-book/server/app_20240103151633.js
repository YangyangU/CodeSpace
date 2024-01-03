const Koa = require('koa');
const app = new Koa();

const users = require('./routes/users');

//主要逻辑
const main = (ctx)=>{
    if(ctx.url.startsWith('/login')){
        ctx.body = '登录成功';
    }else if(ctx.url.startsWith('/register')){
        ctx.body = '这是注册';
    }
}
app.use(main)

app.listen(3000,()=>{
    console.log('listening on localhost 3000');
})