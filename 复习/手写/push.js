Array.prototype.myPush = function() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(this.length);
        this[this.length] = arguments[i];
    }
    return this.length;
}

let arr = [1,2,3]
arr.myPush(4,5,6)

console.log(arr);