// n秒内只执行一次，如果n秒内再次触发，则重新计时
const debounce = (fn, delay) => {
    let timer = null
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn.apply(this, args)
            timer = null
        }, delay)
    }
}

const sum = (a, b) => {
    console.log(a + b)
}
const sum2 = debounce(sum, 1000)
sum2(1, 2)
setTimeout(()=>{
    sum2(1, 3)
}, 900)