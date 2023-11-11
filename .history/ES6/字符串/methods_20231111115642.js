let str = 'advdefg'

console.log(str[2]);

console.log(str.at(2));//at()接收下标

console.log(str.startsWith('ab'));//判断是否以ab开头
console.log(str.endsWith('ab'));//判断是否以ab结尾
console.log(str.includes('ab'));//判断是否包含ab
console.log(str.padStart(20,'0'));//字符串长度补到20，前面补0
console.log(str.padEnd(20,'0'));//字符串长度补到20，后面补0


let obj = {
    a:1,
    b:2
}

console.log(JSON.stringify(obj));