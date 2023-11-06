function foo() {
    var a = 1
    setTimeout(function () {//setTimeout里面调用
        console.log(this.a);
    },1000)
}
foo();