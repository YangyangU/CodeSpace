import { createStore,createLogger }  from 'vuex'

//
export default createStore({
    module:{
        cart,
        products
    },
    Plugins:[createLogger()]
})