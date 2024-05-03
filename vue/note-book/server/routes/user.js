const Router = require('@koa/router'); //放在这里更清晰
const { sign, verify } = require('../utils/jwt.js')

const router = new Router();

const { userLogin, userFind, userRegister } = require('../controllers/mysqlControl.js')

//定义登录接口
router.post('/login', async (ctx) => {  //登录一般用post  前端请求，回调调用
    //获取到前端传递的账号和密码，去数据库校验账号密码的正确性
    const { username, password } = ctx.request.body   //解构
    try {
        const result = await userLogin(username, password) //在这个函数前面加async才能用await
        // console.log(result);
        if (result.length > 0) {//账号密码存在
            let data = {
                id: result[0].id,
                nickname: result[0].nickname,
                username: result[0].username
            }
            let token = sign(data) //生成token
            ctx.body = {
                code: '8000',
                data: data,
                msg: '登录成功',
                token: token
            }
        } else {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '账号或密码错误' //逻辑错误
            }
        }
    } catch (error) {
        //后端代码写错了
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
    // console.log(username, password);
    // ctx.body = 'login success'
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
        //在数据库中校验username
        const findRes = await userFind(username)
        console.log(findRes);
        if (findRes.length) {//账号已存在
            ctx.body = {
                code: '8003',
                data: 'error',
                msg: '账号已存在'
            }
            return
        }
        const registerRes = await userRegister([username, password, nickname])
        // console.log(register);
        //打印结果：
        // ResultSetHeader {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 7,
        //     info: '',
        //     serverStatus: 2,
        //     warningStatus: 0,
        //     changedRows: 0
        //   }
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
        //后端代码写错了
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})



module.exports = router //commonJS 抛出