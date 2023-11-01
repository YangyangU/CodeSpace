strs = ["flower","flow","flight"]


var longestCommonPrefix = function(strs) {
    res=[];
    if(strs.length==0){
        return res;
    }
    for(let i=0;i<strs[0].length;i++){
        for(let j=0;j<strs.length;j++){
            if(strs[j][i]!=strs[0][i]){
                return res;
            }
        }
        res.push(strs[j][i])
    }
    return res
}

console.log(longestCommonPrefix(strs));