//对象转原始值
// console.log(Number({}));//NaN
// console.log(Number([]));//0

//转字符串 toString
// let a = {}
// console.log(a.toString());//[object Object]
// console.log(String(a));//[object Object]
// console.log(Object.prototype.toString.call(a));//[object Object]

let arr = [1,2,3,4]
console.log(arr.toString())//1,2,3,4
//转数字 valueOf