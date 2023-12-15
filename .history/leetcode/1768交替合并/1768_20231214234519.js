word1 = "abc"
word2 = "pqr"

var mergeAlternately = function(word1, word2) {
    let res = ''
    let n = 0
    for (let i = 0; i < word1.length;i++) {
        let word11 = word1[n]
        let word22 = word2[n]
        res += word11 + word22
        n++
    }
    return res
};

console.log(mergeAlternately(word1, word2));