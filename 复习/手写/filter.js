
Array.prototype.myarray = function (cb) {
  // TODO：待补充代码
  let res = []
  let arr = this
  for (let i = 0; i < this.length; i++) {
    if (cb(arr[i],i,arr)) {
      res.push(this[i])
    }
  }
  return res
};
console.log([1, 2, 3, 4, 5].myarray((item, i, arr) => {
  return item > 3
}));