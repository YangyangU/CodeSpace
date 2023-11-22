console.log('script start')//打印1
async function async1() {//返回promise对象，同步任务
    await async2()//微任务进队列
    console.log('async1 end')//被await推入微队列 //打印5
}
async function async2() {
    console.log('async2 end')//打印4
}
async1()//执行
setTimeout(function () {//进入异步宏任务队列
    console.log('setTimeout')//打印8
}, 0)
new Promise(resolve => {
    console.log('Promise')//打印2
    resolve()
})
    .then(function () {//进微队列
        console.log('promise1')//打印6
    })
    .then(function () {
        console.log('promise2')//打印7
    })
console.log('script end')//打印3


//以上为老版本浏览器打印版本

//现版本浏览器给await开小灶
// script start
// async2 end
// Promise
// script end
// async1 end
// promise1
// promise2
// setTimeout