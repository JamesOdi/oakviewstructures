<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/vue'
</script>

<template>
  <ion-header>
    <ion-toolbar> </ion-toolbar>
  </ion-header>
  <ion-grid>
    <ion-row>
      <ion-col>
        <slot></slot>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
