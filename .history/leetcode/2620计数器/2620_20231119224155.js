
var createCounter = function(n) {
    let counter = 0
    m = n + counter
    counter++
    return function() {
        return m
    };
};

const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());
