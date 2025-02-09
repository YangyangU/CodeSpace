// for循环看作同步任务,执行完毕再执行五个宏任务
// for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     })
// }
// let 和 闭包创建私有作用域,访问的是各作用域中的i,而不是全局的

// this调用
var a = 1
var obj = {
    a: 2,
    foo: function () {
        console.log(this.a)
    },
    foo2: () => {
        console.log(this.a)
    },
    foo3: function () {
        return function () {
            console.log(this.a)
        }
    },
    foo4: function () {
        return () => {
            console.log(this.a)
        }
    }
}
var obj2 = {
    a: 3
}
obj.foo() // 2
obj.foo.call(obj2) // 3
obj.foo2() // 1
obj.foo2.call(obj2) // 1
obj.foo3()() // 1
obj.foo3.call(obj2)() // 1
obj.foo3().call(obj2) // 3
obj.foo4()() // 2
obj.foo4.call(obj2)() // 3
obj.foo4().call(obj2) // 2


// ref为什么reactive还要

// 后端的session

