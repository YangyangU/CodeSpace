function A() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('异步A完成');
            resolve()
        },1000)
    })
}

function B() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('异步B完成');
            resolve()
        },500)
    })
}
function C() {
    setTimeout(()=>{
        console.log('异步C完成');
    },100)
}
A().then(()=>{
    B()
    return B()
})
.then(()=>{
    C()
})

