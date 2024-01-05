
const state = {
    items:[]
}
const getters = {

}

const actions = {
    addProductToCart({commit},product) {
        if(product.inventory>0){
            
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