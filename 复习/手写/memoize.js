function memoize(fn){
  let cache = {}
  return function (...args){
    let key = JSON.stringify(args)
    if(!cache[key]){
      cache[key] = fn.apply(this,args)
    }
    return cache[key]
  }
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // 3，从缓存中获取结果，而不是重新计算
