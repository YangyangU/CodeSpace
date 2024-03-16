// let a = 1

// function bar(){
//     a = 2
//     function foo (){
//         console.log(this.a);
//     }
//     foo()
// }
// bar()

//let声明的变量不会挂在window上，全局声明的var会绑


// let obj = {
//     a:1,
//     foo:foo
// }

// function foo() {
//     console.log(this.a);
// }

// obj.foo()




let obj = {
    a:1,
    foo:foo
}

let obj2 = {
    a:2,
    obj:obj
}

function foo() {
    console.log(this.a);
}

obj2.obj.foo()//就近原则