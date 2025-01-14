<script setup lang="ts">
import type { ContactInfoLink, HeaderLink } from '@/utils/types-interfaces'
import { IonRow, IonCol, IonItem, IonIcon, IonLabel } from '@ionic/vue'
import HyperLinkText from './HyperLinkText.vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

defineProps<{
  headerLinks: HeaderLink[]
  contactInfoLinks: ContactInfoLink[]
}>()
</script>

<template>
  <ion-menu side="end" content-id="main-content">
    <ion-row>
      <ion-col>
        <ion-row class="ion-margin-bottom">
          <ion-col>
            <ion-item v-for="({ name, title }, idx) of headerLinks" :key="idx">
              <hyper-link-text
                :route="{ name }"
                :active="router.currentRoute.value.name == name"
                :label="title"
              ></hyper-link-text>
            </ion-item>
          </ion-col>
        </ion-row>

        <ion-row
          v-for="({ icon, title, href, label }, idx) of contactInfoLinks"
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
