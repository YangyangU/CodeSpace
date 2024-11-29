Function.prototype.myApply = function(ctx,args){
    const fn = this
    ctx.fn = fn;
    let res = ctx.fn(...args);
    delete ctx.fn; 
    return res;
}
// 测试


Function.prototype.myApply2 = function(ctx,args){
    const fn = this
    ctx.fn = fn
    let res = ctx.fn(...args)
    delete ctx.fn
    return res
}

Function.prototype.myApply3 = function(ctx,args){
    const fn = this
    ctx.fn = fn
    const res = ctx.fn(...args)
    delete ctx.fn
    return res
}
function sum(a,b){
    return a+b;
}
console.log(sum.myApply2({name:'zs'},[1,2]));