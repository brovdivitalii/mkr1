<template>
  <div>
    <h1>Add/edit disc</h1>
    <br />
    <div>
      <label>Id:<input type="number" v-model="id" /></label>
    </div>
    <br />
    <div>
      <label>Disc title:<input type="text" v-model="discName" /></label>
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
  name: "AddEditDisc",
  data() {
    return {
      id: 0,
      discName: "No disc name",
      songs: [],
    };
  },
  computed: {
    ...mapGetters(["getDiscById"]),
  },
  methods: {
    ...mapActions(["addNewDiscAction", "editDiscAction"]),
    onClick() {
      if (this.$route.params.id) {
        this.editDiscAction({
          id: this.$route.params.id,
          discName: this.discName,
          songs: this.songs,
        });
      } else {
        this.addNewDiscAction({
          id: this.id,
          discName: this.discName,
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
      const disc = this.getDiscById(this.$route.params.id);
      if (disc) {
        this.id = disc.id;
        this.discName = disc.discName;
        this.songs = disc.songs;
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
