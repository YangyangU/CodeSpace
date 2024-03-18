- 位运算 & | 遵守了与跟或的含义，可以在二进制的层面运算
- 聊vue patch 过程要聊到位运算
    old new
    DOM 更新是在浏览器渲染层
    JS V8 引擎主线程
    patch 一次收集所有需要的更新(patch)，通知浏览器更新
let num1 = 10   //1010
let num2 = 5    //0101

let result = num1 & num2
console.log(result)

