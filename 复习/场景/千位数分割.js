function formatNumber(num) {
    let numLeft = num.toString().split(".")[0];
    const numRight = num.toString().split(".")[1];
    return `${numLeft.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${numRight}`;
}

console.log(formatNumber(-21234567890.1234567890)); // "-21,234,567,890.1234567890"
