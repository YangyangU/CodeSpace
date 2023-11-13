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
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('阳阳结婚了！');
            resolve()
        },1000)
    })
}
function baby() {
    setTimeout(()=>{
        console.log('小阳阳出生了！');
    },500)
}
//实例对象.then
xq().then((res)=>{//res是定情信物
    console.log(res);
    marry().then((res1)=>{
        console.log(res2);
        baby()
    }
})
//marry()
//baby()//不能先生娃