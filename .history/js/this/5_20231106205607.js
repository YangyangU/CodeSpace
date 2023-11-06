function foo() {
    var a = 1

    function bar() {//setTimeout里面调用
        console.log(this.a);
    }

    var baz = bar.bind()
    setTimeout(bar,1000)
}
foo.a=2
foo();