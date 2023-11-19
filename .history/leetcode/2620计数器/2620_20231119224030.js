
var createCounter = function(n) {
    let counter = 0
    n = n + counter
    return function() {
        return n
    };
};

const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());
