import Graveyard from '@/views/Graveyard.vue'
import { createRouter, createWebHistory } from 'vue-router'
import WildWest from '../views/WildWest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'west',
      component: WildWest
    },
    {
      path: '/graveyard',
      name: 'grave',
      component: Graveyard
    }
  ]
})

export default router
