function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this,arguments);
        }, delay);
    }
}



function fn(a){
    console.log(a);
}

let debounceFn = debounce(fn, 1200);
debounceFn(0)
setTimeout(()=>{
    debounceFn(0)
},1000)



