s = "Hello World"

var lengthOfLastWord = function(s) {
    let arr = s.split('')
    let n = arr.lastIndexOf(' ')
    let ans = 0;
    for(let i = n+1; i < arr.length; i++){
        ans++
    }
    console.log(ans);
};

console.log(lengthOfLastWord(s));