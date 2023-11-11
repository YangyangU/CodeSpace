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
// map.set({a:1},'hello')//添加key，value
// console.log(map);//Map(1) { { a: 1 } => 'hello' }

let map = new Map([
    ['name','阳阳']//初始值
])

let obj = {a:1}//将址传出
map.set(obj,'hello')

// console.log(map);

// console.log(map.get('name'));
// console.log(map.get(obj));


map.forEach((key,value, map)=>{
    console.log(key,value, map);
})


