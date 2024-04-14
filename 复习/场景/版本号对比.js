function versionCompare(version1, version2) {
    const v1Arr = version1.split('.');
    const v2Arr = version2.split('.');

    const maxLen = Math.max(v1Arr.length, v2Arr.length);
    while(v1Arr.length < maxLen){
        v1Arr.push('0');
    }
    while(v2Arr.length < maxLen){
        v2Arr.push('0');
    }
    for (let i = 0; i < maxLen; i++) {
        // const num1 = parseInt(v1Arr[i]);
        // const num2 = parseInt(v2Arr[i]);
        // const num1 = Number(v1Arr[i]);
        // const num2 = Number(v2Arr[i]);
        const num1 = v1Arr[i];
        const num2 = v2Arr[i];
        
        if (num1 < num2) {
            return -1;
        }
        else if (num1 > num2) {
            return 1;
        }
    }
    return 0;
}

// 示例用法
const version1 = '1.1a.3.5';
const version2 = '1.2a.4';
const result = versionCompare(version1, version2);
console.log(result); // 输出 -1