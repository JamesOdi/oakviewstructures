<script setup lang="ts">
import DefaultPage from '@/layout/DefaultPage.vue'
import { onMounted } from 'vue'
import { IonRow, IonCol, IonItem, IonIcon, IonLabel } from '@ionic/vue'
import { trailSignOutline } from 'ionicons/icons'

onMounted(() => {})
</script>

<template>
  <default-page>
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
        <div
          style="
            background-image: url('/assets/oakview_home_banner.jpg');
            background-size: cover;
            width: 100%;
            height: 500px;
            position: relative;
          "
        ></div>

        <div
          style="
            position: absolute;
            top: 0;
            left: 0;
            color: white;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <ion-row>
            <ion-col>
              <ion-item lines="none" style="--background: transparent">
                <h4 style="padding: 10px; color: white; font-size: 30px">
                  OAKVIEW - REAL ESTATE DEVELOPERS
                </h4>
              </ion-item>
            </ion-col>
          </ion-row>
        </div>
      </ion-col>
    </ion-row>

    <ion-row style="margin-top: 50px">
      <ion-col style="display: flex; flex-direction: column; align-items: center; width: 100%">
        <ion-row style="max-width: 1024px; display: flex; justify-content: center">
          <ion-col size="auto">
            <img
              src="/assets/oakview_mission.jpg"
              alt=""
              style="width: 450px; height: 450px; object-fit: cover; border-radius: 8px"
            />
          </ion-col>
          <ion-col size="auto">
            <ion-row>
              <ion-col>
                <ion-item lines="none">
                  <ion-icon
                    :icon="trailSignOutline"
                    style="color: var(--ion-secondary)"
                    slot="start"
                  ></ion-icon>
                  <ion-label style="padding: 10px; font-size: 12px">OUR MISSION</ion-label>
                </ion-item>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-item lines="none">
                  <h2>OAKVIEW'S MISSION</h2>
                </ion-item>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-item lines="none">
                  <ion-label style="font-size: 11px"
                    >Our mission is to deliver exceptional construction solutions that merge
                    functionality, sustainability and beauty, driven by a passionate team of experts
                    dedicated to exceeding client expectations, pushing industry boundaries and
                    fostering a culture of innovation, collaboration and environmental
                    stewardship.</ion-label
                  >
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-col>
        </ion-row>
      </ion-col>
    </ion-row>
  </default-page>
</template>
