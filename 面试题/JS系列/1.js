// let arr = ['a', 'b', 'c','d','e', 'f', 'g', 'h']

// let s = arr.splice(1,3,'hello')

// // console.log(s);//['b','c','d']
// // console.log(arr);//['a', 'hello', 'b', 'c','d','e', 'f', 'g', 'h']


// let arr1 = ['a', 'b', 'c']
// let arr2 = [1,2,3]

// let arr3 = arr1.concat(arr2)

// console.log(arr3);//[ 'a', 'b', 'c', 1, 2, 3 ]
// console.log(arr1);//不影响元数组

let arr = [1,2,3,4,5,6]

// arr.find((item,i,arr)=>{//每一项，下标，原数组
//     return item > 4 //返回第一个符合的元素
// })


// arr.forEach((item,i,arr)=>{
//     if(item > 5){
//         // item = item * 10//改不动
//         arr[i] = item * 10 //才能
//     }
// })

// let arr2 = arr.forEach((item,i,arr)=>{
//     item = item * 10 //才能
//     return item
// })

// console.log(arr2);


// let arr2 = arr.filter((item,i,arr)=>item > 2)//返回符合条件的元素

// let arr2 = arr.every((item,i,arr)=>item > 2) //所以满足条件就返回true

// let arr2 = arr.some((item,i,arr)=>item > 2) //有一个符合就是true

let s = arr.reduce((pre,item,i,arr)=>{
    console.log(pre);//第一个为0,后面全为undefined   //pre=reduce()
    return pre + item
},0)

arr.reduce((pre,item,i,arr)=>{
    console.log(pre,item);//无初始值,pre为第一个元素,item为第二个元素,
})
