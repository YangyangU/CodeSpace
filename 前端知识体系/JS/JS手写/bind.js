Function.prototype.myBind = function (ctx, ...args) {
    const fn = this
    return function (...args2) {
        return fn.apply(ctx, args.concat(args2))
    }
}

function sum(a, b) {
    return a + b
}
console.log(sum.myBind({ name: 'zs' }, 1, 2))
console.log(sum.myBind({ name: 'zs' }, 1, 2)());
