const fs = require('fs');

// fs.appendFileSync('./data.txt','\n疑是银河落九天')  //在一个文件中
// fs.renameSync('./data.txt','./data.md');
// fs.renameSync('./data.md','./pic/data.md'); //移动/剪切
// fs.unlinkSync('./pic/data.md');//删除
fs.rmSync('pic',{recursive:true}) //删除文件夹及里面的子文件