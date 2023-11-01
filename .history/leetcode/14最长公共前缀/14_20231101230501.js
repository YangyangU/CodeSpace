strs = ["flower","flow","flight"]


var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }

    let commonPrefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== strs[0][i]) {
                return commonPrefix;
            }
        }
        commonPrefix += strs[0][i];
    }

    return commonPrefix;
};

console.log(longestCommonPrefix(strs));