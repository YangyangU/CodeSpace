strs = ["flower","flow","flight"]


var longestCommonPrefix = function(strs) {
    var res=''

    for(let i=0;i<strs[0].length;i++){
        for(let j=1;j<strs.length;j++){
            if(i>=strs[j].length||strs[j][i]!==strs[0][i]){
                return res;
            }
        }
        res+=strs[0][i]

    }
    return ''
}

console.log(longestCommonPrefix(strs));