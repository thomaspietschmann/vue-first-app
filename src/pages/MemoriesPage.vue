<template>
  <base-layout :title="title">
    <ion-list v-for="memory in memories" :key="memory.id">
      <ion-item :router-link="`/memories/${memory.id}`">
        <ion-thumbnail slot="start">
          <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ memory.title }}
        </ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";

export default {
  data() {
    return {
      title: "My best memories",
    };
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    }
  },
  components: {
    IonList,
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
  },
};
</script>
