let num = 123
let str = 'hello world'
let flag = true
let un = undefined
let nu = null

// let bigint = 12n
// let sy = Symbol('symbol')


//转布尔
// console.log(Boolean()); // false
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(-1)); // true 没道理可讲
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean('123')); // true
// console.log(Boolean('')); // false
// console.log(Boolean(' ')); // true
//只有数字和字符串才可能true 数字不为零，字符串不为空


//转数字
//+'123' = 123
// console.log(Number('123')); //123


// 15.7.1.1 Number ( [ value ] ) # Ⓣ 
// Returns a Number value (not a Number object) computed by ToNumber(value) if value was supplied, else returns +0.
// 什么都不穿就会得到0
// console.log(Number()); //0

//见image.png
console.log(Number('hello'));//NaN是一个值，Number类型，代表无法表示的值
console.log(Number(undefined));//NaN
console.log(Number('100a'));//NaN
console.log(Number('100.123'));//100.123
console.log(Number(null))//0
console.log(Number(true))//1
console.log(Number(false))//0



