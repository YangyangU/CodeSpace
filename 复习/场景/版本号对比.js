function versionCompare(version1, version2) {
    const v1Arr = version1.split('.');
    const v2Arr = version2.split('.');
    const maxLen = Math.max(v1Arr.length, v2Arr.length);
    for (let i = 0; i < maxLen; i++) {
        const v1 = i < v1Arr.length ? parseInt(v1Arr[i]) : 0;
        const v2 = i < v2Arr.length ? parseInt(v2Arr[i]) : 0;
        if (v1 < v2) {
            return -1;
        } else if (v1 > v2) {
            return 1;
        }
    }
    return 0;
}

// 示例用法
const version1 = '0.3.5';
const version2 = '1.2.4';
const result = versionCompare(version1, version2);
console.log(result); // 输出 -1