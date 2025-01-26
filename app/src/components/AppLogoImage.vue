<script setup lang="ts">
import { IonRow, IonCol, IonLabel } from '@ionic/vue';
import { RouterLink } from 'vue-router';
import { companyName } from '@/utils/constants';
</script>

<template>
  <router-link :to="{ name: 'home' }">
    <ion-row style="display: flex; align-items: center">
      <ion-col size="auto">
        <img src="/assets/oakview_logo.png" :alt="companyName" style="width: 70px; height: 70px" />
      </ion-col>
      <ion-col size="auto">
        <h2 class="company-name">{{ companyName.toUpperCase() }}</h2>
      </ion-col>
    </ion-row>
  </router-link>
</template>

<style scoped>
.company-name {
  font-family: 'Gilda Display', Tofu;
  font-weight: bold;
  font-optical-sizing: auto;
  color: var(--ion-color-primary);
}
</style>
