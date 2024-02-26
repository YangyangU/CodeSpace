var countAndSay = function(n) {
    let prev = '1'
    for(let i = 1; i < n; i++){
        prev = prev.replace(/(\d)\1*/g, item =>`${item.length}${item[0]}`)
    }
    return prev
};

// 正则表达式 /(\d)\1*/g 匹配任意连续重复的数字字符序列。
// item 是匹配结果，在箭头函数中代表每一个匹配到的子串。

