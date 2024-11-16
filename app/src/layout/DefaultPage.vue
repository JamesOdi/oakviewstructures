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

const router = useRouter()

const currentRoute = computed(() => router.currentRoute.value.name)

type HeaderLink = {
  title: string
  name: string
}

type ContactInfoLink = {
  icon: string
  label: string
  title: string
  href?: string
}

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
  <ion-menu side="end" content-id="main-content">
    <ion-row>
      <ion-col>
        <ion-row>
          <ion-col>
            <ion-item v-for="link of headerLinks">
              <hyper-link-text :route="link.name" :label="link.title"></hyper-link-text>
            </ion-item>
          </ion-col>
        </ion-row>

        <ion-row v-for="contactInfo of contactInfoLinks">
          <ion-col>
            <ion-item lines="none">
              <ion-icon
                :icon="contactInfo.icon"
                slot="start"
                style="color: var(--ion-secondary)"
              ></ion-icon>
              <ion-grid style="padding-left: 15px">
                <ion-row style="padding: 0">
                  <ion-col style="padding: 0">
                    <h3>{{ contactInfo.title }}</h3>
                  </ion-col>
                </ion-row>
                <ion-row style="padding: 0">
                  <ion-col style="padding: 0">
                    <a :href="contactInfo.href">{{ contactInfo.label }}</a>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-col>
    </ion-row>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <div style="display: flex; justify-content: center">
          <ion-row class="toolbar-main">
            <ion-col>
              <img src="/assets/oakview_logo.png" alt="Oakview" style="width: 70px; height: 70px" />
            </ion-col>

            <ion-col
              v-for="(headerLink, idx) of headerLinks"
              :key="idx"
              size="auto"
              style="padding: 10px"
              class="toolbar-link"
            >
              <hyper-link-text
                :route="headerLink.name"
                :active="currentRoute === headerLink.name"
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

    <ion-grid>
      <ion-row>
        <ion-col>
          <slot></slot>
        </ion-col>
      </ion-row>
    </ion-grid>

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
