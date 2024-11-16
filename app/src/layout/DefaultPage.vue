<script setup lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonLabel,
  IonIcon,
  IonItem,
  IonText,
} from '@ionic/vue'
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import {
  callOutline,
  chevronForwardOutline,
  locationOutline,
  mailUnreadOutline,
} from 'ionicons/icons'
const router = useRouter()

const currentRoute = computed(() => router.currentRoute.value.name)

type HeaderLink = {
  title: string
  name: string
}

type ContactInfoLink = {
  icon: string
  label: string
  href?: string
}

const contactInfoLinks: ContactInfoLink[] = [
  {
    icon: locationOutline,
    label: '23 Abuja',
  },
  {
    icon: callOutline,
    label: '+234 801 234 5678',
    href: 'tel:+2348012345678',
  },
  {
    icon: mailUnreadOutline,
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
  <ion-header>
    <ion-toolbar>
      <div style="display: flex; justify-content: center">
        <ion-row class="toolbar-main">
          <ion-col>
            <img src="/assets/oakview_logo.png" alt="Oakview" style="width: 80px; height: 80px" />
          </ion-col>

          <ion-col
            v-for="(headerLink, idx) of headerLinks"
            :key="idx"
            size="auto"
            style="padding: 20px"
          >
            <RouterLink
              :to="headerLink.name"
              :class="{ active: currentRoute === headerLink.name }"
              style="font-weight: bold"
            >
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

  <ion-footer style="display: flex; justify-content: center">
    <ion-row style="display: flex; max-width: 1024px">
      <!-- First column -->
      <ion-col class="ion-padding">
        <ion-row>
          <ion-col>
            <img src="/assets/oakview_logo.png" alt="Oakview" style="width: 100px; height: 100px" />
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

      <ion-col class="ion-padding">
        <ion-row style="height: 100px; align-items: center">
          <ion-col>
            <h4>Contact Info</h4>
          </ion-col>
        </ion-row>
        <ion-row v-for="contactInfo of contactInfoLinks">
          <ion-col size="auto">
            <ion-item lines="none">
              <ion-icon :icon="contactInfo.icon" slot="start" style="color: var(--ion-secondary)">
              </ion-icon>
              <a v-if="contactInfo.href" :href="contactInfo.href" style="padding-left: 10px">
                {{ contactInfo.label }}
              </a>
              <ion-text v-else style="padding-left: 10px">
                {{ contactInfo.label }}
              </ion-text>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-col>

      <ion-col class="ion-padding">
        <ion-row style="height: 100px; align-items: center">
          <h4>Quick Links</h4>
        </ion-row>

        <ion-row v-for="routerLink of headerLinks">
          <ion-col size="auto">
            <ion-item lines="none">
              <ion-icon
                :icon="chevronForwardOutline"
                slot="start"
                style="color: var(--ion-secondary)"
              >
              </ion-icon>
              <RouterLink
                :to="routerLink.name"
                :class="{ active: currentRoute === routerLink.name }"
                style="font-weight: bold"
              >
                {{ routerLink.title }}
              </RouterLink>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-col>
    </ion-row>
  </ion-footer>
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

@media (max-width: 768px) {
  .toolbar-main {
    width: 100%;
  }
}
</style>
