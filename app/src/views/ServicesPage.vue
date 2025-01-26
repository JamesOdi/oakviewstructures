<script setup lang="ts">
import DefaultPage from '@/layout/DefaultPage.vue';
import MyContent from '@/components/MyContent.vue';
import { IonRow, IonCol, IonLabel, IonCard, IonCardContent } from '@ionic/vue';
import MySection from '@/components/MySection.vue';
import { useServiceStore } from '@/stores/service';
import { computed } from 'vue';
import { companyName } from '@/utils/constants';

const serviceStore = useServiceStore();
</script>

<template>
  <default-page>
    <my-content
      :full-width="true"
      class="center-children ion-padding"
      style="background-color: var(--ion-color-primary); color: white"
    >
      <my-content>
        <ion-row class="ion-margin-top center-horizontal">
          <ion-col size="12" size-md="6">
            <my-section
              title="OUR SERVICES"
              :subtitle="`${companyName} POWERS MILLIONS OF BUSINESSES WORLDWIDE`"
            >
              <ion-row>
                <ion-col class="ion-no-padding">
                  <ion-label
                    >At {{ companyName }}, we combine innovation, craftsmanship, and sustainability
                    to deliver exceptional projects tailored to your needs. Our expertise spans a
                    variety of services to bring your vision to life.</ion-label
                  >
                </ion-col>
              </ion-row>
            </my-section>
          </ion-col>
          <ion-col size="12" size-md="6">
            <img src="/assets/our_services.jpg" alt="" class="our-services-img" />
          </ion-col>
        </ion-row>
      </my-content>
    </my-content>

    <my-content class="ion-padding" style="margin-top: 50px">
      <ion-row
        v-for="(serviceOffered, offeringIdx) of serviceStore.servicesOffered"
        :key="offeringIdx"
        class="ion-margin-top center-horizontal"
        style="width: auto"
      >
        <ion-col>
          <ion-card style="border-radius: 15px">
            <ion-card-content>
              <ion-row>
                <ion-col size="12" size-md="6">
                  <my-section :title="serviceOffered.title" subtitle="">
                    <ion-row>
                      <ion-col class="ion-no-padding">
                        <ion-label>{{ serviceOffered.content }}</ion-label>
                      </ion-col>
                    </ion-row>
                    <ul class="ion-margin-top">
                      <li
                        v-for="(bulletPoint, bulletPointIdx) of serviceOffered.bulletPoints"
                        :key="bulletPointIdx"
                      >
                        {{ bulletPoint }}
                      </li>
                    </ul>
                  </my-section>
                </ion-col>

                <ion-col size="12" size-md="6">
                  <div
                    class="offering-img"
                    :style="{
                      'background-image': `url(${serviceOffered.image})`,
                      'background-size': 'cover',
                      'border-radius': '5px',
                    }"
                  ></div>
                </ion-col>
              </ion-row>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>

      <my-section
        :title="`WHY CHOOSE ${companyName.toUpperCase()}?`"
        subtitle=""
        class="ion-margin-top ion-padding-top"
      >
        <ul>
          <li v-for="(reason, reasonIdx) of serviceStore.reasonsForChoosingUs" :key="reasonIdx">
            {{ reason }}
          </li>
        </ul>
        <ion-row class="ion-margin-top">
          <ion-col>
            <ion-label style="font-weight: bold"
              >Contact us today to discuss your next project and experience the
              {{ companyName }} difference.</ion-label
            >
          </ion-col>
        </ion-row>
      </my-section>
    </my-content>
  </default-page>
</template>

<style scoped>
.our-services-img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 8px;
}

.offering-img {
  width: 100%;
  height: 300px;
}

@media (max-width: 1024px) {
  .our-services-img {
    width: 100%;
    height: auto;
  }

  .offering-img {
    width: 100%;
    height: 300px;
  }
}
</style>
