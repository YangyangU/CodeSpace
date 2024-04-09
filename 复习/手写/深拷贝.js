let obj = {
    a:123,
    b:{
        c:456
    }
}

// function deepClone(obj) {
//     let newObj = Array.isArray(obj) ? [] : {};//创建一个新对象或数组
//     for(let key in obj){//遍历这个对象
//         if(obj.hasOwnProperty(key)){
//             newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
//         }
//     }
//     return newObj;
// }

// let obj2 = deepClone(obj)
// obj2['b'] = {c:123}
// console.log(obj2);
// console.log(obj);


// function deepClone(obj){
//     return new Promise((resolve,reject)=>{
//         const {port1,port2} = new MessageChannel();
//         port1.postMessage(obj);
//         port2.onmessage = (msg)=>{
//             resolve(msg.data)
//         }
//     })
// }

// let obj2 = deepClone(obj).then(
//     (val)=>{
//         console.log(val)
//         process.exit()
// })


// function deepClone(obj){
//     let newObj = Array.isArray(obj) ? [] : {}
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             newObj[key] = typeof obj[key] == 'object' ? deepClone(obj[key]) : obj[key]
//         }
//     }
//     return newObj
// }

// let obj2 = deepClone(obj)
console.log(obj);
// console.log(obj2);


function deepClone(obj){
    return new Promise((resolve,reject)=>{
        const {port1,port2} = new MessageChannel()
        port1.postMessage(obj)
        port2.onmessage = (msg)=>{
            resolve(msg.data)
        }
    })
}

// async function fn(){
//     let obj2 = await deepClone(obj)
//     console.log(obj2);
// }
// fn()
deepClone(obj).then((val)=>{
    val.b.c = 123
    console.log(val);
    process.exit()
})
