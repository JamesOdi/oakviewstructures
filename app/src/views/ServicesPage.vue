<script setup lang="ts">
import DefaultPage from '@/layout/DefaultPage.vue'
import MyContent from '@/components/MyContent.vue'
import { IonRow, IonCol, IonLabel, IonCard, IonCardContent } from '@ionic/vue'
import MySection from '@/components/MySection.vue'

type ServiceOffered = {
  title: string
  content: string
  bulletPoints: string[]
  image: string
}

const servicesOffered: ServiceOffered[] = [
  {
    title: 'Design & Architecture',
    content:
      'Transform your ideas into reality with our team of skilled architects and designers. We specialize in creating custom designs that blend functionality, elegance, and sustainable solutions.',
    bulletPoints: [
      'Concept development',
      '3D modeling and rendering',
      'Sustainable and eco-friendly designs',
    ],
    image: '/assets/design_and_architecture.jpeg',
  },
  {
    title: 'Construction & Project Management',
    content:
      'From groundbreaking to completion, our team ensures your project is delivered on time, within budget, and to the highest quality standards.',
    bulletPoints: [
      'Residential and commercial construction',
      'Turnkey project execution',
      'Timely progress tracking and updates',
    ],
    image: '/assets/construction_and_project.jpeg',
  },
  {
    title: 'Furnishing & Finishing',
    content:
      "Bring your spaces to life with our exceptional furnishing and finishing services. We focus on aesthetics, comfort, and durability to create an environment you'll love.",
    bulletPoints: [
      'Custom furniture and decor',
      'High-quality finishes for interiors and exteriors',
      'Attention to detail in every aspect',
    ],
    image: '/assets/furnishing_and_finishing.jpeg',
  },
  {
    title: 'Remodeling & Asset Revival',
    content:
      'Unlock the potential of underutilized spaces with our remodeling and asset revival services. We breathe new life into outdated or dead assets, making them productive and modern.',
    bulletPoints: ['Complete renovations', 'Repurposing and redesign', 'Sustainable upgrades'],
    image: '/assets/remodelling.jpeg',
  },
  {
    title: 'Timber-Based Construction',
    content:
      'Our signature service, timber construction, reflects our passion for sustainability and artistry. We use the finest timber to craft unique, eco-friendly structures.',
    bulletPoints: [
      'Timber sheds and walkways',
      'Container restaurants with timber accents',
      'Sustainable building solutions',
    ],
    image: '/assets/timber_construction.jpeg',
  },
  {
    title: 'Custom Solutions for Airbnb & Hospitality',
    content:
      'Elevate your Airbnb or hospitality project with our tailored services designed to make your property stand out.',
    bulletPoints: [
      'Stylish and functional interiors',
      'Efficient space utilization',
      'Enhanced guest experiences',
    ],
    image: '/assets/airbnb_hospitality.jpeg',
  },
  {
    title: 'Environmental Sustainability',
    content:
      'We are committed to creating environmentally friendly projects that align with green building standards.',
    bulletPoints: [
      'Eco-conscious material selection',
      'Sustainable construction methods',
      'Park development and landscaping',
    ],
    image: '/assets/environmental_sustainability.jpeg',
  },
]
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
              subtitle="OAKVIEW POWERS MILLIONS OF BUSINESSES WORLDWIDE"
            >
              <ion-row>
                <ion-col class="ion-no-padding">
                  <ion-label
                    >At Oak View, we combine innovation, craftsmanship, and sustainability to
                    deliver exceptional projects tailored to your needs. Our expertise spans a
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
        v-for="(serviceOffered, offeringIdx) of servicesOffered"
        :key="offeringIdx"
        class="ion-margin-top center-horizontal"
        style="width: auto"
      >
        <ion-col>
          <ion-card>
            <ion-card-content>
              <ion-row>
                <ion-col size="12" size-md="6">
                  <my-section :title="serviceOffered.title" subtitle="">
                    <ion-row>
                      <ion-col class="ion-no-padding">
                        <ion-label>{{ serviceOffered.content }}</ion-label>
                      </ion-col>
                    </ion-row>
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
