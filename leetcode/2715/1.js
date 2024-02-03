var cancellable = function(fn, args, t) {
    let timer = setTimeout(()=>fn(...args),t)
    return ()=>{
        clearTimeout(timer)
    }
};