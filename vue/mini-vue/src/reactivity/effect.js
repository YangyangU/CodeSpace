//副作用收集相关代码

const targetMap = new WeakMap();
let activeEffect = null //得是个副作用函数

export function effect(fn, options = {}) {
    const effectFn = () =>{
        try{
            activeEffect = effectFn
            return fn()
        }finally{
            activeEffect = null  
        }
    }
    if(!options.lazy){
        effectFn();//如果lazy为false会立即执行一次
    }
    effectFn.scheduler = options.scheduler
    return effectFn;//把函数体传出来
}


//为某个属性添加 effect
export function track(target, key){
    // targetMap = { //存成这样
    //     target: {
    //         key: [effect1,effect2,effect3]
    //     }
    // }
    let depsMap = targetMap.get(target);
    if(!depsMap){ //初次读取到值 收集effect
        depsMap = new Map()
        targetMap.set(target, depsMap);
    }
    let deps = depsMap.get(key);
    if(!deps){ //该属性还未添加过effect
        deps = new Set()
    }
    if(!deps.has(activeEffect) && activeEffect){ 
        //存入一个effect函数
        deps.add(activeEffect);
    }
    depsMap.set(key,deps);

}


//触发某个属性effect
export function trigger (target, key){
    const depsMap = targetMap.get(target);
    if(!depsMap){//当前对象中所有的key都没有副作用函数(从来没有被使用过)
        return
    }
    const deps = depsMap.get(key)
    if(!deps){//这个属性没有依赖
        return
    }
    deps.forEach(effectFn => {
        effectFn()//将该属性上的所有副作用函数全部触发
    });
}