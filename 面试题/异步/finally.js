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
a().finally((data)=>console.log(data)).catch((err)=>console.log(err))