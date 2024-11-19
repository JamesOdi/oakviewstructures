<script setup lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonLabel,
  IonText,
  IonIcon,
  IonMenuButton,
  IonButtons,
  IonTitle,
  IonPage,
  IonMenu,
  IonItem,
  IonContent,
} from '@ionic/vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  callOutline,
  chevronForwardOutline,
  ellipse,
  locationOutline,
  mailUnreadOutline,
  menuOutline,
} from 'ionicons/icons'
import HyperLinkText from '@/components/HyperLinkText.vue'
import type { ContactInfoLink, HeaderLink } from '@/utils/types-interfaces'
import MainMenu from '@/components/MainMenu.vue'
import MainToolbar from '@/components/MainToolbar.vue'

const router = useRouter()

const currentRoute = computed(() => router.currentRoute.value.name?.toString() || '')

const contactInfoLinks: ContactInfoLink[] = [
  {
    icon: locationOutline,
    title: 'Location',
    label: '23 Abuja',
  },
  {
    icon: callOutline,
    title: 'Call Us',
    label: '+234 801 234 5678',
    href: 'tel:+2348012345678',
  },
  {
    icon: mailUnreadOutline,
    title: 'Mail Us',
    label: 'support@example.org',
    href: 'mailto:support@example.org',
  },
]

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
  <main-menu :header-links="headerLinks" :contact-info-links="contactInfoLinks"></main-menu>
  <ion-page id="main-content" style="width: 100%; overflow-x: hidden">
    <main-toolbar :header-links="headerLinks" :current-route="currentRoute"></main-toolbar>

    <ion-grid style="padding: 0px; margin-top: 70px">
      <ion-row style="padding: 0px">
        <ion-col style="padding: 0px">
          <slot></slot>
        </ion-col>
      </ion-row>
    </ion-grid>

    <!-- Bottom padding -->
    <div style="padding-bottom: 200px"></div>

    <ion-footer style="display: flex; flex-direction: column; align-items: center">
      <ion-row style="display: flex; max-width: 1024px">
        <!-- First column -->
        <ion-col class="ion-padding" size="12" size-lg="7">
          <ion-row>
            <ion-col>
              <img src="/assets/oakview_logo.png" alt="Oakview" style="width: 80px; height: 80px" />
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-label
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                Ipsum.</ion-label
              >
            </ion-col>
          </ion-row>
        </ion-col>

        <ion-col class="ion-padding" size="12" size-lg="3">
          <ion-row style="height: 80px; align-items: center">
            <ion-col>
              <h4>Contact Info</h4>
            </ion-col>
          </ion-row>
          <hyper-link-text
            v-for="contactInfo of contactInfoLinks"
            :route="contactInfo.href"
            :label="contactInfo.label"
            :icon="contactInfo.icon"
          ></hyper-link-text>
        </ion-col>

        <ion-col class="ion-padding" size="12" size-lg="2">
          <ion-row style="height: 80px; align-items: center">
            <ion-col>
              <h4>Quick Links</h4>
            </ion-col>
          </ion-row>

          <hyper-link-text
            v-for="routerLink of headerLinks"
            :route="routerLink.name"
            :active="currentRoute === routerLink.name"
            :label="routerLink.title"
            :icon="chevronForwardOutline"
          ></hyper-link-text>
        </ion-col>
      </ion-row>
      <ion-row style="background-color: var(--ion-primary); width: 100%">
        <ion-col style="justify-items: center">
          <ion-row class="toolbar-main" style="display: flex">
            <ion-col>
              <ion-text style="color: white">
                &copy; 2022 Oakview. Designed by James Odike
              </ion-text>
            </ion-col>
            <ion-col v-for="routerLink of headerLinks" size="auto" class="toolbar-link">
              <hyper-link-text
                :route="routerLink.name"
                :label="routerLink.title"
                :icon="ellipse"
                color="white"
                size="10px"
              ></hyper-link-text>
            </ion-col>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-footer>
  </ion-page>
</template>

<style scoped>
.active {
  color: var(--ion-secondary);
  font-weight: bold;
  font-size: medium;
  text-decoration: none;
}

.toolbar-main {
  width: 1024px;
  align-items: center;
}

.footer-bottom {
  background-color: var(--ion-primary);
  width: 100%;
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
