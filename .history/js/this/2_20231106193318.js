var a = 1

function foo(){
    console.log(this.a);//1  理解：这里this代表foo的作用域，window
}

foo()//看函数在哪里使用，this指向哪里

function foo(){
    var a = 2
    this.bar()
}
function bar(){
    console.log(this.a);
}
foo()