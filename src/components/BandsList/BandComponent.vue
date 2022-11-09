<template>
  <div class="band-card">
    <h3>{{ bandName }}</h3>
    <div v-for="(song, ind) in songs" :key="ind">
      {{ song }}
    </div>
    <div><button @click="$emit('edit-band')">Edit</button></div>
    <div><button @click="$emit('delete-band')">Delete</button></div>
  </div>
</template>

<script>
export default {
  name: "BandComponent",

  props: {
    id: {
      type: Number,
      default: 0,
    },
    bandName: {
      type: String,
      default: "No band name",
    },
    songs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.band-card {
  margin: 15px;
  background-color: wheat;
  padding: 10px;
  border-radius: 9px;
}
</style>
