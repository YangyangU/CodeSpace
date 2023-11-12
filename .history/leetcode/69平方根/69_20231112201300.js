x = 4


var mySqrt = function(x) {
    let right = 0;
    let left = 0
    if( x == 0 || x == 1 ||(x/2)^2 == x ){
        return x
    }

    if((x / 2) < x){
        left = x / 2
    }
};


console.log(mySqrt(x));