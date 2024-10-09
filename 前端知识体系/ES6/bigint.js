console.log(123 == 123n); // true
console.log(BigInt(123) === 123n); // true
console.log(BigInt('123') === 123n); // true
// console.log(BigInt(1.2)); // TypeError: Cannot convert 1.2 to a BigInt because it is not an integer

console.log(1231231231231231233333333131233333333333n);

console.log(1231231231231231233333333131233333333333n + BigInt(123123123));
