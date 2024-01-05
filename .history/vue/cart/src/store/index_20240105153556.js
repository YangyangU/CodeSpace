import { createStore,createLogger }  from 'vuex'

//
export default ({
    module:{
        cart,
        products
    },
    Plugins:[createLogger()]
})