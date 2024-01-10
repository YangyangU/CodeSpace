// const num1 = 5  //101
// const num2 = 3  //011

// const res = num1 ^ num2   //110



// 如何交换两个数的值而不使用第三方变量

let num1 = 5 
let num2 = 7

//[num1,num2] = [num2,num1]

function swap(a,b){
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a,b]
}

[num1,num2] =swap(num1,num2)
console.log(num1,num2);


// (a^b)^b == a