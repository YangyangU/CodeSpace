// 一元运算符
+ '1'//Number(1) ==> ToNumber
console.log(+'1');//1
//一元 + 运算符将其操作数转换为 Number 类型。

+ []
console.log(+[]);//0 Number([]) ==> ToPrimitive([].valueOf() ==> [].toString()) ==> ToNumber
console.log([].valueOf());//[]
console.log([].toString());//''

+ {}
console.log(+{});//0 Number({}) ==> ToPrimitive({}.valueOf() ==> {}.toString()) ==> ToNumber
console.log({}.valueOf());//{}
console.log({}.toString());//NaN


// 二元运算符
console.log(1 + '1');//'11'
console.log(1 + 'null');//1
console.log([] + []);//''
console.log([] + {});//'[object Object]'
console.log({} + {});//'[object Object][object Object]'