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
        },
        addRouter(router){
            // 动态添加路由
            const menu = JSON.parse(localStorage.getItem('menu'))
            this.menuList = menu
            let routerList = []
            menu.forEach(item => {
                if(item.children){
                    item.children = item.children.map(item => {
                        item.component = () => import(`@/views/${item.url}/index.vue`)
                        return item
                    })
                    routerList.push(...item.children)
                }else{
                    item.component = () => import(`@/views/${item.url}/index.vue`)
                    routerList.push(item)
                }
            })
            console.log(routerList);
            routerList.forEach(item => {
                router.addRoute('main', item)
            })
        }
    },
})