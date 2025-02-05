const fn = (s) => {
    let map = new Map(); // 用于记录字符和其对应的索引
    let start = 0; // 滑动窗口的起始位置
    let maxLength = 0; // 最长子串的长度

    for (let end = 0; end < s.length; end++) {
        // 如果字符已经存在于map中，并且它的索引在start右边，则更新start
        if (map.has(s[end]) && map.get(s[end]) >= start) {
            start = map.get(s[end]) + 1;
        }

        // 更新字符的最新位置
        map.set(s[end], end);

        // 计算当前无重复字符子串的长度
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
console.log(fn("aabcadefgaggggggaws")); // 7

// 滑动窗口
// start指针=0 end指针=0
// 遍历字符串，根据 start end 获取子串，并判断当前值是否在子串中已经存在
// 记录子串长度 和 曾经的最大长度 Max 对比
// 不存在 end + 1，存在 start =
