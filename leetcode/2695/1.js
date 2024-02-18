var ArrayWrapper = function(nums) {
    this.arr = nums
};


ArrayWrapper.prototype.valueOf = function() {
    return this.arr.reduce((a,b)=>a+b,0)
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.arr.toString()}]`
}
//或者
// ArrayWrapper.prototype.toString = function() {
//     return `[${this.arr.join()}]`
// }
