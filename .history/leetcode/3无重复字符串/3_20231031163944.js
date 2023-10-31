s = "abcabcbb"

var lengthOfLongestSubstring = function(s) {
    const len=s.length
    let res= 1;
    if(len==0) return len;

    for(let i=0; i<len; i++) {
        let current=1;
        let j = i+1;
        while(s[i]!==s[j] && j<len){
            current++;
            j++;
        }
        res=Math.max(res,current);
    }
    return res;
};

console.log(lengthOfLongestSubstring(s));