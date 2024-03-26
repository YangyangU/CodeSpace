function a() {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log('a');
            resolve('1')
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

Promise.all([a(),b(),c()]).
then(
    (res)=>{console.log(res)},//以最后一个为回调
    (rej)=>{console.log(rej)}
)