let obj = { name : '德玛西亚'}//占据
// 垃圾回收机制是自动的

//垃圾回收机制不考虑WeakSet对对该对象的引用
let ws = new WeakSet()
ws.add(obj)//WeakSet对obj的引用

// obj = null //手动回收

console.log(ws);//变成空

console.log(obj.name);//普通引用