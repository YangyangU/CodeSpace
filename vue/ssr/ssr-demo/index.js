const express = require('express');//老牌的node框架
const app = express();
const Vue = require('vue')
const renderer3 = require('@vue/server-renderer')//这个实例可以用来将Vue组件渲染成HTML字符串，在服务器端进行预渲染，提高首屏加载速度和SEO。
const vue3Compile = require('@vue/compiler-ssr')

const vueapp = {
    template: 
    `
        <div>
            <h1 @click="add">{{num}}</h1>
            <ul>
                <li v-for="(todo,n) in todos">{{n+1}}---{{todo}}</li>
            </ul>
        </div>
    `,
    data(){
        return {
            num:1,
            todos:['吃饭','睡觉','打豆豆']
        }
    },
    methods:{
        add(){
            this.num++
        }
    }
}

vueapp.ssRender = new Function('require',vue3Compile.compile(vueapp.template).code)(require)

//路由中间件
app.get('/',async function(req, res) {
    let vapp = Vue.createSSRApp(vueapp)
    let html = await renderer3.renderToString(vapp)
    const title = "Vue SSR"
    let ret =
    `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
            <div id="app">
                ${html}
            </div>
        </body>
        </html>
    `
    res.send(ret)
})

app.listen(1234,()=>{
    console.log('1234');
})