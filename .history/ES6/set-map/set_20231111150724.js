// let arr = [1, 1, 2, 3, 3]
// let obj = {
//     a:1,
//     b:1,
//     c:1
// }


//set是类数组 成员唯一 

//set储存方式
// 0: 1
// 1: 2
// 2: 3
// 3: 4

// let set = new Set([1, 2, 3, 4])//接收参数为数组


// console.log(set.keys());//[Set Iterator] { 1, 2, 3, 4 }
// console.log(set.values());//[Set Iterator] { 1, 2

// set.add(5)//类似push
// console.log(set);
// console.log(set.size);//类似length


let set = new Set([1, 1 , 2 , 2 , 3, 4])
console.log(set);


//数组去重，只能重原始类型，如果数组里面存的是对象就不行
var arr = [1, 2, 1, 1, '1']
function unique(arr) {
    let s = new Set(arr)
    let res = Array.from(s)
    return res
}

// function unique(arr) {
//     return Array.from(new Set(arr))
// }

// function unique(arr) {
//     return [...new Set(arr)]
// }

// var unique = (arr) => [...new Set(arr)]//箭头函数相当于不换行加return
console.log(unique(arr));