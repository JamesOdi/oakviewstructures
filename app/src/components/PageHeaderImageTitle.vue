<script setup lang="ts">
import { IonRow, IonCol } from '@ionic/vue';
import MyContent from './MyContent.vue';

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: false },
  largeScreenImageLocation: { type: String, required: true },
  smallScreenImageLocation: { type: String },
});
</script>

<template>
  <ion-row style="padding: 0px; position: relative">
    <ion-col
      style="
        padding: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      "
    >
      <div class="header-image" :style="`background-image: url(${largeScreenImageLocation})`"></div>

      <my-content
        style="
          position: absolute;
          color: white;
          height: 100%;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <ion-row>
          <ion-col>
            <ion-row>
              <ion-col>
                <h1 class="title">{{ title }}</h1>
              </ion-col>
            </ion-row>
            <ion-row v-if="subtitle">
              <ion-col size="">
                <h1 class="subtitle" style="color: var(--vt-c-black-soft)">{{ subtitle }}</h1>
              </ion-col>
            </ion-row>
          </ion-col>
        </ion-row>
      </my-content>
    </ion-col>
  </ion-row>
</template>

<style scoped>
.title {
  font-family: 'Gilda Display', Tofu;
  font-weight: 400;
  font-size: 80px;
  font-optical-sizing: auto;
  color: var(--ion-color-primary);
}

.subtitle {
  font-family: 'Gilda Display', Tofu;
  font-weight: 400;
  font-size: 30px;
  font-optical-sizing: auto;
  font-style: italic;
  color: var(--ion-color-secondary);
}

.header-image {
  width: 100%;
  height: 500px;
  position: relative;
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.5);
  background-repeat: no-repeat;
  background-size: 100%;
}

@media (max-width: 1024px) {
  .title {
    font-size: calc(10vw);
  }

  .subtitle {
    font-size: clamp(5px, 15px, 60px);
  }

  .header-image {
    height: auto; /* Auto height */
    aspect-ratio: 16 / 9; /* Adjust aspect ratio as needed */
    background-size: cover;
    background-position: center;
  }
}
</style>
