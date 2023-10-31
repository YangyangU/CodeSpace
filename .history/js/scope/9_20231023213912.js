//未使用关键字声明的变量自动被添加到全局

function foo(){
    a = 2;//全局
}
foo()

console.log(a);