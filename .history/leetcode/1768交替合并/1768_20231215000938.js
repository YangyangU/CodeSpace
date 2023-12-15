word1 = "ab"
word2 = "pqrs"

var mergeAlternately = function(word1, word2) {
    let res = ''
    let n = 0
    n = Math.min(word1.length-1, word2.length-1)
    for (let i = 0; i <= n; i++){
        res += word1[i] + word2[i]
    }
    // console.log(res);
    let word111 = word1.slice(n+1)
    let word222 = word2.slice(n+1)
    res += word2.length > word1.length ? word222 :word111
    return res
};

function mergeAlternately(s1: string, s2: string): string {
    let n = s1.length, m = s2.length, i = 0, j = 0
    let ans = ""
    while (i < n || j < m) {
        if (i < n) ans += s1[i++]
        if (j < m) ans += s2[j++]
    }
    return ans
}

// 作者：宫水三叶
// 链接：https://leetcode.cn/problems/merge-strings-alternately/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

console.log(mergeAlternately(word1, word2));