function foo() {
    var a = 1
    setTimeout(function () {
        console.log(this.a);
    },1000)
}
foo();