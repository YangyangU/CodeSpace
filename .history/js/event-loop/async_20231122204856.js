
function A() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('异步A完成');
            resolve()
        },1000)
    })
}

function B() {
    setTimeout(()=>{
        console.log('异步B完成');
    },500)
}
function C() {
    setTimeout(()=>{
        console.log('异步C完成');
    },100)
}

//加上async就等同于返回了一个promise对象
async function foo() {

}

console.log(foo());