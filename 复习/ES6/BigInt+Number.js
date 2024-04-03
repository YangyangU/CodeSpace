let bigint = 12n
let number = 123
// console.log(bigint + number);// Cannot mix BigInt and other types, use explicit conversions
// console.log(Number(bigint) + number);//135
console.log(bigint + BigInt(number));//135n