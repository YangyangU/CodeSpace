import { track } from "./effect.js";
import { trigger } from "./effect.js";

const get = createGetter()
const set = createSetter()
function createGetter(){
    return function get(target, key, receiver){
        // console.log('target对象被读取');
        const res = Reflect.get(target, key, receiver)// return target[key]
        //这个属性究竟还有哪些地方用到了(副作用函数收集,computed,watch...)  依赖收集
        track(target, key)

        return res
    }
}

function createSetter(){
    return function set(target, key, value, receiver){
        // console.log('target对象被修改' , key, value);
        const res = Reflect.set(target, key, value, receiver)// target[key] = value //把值赋回去
        //需要记录下来此时是哪一个key的值变更了,再去通知其他依赖该值的函数生效. 更新浏览器的视图（响应式）
        //触发被修改的属性身上的副作用函数  依赖收集(被修改的key在哪些地方被用到了) 发布订阅

        trigger(target, key)

        return res

    }
}

export const mutableHandlers = {
    get,
    set
}