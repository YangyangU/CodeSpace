n = 19

var isHappy = function(n) {
    let sum = 0;
    for (var i = 0; i < n.toString().length; i++) {
        sum += ((n.toString()[i])*(n.toString()[i]))
    }
    while(sum != 0){
        
    }
    return sum === 0 ? true : false
};
console.log(isHappy(n));