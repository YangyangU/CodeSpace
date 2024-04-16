// 153 = 1 ^ 3 + 5 ^ 3 + 3 ^ 3

//判断是否为水仙花数
const isTrue = (num)=>{
    let str = num.toString()
    let len = str.length
    let sum = str.split('').reduce((acc,curr)=>{
        return acc + curr**len
    },0)
    return sum === num
}

// console.log(isTrue(153));

//找出所有水仙花数
const getAll = (n)=>{
    let res = []
    for(let i = 10**(n-1);i<=10**n;i++){
        if(isTrue(i)){
            res.push(i)
        }
    }
    return res
}

console.log(getAll(5));