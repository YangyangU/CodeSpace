import shop from '../../api/shop'
const state = {
    all:[]
}
const getters = {

}

const actions = {

}

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