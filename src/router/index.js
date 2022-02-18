import { createRouter, createWebHistory } from 'vue-router'
import TitlePage from '@/views/TitlePage'
import TransferPage from '@/views/TransferPage.vue'

const routes = [
  {
    path: '/',
    component: TitlePage
  },
  {
    path: '/transfer',
    component: TransferPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
