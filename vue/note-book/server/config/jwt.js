const jwt = require('jsonwebtoken');

const sign=(option)=>{
    console.log(222);
    return jwt.sign(option,'666',{ //第二个参数是自定义加密
        expiresIn:60 //过期时间
    });
}

const verify=()=>(ctx,next)=>{
    let jwtToken = ctx.req.headers.authorization
    // console.log(jwtToken);
    if (jwtToken){
        //校验
        jwt.verify(jwtToken,'666',(err)=>{
            if(err){
                ctx.body = {
                    status: 401,
                    message:'token失效'
                }
            }else{
                next()
            }
        })
    }else{
        ctx.body = {
            status: 401,
            message:'无token'
        }
    }
}

module.exports = {
    sign,
    verify
}