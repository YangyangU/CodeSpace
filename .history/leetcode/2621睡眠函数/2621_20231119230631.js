millis = 100

async function sleep(millis) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        },millis)
    })
}

console.log(sleep(millis));

return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('阳阳相亲了！');//两秒钟相亲
        resolve('相亲成功');//法拉利钥匙
    },2000)
})