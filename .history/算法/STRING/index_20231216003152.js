str.charCodeAt()  //阿斯科玛表值






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
console.log(newStr);


//字符串翻转
const str1 ='jiejin'

const str2 =str1.split('').reverse().join('')

console.log(str2);


//回文
const str3 = 'yesey'

function ispalindrome1(s){
    const res = s.split('').reverse().join('')
    return s==res
}

console.log(ispalindrome1(str3));

//栈的思想
function ispalindrome2(s){
    const stack = []
    for(let i=0;i<s.length;i++){
        stack.push(s[i])
    }
    
    for(let i=0;i<s.length;i++){
        if(stack.pop()!=s[i]){
            return false
        }
    }
    return true
}

console.log(ispalindrome2(str3));

//双指针
function ispalindrome3(s){
    let left = 0
    let right = s.length-1
    while(left<right){
        if(s[left]!=s[right]){
            return false
        }
        left++
        right--
    }
    return true
}
// var ispalindrome=function (s){
//     const len = s.length
//     for(var i = 0; i < len/2;i++){
//         if(s[i]!==s[len-1-i]){
//             return false;
//         }
//     }
//     return true;
// }

