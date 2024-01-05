import { createStore,createLogger }  from 'vuex'
import cart from './module/cart'
import products from './module/products'
//单一状态树
export default createStore({
    module:{
        cart,
        products
    },
    Plugins:[createLogger()]
})