s = "01000111"

var findTheLongestBalancedSubstring = function(s) {
    let number = 0;
    let left = 0;
    let right = left + 1;
    let max=0;
    if(s[0]!=='0') return number;
    while(left < right) {
        if(s[left]=='0'){
            number++;
            max=Math.max(number,max);
            if(s[right]=='0'){
                number++;
                max=Math.max(number,max);
            }else{
                number=0;
            }
            right++;
        }else{
            left++;
            right++;
        }
        left++;
    }
    return max;
};




console.log(findTheLongestBalancedSubstring(s)); 