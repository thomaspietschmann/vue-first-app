<template>
  <base-layout title="Add memory" page-default-back-link="/memories">
    <h2 class="ion-text-center">Add a memory</h2>
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script>
import CreateMemoryForm from "@/components/memories/CreateMemoryForm.vue";

export default {
  components: {
    CreateMemoryForm,
  },
  methods: {
    saveMemory(memoryData) {
      console.log(memoryData);
      this.$store.dispatch('addMemory', memoryData);
      this.$router.replace("/memories"); // replace: push without go back option
    }
  }
};
</script>