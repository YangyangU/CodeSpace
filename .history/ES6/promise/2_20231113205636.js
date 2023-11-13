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
            resolve('洞房了')
        },1000)
    })
}
function baby() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('小阳阳出生了！');
            resolve('准备生二胎')
        },500)
    })
}
function secondBaby() {
    setTimeout(()=>{
        console.log('小小阳阳出生了！');
    },1000)
}
//实例对象.then
// xq().then((res)=>{//res是定情信物
//     console.log(res);
//     marry().then((res2)=>{
//         console.log(res2);
//         baby()
//     })
// })
//marry()
//baby()//不能先生娃


//优化
xq()
.then((res)=>{//res是定情信物
    console.log(res);
    return marry()
})//这里能返回promise对象吗？能，但是跟xq()的promise对象不同，我们现在要
//做的就是让它变成同一种，marry前面加个return，返回值覆盖原来的promise对象
.then((res2)=>{
    console.log(res2);
    baby()
})