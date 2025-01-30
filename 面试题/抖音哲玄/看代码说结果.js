/*
 * 题目1
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