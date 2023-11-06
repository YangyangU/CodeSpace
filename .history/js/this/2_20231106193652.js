var a = 1

function foo(){
    console.log(this.a);//1  理解：这里this代表foo的作用域，window
}

foo()//看函数在哪里使用，this指向哪里



// function foo(){
//     var a = 2
//     this.bar()//这个地方有问题，this调用函数，换成bar()还是undefined
// }
// function bar(){
//     console.log(this.a);//undefined
// }
// foo()

function foo(){
    var a = 2
    bar()//换成bar()还是undefined
}
function bar(){
    console.log(this.a);//undefined
}
foo()