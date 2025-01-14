<script setup lang="ts">
import DefaultPage from '@/layout/DefaultPage.vue';
import { IonRow, IonCol, IonLabel } from '@ionic/vue';
import MySection from '@/components/MySection.vue';
import MyContent from '@/components/MyContent.vue';
import { useOfferingStore } from '@/stores/offering';

const offeringStore = useOfferingStore();
</script>

<template>
  <default-page>
    <my-content
      :full-width="true"
      class="center-children ion-padding"
      style="background-color: var(--ion-color-primary); color: white"
    >
      <my-content class="ion-margin-vertical ion-padding-vertical">
        <ion-row class="ion-margin-vertical">
          <ion-col size="12" size-md="6">
            <my-section title="ABOUT US" subtitle="OAKVIEW POWERS MILLIONS OF BUSINESSES WORLDWIDE">
              <ion-row>
                <ion-col class="ion-no-padding">
                  <ion-label
                    >At Oak View, we believe every project tells a story—a story of vision,
                    creativity, and sustainable impact. Founded with a passion for transforming the
                    living and working experience in Africa, we specialize in delivering exceptional
                    design and construction services with a distinctive touch: the innovative use of
                    timber.<br />
                    <br />At the foundation of our work and the core of our spirit lies
                    Excellence—the bedrock upon which every idea at Oak View is built and every
                    dream takes shape. Like the roots of a mighty oak tree, our commitment to
                    excellence anchors everything we do, ensuring strength, beauty, and lasting
                    impact in every project.</ion-label
                  >
                </ion-col>
              </ion-row>
            </my-section>
          </ion-col>
          <ion-col size="12" size-md="6">
            <img src="/assets/about_us.jpeg" alt="" class="mission-img" />
          </ion-col>
        </ion-row>
      </my-content>
    </my-content>

    <my-content>
      <ion-row class="center-children ion-margin-top ion-padding-top">
        <ion-col size="auto">
          <my-section
            title="MEET OUR TEAM"
            subtitle="Making Construction better for everyone"
            title-position="center"
            style="text-align: center"
          >
            <ion-label>
              We help people achieve independence by making it easier to start, run, and grow a
              business. We believe the future of commerce has more voices, not fewer, so we're
              reducing the barriers to business ownership to make commerce better for everyone.
            </ion-label>
          </my-section>
        </ion-col>
      </ion-row>

      <ion-row
        v-for="(offer, idx) of offeringStore.offerings"
        :key="idx"
        style="margin-top: 50px"
        class="center-horizontal"
      >
        <ion-col size="auto" class="team-img-container">
          <div
            :style="{
              'background-image': `url(${offer.image})`,
              width: '250px',
              height: '250px',
              'background-size': 'cover',
              'border-radius': '50%',
              'box-shadow': '3px 3px 3px #ccc',
            }"
          ></div>
        </ion-col>
        <ion-col>
          <my-section
            class="ion-padding-horizontal"
            :title="offer.title"
            :subtitle="offer.subtitle"
          >
            <ion-label>
              {{ offer.description }}
            </ion-label>
          </my-section>
        </ion-col>
      </ion-row>
    </my-content>
  </default-page>
</template>

<style scoped>
.mission-img {
  width: 450px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 1024px) {
  .mission-img {
    width: 100%;
    height: auto;
  }
}
</style>
