import AboutPage from '@/views/AboutPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import HomePage from '@/views/HomePage.vue';
import ServicesPage from '@/views/ServicesPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
  ],
});

export default router;
