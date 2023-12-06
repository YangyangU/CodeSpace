import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/'
    component:() => import { createRouter, createWebHistory } from '
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
