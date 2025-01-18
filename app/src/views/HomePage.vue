<script setup lang="ts">
import DefaultPage from '@/layout/DefaultPage.vue';
import { IonRow, IonCol, IonIcon, IonLabel, IonCard, IonCardContent } from '@ionic/vue';
import MySection from '@/components/MySection.vue';
import MyContent from '@/components/MyContent.vue';
import PageHeaderImageTitle from '@/components/PageHeaderImageTitle.vue';
import { useProjectStore } from '@/stores/project';

const projectStore = useProjectStore();
</script>

<template>
  <default-page>
    <page-header-image-title
      title="OAKVIEW"
      subtitle="...More than construction we design experiences"
      image-location="/assets/oakview_home_banner.jpg"
    ></page-header-image-title>

    <my-content style="margin-top: 50px">
      <ion-row>
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
              dedicated to exceeding client expectations, pushing industry boundaries and fostering
              a culture of innovation, collaboration and environmental stewardship</ion-label
            >
          </my-section>
        </ion-col>
      </ion-row>

      <ion-row class="ion-margin-top ion-padding-top">
        <ion-col>
          <my-section
            title="WHAT WE DO"
            subtitle="Develop comprehensive solutions for each project"
          >
            <ion-row class="ion-margin-top ion-padding" style="padding: 0px; margin: 0px">
              <ion-col
                v-for="({ icon, title, description }, idx) of projectStore.projectTypeItems"
                :key="idx"
                size="12"
                size-md="6"
                style="padding: 5px; margin: 0px"
              >
                <ion-card class="ion-margin-top ion-margin-right" style="border-radius: 15px">
                  <ion-card-content class="ion-padding">
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
    </my-content>

    <my-content
      style="
        background-image: url('/assets/our_achievements.png');
        padding-top: 50px;
        padding-bottom: 50px;
      "
      class="ion-margin-bottom ion-margin-top"
      :full-width="true"
      col-size="12"
    >
      <my-content>
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
            v-for="(statistic, idx) of projectStore.numericStatistics"
            :key="idx"
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
                <h1 style="color: var(--ion-color-secondary)">{{ statistic.count }}</h1>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-label style="color: var(--vt-c-white); font-size: 15px">{{
                  statistic.title
                }}</ion-label>
              </ion-col>
            </ion-row>
          </ion-col>
        </ion-row>
      </my-content>
    </my-content>

    <my-content class="ion-margin-top ion-padding-top">
      <ion-row style="display: flex; align-items: center">
        <ion-col size-sm="12" size-md="6">
          <div style="margin-left: auto">
            <my-section
              title="WHY OAKVIEW?"
              subtitle="Because you deserve the best and only the best"
            >
              <ion-label
                >With a track record of delivering high-quality projects, OakView has earned the
                trust of clients across Nigeria. From eco-friendly park additions to stylish
                container restaurants, to revived commercial and residential spaces, we have been
                consistent in delivering the best quality for our dear clients that are judged as
                being breathtakingly timeless. Join the OakView train of architectural perfection
                and stand out among the rest.</ion-label
              >
            </my-section>
          </div>
        </ion-col>
        <ion-col size="12" size-md="6">
          <img class="mission-img" src="/assets/who_we_are_background.jpg" alt="" />
        </ion-col>
      </ion-row>
    </my-content>
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
