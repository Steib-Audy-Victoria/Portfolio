import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetView from '../views/ProjetView.vue'
import ContactView from '../views/ContactView.vue'

import PlumeView from '../views/Projet/PlumeView.vue'
import JPOView from '../views/Projet/JPOView.vue'
import TikTakView from '../views/Projet/TikTakView.vue'

import Page404 from '../views/Page404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/Projet', name: 'Projet', component: ProjetView },
    { path: '/Contact', name: 'Contact', component: ContactView },

    { path: '/Plume', name: 'Plume', component: PlumeView },
    { path: '/JPO', name: 'JPO', component: JPOView },
    { path: '/TikTak', name: 'TikTak', component: TikTakView },

    {
      path: '/:pathMatch(.*)*',
      name: 'page404',
      component: Page404
    },
  ]
})

export default router
