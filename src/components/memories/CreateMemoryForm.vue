<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" v-model="enteredTitle" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" v-model="enteredImageUrl" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img src="" alt="">
        </ion-thumbnail>
        <ion-button fill="clear">
          <ion-icon :icon="camera" slot="start"></ion-icon>
          Take Photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="enteredText"></ion-textarea>
      </ion-item>
      <ion-button type="submit" expand="block"> Save </ion-button>
    </ion-list>
  </form>
</template>
    
<script>

import {camera } from "ionicons/icons";

import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonThumbnail,
  IonIcon
} from "@ionic/vue";

export default {
  data() {
    return {
      camera,
      enteredTitle: "",
      enteredText: "",
      enteredImageUrl: "",
    };
  },
  emits: ["save-memory"],
  methods: {
    submitForm() {
      const formData = {
        title: this.enteredTitle,
        text: this.enteredText,
        image: this.enteredImageUrl,
      };
      this.$emit("save-memory", formData);
    },
  },
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonThumbnail,
    IonIcon
  },
};
</script>