const a = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            // console.log('a');
            // resolve('a')
            reject('a')
        },1000)
    })
}

const b = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            // console.log('b');
            // resolve('b')
            reject('b')
        },500)
    })
}

a().catch((a) =>console.log(a)).then(()=>{console.log('err');},()=>{})
// 1.  接收一个回调 `onRejected`
// 1.  默认返回一个新的`promise`对象，其状态为 fulfilled
// 1.  当`catch`前面的`promise`状态为 rejected，则执行`onRejected`回调，参数为`reject`的原因
// 1.  当`catch`前面的`promise`状态为 pending，`catch` 中的回调函数会被缓存起来，直到`promise`的状态变为`rejected`，然后执行回调