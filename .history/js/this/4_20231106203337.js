// function foo(){
//     console.log(this.a);
// }
// var obj = {
//     a:2
// }
// foo()

//让this指向2

// function foo(){
//     console.log(this.a);
// }
// var obj = {
//     a:2,
//     foo:foo
// }
// obj.foo()


function foo(n){
    console.log(this.a,n);
}
var obj = {
    a:2,
}
foo.call(obj,100)