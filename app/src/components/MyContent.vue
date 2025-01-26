<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>

<script lang="ts" setup>
import { IonRow, IonCol } from '@ionic/vue';
import { computed } from 'vue';

const props = defineProps({
  fullWidth: {
    type: Boolean,
    default: false,
  },
  colSize: {
    type: String,
    default: 'auto',
  },
});

const defaultWidth = computed(() => !props.fullWidth);
</script>

<template>
  <ion-row :class="{ defaultWidth }">
    <ion-col class="ion-no-padding" :size="colSize"> <slot></slot> </ion-col>
  </ion-row>
</template>

<style scoped>
.defaultWidth {
  width: 1024px;
  align-items: center;
  margin: auto;
}

@media (max-width: 1024px) {
  /* For screens smaller than 1024px */
  .defaultWidth {
    width: 100%;
  }
}
</style>
