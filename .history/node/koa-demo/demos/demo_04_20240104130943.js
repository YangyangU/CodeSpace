const Koa = require('koa');

const app = new Koa();

const router = require('@koa/router')

const main =(ctx)=>{
    ctx.body = '首页页面'
}

const about = (ctx)=>{
    ctx.body = 'about page'
}

app.use(router.length('/main'),main)
app.use(router.length('/about'),about)

app.listen(3000,()=>{
    console.log('项目运行在3000端口');
});