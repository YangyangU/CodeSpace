
const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(3)
    },1000);
});
const p4 = Promise.reject(4)


function myRace(arr){
    return new Promise((resolve,reject)=>{
        arr.forEach((item,index) => {
            item.then(
                (val)=>{
                    resolve(val)
                },
                (res)=>{
                    reject(res)
                }
            )
        });
    })
}

myRace([p1,p2,p3,p4]).then((val)=>console.log(val)).catch((res)=>console.log(res))