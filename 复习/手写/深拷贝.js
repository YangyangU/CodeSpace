let obj = {
    a:123,
    b:{
        c:456
    }
}

// function deepClone(obj){
//     let newObj = Array.isArray(obj) ? [] : {}
//     for(let key in obj){
//         if(obj.hasOnwProperty(key)){
//             if(typeof key === 'object' && obj[key] !== null){
//                 newObj[key] = deepClone(obj[key])
//             }else{
//                 newObj[key] = obj[key]
//             }
//         }
//     }
//     return newObj
// }


// function deepClone(obj) {
//     let newObj = Array.isArray(obj) ? [] : {};//创建一个新对象或数组
//     for(let key in obj){//遍历这个对象
//         if(obj.hasOwnProperty(key)){
//             newObj[key] = typeof obj[key] === 'object' && obj[key] !== null ? deepClone(obj[key]) : obj[key];
//         }
//     }
//     return newObj;
// }

// let obj2 = deepClone(obj)
// obj2['b'] = {c:123}
// console.log(obj2);
// console.log(obj);


function deepClone(obj){
    return new Promise((resolve,reject)=>{
        const {port1,port2} = new MessageChannel();
        port1.postMessage(obj);
        port2.onmessage = (msg)=>{
            resolve(msg.data)
        }
    })
}

function deepClone(obj){
    return new Promise((resolve,reject)=>{
        const {port1,port2} = new MessageChannel()
        port1.postMessage(obj)
        port2.onmessage = (res)=>{
            resolve(res.data)
        }
    })
}

let obj2 = deepClone(obj).then((val)=>{
    console.log(val);
    val.b.c = 123
    console.log(val);
    process.exit()
})