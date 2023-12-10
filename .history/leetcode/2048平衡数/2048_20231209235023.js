function isBalance(x) {
    const count = new Array(10).fill(0);
    while (x > 0) {
        count[x % 10]++;
        x = Math.floor(x / 10);
    }
    for (let d = 0; d < 10; d++) {
        if (count[d] > 0 && count[d] != d) {
            return false;
        }
    }
    return true;
}

var nextBeautifulNumber = function(n) {
    for (let i = n + 1; i <= 1224444; i++) {
        if (isBalance(i)) {
            return i;
        }
    }
};
