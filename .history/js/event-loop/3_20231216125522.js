console.log('script start')//打印1
async function async1() {//返回promise对象，同步任务
    await async2()//微任务进队列
    await async2()
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

//现版本浏览器给await开小灶，立马执行
// script start
// async2 end
// Promise
// script end
// async1 end
// promise1
// promise2
// setTimeout

console.log('script start')
async function async1() {
    await async2()
    await async2()//加了一行，打印结果被打乱
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
}
async1()
setTimeout(function () {
    console.log('setTimeout')
}, 0)
new Promise(resolve => {
    console.log('Promise')
    resolve()
})
    .then(function () {
        console.log('promise1')
    })
    .then(function () {
        console.log('promise2')
    })
console.log('script end')

// script start
// async2 end
// Promise   
// script end
// async2 end
// promise1    //为什么在这里？
// async1 end
// promise2
// setTimeout

//我的理解是，在微任务队列，await会将后面接着的一个事件往后挪一位