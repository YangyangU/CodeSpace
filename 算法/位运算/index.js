const num1 = 5  //101
const num2 = 3  //011
const num3 = 6  //110

const res = num1 & num2  //1
const res2 = num3 & num1 //4    二进制100
console.log(res2);



//2的幂
function test(n){
    return n>0 && (n & (n - 1)) === 0
}
console.log(test(num1));