<script setup lang="ts">
import type { HeaderLink } from '@/utils/types-interfaces';
import { menuOutline } from 'ionicons/icons';
import { IonCol, IonRow, IonMenuButton, IonIcon, IonToolbar, IonHeader } from '@ionic/vue';
import HyperLinkText from './HyperLinkText.vue';
import { useRouter } from 'vue-router';
import AppLogoImage from '@/components/AppLogoImage.vue';

const router = useRouter();

defineProps<{
  headerLinks: HeaderLink[];
}>();
</script>

<template>
  <ion-header style="padding: 0px; position: fixed; top: 0; left: 0; z-index: 50">
    <ion-toolbar style="padding: 0px">
      <div style="display: flex; justify-content: center">
        <ion-row class="toolbar-main">
          <ion-col>
            <app-logo-image></app-logo-image>
          </ion-col>

          <ion-col
            v-for="(headerLink, idx) of headerLinks"
            :key="idx"
            size="auto"
            style="padding: 10px"
            class="toolbar-link"
          >
            <hyper-link-text
              :route="{ name: headerLink.name }"
              :active="router.currentRoute.value.name === headerLink.name"
              :label="headerLink.title"
            ></hyper-link-text>
          </ion-col>

          <ion-menu-button class="menu-toggle">
            <ion-icon :icon="menuOutline"></ion-icon>
          </ion-menu-button>
        </ion-row>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped>
.toolbar-main {
  width: 1024px;
  align-items: center;
}

.toolbar-link {
  display: block;
}

.menu-toggle {
  display: none;
}

@media (max-width: 1024px) {
  .toolbar-main {
    width: 100%;
  }

  .toolbar-link {
    display: none;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
