// function foo(){
//     console.log(this.a);
// }
// var obj = {
//     a:2
// }
// foo()//undefined

//让this指向2

// function foo(){
//     console.log(this.a);
// }
// var obj = {
//     a:2,
//     foo:foo
// }
// obj.foo()//2


function foo(n,m){
    console.log(this.a,n,m);
}
var obj = {
    a:2,
}
// foo.call(obj,100,200)//call执行了foo,call接收，再传给foo
// foo.apply(obj,[100,200])
var bar = foo.bind(obj)