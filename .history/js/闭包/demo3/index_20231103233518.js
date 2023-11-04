function bar(){//外层作用域是全局
    console.log(myName);
}

function foo(){
    var myName = '掘金'
    bar()
}

var myName = '管理员'
foo()

//创建执行上下文时有个outer全局为空
//函数执行上下文outer指向外层
//代码写在哪outer指向哪