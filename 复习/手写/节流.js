
function throttle(fn,delay){
    let timer = null
    return function(...args){
        if(timer) return
        timer = setTimeout(()=>{
            fn.call(this,args)
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