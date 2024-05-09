import { defineStore } from "pinia";

export const useStore = defineStore("store", {
    state(){
        return {
            isCollapse: false,
            tabList: [{
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 'HomeFilled',
                url: 'Home'
            },],
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
            if(menu === null){
                return
            }
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
            // console.log(routerList);
            routerList.forEach(item => {
                router.addRoute('main', item)
            })
        },

        addTabList(item){
            let home = {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 'HomeFilled',
                url: 'Home'
            }
            let flag = this.tabList.some(item => item.name === item.name)
            if(item.name === home.name){
                return this.tabList = [home]
            }
            if(!item.children){
                if(!flag){
                    this.tabList.push(item)
                    return 
                }
                return this.tabList = [home, item]
            }
        },
    },
})