n = 2

var isHappy = function(n) {
    let sum = 0;
    for (var i = 0; i < n.toString().length; i++) {
        sum += ((n.toString()[i])*(n.toString()[i]))
    }
    return sum === 0 ? true : false
};
console.log(n.toString()[0]);
console.log(isHappy(n));