// n秒内只能触发一次，再次触发不执行，以第一次为准
const throttle = (fn, delay) => {
    let timer = null
    return function (...args) {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
            timer = null
        }, delay)
    }
}

const sum = (a, b) => {
    console.log(a + b)
}

const sum2 = throttle(sum, 1000)
sum2(1, 2)
setTimeout(() => {
    sum2(1, 3)
}, 900)