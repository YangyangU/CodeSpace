
global.gc()//强制执行垃圾回收
console.log(process.memoryUsage());// 4612480 //计算node中内存占用情况
// {
//     rss: 31436800,
//     heapTotal: 7528448,
//     heapUsed: 4612480,
//     external: 430884,
//     arrayBuffers: 16762
// }

let obj = { name :'德玛西亚',age :new Array(5 * 1024 * 1024)}
let ws = new WeakSet()
ws.add(obj)

obj = null

global.gc()
console.log(process.memoryUsage());


// {
//     rss: 74047488,
//     heapTotal: 49750016,
//     heapUsed: 46871920,
//     external: 453304,
//     arrayBuffers: 16762
// }