//modules/moduleA.js
const moduleA = {
    namespaced: true,
    state: () => ({
        msg: 'hello moduleA'
    }),
    mutations: {
        changeMsg(state, data) {
            state.msg = data
        }
    },
    actions: {},
    getters: {}
}
export default moduleA