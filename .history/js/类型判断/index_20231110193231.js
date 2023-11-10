// 7大原始数据类型

let str = 'hello'   // string

let num = 123       // number

let flag = true     // boolean

let und = undefined // undefined

let nu = null       // null是值还是数据类型

let big = 123n      // big number  
// 2**53 == 2**53 + 1  最大安全值无法增加   后面加n变成大整型

let s1 =Symbol('hello')  // Symbol  两个Symbol===不相等，值不等，类型也不等，用来定义唯一的值
let s2 =Symbol('hello')
console.log(s1===s2);   //false

//引用类型
let obj = {}
let arr = []
let fn = function(){}
let date = new Date()//当前时间


//判断类型
console.log(typeof str)//string
console.log(typeof num)//number
console.log(typeof flag)//boolean
console.log(typeof und)//undefined

