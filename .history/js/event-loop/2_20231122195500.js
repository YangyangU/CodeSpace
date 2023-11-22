console.log('start');

setTimeout(()=>{
    console.log('setTimeout');
    setTimeout(()=>{
        console.log('inner');
    })
},1000)

new Promise((resolve,reject)=>{
    console.log('promise');
})
.then(()=>{
    console.log('then');
})

