// let obj = {
//     a:1,
//     b:2
// }
// //想让数组当key
// var arr = []//数组被转换成字符串得到字符串
// obj[arr] = 3

// console.log(obj);//'':3


// let map = new Map()//map的key可以是任何类型
// console.log(map);//Map(0) {}

// let map = new Map()
// map.set({a:1},'hello')
// console.log(map);//Map(1) { { a: 1 } => 'hello' }

let map = new Map([
    ['name','hello']//初始值
])

map.set({a:1},'hello')
console.log(map);