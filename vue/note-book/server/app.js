const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser'); //让koa能够解析post参数
const cors = require('koa2-cors');//处理跨域

const user = require('./routes/user.js');
const note = require('./routes/note.js');

app.use(cors()) //告诉浏览器允许跨域
app.use(bodyParser())
//主要逻辑
// const main = (ctx)=>{
//     if(ctx.url.startsWith('/login')){
//         ctx.body = '登录成功';
//     }else if(ctx.url.startsWith('/register')){
//         ctx.body = '这是注册';
//     }
// }
// app.use(main)
app.use(user.routes(),user.allowedMethods());//让所有配置生效
app.use(note.routes(),note.allowedMethods());

app.listen(3000,()=>{
    console.log('listening on localhost 3000');
})