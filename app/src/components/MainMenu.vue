<script setup lang="ts">
import type { ContactInfoLink, HeaderLink } from '@/utils/types-interfaces'
import { IonRow, IonCol, IonItem, IonIcon, IonGrid } from '@ionic/vue'
import HyperLinkText from './HyperLinkText.vue'

defineProps<{
  headerLinks: HeaderLink[]
  contactInfoLinks: ContactInfoLink[]
}>()
</script>

<template>
  <ion-menu side="end" content-id="main-content">
    <ion-row>
      <ion-col>
        <ion-row>
          <ion-col>
            <ion-item v-for="({ name, title }, idx) of headerLinks" :key="idx">
              <hyper-link-text :route="{ name }" :label="title"></hyper-link-text>
            </ion-item>
          </ion-col>
        </ion-row>

        <ion-row v-for="{ icon, title, href, label } of contactInfoLinks">
          <ion-col>
            <ion-item lines="none">
              <ion-icon
                :icon="icon"
                slot="start"
                style="color: var(--ion-color-secondary)"
              ></ion-icon>
              <ion-grid style="padding-left: 15px">
                <ion-row style="padding: 0">
                  <ion-col style="padding: 0">
                    <h3>{{ title }}</h3>
                  </ion-col>
                </ion-row>
                <ion-row style="padding: 0">
                  <ion-col style="padding: 0">
                    <a :href="href">{{ label }}</a>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-col>
    </ion-row>
  </ion-menu>
</template>
