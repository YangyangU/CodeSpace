

global.gc()//强制执行垃圾回收
console.log(process.memoryUsage());// 4612480 //计算node中内存占用情况
// {
//     rss: 31436800,
//     heapTotal: 7528448,
//     heapUsed: 4612480,
//     external: 430884,
//     arrayBuffers: 16762
// }
