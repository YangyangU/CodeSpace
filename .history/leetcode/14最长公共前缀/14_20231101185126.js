strs = ["flower","flow","flight"]


var longestCommonPrefix = function(strs) {
    let length=0;
    if(strs.length==0){
        return '';
    }
    for(var i=0; i<strs.length; i){
        if(strs[i].charAt(0)==strs[1].charAt(0)==strs[2].charAt(0)){
            length++;
        }
        return '';
    }
};