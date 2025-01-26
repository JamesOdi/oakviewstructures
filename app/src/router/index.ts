import { companyName } from '@/utils/constants';
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
      meta: { title: `${companyName} - Home` },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: { title: `${companyName} - About` },
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage,
      meta: { title: `${companyName} - Services` },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
      meta: { title: `${companyName} - Contact` },
    },
  ],
});

export default router;
