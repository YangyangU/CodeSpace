function A() {
    setTimeout(()=>{
        console.log('异步A完成');
    },1000)
}

function B() {
    setTimeout(()=>{
        console.log('异步B完成');
    },500)
}
A()
B()