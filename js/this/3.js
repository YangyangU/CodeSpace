//不走默认绑定
// function foo() {
//     console.log(this.a);
// }
// var obj ={
//     a:2,
//     foo:foo//引用
// }
// obj.foo()//2


// function foo() {
//     console.log(this.a);
// }
// var obj ={
//     a:2,
//     foo:foo()//调用  不算拥有
// }
// obj.foo//undefined



function foo() {
    console.log(this.a);
}
var obj ={
    a:2,
    foo:foo//引用
}
var obj2 = {
    a:3,
    obj:obj//把foo给obj2
}
obj2.obj.foo()
