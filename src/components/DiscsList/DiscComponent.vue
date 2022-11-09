<template>
  <div class="disc-card">
    <h3>{{ discName }}</h3>
    <div v-for="(song, ind) in songs" :key="ind">
      {{ song }}
    </div>
    <div><button @click="$emit('edit-disc')">Edit</button></div>
    <div><button @click="$emit('delete-disc')">Delete</button></div>
  </div>
</template>

<script>
export default {
  name: "DiscComponent",

  props: {
    id: {
      type: Number,
      default: 0,
    },
    discName: {
      type: String,
      default: "No disc name",
    },
    songs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.disc-card {
  margin: 15px;
  background-color: lightgoldenrodyellow;
  padding: 10px;
  border-radius: 9px;
}
</style>
