<template>
  <div>
    <h1>Bands page</h1>
    <h2>Bands list</h2>
    <div>
      <bands-list :bandsListData="getBandsList"></bands-list>
    </div>
    <div><button @click="addNewBand()">Add new disc</button></div>
  </div>
</template>

<script>
import BandsList from "@/components/BandsList";
import { mapGetters } from "vuex";
export default {
  name: "BandsPage",

  components: {
    BandsList,
  },

  computed: {
    ...mapGetters(["getBandsList"]),
  },
  methods: {
    addNewBand() {
      this.$router.push({
        name: "add-edit-band",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
