<script setup lang="ts">
import { IonRow, IonCol, IonItem, IonIcon, IonText } from '@ionic/vue';
import type { PropType } from 'vue';
import { RouterLink, type RouteLocationRaw } from 'vue-router';

defineProps({
  route: { type: Object as PropType<RouteLocationRaw | string>, required: false },
  internal: { type: Boolean, required: false, default: true },
  icon: { type: String, required: false },
  label: { type: String, required: true },
  active: { type: Boolean, required: false, default: false },
  color: { type: String, required: false },
  size: { type: String, required: false },
});
</script>

<template>
  <ion-row>
    <ion-col v-if="icon" size="auto" size-lg="2">
      <ion-icon :icon="icon" size="small" color="secondary" :style="{ width: size, height: size }">
      </ion-icon>
    </ion-col>
    <ion-col size="auto" size-lg="10">
      <template v-if="route">
        <router-link
          v-if="internal"
          :to="route"
          :class="{ active, 'white-text': color == 'white' }"
          >{{ label }}</router-link
        >
        <a v-else-if="typeof route == 'string'" :href="route">{{ label }}</a>
      </template>

      <ion-text v-else>
        {{ label }}
      </ion-text>
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
