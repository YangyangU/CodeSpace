
//最后一个用例超时
var countOdds = function(low, high) {
    let count = 0;
    let jishu = low;
    for (; low <= jishu, jishu <= high; jishu++) {
        if(jishu%2 != 0) {
            count ++
        }
    }
    return count
    
};


//成功
var countOdds = function(low, high) {
    if(low % 2 != 0 && high % 2 != 0){
        return (high-low)/2 + 1
    }
    if(low % 2 == 0 && high % 2 == 0){
        return (high-low)/2
    }
    if(low % 2 == 0 || high % 2 == 0){
        return Math.ceil((high-low)/2)
    }
    return high-low-1
};