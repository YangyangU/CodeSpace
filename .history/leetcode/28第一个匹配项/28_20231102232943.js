haystack = "sadbutsad", needle = "sad"

var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0;
    }
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i;
        }
    }
    return -1;
};

console.log(strStr(haystack, needle));