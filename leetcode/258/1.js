var num = 12


//reduce结果要赋回sum
var addDigits = function(num) {
    let arr = num.toString().split('')
    while(arr.length > 1){
        let sum = 0
        sum = arr.reduce((sum,item)=>{
            return sum + parseInt(item,10)
        },0)
        arr = sum.toString().split('')
    }
    return arr[0]
};

console.log(addDigits(num));