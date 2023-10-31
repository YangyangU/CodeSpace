
var isPalindrome = function(x) {
    if ( x < 0 || (x !== 0 && x % 10 === 0)) {
      return false
    } else if ( 0 <= x && x < 10) {
      return true
    }
    x = '' + x
    for(let i = 0 ; i < x.length/2; i++) {
      if (x[i] !== x[x.length - i - 1]) {
        return false
      }
    }
    return true
  }
  console.log(isPalindrome(100));