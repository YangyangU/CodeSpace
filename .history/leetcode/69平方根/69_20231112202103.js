x = 4


var mySqrt = function(x) {
    let right = x;
    let left = 0;
    if( x == 0 || x == 1 ||(x/2)^2 == x ){
        return x
    }
    while( right < left ){
    if(((left + right) / 2)^2 < x){
        left = (left + right) / 2
    }
    else if(((left + right) / 2)^2 > x){
        right = (left + right) / 2
    }
    }
};


console.log(mySqrt(x));