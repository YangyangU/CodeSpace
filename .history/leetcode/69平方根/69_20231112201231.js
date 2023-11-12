x = 4


var mySqrt = function(x) {
    var right = 0;
    if( x == 0 || x == 1 ||(x/2)^2 == x ){
        return x
    }
    let left = x / 2;
    if((x / 2) < x){
        right = x / 2
    }
};


console.log(mySqrt(x));