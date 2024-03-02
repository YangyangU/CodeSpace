function request(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num*10)
        },1000)
    })
}

// request(1)
// .then(
//     (res)=>{
//         request(res).then(
//             (res2)=>{console.log(res2);}
//         )
//     }
// )

function* gen(){
    const num1 = yield request(1)
    const num2 = yield request(num1)
    const num3 = yield request(num2)
    return num3
}
const g = gen()
const next1 = gen.next()
next1.value.then(res=>{
    const next2 = gen.next(res)
    next2.value.then(res2=>{
        const next3 = gen.next(res2)
        next3.value.then(res3=>{
            console.log(res3);
        })
    })
})

async function fn(){
    const res1 = await request(1)
    const res2 = await request(res1)
    console.log(res2);
}

fn()

