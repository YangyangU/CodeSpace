const Koa = require('koa');

const app = new Koa();

const router = require('@koa/router')

const main =()=>{

}

const about = ()=>{

}

app.use(main)
about.use(about)
app.listen(3000,()=>{
    console.log('项目运行在3000端口');
});