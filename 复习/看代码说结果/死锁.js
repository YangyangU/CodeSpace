var a
var b = new Promise((resolve) => {
    console.log(1);
    setTimeout(() => {
        resolve(2)
    }, 1000)
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(4);
}).then(() => {
    console.log(5);
})
a = new Promise(async (resolve) => {
    console.log(a) // a为赋值
    await b
    console.log(a)
    await a
    resolve(true)
    console.log(6);
})
console.log('end');


// 1 un 2 3 4 5 pending p 6 end

// a死锁走不出来 不打印6

// a的值从

// 答案
// 1
// undefined
// end
// 3
// 4
// 5
// Promise { <pending> }