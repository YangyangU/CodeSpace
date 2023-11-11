// let [x,y,z] = ['a','b','c','d','e']//这种方便

// let x = 'a'//另一种方法
// let y = 'b'
// let z = 'c'

// console.log(x,y,z);
//d,e没有对象承接


let arr = [1,2,3];

let newArr = [0]

console.log(newArr.concat(arr));

console.log(...arr);//解构