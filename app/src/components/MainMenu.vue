<script setup lang="ts">
import type { ContactInfoLink, HeaderLink } from '@/utils/types-interfaces';
import { IonRow, IonCol, IonItem, IonIcon, IonLabel, IonMenu } from '@ionic/vue';
import HyperLinkText from './HyperLinkText.vue';
import { useRouter } from 'vue-router';
import { headerLinks } from '@/utils/constants';
import { useContactStore } from '@/stores/contact';

const router = useRouter();
const contactStore = useContactStore();
</script>

<template>
  <ion-menu side="end" content-id="main-content">
    <ion-row>
      <ion-col>
        <ion-row class="ion-margin-bottom">
          <ion-col>
            <router-link v-for="({ name, title }, idx) of headerLinks" :to="{ name }" :key="idx">
              <ion-item>
                <ion-label :class="{ active: router.currentRoute.value.name == name }">{{
                  title
                }}</ion-label>
              </ion-item>
            </router-link>
          </ion-col>
        </ion-row>

        <ion-row
          v-for="({ icon, title, href, label }, idx) of contactStore.contactInfoLinks"
          :key="idx"
          class="ion-padding-start"
        >
          <ion-col>
            <ion-row class="ion-align-items-center">
              <ion-col size="1" class="ion-no-padding">
                <ion-icon :icon="icon" color="secondary"></ion-icon>
              </ion-col>
              <ion-col class="ion-padding-start">
                <h5>{{ title }}</h5>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col offset="1" class="ion-padding-start">
                <a v-if="href" :href="href">{{ label }}</a>
                <ion-label v-else>{{ label }}</ion-label>
              </ion-col>
            </ion-row>
          </ion-col>
        </ion-row>
      </ion-col>
    </ion-row>
  </ion-menu>
</template>

<style scoped>
.active {
  color: var(--ion-color-secondary);
  font-weight: bold;
}
</style>
