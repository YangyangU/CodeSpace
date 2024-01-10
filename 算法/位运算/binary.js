let a = 13

// 13 / 2 = 6 --- 1
// 6 / 2 = 3 --- 0
// 3 / 2 = 1 --- 1
// 1 / 2 = 0 --- 1

// 倒着念 1 1 0 1 就是 13 的二进制

//古老推法
// x * 2 ^ n + x * 2 ^ (n-1) + ··· + x * 2 ^ 0 = 13
// 1 * 2 ^ 3 + 1 * 2 ^ 2 + 1 * 2 ^ 0 = 13

let b = 1101

parseInt(2.3)
// console.log(parseInt(2.7));//向下去整
// console.log(parseInt(2.7,10));//默认是10
// console.log(parseInt(1101,10));
console.log(parseInt(1101,2));//将前面的数看成几进制，这个函数就是把一个数转换成十进制

//面试题
const arr = [1,2,3]
const newArr = arr.map(parseInt)
//第一次parseInt(1,0)//放0跟没放一样，看成10
//第二次parseInt(2,1)//1进制？ NaN
//第三次parseInt(3,2)//2进制 3能是2进制？ NaN
console.log(newArr); // [1, NaN, NaN]


