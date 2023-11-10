var obj = {
    a:1
}
function foo(){
    console.log(this.a);
}
foo(a)
foo.call(obj)