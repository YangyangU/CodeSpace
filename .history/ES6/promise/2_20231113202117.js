//es6新增的构造函数promise
function xq() {//面试手写promise
            //返回一个实例对象
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('阳阳相亲了！');//两秒钟相亲
            resolve('相亲成功');//法拉利钥匙
        },2000)
    })
}


function marry() {
    setTimeout((res)=>{
        console.log('阳阳结婚了！');
    },1000)
}

xq().then(()=>{//实例对象.then
    marry()
})
//marry()