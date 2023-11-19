
var createCounter = function(n) {
    let counter = 0
    return function() {
        return n
    };
};

const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());
