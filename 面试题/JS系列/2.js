// let s ='abcdefg'
// let h = '123'
// let g = s.concat(h)

// s = s.padStart(5,'0')//用0在前面补5位

// s = s.padEnd(5,'0')//用0在后面补5位

// console.log(s.substr(3,2));//从下标数2个

// console.log(s.substring(3,5));//从下标3到下标5

// let s2 = s.replace('c','0')

// let s2 = s.replace(/c/g,'0') //改所有的c,一般只改第一个,所以搭配正则使用

// let s2 = s.repeat(2)//重复几遍

// let s = '       ---     ---    '
// let s2 = s.trim();//去除首尾空格

// let s = 'abc'
// let s2 = 'abc'
// console.log(s.toUpperCase());//大写
// console.log(s2.toLowerCase());//小写
// console.log(s.toLocaleUpperCase());//根据地区校准

let s = 'ABC'

// console.log(s.indexOf('A'));

// console.log(s.charAt(1));//按下标查

// console.log(s.startsWith('A'));//以什么开头

// console.log(s.endsWith('C'));//以什么结尾

// console.log(s.charCodeAt());//转ASII码

console.log(s.split(''));//['A','B','C']

console.log(s.split(' '));//['ABC']

console.log(s.split('B'));//['A','C']
