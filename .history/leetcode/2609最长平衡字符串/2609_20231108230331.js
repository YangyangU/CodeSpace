s = "01000111"

var findTheLongestBalancedSubstring = function(s) {
    let len = s.length
    let number = 0;
    let left = 0;
    let right = left + 1;
    if(s[0]=='0') return number;
    while(left < right) {
        if(s[left]=='0'){
            number++;
            right++;
        }
    }
};

console.log(findTheLongestBalancedSubstring(s)); 