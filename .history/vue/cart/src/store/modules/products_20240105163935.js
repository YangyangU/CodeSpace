import shop from '../../api/shop'
//单纯的思想源
const state = {
    all:[]
}
const getters = {

}

const actions = {
    getAllProducts({commit}){
        shop.getProducts(products => {
            commit('setProducts', products);
        })
    }
}
//规则 同步
const mutations = {
    setProduct(state,products) {
        state.all = products
    }
}


//store.cart.state
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}