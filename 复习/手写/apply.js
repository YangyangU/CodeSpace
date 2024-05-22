// Function.prototype.myApply = function (context){
//     context = context || window
//     const fn = Symbol()
//     context[fn] = this
//     const result = context[fn](...arguments[1])
//     delete context[fn]
//     return result
// }

var obj = {
    a: 1
}
var a = 2

Function.prototype.myApply = function (context, ...args) {
    let [arr] = args
    context = context || window
    const fn = Symbol()
    context[fn] = this
    const result = context[fn](...arr)
    delete context[fn]
    return result
}
function fn(b, c) {
    return this.a + b + c
}
console.log(fn.myApply(obj, [1, 1]));