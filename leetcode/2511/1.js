var captureForts = function(forts) {
    let ans = 0
    let pre = -1
    for(let i = 0; i < forts.length; i++) {
        if(forts[i]){
            if (pre >= 0 && forts[pre] !== forts[i]){
                ans = Math.max(ans, i - pre - 1);
            }
            pre = i
        }
    }
    return ans
};