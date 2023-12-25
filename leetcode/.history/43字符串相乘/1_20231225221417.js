num1 ="123456789"
num2 = "987654321"

var multiply = function(num1, num2) {
    return BigInt(num1 * num2).toString()
};

console.log(multiply(num1, num2));