Function.prototype.myCall = function(context,...args){
    context = context || window;
    const fn = Symbol();
    context[fn] = this;
    const result = context[fn](...args);
    delete context[fn];
    return result;
}

var obj ={
    a:1
}
var a = 2

function fn(b,c){
    console.log(this.a,b,c);
}
fn.myCall(obj,1,2)