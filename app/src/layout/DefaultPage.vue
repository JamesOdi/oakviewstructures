<script setup lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonLabel,
  IonText,
  IonPage,
  IonItem,
  IonIcon,
} from '@ionic/vue';
import { useRouter } from 'vue-router';
import { chevronForwardOutline, ellipse } from 'ionicons/icons';
import HyperLinkText from '@/components/HyperLinkText.vue';
import MainMenu from '@/components/MainMenu.vue';
import MainToolbar from '@/components/MainToolbar.vue';
import { headerLinks } from '@/utils/constants';
import AppLogoImage from '@/components/AppLogoImage.vue';
import { useContactStore } from '@/stores/contact';
import MyContent from '@/components/MyContent.vue';

const contactStore = useContactStore();

const router = useRouter();
</script>

<template>
  <main-menu
    :header-links="headerLinks"
    :contact-info-links="contactStore.contactInfoLinks"
  ></main-menu>
  <ion-page id="main-content" style="width: 100%; overflow-x: hidden">
    <main-toolbar :header-links="headerLinks"></main-toolbar>

    <ion-grid style="padding: 0px; margin-top: 70px">
      <ion-row style="padding: 0px">
        <ion-col style="padding: 0px">
          <slot></slot>
        </ion-col>
      </ion-row>
    </ion-grid>

    <!-- Bottom padding -->
    <div style="padding-bottom: 200px"></div>

    <ion-footer>
      <my-content>
        <ion-row>
          <!-- First column -->
          <ion-col class="ion-padding" size="12" size-lg="6">
            <ion-row>
              <ion-col>
                <app-logo-image></app-logo-image>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-label
                  >At OakView, we don't just build structures; we build experiences, partnerships,
                  and lasting impressions. Join us on this journey of redefining spaces and shaping
                  the future of construction—one project at a time. <br /><br />Discover what's
                  possible with OakView.</ion-label
                >
              </ion-col>
            </ion-row>
          </ion-col>

          <ion-col class="ion-padding" size="12" size-lg="3">
            <ion-row class="ion-padding-top ion-margin-bottom ion-padding-bottom">
              <ion-col>
                <h4>Contact Info</h4>
              </ion-col>
            </ion-row>
            <hyper-link-text
              v-for="contactInfo of contactStore.contactInfoLinks"
              :route="contactInfo.href"
              :label="contactInfo.label"
              :icon="contactInfo.icon"
              :internal="false"
            ></hyper-link-text>
          </ion-col>

          <ion-col size="12" size-lg="3" class="ion-padding-top quick-link">
            <ion-row class="ion-padding-top ion-margin-bottom ion-padding-bottom">
              <ion-col>
                <h4>Quick Links</h4>
              </ion-col>
            </ion-row>

            <hyper-link-text
              v-for="routerLink of headerLinks"
              :route="{ name: routerLink.name }"
              :active="router.currentRoute.value.name === routerLink.name"
              :label="routerLink.title"
              :icon="chevronForwardOutline"
            ></hyper-link-text>
          </ion-col>
        </ion-row>
      </my-content>

      <ion-row style="background-color: var(--ion-color-primary); width: 100%; min-height: 30px">
        <ion-col style="justify-items: center">
          <ion-row class="toolbar-main" style="display: flex">
            <ion-col>
              <ion-text style="color: white">
                &copy; 2022 Oakview. Designed by James Odike
              </ion-text>
            </ion-col>
            <ion-col v-for="{ name, title } of headerLinks" size="auto" class="toolbar-link">
              <ion-row>
                <ion-col>
                  <ion-item lines="none">
                    <ion-icon
                      :icon="ellipse"
                      color="secondary"
                      slot="start"
                      style="width: 10px; height: 10px; margin-bottom: 0px"
                    >
                    </ion-icon>
                    <router-link :to="{ name }" class="white-text">{{ title }}</router-link>
                  </ion-item>
                </ion-col>
              </ion-row>
              <!-- <hyper-link-text
                :route="{ name }"
                :label="title"
                :icon="ellipse"
                color="white"
                size="10px"
              ></hyper-link-text> -->
            </ion-col>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-footer>
  </ion-page>
</template>

<style scoped>
.active {
  color: var(--ion-color-secondary);
  font-weight: bold;
  font-size: medium;
  text-decoration: none;
}

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

.quick-link {
  padding-left: 50px;
}

.white-text {
  color: white;
}

.white-text:hover {
  color: var(--ion-color-secondary);
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

  .quick-link {
    padding: 16px;
  }
}
</style>
