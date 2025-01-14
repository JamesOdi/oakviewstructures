<script setup lang="ts">
import DefaultPage from '@/layout/DefaultPage.vue'
import MyContent from '@/components/MyContent.vue'
import {
  IonRow,
  IonCol,
  IonInput,
  IonList,
  IonItem,
  IonText,
  IonTextarea,
  IonButton,
} from '@ionic/vue'
import PageHeaderImageTitle from '@/components/PageHeaderImageTitle.vue'
import { contactInfoLinks } from '@/utils/constants'
import { generateHyperLinkText } from '@/utils/generate-hyper-link-text'
import { onMounted, ref } from 'vue'
import type { ContactForm } from '@/utils/types-interfaces'
import { sendMail } from '@/utils/send-mail'
import { contactFormInputs } from '@/utils/constants'

type ContactItem = {
  title: string
  content: string
}

type ContactGroup = {
  title: string
  items: ContactItem[]
}

const pageModel = ref<ContactForm>({
  businessName: '',
  email: '',
  address: '',
  phone: '',
  message: '',
})

const contactGroups: ContactGroup[] = [
  {
    title: 'Ask how we can help you:',
    items: [
      {
        title: 'See our platform in action',
        content: "Request a personalized demo of OakView's partner marketing platform.",
      },
      {
        title: 'Master performance marketing',
        content:
          'From OakView, learn how to grow your business through performance-based partnerships.',
      },
      {
        title: 'Explore life at OakView',
        content:
          'Search open positions, read about company culture and values, and explore our charitable initiatives.',
      },
      {
        title: 'See our platform in action',
        content: "Request a personalized demo of OakView's partner marketing platform.",
      },
    ],
  },
  {
    title: 'Points of Contact',
    items: contactInfoLinks.map((contact) => {
      return {
        title: contact.title,
        content: generateHyperLinkText(contact.label, contact.hrefType),
      }
    }),
  },
  {
    title: 'Additional Office Locations',
    items: [
      {
        title: import.meta.env.VITE_ADDITIONAL_OFFICE_LOCATION_STATE,
        content: import.meta.env.VITE_ADDITIONAL_OFFICE_LOCATION_FULL,
      },
    ],
  },
]

const sendEmail = () => {
  sendMail(pageModel.value)
}
</script>

<template>
  <default-page>
    <page-header-image-title
      title="Contact"
      image-location="/assets/oakview_home_banner.jpg"
    ></page-header-image-title>

    <my-content col-size="12" style="margin-top: 50px; color: black">
      <ion-row class="center-children"
        ><ion-col size="auto"><h1>Let's Start a Conversation</h1></ion-col></ion-row
      >

      <ion-row>
        <ion-col size="12" size-md="6" class="ion-padding-horizontal">
          <ion-row
            v-for="(contactGroup, groupIdx) of contactGroups"
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
                  style="border-style: solid; border-radius: 5px"
                >
                  <ion-input
                    label-placement="floating"
                    :name="contactFormInput.name"
                    :type="contactFormInput.inputType"
                    v-model="pageModel[contactFormInput.name]"
                  >
                    <div slot="label">
                      {{ contactFormInput.label }}
                      <ion-text style="color: var(--ion-color-danger)">(Required)</ion-text>
                    </div>
                  </ion-input>
                </ion-item>

                <ion-item lines="none" style="border-style: solid; border-radius: 5px">
                  <ion-textarea
                    label-placement="floating"
                    name="message"
                    style="min-height: 100px"
                    v-model="pageModel.message"
                  >
                    <div slot="label">
                      Message
                      <ion-text style="color: var(--ion-color-danger)">(Required)</ion-text>
                    </div>
                  </ion-textarea>
                </ion-item>

                <ion-button class="ion-margin-top" expand="block" @click="sendEmail">
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
