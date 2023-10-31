// let s = 'abcde'

// var validPalindrome = function(s) {
//     if(ispalindrome(s)) { return true}
//     else{
//         for(var i = 0; i < s.length; i++) {
//             let arr=s.split('');
//             arr.splice(i, 1);
//             arr=arr.join('');
//             if(ispalindrome(arr)){
//                 return true;
//             }
//         }
//         return false;
//     }
// };

// var ispalindrome=function (s){
//     const len = s.length
//     for(var i = 0; i < len/2;i++){
//         if(s[i]!==s[len-1-i]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(validPalindrome(s));


var validPalindrome = function(s) {
    const len = s.length
    let i = 0, j = len - 1;
  
    while ( i < j && s[i] === s[j]) {
      i++
      j--
    }
  
    // i j
    // 尝试跳过 i， 或者 j
    if (isPalindrome(i + 1, j)) {
      return true
    }
    if (isPalindrome(i, j - 1)) {
      return true
    }
  
    function isPalindrome(st, ed) {
      while (st < ed) {
        if (s[st] !== s[ed]) {
          return false
        }
        st++
        ed--
      }
      return true
    }
  
    return false
  };

  console.log(validPalindrome(s));