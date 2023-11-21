import { createRouter, createWebHistory } from 'vue-router'
import ElementsView from '@/views/ElementsView.vue'
import ConsoleView from '@/views/ConsoleView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/elements',
      name: 'elements',
      component: ElementsView
    },
    {
      path: '/console',
      name: 'console',
      component: ConsoleView
    }
  ]
})

export default router
