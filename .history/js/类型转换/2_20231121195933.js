//对象转原始值
// console.log(Number({}));//NaN
// console.log(Number([]));//0

//----------------------------------------------------------------

//转字符串 toString
// let a = {}
// console.log(a.toString());//[object Object]
// console.log(String(a));//[object Object]
// console.log(Object.prototype.toString.call(a));//[object Object]

// let arr = [1,2,3,4]
// console.log(arr.toString())//'1,2,3,4' 被分到数组这一类，进行不同操作

// let time = new Date()
// console.log(time.toString());//'Tue Nov 21 2023 19:53:19 GMT+0800 (中国标准时间)'

// let fn = function () {}
// console.log(fn.toString());//'function () {}'

//--------------------------------------------------------------------

//转数字 valueOf
let a = {}
console.log(a.valueOf());