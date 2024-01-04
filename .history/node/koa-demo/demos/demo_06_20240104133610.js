const Koa = require('koa');
const app = new Koa();

const fa = () =>{
    console.log('a');
}
const fb = () =>{
    console.log('b');
}

app.use(fa); //所有被use的函数都叫中间件函数，中间件执行是有规则的
app.use(fb);
// app.use(fb);

app.listen(3000,()=>{
    console.log('项目运行在3000端口');
});