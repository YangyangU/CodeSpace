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
function memoize(){
    return function(){
        
    }
}
const memoizedAdd = memoize(add);
memoizedAdd(1,2)
memoizedAdd(1,2)

// js不严格 编译阶段
// try{
//   add();
// }catch(err){
//     console.log('error');
// }

// try{
//     console.log(add(1,2));
// }catch(err){
//     console.log('error');
// }



