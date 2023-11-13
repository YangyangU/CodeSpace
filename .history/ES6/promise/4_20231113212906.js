function a() {
    return new Promise((resolve, reject)=>{//resolve是执行顺利，reject是执行翻车
        setTimeout(() =>{
            console.log('a');
            resolve()
        },1000)
    })
}

function c() {
    console.log('c');
}