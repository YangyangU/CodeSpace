
function throttle(fn,delay){
    let timer = null
    return function(...args){
        if(timer) return
        timer = setTimeout(()=>{
            fn.apply(this,args)
            timer = null
        },delay)
    }
}

function fn(a){
    a++
    console.log(a);
}

let throttleFn = throttle(fn, 1000);
throttleFn()
setTimeout(()=>{
    throttleFn()
},1200)


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