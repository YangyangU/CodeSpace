s = "abcabcbb"

var lengthOfLongestSubstring = function(s) {
    const len=s.length
    if(len==0) return len;
    let res= 1;
    for(let i=0; i<len; i++) {
        let current=1;
        let j = i+1;
        while(s[i]!==s[j]){
            current++;
            j++;
        }
        res=Math.max(res,current);
    }
};

console.log(lengthOfLongestSubstring(s));