let obj = {
    a: 1,
    b: {
        n: 2
    }
}


function deepCopy(obj) {
    return new Promise((resolve,reject)=>{
        const {port1,port2} = new MessageChannel();//消息隧道\管道通讯    创建一个端口,从一段喊话,另一个端口收听
        port1.postMessage(obj)
        port2.onmessage = (msg)=>{
            resolve(msg.data)
        }
    })
}

let obj2 = deepCopy(obj).then((res)=>{
    console.log(res);
    process.exit()
})
// async function fn(){
//     let newObj = await deepCopy(obj)
//     obj.b.n = 100
//     console.log(newObj);
//     process.exit()
// }

// fn()