// let arr = ['a', 'b', 'c']

// for(var i = 0; i < arr.length; i++){//什么都能遍历

// }

// for(let item of arr){//只能循环具有迭代器属性的数据结构
//     console.log(item);
// }

// let obj = {
//     a:1,
//     b:2,
//     c:3
// }


// for(let item of obj){
//     console.log(item);// TypeError: obj is not iterable
// }


let set = new Set([1, 1 , 2 , 2 , 3, 4])

for(let item of set){
    console.log(item);//set也有迭代器属性
}

for(let item of set.values()){
    console.log(item);//set.values()也有迭代器属性
}

for(let item of set.entries()){
    console.log(item);//set.entries()也有迭代器属性,既有key又有value
}


let str = 'qweqwrwqe'