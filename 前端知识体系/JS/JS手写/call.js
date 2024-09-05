Function.prototype.myCall = function(ctx,...args){
    const fn = this
    ctx.fn = fn
    let res = ctx.fn(...args)
    delete ctx.fx
    return res
}

function sum(a,b){
    return a+b
}
console.log(sum.myCall({name:'zs'},1,2))