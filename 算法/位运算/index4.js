const num = 5 //00000000 00000000 00000000 00000101
const res = ~num //11111111 11111111 11111111 11111010 

console.log(res); //-6


let n = -6  //110

//00000110
//11111001 + 1
//11111010  -6的二进制补码
//1111010 -6的二进制

function reverseBit(str){
    const n = parseInt(str, 2);//看成2进制
    return ~n
}

const binaryStr = '0001101'
const reverseStr = reverseBit(binaryStr)
console.log(reverseBit(binaryStr));