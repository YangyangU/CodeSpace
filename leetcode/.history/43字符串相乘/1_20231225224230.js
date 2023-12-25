num1 ="123456789"
num2 = "987654321"

var multiply = function(num1, num2) {
    let sum = 0
    for (let i = 0; i < num1.length; i++) {
        sum+=(num1 / 10^(i+1))
    }
};

console.log(multiply(num1, num2));