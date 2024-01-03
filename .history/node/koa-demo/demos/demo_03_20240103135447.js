const Koa = require('koa');
const fs = require('fs');

const app = new Koa();

const main = (ctx) =>{
    if(ctx.url.startsWith('/user')){
        const data = fs.readFileSync('./data.json','utf8')
        ctx.body = data
    }else if(ctx.url.startsWith('/home')){
        const page = fs.readFileSync('./template.html','utf8')
        ctx.body = page
    }
}
app.use(main)

app.listen(3001,()=>{
    console.log('项目运行在3000端口');
}); 