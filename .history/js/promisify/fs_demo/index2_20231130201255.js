// fs 读取文件
// promise + then / async + await 解决方案

function readFileByPromise(a){
    const fs = require('fs');
    let file = `./${a}.txt`
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