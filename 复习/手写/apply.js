// Function.prototype.myApply = function (context){
//     context = context || window
//     const fn = Symbol()
//     context[fn] = this
//     const result = context[fn](...arguments[1])
//     delete context[fn]
//     return result
// }

var obj ={
    a:1
}
var a = 2

Function.prototype.myApply = function (context,args){
    // console.log(args);
    context = context || window
    const fn = Symbol()
    context[fn] = this
    const result = context[fn](...args)
    delete context[fn]
    return result
}
function fn(b,c){
    console.log(this.a,b,c);
}
fn.myApply(obj,[1,2])