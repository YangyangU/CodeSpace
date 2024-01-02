const Koa = require('koa');

const app = new Koa();

const main = (ctx) =>{//只要被app use掉的函数一定具有ctx == koa
    // ctx.body = {
    //     msg:'hello world'
    // }

    if(ctx.url.startsWith('/home')){
        ctx.body = 'hello world';
    }else if(ctx.url.startsWith('/detail')){
        
    }
}
app.use(main)

app.listen(3000,()=>{
    console.log('项目运行在3000端口');
}); 