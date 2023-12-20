var countOdds = function(low, high) {
    let count = 0;
    let jishu = 0;
    for (let jishu = 0; low <= jishu, jishu <= high; jishu++) {
        if(low <= jishu && high <= jishu && jishu%2 != 0) {
            count ++
        }
    }
    return count
};