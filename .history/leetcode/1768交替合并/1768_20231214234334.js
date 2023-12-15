word1 = "abc"
word2 = "pqr"

var mergeAlternately = function(word1, word2) {
    let res = ''
    let word11 = word1[0]
    let word22 = word2[0]
    for (let i = 0; i < word1.length;i++) {
        if (word11[i]){
            res += word11 + word22
        }
    }
    return word11
};

console.log(mergeAlternately(word1, word2));