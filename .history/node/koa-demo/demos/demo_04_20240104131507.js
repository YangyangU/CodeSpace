const Koa = require('koa');

const app = new Koa();

const Router = require('@koa/router')

const router = new Router()

const main =(ctx)=>{
    ctx.body = '首页页面'
}

const about = (ctx)=>{
    ctx.body = 'about page'
}
router.get('/main',main)//如果命中了第一个参数，则走第二个参数，否则不走
router.get('/about',about)
app.use(router.routes())//所有配置的路由都生效
// app.use(router.allowedMethods())//所有方法都生效

app.listen(3000,()=>{
    console.log('项目运行在3000端口');
});