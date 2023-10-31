let str = 'abcdefg'

//读取：
console.log(str[2])//可以通过下标读取字符，str[2]='C'不能修改

console.log(str.charAt(2));//字符串自带的方法

//添加
console.log(str.concat('mn'));
console.log(str+'mn');//一般用加号

//删除
// str.splice(0, 1) 数组才能用

let arr =str.split('')

console.log(arr);

arr.splice(4)

let newStr =arr.join('-')

console.log(arr);



