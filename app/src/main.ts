import '@/theme/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { IonicVue } from '@ionic/vue'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App).use(pinia).use(router).use(IonicVue)
router.isReady().then(() => {
  app.mount('#app')
})
