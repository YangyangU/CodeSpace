
const state = {
    items:[]
}
const getters = {

}

const actions = {
    addProductToCart({commit},product) {
        if(product.inventory>0){
            const cartItem = state.items.find(item => item.id === product.id)
            if(!cartItem){
                commit('addProductToCart',{id: product.id})
            }else{
                commit('incrementItemQuantity',cartItem)
            }
        }
    }
}

const mutations = {
    
}


//store.cart.state
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}