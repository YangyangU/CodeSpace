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
// console.log(Number('hello'));//NaN是一个值，Number类型，代表无法表示的值
// console.log(Number(undefined));//NaN
// console.log(Number('100a'));//NaN
// console.log(Number('100.123'));//100.123
// console.log(Number(null))//0
// console.log(Number(true))//1
// console.log(Number(false))//0




//转字符串
//15.5.1.1 String ( [ value ] ) # Ⓣ 
//Returns a String value (not a String object) computed by ToString(value). If value is not supplied, the empty String "" is returned.
//什么都不传会得到空字符串
// console.log(String())//''
// console.log(String(123))//'123'
// console.log(String(NaN))//'NaN'
// console.log(String(undefined))//'undefined'
// console.log(String(Infinity))//'Infinity'
// console.log(String(null))//'null'
// console.log(String(true))//'true'


//原始值转对象
console.log(Object(true))//[Boolean: true]
console.log(Object(123))//[Number: 123]
console.log(Object('123'))//[String: '123']
console.log(Object(undefined))//{}
console.log(Object(null))//{}
