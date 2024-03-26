function a() {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log('a');
            reject('1')
        },1000)
    })
}

function b() {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log('b');
            resolve('2')
        },1500)
    })
}

function c() {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log('c');
            reject('3')
        },2000)
    })
}
Promise.race([a(),b(),c()]).
then(
    (res)=>{console.log(res)},//执行第一个回调
    (rej)=>{console.log(rej)}
)