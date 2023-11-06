function foo() {
    console.log(this.a);
}
var obj = {
    a:2
}
foo()

//让this指向2