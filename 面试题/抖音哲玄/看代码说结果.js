/*
 * 题目1 —— 微任务爆栈
 * 结果：微任务递归执行，栈溢出再执行宏任务
 */
setTimeout(() => {
    console.log('timeout')
});
function test() {
    console.log('test');
    return Promise.resolve().then(() => {
        test()
    });
}
test();

/*
 * 题目2 —— await undefined
 * 结果：1 3 5 4 2
 * 分析：await undefined相当于await Promise.resolve(undefined)，即await Promise.resolve()
 */

const b = new Promise((resolve) => {
    console.log(1);
    setTimeout(() => {
        resolve();
    }, 1000);
}).then(() => {
    console.log(2);
});
let a;
a = new Promise(async (resolve) => {
    console.log(3);
    await a;
    resolve(true);
    console.log(4);
});
console.log(5);