const Router = require('@koa/router'); //放在这里更清晰

const router = new Router();

const {userLogin,userRegister} = require('../controllers/mysqlControl.js')

//定义接口
router.post('/login',async (ctx)=>{  //登录一般用post  前端请求，回调调用
    //获取到前端传递的账号和密码，去数据库校验账号密码的正确性
    const { username, password } = ctx.request.body   //解构
    try{
        const result = await userLogin(username, password) //在这个函数前面加async才能用await
        // console.log(result);
        if(result.length > 0){//账号密码存在
            let data = {
                id:result[0].id,
                nickname:result[0].nickname,
                username:result[0].username
            }
            ctx.body = {
                code:'8000',
                data:data,
                msg:'登录成功'
            }
        }else{
            ctx.body = {
                code:'8004',
                data:'error',
                msg:'账号或密码错误' //逻辑错误
            }
        }
    }catch(error){
        //后端代码写错了
        ctx.body = {
            code:'8005',
            data: error,
            msg:'服务器异常'
        }
    }
    // console.log(username, password);
    // ctx.body = 'login success'
})

module.exports = router //commonJS 抛出