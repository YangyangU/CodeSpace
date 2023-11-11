//字符串拼接|模版拼接
// let a = 'hello'
// let b = 'world'

// let c = a + b 
// console.log(c);


let date = new Date()
date//读取现在时间
date.getFullYear()//读取今年
date.getMonth()//读取月加一才是我国


let time = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'

console.log(time);


let t = `${date.getFullYear()}年${date.getMonth()+ 1}月${date.getDate()}`