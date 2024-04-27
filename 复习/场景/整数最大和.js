function fn(num){
    let str = num.toString();
    let arr = str.split('');
    let num2 = Number(arr.pop())
    let num1 = Number(arr.join(''));
    return num1 + num2;
}

console.log(fn(-110));