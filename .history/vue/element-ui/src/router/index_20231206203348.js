import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    component:() => import ('@/views/Login.vue'),
  },
  {
    path:'/home',
    component:() => import ('@/views/Login.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
