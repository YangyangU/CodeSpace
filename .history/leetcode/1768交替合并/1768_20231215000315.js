word1 = "ab"
word2 = "pqrs"

var mergeAlternately = function(word1, word2) {
    let res = ''
    let n = 0
    n = Math.min(word1.length-1, word2.length-1)
    for (let i = 0; i < n; i++){
        res += word1[i] + word2[i]
    }
    console.log(res);
    let word111 = word1.slice(n,-1)
    let word222 = word2.slice(n,-1)
    res += word2.length > word1.length ? word222 :word111
    return res
};

console.log(mergeAlternately(word1, word2));