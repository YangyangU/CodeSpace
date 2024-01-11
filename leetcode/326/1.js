var isPowerOfThree = function(n) {
    let shan;
    let yushu;
    if(n==0) return false
    while(1){
        shan = parseInt(n/3);
        yushu = n%3;
        if(shan === 0 && yushu === 1) return true
        if(yushu) return false
        n = parseInt(n/3);
    }
};
