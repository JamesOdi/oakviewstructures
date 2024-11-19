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
</template>
