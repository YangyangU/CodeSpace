const Router = require('@koa/router')
const router = new Router()

//定义登录接口
router.post('/login', async (ctx) => {
    const { username, password } = ctx.request.body   //解构
    try {
        const result = await userLogin(username, password)
        if (result.length > 0) {//账号密码存在
            let data = {
                id: result[0].id,
                nickname: result[0].nickname,
                username: result[0].username
            }
            ctx.body = {
                code: '8000',
                data: data,
                msg: '登录成功'
            }
        } else {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '账号或密码错误'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})

// 定义注册接口
router.post('/register', async (ctx) => {
    const { username, password, nickname } = ctx.request.body
    if (!username || !password || !nickname) {
        ctx.body = {
            code: '8001',
            msg: '账号密码或昵称不能空'
        }
        return
    }
    try {
        const findRes = await userFind(username)
        console.log(findRes);
        if (findRes.length) {
            ctx.body = {
                code: '8003',
                data: 'error',
                msg: '账号已存在'
            }
            return
        }
        const registerRes = await userRegister([username, password, nickname])
        if (registerRes.affectedRows > 0) {
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '注册成功'
            }
        } else {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '注册失败，请重试'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})
module.exports = router