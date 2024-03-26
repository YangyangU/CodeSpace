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

a().then(1).then(2).then((res)=>console.log(res)).catch(()=>3)