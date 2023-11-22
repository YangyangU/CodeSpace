
function A() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('异步A完成');
            resolve()
        },1000)
    })
}

function B() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('异步B完成');
            resolve()
        },500)
    })
}
function C() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('异步C完成');
            resolve()
        },100)
    })
}
// console.log(foo());//Promise { undefined }

//加上async就等同于返回了一个promise对象
async function foo() {
    await A()
    console.log(1);
    await B()
    await C()
}
foo()
