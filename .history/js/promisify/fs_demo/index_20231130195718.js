//node内置的模块化系统 commonJS
//fs 文件模块 内置的 读文件异步  1.从硬盘读到内存  2.文件大小
const fs = require('fs');
fs.readFile('./a.txt','utf-8',((err,data)=>{
    //后端 稳定性第一 第一个参数为error
    if(err){
        console.log(err);
        return
    }
    // console.log(data.toString());// toString()转换成十进制
    // data += '' // Buffer对象 二进制流 十六进制
    console.log(data);

    //1.+''加字符串
    //2.toString()
    //3.第二个参数'utf-8'

    fs.readFile('./b.txt','utf-8',((err,data2)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(data2);
        fs.readFile('./c.txt','utf-8',((err,data3)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(data3);
            
        }))

    }))
}))

