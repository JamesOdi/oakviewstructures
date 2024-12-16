import AboutPage from '@/views/AboutPage.vue'
import HomeViewPage from '@/views/HomeViewPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/services',
      name: 'services',
      component: AboutPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: AboutPage,
    },
  ],
})

export default router
