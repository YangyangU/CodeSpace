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
    context.fn = this
    context.fn()//触发this隐式绑定规则
    // delete context.fn()
}
foo.myCall(obj)
console.log(obj);
