let a = 'abaab'

//删掉一个能回文
const validPalind =(s)=>{
    let arr = s.split('')
    if(helper(arr)){
        return true
    }else{
        for(let i = 0; i < s.length; i++){
            let newArr = s.split('')
            newArr.splice(i,1)
            if(helper(newArr)){
                return true
            }
        }
        return false
    }
}

const validPalind2 = (s)=>{
    let left = 0,right = s.length - 1
    while(left < right){
        if(s[left] !== s[right]){
            return helper2(s.slice(left+1,right)||helper2(s.slice(left,right-1)) )
        }
        left++
        right--
    }
}

//判断回文
//数组
const helper = (arr)=>{
    return arr.join('') === arr.reverse().join('')
}
//字符串
const helper2 = (s)=>{
    let left = 0
    let right = s.length - 1
    while(left < right){
        if(s[left] !== s[right]){
            return false
        }
        left++
        right--
    }
    return true
}

console.log(validPalind2(a));