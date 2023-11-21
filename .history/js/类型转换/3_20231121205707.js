// 一元运算符
+'1'//Number(1) 返回ToNumber
console.log(+'1');//1
//一元 + 运算符将其操作数转换为 Number 类型。

console.log(+[]);//0 Number([]) ==> valueOf([]) ==> toString()
console.log(valueOf([]));