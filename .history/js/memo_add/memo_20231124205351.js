// 记忆函数，闭包的高级功能
function memoize(fn){
    if(typeof fn !== 'function'){
        throw new Error('请传入函数')
    }
    var cache = {} // key:value 0(1) 空间换时间
    return function(){
        //唯一性 21,2 22,1
        var key = arguments.length + Array.prototype.join.call(arguments,',')  //arguments是类数组，没有join方法，把数组原型的join方法借用
        console.log(key);
        if(key in cache){
            return cache[key]
        }else{
            return cache[key] = fn.apply(this, arguments)
        }
    }
}

// commonjs 模块化方案
module.exports = memoize;