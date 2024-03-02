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


const c = () =>{
    console.log('c');
}

//a或b出现了,就打印c
// Promise.race([a(),b()]).then(
//     ()=>{c()},
//     ()=>{c()}
// )

// Promise.all([a(),b()]).then(
//     ()=>{c()},
//     ()=>{c()}
// )

// Promise.all([a(),b()]).then((res)=>{console.log(res)})
Promise.any([a(),b()]).then(()=>{},(res)=>{console.log(res)})