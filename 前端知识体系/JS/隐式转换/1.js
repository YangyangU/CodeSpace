console.log(null == null); // true
console.log(undefined == null); // true
console.log(+0 == -0);
console.log(NaN == NaN); // false
console.log({} == undefined); // false

// == 会进行隐式转换，而 === 不会
// null == undefined 是 true，因为它们都是“假值”
// +0 == -0 是 true，因为它们都是零
// NaN == NaN 是 false，因为 NaN 是一个特殊的值，表示“不是一个数字”，它不等于任何值，包括它自己
// {} == undefined 是 false，因为它们是不同的数据类型
// 基本数据类型和引用数据类型比较时，引用数据类型会先调用 toString() 或 valueOf() 方法转换为基本数据类型，然后再进行比较
// 基本数据类型比较时，会先进行类型转换，然后再进行比较
// 类型转换规则：
// 1. 如果操作数是对象，则调用其 valueOf() 方法，如果返回基本数据类型，则使用该值进行比较；如果返回的还是对象，则调用其 toString() 方法，再使用该值进行比较
// 2. 如果操作数是字符串，则将另一个操作数转换为字符串，然后进行比较
// 3. 如果操作数是数字，则将另一个操作数转换为数字，然后进行比较
// 4. 如果操作数是布尔值，则将布尔值转换为数字，然后进行比较
// 5. 如果操作数是 null 或 undefined，则它们相等