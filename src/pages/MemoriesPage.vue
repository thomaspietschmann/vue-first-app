<template>
  <base-layout :title="title">
    <memories-list :memories="memories"></memories-list>
  </base-layout>
</template>

<script>

import MemoriesList from "../components/memories/MemoriesList.vue";


export default {
  components: {
    MemoriesList
  },
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
};
</script>
