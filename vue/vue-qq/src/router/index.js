import { createWebHistory,createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import HomeBody from '../views/HomeChild/Home-Body.vue'
import HomeContact from '../views/HomeChild/Home-Contact.vue'
import HomeZore from '../views/HomeChild/Home-Zore.vue'
import Self from '../views/Self.vue'
import About from '../views/About.vue'


const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home',
                redirect:'/home/homeBody'
            },

            {
            path:'homeBody',
            component:HomeBody
            },

            {
                path:'homeContact',
                component:HomeContact
            },
            {
                path:'homeZore',
                component:HomeZore  
            }

        ]
    },
    {
        path:'/self',
        component:Self,
    },
    {
        path:'/about',
        component:About
    } 
]
//定义一个变量调用createRouter
const router = createRouter({
    history:createWebHistory(),//路由模式
    // routes:routes
    routes
})

//抛出路由，相互引入
export default router