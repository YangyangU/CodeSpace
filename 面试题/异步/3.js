const a = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('a')
            // resolve('ok')
            reject('error')
        },1000)
    })
}


const b = () =>{
    // setTimeout(()=>{
    //     console.log('b')
    // },500)
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('b')
            // resolve('ok2')
            reject('error2')
        },500)
    })
}

// a().then(
//     (res)=>{//形参也算变量声明
//         b()
//         console.log(res)
//     },
//     (rej)=>{
//         console.log(rej)
//     }
// ).then(
//     ()=>{
//         console.log('c');
//     }
// )

// a().then(b)//.then中的函数会自动调用，所以只用传入函数体

// 如果既没有触发resolve，也没有触发reject，那么then里面的回调不触发


// a()
// .then(
//     ()=>{

//     },
//     (res)=>{
//         b()
//         console.log(res)
//     }
// )
// .then(()=>{
//     console.log('then2')
// })


Promise.race([a(),b()]).then(()=>{},(res)=>{console.log(res);}) //race不是原型上的方法  

// static race(){
// }