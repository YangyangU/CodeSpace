function debounce(fn,t) {
    let timer;
    return function(...args){
        if (timer) clearTimeout(timer);
        timer = setTimeout(()=> {
            fn.call(this,...args);
        },t)
    }
}


var debounce = function(fn, t) {
    let timer
    return function(...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, t)
    }
};