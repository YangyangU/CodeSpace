word1 = "ab"
word2 = "pqrs"

var mergeAlternately = function(word1, word2) {
    let res = ''
    let n = 0
    n = Math.min(word1.length, word2.length)
    while(n <= word1.length || n <= word2.length){
        let word11 = word1[n]
        let word22 = word2[n]
        res += word11 + word22
        n++
        if(word1.length<word2.length){

        }
    } 
    return res
};

console.log(mergeAlternately(word1, word2));