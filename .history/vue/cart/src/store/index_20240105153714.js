import { createStore,createLogger }  from 'vuex'

//返回一个store单例
export default createStore({
    module:{
        cart,
        products
    },
    Plugins:[createLogger()]
})