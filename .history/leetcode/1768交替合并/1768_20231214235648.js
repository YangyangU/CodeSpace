word1 = "ab"
word2 = "pqrs"

var mergeAlternately = function(word1, word2) {
    let res = ''
    let n = 0
    n = Math.min(word1.length, word2.length)
    for (let i = 0; i < n; i++){
        let word11 = word1[n]
        let word22 = word2[n]
        res += word11 + word22
    }
    while(n <= word1.length || n <= word2.length){
        
        if(word1.length<word2.length){

        }
    } 
    return res
};

console.log(mergeAlternately(word1, word2));