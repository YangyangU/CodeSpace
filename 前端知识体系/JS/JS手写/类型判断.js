const getType = (value) => {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

console.log(getType(1));
console.log(getType('1'));
console.log(getType(getType));
console.log(getType(null));
console.log(getType([]));
