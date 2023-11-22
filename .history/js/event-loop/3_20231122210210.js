console.log('script start')//1.1
async function async1() {//返回promise对象，同步任务
await async2()//微任务进队列
console.log('async1 end')//被await推入微队列
}
async function async2() {
console.log('async2 end')
}
async1()//1.2
setTimeout(function() {
console.log('setTimeout')
}, 0)
new Promise(resolve => {
console.log('Promise')
resolve()
})
.then(function() {
console.log('promise1')
})
.then(function() {
console.log('promise2')
})
console.log('script end')