1. 解决回调地狱
2. Promise 是一个构造函数，自己身上有all、reject、resolve这几个方法，原型上有then、catch等方法
3. Promise 对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）