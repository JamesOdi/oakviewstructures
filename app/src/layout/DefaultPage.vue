<script setup lang="ts">
import { IonHeader, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/vue'
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const currentRoute = computed(() => router.currentRoute.value.name)

type HeaderLink = {
  title: string
  name: string
}

const headerLinks: HeaderLink[] = [
  {
    title: 'Home',
    name: 'home',
  },
  {
    title: 'About',
    name: 'about',
  },
  {
    title: 'Services',
    name: 'services',
  },
  {
    title: 'Contact',
    name: 'contact',
  },
]
</script>

<template>
  <ion-header>
    <ion-toolbar>
      <div style="display: flex; justify-content: center">
        <ion-row class="toolbar-main">
          <ion-col>
            <img src="/assets/oakview_logo.png" alt="oakview" style="width: 80px; height: 80px" />
          </ion-col>

          <ion-col
            v-for="(headerLink, idx) of headerLinks"
            :key="idx"
            size="auto"
            style="padding: 15px"
          >
            <RouterLink :to="headerLink.name" :class="{ active: currentRoute === headerLink.name }">
              {{ headerLink.title }}
            </RouterLink>
          </ion-col>
        </ion-row>
      </div>
    </ion-toolbar>
  </ion-header>
  <ion-grid>
    <ion-row>
      <ion-col>
        <slot></slot>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<style scoped>
.active {
  color: var(--ion-primary);
  font-weight: bold;
  font-size: medium;
  text-decoration: none;
}

.toolbar-main {
  width: 1024px;
  align-items: center;
}

@media (max-width: 768px) {
  .toolbar-main {
    width: 100%;
  }
}
</style>
