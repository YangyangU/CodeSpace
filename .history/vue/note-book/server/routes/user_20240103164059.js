const Router = require('@koa/router'); //放在这里更清晰

const router = new Router();

const {userLogin} = require('../controllers/mysqlControl.js')

//定义接口
router.post('/login',(ctx)=>{  //登录一般用post  前端请求，回调调用
    //获取到前端传递的账号和密码，去数据库校验账号密码的正确性
    const { username, password } = ctx.request.body   //解构
    try{
        userLogin(username, password)
    }catch(error){

    }
    console.log(username, password);
    ctx.body = 'login success'
})

module.exports = router //commonJS 抛出