num1 ="123456789"
num2 = "987654321"

function multiply(num1, num2) {
    const m = num1.length;
    const n = num2.length;
    const result = Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = result[i + j + 1] + mul;
            
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    console.log(result);
    while (result[0] === 0 && result.length > 1) {
        result.shift();
    }

    console.log(result);
    return result.join('');
}

console.log(multiply(num1, num2));