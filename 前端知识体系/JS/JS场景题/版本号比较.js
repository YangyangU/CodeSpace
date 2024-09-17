const compareVersion = (v1, v2) => {
    const arr1 = v1.split('.');
    const arr2 = v2.split('.');
    const len = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < len; i++) {
        const num1 = arr1[i] ? Number(arr1[i]) : 0;
        const num2 = arr2[i] ? Number(arr2[i]) : 0;
        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }
}

console.log(compareVersion('1.0.0', '1.0.1'));
