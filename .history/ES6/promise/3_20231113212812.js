function a() {
    return new Promise((resolve, reject)=>{//resolve是执行顺利，reject是执行翻车
        setTimeout(() =>{
            console.log('a');
            resolve()
        },1000)
    })
}

function b() {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log('b');
            resolve()//reject手动报错，b能打印
        },1500)
    })
}

function c() {//同步（不耗时）
    console.log('c');
}
// a()
// b()
// c()

//如何让c在ab执行完再执行
Promise.all([a(), b()]).then(c)//相当于Promise.all([a(), b()]).then(()=>{c()})
//ab有返回promise的能力
//all---必须接收到的所有promise状态都为resolvr，then才会调用