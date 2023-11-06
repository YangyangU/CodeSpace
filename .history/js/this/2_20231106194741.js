// var a = 1

// function foo(){
//     console.log(this.a);//1  理解：这里this代表foo的作用域，window
// }

// foo()//看函数在哪里使用，this指向哪里



// function foo(){
//     var a = 2
//     this.bar()//这个地方有问题，this调用函数，换成bar()还是undefined
// }
// function bar(){
//     console.log(this.a);//undefined
// }
// foo()

// function foo(){
//     var a = 2
//     bar()//换成bar()还是undefined
// }
// function bar(){
//     console.log(this.a);//undefined
// }
// foo()//我们不能用this引用词法作用域里面的内容


// function bar(){
//     var b = 3
//     console.log(this.b);//undefined
// }
// bar()


var b = 1
function bar() {
    console.log(this.b);
}
bar()