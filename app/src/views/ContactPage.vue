<script setup lang="ts">
import DefaultPage from '@/layout/DefaultPage.vue';
import MyContent from '@/components/MyContent.vue';
import {
  IonRow,
  IonCol,
  IonInput,
  IonList,
  IonItem,
  IonText,
  IonTextarea,
  IonButton,
} from '@ionic/vue';
import PageHeaderImageTitle from '@/components/PageHeaderImageTitle.vue';
import { ref } from 'vue';
import type { ContactForm } from '@/utils/types-interfaces';
import { sendMail } from '@/utils/send-mail';
import { contactFormInputs } from '@/utils/constants';
import { useContactStore } from '@/stores/contact';

const contactStore = useContactStore();

const pageModel = ref<ContactForm>({
  businessName: '',
  email: '',
  address: '',
  phone: '',
  message: '',
});

const sendEmail = () => {
  sendMail(pageModel.value);
};
</script>

<template>
  <default-page>
    <my-content col-size="12">
      <page-header-image-title
        title="Contact"
        subtitle="At the heart of OakView is a commitment to sustainability and innovation. Join us as we seek to redefine the living and working experience in Africa, one timber at a time!"
        image-location="/assets/oakview_home_banner.jpg"
      ></page-header-image-title>
    </my-content>

    <my-content col-size="12" style="margin-top: 50px; color: black">
      <ion-row class="center-children"
        ><ion-col size="auto"><h1>Let's Start a Conversation</h1></ion-col></ion-row
      >

      <ion-row>
        <ion-col size="12" size-md="6" class="ion-padding-horizontal">
          <ion-row
            v-for="(contactGroup, groupIdx) of contactStore.contactGroups"
            :key="groupIdx"
            class="ion-margin-top ion-padding-top"
          >
            <ion-col>
              <ion-row>
                <ion-col>
                  <h3>{{ contactGroup.title }}</h3>
                </ion-col>
              </ion-row>

              <ion-row
                v-for="(contact, contactIdx) of contactGroup.items"
                :key="contactIdx"
                class="ion-margin-top"
              >
                <ion-col class="ion-no-padding">
                  <ion-row>
                    <ion-col>
                      <h5>{{ contact.title }}</h5>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col>
                      <span
                        v-html="contact.content"
                        style="color: var(--ion-color-primary-text); font-size: medium"
                      ></span>
                    </ion-col>
                  </ion-row>
                </ion-col>
              </ion-row>
            </ion-col>
          </ion-row>
        </ion-col>

        <ion-col size="12" size-md="6" class="ion-padding-horizontal">
          <ion-row class="ion-margin-top ion-padding-top">
            <ion-col>
              <h3>Contact Form</h3>
            </ion-col>
          </ion-row>

          <ion-row class="ion-margin-top">
            <ion-col>
              <ion-list>
                <ion-item
                  v-for="(contactFormInput, idx) of contactFormInputs"
                  lines="none"
                  :key="idx"
                  class="ion-margin-bottom"
                  style="border-style: solid; border-radius: 5px; border-width: 2px"
                >
                  <ion-input
                    label-placement="floating"
                    :name="contactFormInput.name"
                    :type="contactFormInput.inputType"
                    v-model="pageModel[contactFormInput.name]"
                    disabled
                  >
                    <div slot="label">
                      {{ contactFormInput.label }}
                      <ion-text style="color: var(--ion-color-danger)">(Required)</ion-text>
                    </div>
                  </ion-input>
                </ion-item>

                <ion-item
                  lines="none"
                  style="border-style: solid; border-radius: 5px; border-width: 2px"
                >
                  <ion-textarea
                    label-placement="floating"
                    name="message"
                    style="min-height: 100px"
                    v-model="pageModel.message"
                    disabled
                  >
                    <div slot="label">
                      Message
                      <ion-text style="color: var(--ion-color-danger)">(Required)</ion-text>
                    </div>
                  </ion-textarea>
                </ion-item>

                <ion-button class="ion-margin-top" expand="block" @click="sendEmail" disabled>
                  Submit
                </ion-button>
              </ion-list>
            </ion-col>
          </ion-row>
        </ion-col>
      </ion-row>
    </my-content>
  </default-page>
</template>
