<script setup lang="ts">
import { IonRow, IonCol } from '@ionic/vue';

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: false },
  imageLocation: { type: String, required: true },
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
      <div style="width: 100%; height: 500px; position: relative"></div>

      <ion-row
        style="
          position: absolute;
          top: 0;
          left: 0;
          color: white;
          width: 100%;
          height: 100%;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <ion-col>
          <ion-row>
            <ion-col>
              <h1 class="title">{{ title }}</h1>
            </ion-col>
          </ion-row>
          <ion-row v-if="subtitle">
            <ion-col>
              <h1 class="subtitle">{{ subtitle }}</h1>
            </ion-col>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-col>
  </ion-row>
</template>

<style scoped>
.title {
  font-family: 'Gilda Display', Tofu;
  font-weight: 400;
  font-size: 80px;
  font-optical-sizing: auto;
  font-style: normal;
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

@media (max-width: 1024px) {
  .title {
    font-size: 50px;
  }

  .subtitle {
    font-size: 20px;
  }
}
</style>
