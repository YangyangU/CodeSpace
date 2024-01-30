//打造router源码

import RouterLink from './RouterLink.vue'

const ROUTER_KEY = '_router_'

function useRouter() {
    return 
}

function createRouter(options){
    return new Router(options)
}

function createWebHashHistory(){
    function bindEvents(fn){
        window.addEventListener('hashchange', fn)
    }
    return {
        bindEvents,
        url:window.location.hash.slice(1)||'/'
    }
}

class Router{
    constructor(options){
        this.history = options.history
        this.routes = options.routes
        this.current = this.history.url //当前路径

        this.history.bindEvents(()=>{
            this.current = window.location.hash.slice(1)
        })
    }
    install(app){//所以能够被vue给use掉的，内部都一定要具备install方法
        console.log(app);
        app.provide(ROUTER_KEY,this)//类里面的this都指向这个类
        //注册全局组件router-link
        app.component('router-link',RouterLink)
    }
}

export {
    createRouter,
    createWebHashHistory,
    useRouter
}