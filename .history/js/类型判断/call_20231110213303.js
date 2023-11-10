var obj = {
    a:1,
}
function foo(){
    console.log(this.a);
}
// foo()
// foo.call(obj)//显示绑定

// var obj = {//隐式绑定
//     a:1,
//     foo:foo
// }
// function foo(){
//     console.log(this.a);
// }
// obj.foo()

//Call只能给对象调用
Function.prototype.myCall = function(context){
    if(!this instanceof Function){
        throw new TypeError("myCall is not a function")
    }
    let args = arguments.slice(1)//从下标1切到最后
    context.fn = this
    context.fn(...args)//触发this隐式绑定规则  ...解构
    delete context.fn
}
foo.myCall(obj,1,2)
console.log(obj);
