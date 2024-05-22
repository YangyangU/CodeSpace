function add(a, b, c) {
  console.log(a + b + c);
}

// 柯里化示例函数

function curry(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

const curriedAdd = curry(add);

curriedAdd(1,2)(3)