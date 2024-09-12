const myPromiseAny = (arr) =>{
    let len = 0
    let result = []
    return new Promise((resolve,reject)=>{
        for(let i=0;i<arr.length;i++){
            arr[i].then(
                (val)=>{
                    resolve(val)
                },
                (res)=>{
                    result[i] = res
                    len++
                    if(len === arr.length){
                        reject(result)
                    }
                }
            )
        }
    })
}


let p1 = Promise.reject(1)
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(2)
    }, 1)
})
let p3 = Promise.reject(3)

console.log(myPromiseAny([p1, p2, p3]).then((val) => console.log(val), (res) => console.log(res)));
