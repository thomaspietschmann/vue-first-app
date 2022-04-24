<template>
  <base-layout :title="title">
    <ion-list>
      <ion-item>A trip</ion-item>
      <ion-item>A mountain</ion-item>
      <ion-item>Eating</ion-item>
    </ion-list>
  </base-layout>
</template>

<script>

import {
  IonList,
  IonItem
} from "@ionic/vue";

export default {
  data() {
    return {
      title: "My best memories"
    }
  },
  components: {
    IonList,
    IonItem
  },
};
</script>
