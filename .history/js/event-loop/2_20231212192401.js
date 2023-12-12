console.log('start');
setTimeout(()=>{ //第一次事件循环装进宏任务队列
    console.log('setTimeout');
    setTimeout(()=>{
        console.log('inner');
    })
    console.log('end');
},1000)
new Promise((resolve,reject)=>{//第一次事件循环da
    console.log('Promise');
    resolve()
})
.then(()=>{
    console.log('then1');
}).then(()=>{
    console.log('then2');
})


// start
// promise
// setTimeout
// then
// end
// inner