// for (var i = 0; i < 5; i++) {
//     var j = i
//     setTimeout(() =>{
//         i = j
//         return console.log(i)
//     } , 0)
// }

// function fn(arr){
//     let res = []
//     for(let item of arr){
//         if(Array.isArray(item)){
//             res = res.concat(fn(item))
//         }else{
//             res.push(item)
//         }
//     }
//     return res
// }

// // console.log(fn([1, 2, [3, 4], [5, [6, 7]]]));

const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(3)
    },1000);
});
const p4 = Promise.resolve(4)

function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let result = [];
        let count = 0
        promises.forEach((promise,index) => {
            Promise.resolve(promise).then(val => {
                    result[index] = val
                    count++
                    if (count === promises.length) {
                        resolve(result)
                    }
                    
                },
                (err)=>{
                    reject(err)
                }
            )
        })
    })
}

myPromiseAll([p1,p2,p3,p4]).then((val)=>console.log(val)).catch(err=>console.log(err))
