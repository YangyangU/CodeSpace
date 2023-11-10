// var obj = {
//     a:1,
// }
// function foo(){
//     console.log(this.a);
// }
// foo()
// foo.call(obj)//显示绑定

var obj = {//隐式绑定
    a:1,
    foo:foo
}
function foo(){
    console.log(this.a);
}
obj.foo()