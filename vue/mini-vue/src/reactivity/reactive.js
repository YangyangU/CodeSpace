import { mutableHandlers } from "./baseHandlers.js";

//保存被代理（被变成响应式）过的对象
export const reactiveMap = new WeakMap()//弱引用，对内存的回收更加友好


export function reactive(target) {//将target变成响应式
    return createRectiveObject(target, reactiveMap, mutableHandlers)
}
    

export function createRectiveObject(target, proxyMap, proxyHandlers) { //创建响应式的函数
    //不是对象不做响应式
    //判断target是不是引用类型
    if(typeof target !== 'object' || target === null){//不是对象就不给操作
        return target
    }

    //该对象是否已经被代理过（已经是响应式对象）
    const existingProxy = proxyMap.get(target);
    if(existingProxy){
        return existingProxy
    }
    //不走if，执行响应式（将target处理成响应式）
    const proxy = new Proxy(target, proxyHandlers) //第二个参数的作用：当target被读取值。设置值，判断值等等操作是会触发的函数
    //拿到代理后的对象proxy

    // Proxy第一个参数只能接收对象类型，所以需要ref

    //往rectiveMap中增加 proxy，把已经代理过的对象缓存起来
    proxyMap.set(target, proxy)

    return proxy
}