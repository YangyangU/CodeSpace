
var createCounter = function(n) {
    let counter = 0
    
    return function() {
        m = n + counter
        counter++
        return m
    };
};

const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());
