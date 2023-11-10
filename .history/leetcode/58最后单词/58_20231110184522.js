s = "Hello World"

var lengthOfLastWord = function(s) {
    let arr = s.split('')
    let n = arr.lastIndexOf(' ')
    console.log(n);
};

console.log(lengthOfLastWord(s));