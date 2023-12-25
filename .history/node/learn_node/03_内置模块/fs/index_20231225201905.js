//文件系统
// const fs = require('fs');

// 同步
// const syncData = fs.readFileSync('d:\\CodeSpace\\node\\learn_node\\03_内置模块\\fs\\data.txt', {encoding:'utf8'});
// const syncData = fs.readFileSync('./data.txt', {encoding:'utf8'});

// const syncData = fs.readFile('./data.txt', {encoding:'utf8'});//不加sync叫异步
// console.log(syncData);

//异步
// fs.readFile('./data.txt', {encoding:'utf8'},(err,res)=>{
//     if(!err){
//         console.log(res);
//     }
// })

// fs.promises.readFile('./data.txt','utf8').then(res=>{
//     console.log(res);
// })


const fs = require('fs/promises')