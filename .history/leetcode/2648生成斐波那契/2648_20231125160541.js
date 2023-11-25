

var fibGenerator = function*() {
    let a = 0
    let b = 1
    while (1){
        yield a ;
        [a, b]=[b, a+b]
    }
};

fibGenerator()