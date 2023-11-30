// fs 读取文件
// promise + then / async + await 解决方案

function readFileByPromise(){
    const fs = require('fs');
    return new Promise(function(resolve, reject){
        fs.readFile('./a.txt','utf-8',(function(err,data){
            if(err){
                console.log(err);
                return
            }
            resolve()
            console.log(data);
        }))
    })
}

readFileByPromise()
.then()
.then()