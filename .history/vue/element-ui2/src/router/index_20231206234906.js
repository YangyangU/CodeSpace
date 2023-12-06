import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    component:() => import ('@/views/Login.vue'),
  },
  {
    path:'/home',//:路由认为斜杠后带参数  /:user
    component:() => import ('@/views/Home.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
