//不走默认绑定
function foo() {
    console.log(this.a);
}
var obj ={
    a:2,
    foo:foo//引用
}
obj.foo()


function foo() {
    console.log(this.a);
}
var obj ={
    a:2,
    foo:foo()//调用
}
obj.foo