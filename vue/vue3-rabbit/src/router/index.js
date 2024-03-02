import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: Layout,
      children:[
        {
          path:'',//置空跟父组件同时渲染，默认二级路由
          component: () => import('@/views/Home/index.vue')
        },
        {
          path:'/category/:id',
          component: () => import('@/views/Category/index.vue')
        },
        {
          path:'/detail/:id',
          component: () => import('@/views/Detail/index.vue')
        },
        {
          path:'/cartlist',
          component: () => import('@/views/CartList/index.vue')
        }
      ]
    },
    {
      path:'/login',
      component: Login
    }
  ]
})

export default router
