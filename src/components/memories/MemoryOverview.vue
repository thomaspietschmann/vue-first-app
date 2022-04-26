<template>
  <ion-img :src="image" :alt="title"></ion-img>
  <h2 class="ion-text-center">{{ title }}</h2>
  <p class="ion-text-center">{{ text }}</p>
</template>

<script>
import { IonImg } from "@ionic/vue";

export default {
  props: ["title", "image", "text"],
  components: {
    IonImg,
  },
};
</script>