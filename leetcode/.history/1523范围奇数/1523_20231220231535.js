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