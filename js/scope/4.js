// var a = 1
// var a = 2

// let b = 1
//let b = 2  1、不让重复声明

function foo() {
    console.log(a);
    var a = 1;//undefined  编译到了，没找到值
}

foo()