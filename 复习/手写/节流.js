
function throttle(fn,delay){
    let timer = null
    return function(){
        if(timer) return
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
            timer = null
        },delay)
    }
}

function fn(a){
    console.log(a);
}

let throttleFn = throttle(fn, 1000);
throttleFn(0)
setTimeout(()=>{
    throttleFn(0)
},900)


// function throttle(fn,delay){
//     let timer = null
//     return function(...args){
//         if(timer) return
//         timer = setTimeout(()=>{
//             fn.apply(this,args)
//             timer = null
//         })
//     }
// }

// function throttle2(fn,delay){
//     let oldTime = Date.now()
//     return function(...args){
//         let newTime = Date.now()
//         if(newTime - oldTime > delay){
//             fn.apply(this,args)
//             oldTime = Date.now()
//         }
//     }
// }