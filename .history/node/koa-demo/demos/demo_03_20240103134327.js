const Koa = require('koa');
const fs = require('fs');

const app = new Koa();

const main = (ctx) =>{
    if(ctx.url.startsWith('/user')){
        fs.readFileSync('./data.json','utf8')
        ctx.body = data
    }
}
app.use(main)

app.listen(3000,()=>{
    console.log('项目运行在3000端口');
}); 