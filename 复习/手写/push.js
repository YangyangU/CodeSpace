Array.prototype.myPush = function() {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this;
}

let arr = [1,2,3]
arr.myPush(4,5,6)

console.log(arr);