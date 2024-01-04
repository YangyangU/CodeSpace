const Koa = require('koa');
const app = new Koa();

// const fa = (ctx,next) =>{//ctx和next都要传
//     console.log('a');
//     next()
// }
// const fb = (ctx,next) =>{
//     console.log('b');
//     next()
// }
// const fc = () =>{
//     console.log('c');
// }

//洋葱模型
const fa = (ctx,next) =>{//ctx和next都要传
    console.log('a');
    next()
    console.log(1);
}
const fb = (ctx,next) =>{
    console.log('b');
    next()
    console.log(2);
}
const fc = (ctx,next) =>{
    console.log('c');
    next()
    console.log(3);
}
//打印 abc321 类似递归  洋葱模型

app.use(fa); //所有被use的函数都叫中间件函数，中间件执行是有规则的
app.use(fb);
app.use(fc);

app.listen(3000,()=>{
    console.log('项目运行在3000端口');
});