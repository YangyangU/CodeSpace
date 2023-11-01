strs = ["flower","flow","flight"]


var longestCommonPrefix = function(strs) {
    let length=0;
    i=0;
    if(strs.length==0){
        return '';
    }
    for(var i=0;i<strs.length;){
        while(strs[i].charAt(0)==strs[i+1].charAt(0)){
            i++;
            if(i==strs.length){
                length++;
            }
        }
    }
}