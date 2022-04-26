<template>
  <base-layout :title="memory ? memory.title : 'Loading'" page-default-back-link="/memories">
    <h2 v-if="!memory">Could not find a memory for the given ID</h2>
    <h2 v-else>
      <memory-overview
        :title="memory.title"
        :text="memory.text"
        :image="memory.image">
        </memory-overview>
    </h2>
  </base-layout>
</template>

<script>

import MemoryOverview from "../components/memories/MemoryOverview.vue";

export default {
  components: {
    MemoryOverview,
  },
  mounted() {
    console.log(this.memoryId);
    return this.$store.getters.memory(this.memoryId);
  },
  data() {
    return {
      title: "The Details",
      memoryId: this.$route.params.id
    };
  },
  computed: {
    memory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  watch: {
    '$route'(currentRoute) {
      this.memoryId = currentRoute.params.id;
    }
  }
};
</script>