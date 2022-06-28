import { createRouter, createWebHistory } from 'vue-router'
import Graveyard from '@/views/Graveyard.vue'
import Home from '../views/Home.vue'
import JoinRoom from '../views/JoinRoom.vue'
import VsMode from '../views/VsMode.vue'
import Profile from '../views/Profile.vue'
import WildWest from '../views/WildWest.vue'
import Sakura from '../views/Sakura.vue'
import FinalBoss from '../views/FinalBoss.vue'
import Spacetrip from '../views/Spacetrip.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/joinRoom',
      name: 'joinRoom',
      component: JoinRoom
    },
    {
      path: '/vsMode',
      name: 'vsMode',
      component: VsMode,
      props: true
    },
    {
      path: '/wildWest',
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
