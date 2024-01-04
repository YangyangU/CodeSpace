const Koa = require('koa');
const app = new Koa();

const fa = () =>{
    console.log('a');
}
const fb = () =>{
    console.log('b');
}

app.use(fa);
app.use(fb);

app.listen(3000,()=>{
    console.log('项目运行在3000端口');
});