const curry1 = (fn) => {
    return function curried(...args) {
        if (fn.length > args.length) {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs)
            }
        } else {
            return fn.apply(this, args)
        }
    }
}

const curry2 = (fn) => {
    return function curried(...args) {
        if (fn.length > args.length) {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs)
            }
        } else {
            return fn.apply(this, args)
        }
    }
}


const curry3 = (fn) => {
    return function curried(...args) {
        if (fn.length > args.length) {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs)
            }
        } else {
            return fn.apply(this, args)
        }
    }
}

const add = (a, b, c) => a + b + c;

// 使用 curry1 对 add 进行柯里化
const curriedAdd = curry3(add);

// 调用柯里化函数
const result1 = curriedAdd(1)(2)(3); // 结果为 6
const result2 = curriedAdd(1, 2)(3); // 结果为 6
const result3 = curriedAdd(1, 2, 3); // 结果为 6

console.log(result1); // 输出: 6
console.log(result2); // 输出: 6
console.log(result3); // 输出: 6