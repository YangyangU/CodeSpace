s = "01000111"

var findTheLongestBalancedSubstring = function(s) {
    let res = 0;
    const count = new Array(2).fill(0);
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '1') {
            count[1]++;
            res = Math.max(res, 2 * Math.min(count[0], count[1]));
        } else if (i == 0 || s[i - 1] == '1') {
            count[0] = 1;
            count[1] = 0;
        } else {
            count[0]++;
        }
    }
    return res;
};

//题目要求我们找到一个长度为偶数的最长的子字符串，这个子字符串前一半都为 ‘0’\text{`0'}‘0’，后一半都为 ‘1’\text{`1'}‘1’。我们可以遍历字符串，用一个长度为 222 的数组 count\textit{count}count 记录下来遇到的连续的 ‘0’\text{`0'}‘0’ 的个数和连续的 ‘1’\text{`1'}‘1’ 的个数，并不断更新，更新规则如下：

// 如果遇到的为 ‘0’\text{`0'}‘0’：
// 如果遇到的这个 ‘0’\text{`0'}‘0’ 是一个全 ‘0’\text{`0'}‘0’ 子字符串的第一个 ‘0’\text{`0'}‘0’（即是 sss 的第一个字符或者这个 ‘0’\text{`0'}‘0’ 前面的字符是 ‘1’\text{`1'}‘1’），则把 count[0]\textit{count}[0]count[0] 记为 111，把 count[1]\textit{count}[1]count[1] 记为 000。
// 否则的话，只更新 count[0]\textit{count}[0]count[0]，将其自增 111。
// 如果遇到的为 ‘1’\text{`1'}‘1’，只需要将 count[1]\textit{count}[1]count[1] 自增 111，不需要改变 count[0]\textit{count}[0]count[0] 的值。并且，此时的 ‘0’\text{`0'}‘0’ 是一个平衡字符串的结尾，只需通过计算 2×min⁡(count[0],count[1])2 \times \min(\textit{count}[0], \textit{count}[1])2×min(count[0],count[1]) 来计算这个平衡字符串的长度。
// 遍历时，不停更新平衡字符串的最大长度即可。




console.log(findTheLongestBalancedSubstring(s)); 