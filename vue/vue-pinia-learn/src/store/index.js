import { defineStore } from 'pinia'

export const store = defineStore('store', {
    state: () => {
        return {
            msg: 'hello pinia',
            name: 'yangyangyang'
        }
    },
    actions: {
        changeMsg(data) {
            this.msg = data
        }
    },
    getters: {},
})


export const useModuleA = defineStore('storeA', {
    state: () => {
        return {
            msg: 'hello pinia',
        }
    },
    actions: {
        changeMsg(data) {
            this.msg = data
        }
    },
    getters: {}
});

export const useModuleB = defineStore('storeB', {
    state: () => ({ /* ... */ }),
    actions: { /* ... */ },
    getters: { /* ... */ }
});