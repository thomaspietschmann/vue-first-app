<template>
  <ion-img :src="image" :alt="title"></ion-img>
  <h2>{{ title }}</h2>
  <p>{{ text }}</p>
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