<script lang="ts">
export default {
  inheritAttrs: true,
}
</script>

<script setup lang="ts">
import { IonRow, IonCol, IonIcon, IonLabel, IonItem } from '@ionic/vue'
import type { PropType } from 'vue'
import { flowerOutline } from 'ionicons/icons'

defineProps({
  titlePosition: {
    type: Object as PropType<'left' | 'center' | 'right'>,
    default: 'left',
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: flowerOutline,
    required: false,
  },
})
</script>

<template>
  <ion-row>
    <ion-col>
      <ion-row
        :style="{ 'justify-content': titlePosition, display: 'flex', 'align-items': 'center' }"
      >
        <ion-col size="auto">
          <ion-icon :icon="icon" color="secondary" size="small"></ion-icon>
        </ion-col>
        <ion-col size="auto">
          <ion-label style="font-weight: 600">{{ title }}</ion-label>
        </ion-col>
      </ion-row>
      <ion-row v-if="subtitle">
        <ion-col>
          <h2>{{ subtitle }}</h2>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <slot></slot>
        </ion-col>
      </ion-row>
    </ion-col>
  </ion-row>
</template>
