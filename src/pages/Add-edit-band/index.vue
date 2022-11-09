<template>
  <div>
    <h1>Add/edit band</h1>
    <br />
    <div>
      <label>Id:<input type="number" v-model="id" /></label>
    </div>
    <br />
    <div>
      <label>Band name:<input type="text" v-model="bandName" /></label>
    </div>
    <br />
    <div>
      <label
        >Songs:<input type="text" v-model="songs[0]" />
        <input type="text" v-model="songs[1]" />
        <input type="text" v-model="songs[2]"
      /></label>
    </div>
    <button @click="onClick">Submit</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AddEditBand",
  data() {
    return {
      id: 0,
      bandName: "No band name",
      songs: [],
    };
  },
  computed: {
    ...mapGetters(["getBandById"]),
  },
  methods: {
    ...mapActions(["addNewBandAction", "editBandAction"]),
    onClick() {
      if (this.$route.params.id) {
        this.editBandAction({
          id: this.$route.params.id,
          bandName: this.bandName,
          songs: this.songs,
        });
      } else {
        this.addNewBandAction({
          id: this.id,
          bandName: this.bandName,
          songs: this.songs,
        });
      }
      this.$router.push({
        name: "main",
      });
    },
  },
  mounted() {
    if (this.$route.params.id) {
      const band = this.getBandById(this.$route.params.id);
      if (band) {
        this.id = band.id;
        this.bandName = band.bandName;
        this.songs = band.songs;
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
