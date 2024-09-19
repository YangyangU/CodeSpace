const curry = (fn, ...args) => {
    return args.length >= fn.length ? fn(...args) : (...nextArgs) => curry(fn, ...args, ...nextArgs)
}

// 测试
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));