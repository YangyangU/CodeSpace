// 一元运算符
// + '1'//Number(1) ==> ToNumber
// console.log(+'1');//1
// //一元 + 运算符将其操作数转换为 Number 类型。

// + []
// console.log(+[]);//0 Number([]) ==> ToPrimitive([].valueOf() ==> [].toString()) ==> ToNumber
// console.log([].valueOf());//[]
// console.log([].toString());//''

// + {}
// console.log(+{});//0 Number({}) ==> ToPrimitive({}.valueOf() ==> {}.toString()) ==> ToNumber
// console.log({}.valueOf());//{}
// console.log({}.toString());//[object Object]
// console.log(Number([object Object]));//NaN


// // 二元运算符
console.log(1 + '1');//'11'
console.log(1 + 'null');//1
console.log([] + []);//''
console.log([] + {});//'[object Object]'
console.log({} + {});//'[object Object][object Object]'


//面试
//{} + {} 在浏览器会被执行成
// {}  +{} 右边为NaN
// 左边就不管了，打印NaN