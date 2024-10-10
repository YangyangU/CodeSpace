
Array.prototype.myFilter = function (cb) {
  let res = []
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i])
    }
  }
  return res
};
console.log([1, 2, 3, 4, 5].myFilter((item, i, arr) => item > 3));