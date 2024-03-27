function request(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * 10)
        }, 1000)
    })
}
function* gen() {
    const num1 = yield request(1)
    const num2 = yield request(num1)
    const num3 = yield request(num2)
    return num3
}

//模拟async
// function generatorToAsync(generatorFn) {//把generatorFn变成
//     const gen = generatorFn()
//     return () => {//具有async功能的函数
//         return new Promise((resolve, reject) => {
//             const next1 = gen.next()
//             next1.value.then(res => {
//                 const next2 = gen.next(res)
//                 next2.value.then(res2 => {
//                     const next3 = gen.next(res2)
//                     next3.value.then(res3 => {
//                         resolve(res3)
//                     })
//                 })
//             })
//         })
//     }
// }

function generatorToAsync(generatorFn) {//把generatorFn变成
    return () => {//具有async功能的函数
        const gen = generatorFn()
        return new Promise((resolve, reject) => {
            function loop(key,arg){
                let res = null
                res = gen[key](arg) //gen.next(1) {value:Promise,done:false}
                const {value,done} = res 
                if(done){
                    return resolve(value)
                }else{
                    Promise.resolve(value).then(val=> loop('next',val))//继续递归
                }
            }
            loop('next')
        })
    }
}

const asyncFn = generatorToAsync(gen)
// console.log(asyncFn);//Promise{}
asyncFn().then(res=>{
    console.log(res);//1000
})