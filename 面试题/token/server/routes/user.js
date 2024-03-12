const router = require('koa-router')()
const { sign, verify } = require('../utils/jwt.js')

router.post('/login', (ctx) => {
    let user = ctx.request.body
    console.log(user);
    //去数据库中查看是否存在user中一样的账号密码
    if (1) {
        let token = sign({ id: '1', username: user.username, admin: true })
        ctx.body = {
            code: 0,
            data: `您好${user.username}`,
            token //如何打造一个token
        }
    } else {
        ctx.body = {
            code: 1,
            data: '账号或密码错误'
        }
    }
})


//首页的接口   校验请求头中的token是否有效
router.post('/home', verify(), (ctx) => {
    ctx.body = {
        code: 0,
        data: '首页的数据'
    }
})

module.exports = router