strs = ["flower","flow","flight"]


var longestCommonPrefix = function(strs) {
    res=[];

    for(let i=0;i<strs[0].length;i++){
        for(let j=1;j<strs.length;j++){
            for(let k=1;k<j;k++){
                if(strs[j+k][i]!=strs[0][i]){
                    return res;
                }
                res.push(strs[j][i])
            }
        }
    }
    return res
}

console.log(longestCommonPrefix(strs));