var sumOfMultiples = function(n) {
    if (n <= 0) {
        return 0;
    } else {
        var sum = 0;
        for (var i = 1; i <= n; i++) {
            if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
                sum += i;
            }
        }
        return sum;
    }
};


var sumOfMultiples = function(n) {
    let sum = 0;
    for(let num = 1;num <= n;num++){
        if(num%3 === 0){
            sum += num;
        }else if(num%5 === 0){
            sum += num;
        }else if(num%7 === 0){
            sum += num;
        }
    }
    return sum;
};