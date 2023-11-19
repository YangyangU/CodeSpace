millis = 100

async function sleep(millis) {
    setTimeout(()=>{
        let t = Date.now();
        sleep(100).then(() => {
        console.log(Date.now() - t); // 100
        });
    },millis)
}

console.log(sleep(millis));