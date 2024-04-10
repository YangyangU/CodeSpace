const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const app = new Koa()

const rewriteImport = (content) =>{
    return content.replace(/ from ['|"]([^'"]+)['|"]/g,(s0,s1)=>{//g表示全局匹配 []只匹配一个 ()分组
        // console.log(s0,s1);
        if(s1[0]!=='.' && s1[1]!=='/'){
            return ` from '/@modules/${s1}'`
        }else{
            return s0
        }
    })
}

//后端路由

//中间件 middleware
app.use(async ctx=>{
    //如果
    const { request:{url,query} } = ctx //请求上下文
    //解构出来请求对象，es6高级解构出url和query

    if(url === '/'){
        //设置响应头
        ctx.type = 'text/html'
        let content = fs.readFileSync('./index.html', 'utf8')
        ctx.body = content
    }else if(url.endsWith('.js')){
        //resolve 有用的地址
        console.log(__dirname,url.slice(1));
        const p = path.resolve(__dirname, url.slice(1))
        ctx.type = 'application/javascript'
        const content = fs.readFileSync(p, 'utf8')
        ctx.body = rewriteImport(content)
    }
})


app.listen(5173,()=>{
    console.log('server is running at port 5173');
})