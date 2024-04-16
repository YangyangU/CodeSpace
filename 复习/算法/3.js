let a = 10002

function reverseNum(a){
    return +a.toString().split("").reverse().join("")
}

function reverseNum2(a){
    let arr = a.toString().split('')
    let len = arr.length
    let res = []
    for(let i = 0; i < len; i++){
        res.push(arr.pop())
    }
    return +res.join('')
}
console.log(reverseNum2(a));