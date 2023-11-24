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
// js不严格 编译阶段
try{
  add();
}catch(err){
    console.log('error');
}
// console.log('1');


