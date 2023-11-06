function foo() {
    console.log(this.a);
}
var obj ={
    a:2,
    foo:foo//引用
}
obj.foo()