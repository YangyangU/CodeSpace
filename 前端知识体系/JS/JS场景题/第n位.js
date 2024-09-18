//从0-n的字符串打印第n位
function printNth(n) {
    let str = '';
    let now = 1
    while (str.length <= n) {
        str += now;
        now++
    }
    return str[n - 1]
}

console.log(printNth(2));
