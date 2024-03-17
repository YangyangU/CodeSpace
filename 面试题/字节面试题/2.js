let n = 90071992547409928
let m = 754634524

function sum(a,b){
    a = a.toString()
    b = b.toString()
    
    const len = Math.max(a.length ,b.length)
    a = a.padStart(len,'0')  
    b = b.padStart(len,'0')

    let result = ''
    let = carry = 0
    for (let i = len-1; i >= 0 ; i--){
        const n = +a[i] + +b[i] + carry//隐式类型转换
        carry = Math.floor(n / 10)

        result = (n % 10) + result //字符串相加
    }
    if(carry){
        result = '1' + result
    }
    return Number(result)
}

console.log(sum(n,m));