millis = 100

async function sleep(millis) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(millis)
        },millis)
    })
}

console.log(sleep(millis));

