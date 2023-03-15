import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetView from '../views/ProjetView.vue'
import ContactView from '../views/ContactView.vue'

import PlumeView from '../views/Projet/PlumeView.vue'

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
  ]
})

export default router
