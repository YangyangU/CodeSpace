import shop from '../../api/shop'
const state = {
    all:[]
}
const getters = {

}

const actions = {
    getAllProducts({commit})
}
//规则 同步
const mutations = {
    setProduct(state,products) {
        state.all = products
    }
}


//store.cart.state
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}