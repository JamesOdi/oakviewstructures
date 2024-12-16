<script setup lang="ts">
import { IonRow, IonCol, IonItem, IonIcon, IonText } from '@ionic/vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'

defineProps<{
  route?: RouteLocationRaw | string
  icon?: string
  label: string
  active?: boolean
  color?: string
  size?: string
}>()
</script>

<template>
  <ion-row>
    <ion-col size="auto">
      <ion-item lines="none">
        <ion-icon
          v-if="icon"
          :icon="icon"
          slot="start"
          size="small"
          color="secondary"
          :style="{ width: size, height: size }"
        >
        </ion-icon>

        <router-link v-if="route" :to="route" :class="{ active, 'white-text': color == 'white' }">{{
          label
        }}</router-link>
        <ion-text v-else>
          {{ label }}
        </ion-text>
      </ion-item>
    </ion-col>
  </ion-row>
</template>

<style scoped>
.active {
  color: var(--ion-color-secondary);
  font-weight: bold;
  font-size: medium;
  text-decoration: none;
}

.white-text {
  color: white;
}

.white-text:hover {
  color: var(--ion-color-secondary);
}
</style>
