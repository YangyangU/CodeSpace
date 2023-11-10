let str = 'hello'   // string
let num = 123       // number
let flag = true     // boolean
let und = undefined // undefined
let nu = null       // null是值还是数据类型

let big = 123n      // big number  
let s1 =Symbol('hello')  // Symbol  两个Symbol===不相等，值不等，类型也不等，用来定义唯一的值
let s2 =Symbol('hello')
console.log(s1===s2);   //false