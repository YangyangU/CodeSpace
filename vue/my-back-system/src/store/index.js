import { defineStore } from "pinia";

export const useStore = defineStore("store", {
    state(){
        return {
            isCollapse: false,
            userInfo: {},
            menuList: [],
        }
    },
    actions: {
        changeCollapse() {
            this.isCollapse = !this.isCollapse
        },
        getMenuList(list) {
            this.menuList = list
            localStorage.setItem('menu', JSON.stringify(list))
        }
    },
})