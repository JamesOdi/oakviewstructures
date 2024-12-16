<script setup lang="ts">
import DefaultPage from '@/layout/DefaultPage.vue'
import { onMounted } from 'vue'
import { IonRow, IonCol, IonIcon, IonLabel, IonCard, IonCardContent } from '@ionic/vue'
import { buildOutline, bulbOutline, constructOutline, receiptOutline } from 'ionicons/icons'
import MySection from '@/components/MySection.vue'

onMounted(() => {})

type ProjectTypeItem = {
  title: string
  description: string
  icon: string
}

const projectTypeItems: ProjectTypeItem[] = [
  {
    title: 'Planning',
    description: 'Design and develop a comprehensive plan for your home improvement project.',
    icon: receiptOutline,
  },
  {
    title: 'Construction',
    description: 'Design and develop a comprehensive plan for your home improvement project.',
    icon: constructOutline,
  },
  {
    title: 'Operation & Maintenance',
    description: 'Design and develop a comprehensive plan for your home improvement project.',
    icon: buildOutline,
  },
  {
    title: 'Design',
    description: 'Design and develop a comprehensive plan for your home improvement project.',
    icon: bulbOutline,
  },
]
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
              <h1 style="padding: 10px; color: white">OAKVIEW - REAL ESTATE DEVELOPERS</h1>
            </ion-col>
          </ion-row>
        </div>
      </ion-col>
    </ion-row>

    <ion-row style="margin-top: 50px; padding: 0px">
      <ion-col
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 0px;
        "
      >
        <ion-row class="center-children content-width" style="max-width: 1024px">
          <ion-col size="12" size-md="6">
            <ion-row>
              <ion-col>
                <img src="/assets/oakview_mission.jpg" alt="" class="mission-img" />
              </ion-col>
            </ion-row>
          </ion-col>
          <ion-col size="12" size-md="6">
            <my-section title="OUR MISSION" subtitle="OAKVIEW'S MISSION">
              <ion-label
                >Our mission is to deliver exceptional construction solutions that merge
                functionality, sustainability and beauty, driven by a passionate team of experts
                dedicated to exceeding client expectations, pushing industry boundaries and
                fostering a culture of innovation, collaboration and environmental
                stewardship</ion-label
              >
            </my-section>
          </ion-col>
        </ion-row>

        <ion-row
          style="display: flex; justify-content: center; margin-top: 50px; margin-bottom: 50px"
        >
          <ion-col size="auto">
            <my-section
              title="WHAT WE DO"
              subtitle="Develop comprehensive solutions for each project"
            >
              <ion-row
                class="ion-margin-top ion-padding content-width"
                style="padding: 0px; margin: 0px"
              >
                <ion-col
                  v-for="({ icon, title, description }, idx) of projectTypeItems"
                  :key="idx"
                  size="12"
                  size-md="6"
                  style="padding: 0px; margin: 0px"
                >
                  <ion-card class="ion-margin-top ion-margin-right">
                    <ion-card-content class="ion-padding content-width">
                      <ion-row>
                        <ion-col>
                          <ion-row>
                            <ion-col>
                              <ion-icon
                                :icon="icon"
                                style="color: var(--ion-color-secondary); width: 50px; height: 50px"
                              />
                            </ion-col>
                            <ion-col size="auto">
                              <ion-label style="opacity: 5%; font-size: 40px; font-weight: bold"
                                >0{{ idx + 1 }}</ion-label
                              >
                            </ion-col>
                          </ion-row>
                          <ion-row>
                            <ion-col size="auto">
                              <ion-label style="font-size: 20px; font-weight: 600">{{
                                title
                              }}</ion-label>
                            </ion-col>
                          </ion-row>

                          <ion-row>
                            <ion-col>
                              <ion-label>
                                {{ description }}
                              </ion-label>
                            </ion-col>
                          </ion-row>
                        </ion-col>
                      </ion-row>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
            </my-section>
          </ion-col>
        </ion-row>

        <ion-row
          class="ion-margin-top center-children"
          style="
            background-image: url('/assets/our_achievements.png');
            width: 100%;
            padding-top: 50px;
            padding-bottom: 50px;
          "
        >
          <ion-col class="content-width">
            <ion-row class="statistics-container">
              <ion-col size="12" size-md="6">
                <my-section
                  title="OUR STATISTICS"
                  subtitle=" OAKVIEW will help you get things complete reality"
                  style="color: white"
                >
                </my-section>
              </ion-col>
              <ion-col
                size="auto"
                style="
                  background-color: var(--ion-color-secondary-light);
                  border-radius: 10px;
                  padding: 10px;
                  margin: 5px;
                "
              >
                <ion-row>
                  <ion-col>
                    <h1 style="color: var(--ion-color-secondary)">100+</h1>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col>
                    <ion-label style="color: var(--vt-c-white); font-size: 15px"
                      >Completed Projects</ion-label
                    >
                  </ion-col>
                </ion-row>
              </ion-col>
              <ion-col
                size="auto"
                style="
                  background-color: var(--ion-color-secondary-light);
                  border-radius: 10px;
                  padding: 10px;
                  margin: 5px;
                "
              >
                <ion-row>
                  <ion-col>
                    <h1 style="color: var(--ion-color-secondary)">100+</h1>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col>
                    <ion-label style="color: var(--vt-c-white); font-size: 15px"
                      >Completed Projects</ion-label
                    >
                  </ion-col>
                </ion-row>
              </ion-col>
            </ion-row>
          </ion-col>
        </ion-row>

        <ion-row
          class="content-width ion-margin-top ion-padding-top"
          style="display: flex; align-items: center"
        >
          <ion-col size-sm="12" size-md="6">
            <div style="margin-left: auto">
              <my-section
                title="WHY OAKVIEW?"
                subtitle="Build better futures with steady focus on quality"
              >
                <ion-label
                  >Our mission is to deliver exceptional construction solutions that merge
                  functionality, sustainability and beauty, driven by a passionate team of experts
                  dedicated to exceeding client expectations, pushing industry boundaries and
                  fostering a culture of innovation, collaboration and environmental
                  stewardship</ion-label
                >
              </my-section>
            </div>
          </ion-col>
          <ion-col size="12" size-md="6">
            <img class="mission-img" src="/assets/who_we_are_background.jpg" alt="" />
          </ion-col>
        </ion-row>
      </ion-col>
    </ion-row>
  </default-page>
</template>

<style scoped>
.content-width {
  max-width: 1024px;
}

.statistics-container {
  display: flex;
  align-items: center;
  padding: 80px;
}

.mission-img {
  width: 450px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 1024px) {
  .content-width {
    width: 100%;
  }

  .mission-img {
    width: 100%;
    height: auto;
  }

  .statistics-container {
    padding: 10px;
  }
}
</style>
