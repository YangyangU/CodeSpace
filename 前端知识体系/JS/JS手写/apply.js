Function.prototype.myApply = function(ctx,args){
    const fn = this
    ctx.fn = fn;
    let res = ctx.fn(...args);
    delete ctx.fn; 
    return res;
}
// 测试
function sum(a,b){
    return a+b;
}
console.log(sum.myApply({name:'zs'},[1,2]));