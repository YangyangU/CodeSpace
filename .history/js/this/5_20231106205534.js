function foo() {
    var a = 1

    function bar() {//setTimeout里面调用
        console.log(this.a);
    }

    bar baz = bar.bind()
    setTimeout(bar,1000)
}
foo();