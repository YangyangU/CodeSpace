
// let i = 0
// function once(calledOnce) {
//     let flag = false;
//     return function(i) {
//         if(!flag){
//             flag = true;
//             calledOnce(i)
//         }
//         else{
//             console.log("You have already called me once");
//         }
//     }
// }

// function calledOnce(i){
//     i++,
//     console.log(i);
// }

// const test = once(calledOnce)
// test(i)
// test(i)
// test(i)
// test(i)


// let i = 0

// function fn(){
//     i++,
//     console.log(i);
// }
// function count(fn){
//     let flag = false;
//     return function(){
//         if(!flag){
//             flag = true;
//             fn()
//         }
//         else{
//             console.log("You have already called me once");
//         }
//     }
// }
// const test = count(fn)//让垃圾回收机制找到
// test()
// test()
// test()

function count(fn){
    let i = 0;
    function fn(){
        i++,
        console.log(i);
    }
    return fn
}

const test = count(fn)