word1 = "abc"
word2 = "pqr"

var mergeAlternately = function(word1, word2) {
    let res = ''
    let n = 0
    for (let i = 0; i < word1.length;i++) {
        if(word1.length || word2.length){
            let word11 = word1[n]
            let word22 = word2[n]
            res += word11 + word22
            n++
            if(word1[0]===''){
                
            }
        } 
    }
    return res
};

console.log(mergeAlternately(word1, word2));