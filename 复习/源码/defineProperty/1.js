// const obj = {};

// Object.defineProperty(obj, 'name', {
//   value: '阳阳羊',
//   writable: true,
//   enumerable : true,
//   configurable : true
// });

// obj.name = '喜羊羊';

// console.log(obj.name); //喜羊羊
// console.log(Object.keys(obj)); //[ 'name' ]
// delete obj.name
// console.log(obj.name); //undefined

// let obj = {};
// let name = '阳阳羊'

// Object.defineProperty(obj, 'name', {
//     get() {
//         console.log('访问了');
//         return name
//     },
//     set(newVal) {
//         console.log('修改了');
//         name = newVal
//     }
// });

// console.log(obj.name); //访问了 阳阳羊
// obj.name = '修改后的阳阳羊'; //修改了
// console.log(obj.name); //访问了 修改后的阳阳羊

const obj = {};

Object.defineProperty(obj, 'name', {
  value: '阳阳羊',
});

obj.name = '喜羊羊';
console.log(obj.name); //阳阳羊
console.log(Object.keys(obj)); //[]
delete obj.name
console.log(obj.name); //阳阳羊