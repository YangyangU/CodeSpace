//对象转原始值
console.log(Number({}));//NaN
console.log(Number([]));//0

//转字符串 toString
let a = {}
console.log({}.toString());//[object Object]
console.log(String(a));

//转数字 valueOf