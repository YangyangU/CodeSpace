s = "01000111"

// var findTheLongestBalancedSubstring = function(s) {
//     let len = s.length
//     let number = 0;
//     let left = 0;
//     let right = left + 1;
//     if(s[0]!=='0') return number;
//     while(left < right) {
//         if(s[left]=='0'){
//             number++;
//             if(s[right]=='0'){
//                 number++;
//             }
//             right++;
//         }else{

//         }
//         left=right +1;
//     }
//     return number;
// };


function findTheLongestBalancedSubstring(s) {
    let zeros = 0, ones = 0, maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            zeros++;
        } else {
            ones++;
        }
        if (zeros === ones) {
            maxLen = Math.max(maxLen, 2 * zeros);
        } else if (ones > zeros) {
            zeros = ones = 0;
        }
    }
    return maxLen;
}

console.log(findTheLongestBalancedSubstring(s)); 