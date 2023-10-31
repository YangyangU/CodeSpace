var arr = ['a','b','c','d']

// arr[0] = 'aa';//覆盖数组下标为'0'的元素

// console.log(2 in arr);//判断数组是否有2个坑位

// console.log(arr.includes('c'));//判断数组是否有'c'这个元素

// arr.push('e');//在数组末端添加'e'元素

// arr.pop();//删除末端元素

// arr.unshift('hello');//在数组首端添加'hello'元素

// arr.shift();//删除首端元素

// arr.splice(2,1,'wrold');//向数组下标为'2'的位置添加'world'的元素,后面的元素依次后移

// arr.splice(2,1);//从下标'2'开始往后删除'1'个元素

// //遍历数组
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(item,index,arr){
//     console.log(item,index,arr);
// });

// var newArr = arr.map(function(item,index,arr){
//     return item + '1';
// })

var s = arr.join('');//将数组转化为字符串
var array = s.split('');//将字符串转化为数组

console.log(arr.indexOf('a'));//打印数组元素下标，没找到则打印'-1'
console.log(arr.lastIndexOf('a'));//从后往前数，打印数组元素下标，没找到则打印'-1'

var newarr = arr.reverse()//翻转数组

arr.sort()//将数组从小到大排序

//回调函数实现数组从大到小排序
arr.sort(function(a,b){
    return b-a;
})

console.log(s);
console.log(array);
