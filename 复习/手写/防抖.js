function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, args);
        }, delay);
    }
} 
function fn(a){
    a++
    console.log(a);
}

let debounceFn = debounce(fn, 1000);
debounceFn()
setTimeout(()=>{
    debounceFn()
},900)



function debounce(fn, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}