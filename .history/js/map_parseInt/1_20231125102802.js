//map 遍历  callback 返回值 新的数组
// 1 
// map 接收三个值 （目标元素，下标，原数组）

// parseInt 接收两个值，第二个可选（要被解析的值，进制的基数，传几就算几进制）
// parseInt('3',2)   //二进制没有3  所以返回NaN
parseInt(1,0,[1,2,3])
console.log([1,2,3].map(parseInt));

console.log(parseInt(2,1,[1,2,3]));

console.log([1,2,3].map(parseInt));