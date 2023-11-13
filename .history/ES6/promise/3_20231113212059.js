function a() {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log('a');
        },1000)
    })
}

function b() {
    return new Promise((resolve, reject)=>{//resolve是执行成功，reject是执行错误
        setTimeout(() =>{
            console.log('b');
            resolve()
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