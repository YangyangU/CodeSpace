const curry = (fn) => {
    const len = fn.length
    return function curried(...args) {
        if (args.length >= len) {
            return fn(...args)
        } else {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs)
            };
        }
    }
}