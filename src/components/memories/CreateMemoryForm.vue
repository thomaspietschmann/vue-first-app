<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" v-model="enteredTitle" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-thumbnail v-if="previewImageUrl" slot="start">
          <img :src="takenImageUrl" />
        </ion-thumbnail>
        <!-- add type button so button will not submit form -->
        <ion-button type="button" fill="clear" @click="takePhoto">
  
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
import { camera } from "ionicons/icons";

import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonThumbnail,
  IonIcon,
} from "@ionic/vue";

export default {
  data() {
    return {
      camera,
      enteredTitle: "",
      enteredText: "",
      takenImageUrl: null,
    };
  },
  emits: ["save-memory"],
  methods: {
    async takePhoto() {
      const photo = await Camera.getPhoto({
        quality: 75,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });
      this.previewImageUrl = photo.webPath;
    },
    submitForm() {
      const formData = {
        title: this.enteredTitle,
        text: this.enteredText,
        image: this.takenImageUrl,
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
    IonIcon,
  },
};
</script>