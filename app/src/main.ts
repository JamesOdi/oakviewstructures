import '@/theme/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { IonicVue } from '@ionic/vue';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
const app = createApp(App).use(pinia).use(router).use(IonicVue);
router.afterEach((to) => {
  const title = to.meta.title;
  if (title) {
    document.title = title.toString();
  } else {
    document.title = import.meta.env.VITE_COMPANY_NAME;
  }
});

router.isReady().then(() => {
  app.mount('#app');
});
