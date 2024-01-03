const Router = require('@koa/router'); //放在这里更清晰

const router = new Router();

//定义接口
router.post('/login',()=>{  //登录一般用post  前端请求，回调调用
    ctx.body = 'login success'
})

module.exports = router