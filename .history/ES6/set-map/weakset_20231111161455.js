let obj = { name : '德玛西亚'}//占据
// 垃圾回收机制是自动的

let ws = new WeakSet()
ws.add(obj)
console.log(obj.name);