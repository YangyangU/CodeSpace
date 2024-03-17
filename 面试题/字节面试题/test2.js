let arr = [1,2,3]

// for(let item of arr){
//     console.log(item);// 1 2 3
// }

// for(let item in arr){
//     console.log(item);// 0 1 2
// }

console.log(arr[Symbol.iterator]());//Object [Array Iterator] {}

let obj = {
    a:1,
    b:2,
    c:3
}


// for(let item of obj){ //只能遍历具有可迭代对象
//     console.log(item);// 1 2 3
// }

for(let item in obj){
    console.log(item);// a b c
}