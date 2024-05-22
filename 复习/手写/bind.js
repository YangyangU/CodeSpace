Function.prototype.myBind = function(context,...args){
    const fn = this
    return function(){
        return fn.apply(context, args)
    }
}

var obj ={
    a:1
}
var a = 2

function fn(b,c){
    console.log(this.a+b+c);
}
fn2 = fn.myBind(obj,1,1)

fn2()