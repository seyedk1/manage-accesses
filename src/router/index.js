import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { AuthGuards } from './authGuards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
AuthGuards.setInstanceRouter(router)
AuthGuards.registerAuthGuard()

export default router
