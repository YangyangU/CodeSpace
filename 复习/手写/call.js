
Function.prototype.myCall = function (context, ...args) {
    context = context || window
    const fn = Symbol()
    context[fn] = this
    let res = context[fn](...args)
    delete context[fn]
    return res
}


let obj = {
    a: 1
}
let a = 2

function fn(b, c) {
    return this.a + b + c
}
console.log(fn.myCall(obj, 1, 1));