import Graveyard from '@/views/Graveyard.vue'
import { createRouter, createWebHistory } from 'vue-router'
import WildWest from '../views/WildWest.vue'
import Sakura from '../views/Sakura.vue'
import FinalBoss from '../views/FinalBoss.vue'
import Spacetrip from '../views/Spacetrip.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'west',
      component: WildWest
    },
    {
      path: '/spacetrip',
      name: 'spacetrip',
      component: Spacetrip
    },
    {
      path: '/graveyard',
      name: 'grave',
      component: Graveyard
    },
    {
      path: '/sakura',
      name: 'sakura',
      component: Sakura
    },
    {
      path: '/finalBoss',
      name: 'finalboss',
      component: FinalBoss
    }
  ]
})

export default router
