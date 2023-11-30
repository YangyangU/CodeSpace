// fs 读取文件
// promise + then / async + await 解决方案

function readFileByPromise(filename){
    const fs = require('fs');
    return new Promise(function(resolve, reject){
        fs.readFile(filename,'utf-8',(function(err,data){
            if(err){
                console.log(err);
                return
            }
            resolve()
            console.log(data);
        }))
    })
}

readFileByPromise('./a.txt')
.then(()=>{
    return readFileByPromise('./b.txt')
})
.then(()=>{
    return readFileByPromise('./c.txt')
})
.catch((err)=>{
    console.log(err);
})