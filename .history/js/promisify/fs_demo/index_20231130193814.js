//node内置的模块化系统 commonJS
//fs 文件模块 内置的 读文件异步  1.从硬盘读到内存  2.文件大小
const fs = require('fs');
fs.readFile('./a.txt',(error,data)=>{
    console.log(data);
}))



