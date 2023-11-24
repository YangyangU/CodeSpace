//永远不要相信用户的输入
function add(a,b) {
    //代表参数
    //argument 代表所有参数
    if(arguments.length !== 2){
        throw new Error('参数错误')
    }
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('请输入整数')
    }
    return a + b;
}

//闭包应用
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
            fn()
        }
    }
}
//记忆功能
const memoizedAdd = memoize(add);
memoizedAdd(1,2)
memoizedAdd(1,2)

// js不严格 编译阶段
// try{
//   add();
// }catch(err){
//     console.log('error');
// }

try{
    console.log(add(1,2));
}catch(err){
    console.log('error');
}



