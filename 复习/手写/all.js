const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(3)
    },1000);
});
const p4 = Promise.reject(4)

function myPromiseAll(arr){
    return new Promise((resolve,reject)=>{
        let res = []
        let len = 0
        for(let i = 0;i<arr.length;i++){
            arr[i].then(
                (val)=>{
                    res[i] = val
                    len ++
                    if(len === arr.length){
                        resolve(res)
                    }
                },
                (res)=>{
                    reject(res)
                }
            )
        }
    })
}

myPromiseAll([p1,p2,p3,p4]).then((val)=>console.log(val)).catch(err=>console.log(err))
