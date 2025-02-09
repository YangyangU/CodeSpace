// console.log(a);
// var a = 1
// function a() {
// }
// console.log(a);

// new Promise((resolve) => {
//     setInterval(() => {
//         resolve();
//         console.log(1);
//     },100)
// }).then(() => {
//     console.log(2);
// })

//循环处理异步请求
// for of

// 0.1 + 0.2 === 0.3 // false 

//搜索注意事项

//长列表渲染

// 最长无重复字符子串
function fn(s) {
    // 哈希表记录字符最后一次出现的位置
    const charIndexMap = {};
    let maxLength = 0;
    let maxSubstring = "";
    let left = 0; // 滑动窗口的左边界

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // 如果字符已经出现过，并且在当前窗口内，移动左边界
        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= left) {
            left = charIndexMap[currentChar] + 1;
        }

        // 更新字符的最后出现位置
        charIndexMap[currentChar] = right;

        // 计算当前窗口的长度
        const currentLength = right - left + 1;

        // 如果当前窗口更长，更新最大长度和子串
        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxSubstring = s.slice(left, right + 1);
        }
    }
    return maxSubstring;
}
console.log(fn("aabcadefgaggggggaws")); // 7