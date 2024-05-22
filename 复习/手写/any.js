const p1 = Promise.reject(1)
const p2 = Promise.reject(2)
const p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(3)
    },1000);
});
const p4 = Promise.reject(4)

function myAny (arr){
    return new Promise((resolve,reject)=>{
        let result = []
        let len = 0
        for(let i=0;i<arr.length ;i++){
            arr[i].then(
                (val)=>{
                    resolve(val)
                },
                (res)=>{
                    len++
                    result[i] = res
                    if(len === arr.length){
                        reject(new Error(result))
                    }
                }
            )
        }
    })
}

myAny([p1,p2,p3,p4]).then((val)=>console.log(val)).catch(err=>console.log(err))
