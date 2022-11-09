<template>
  <div>
    <h1>Main page</h1>
    <h2>Bands list</h2>
    <div>
      <bands-list :bandsListData="getBandsList"></bands-list>
    </div>
    <h2>Discs list</h2>
    <div><discs-list :discsListData="getDiscsList"></discs-list></div>
  </div>
</template>

<script>
import BandsList from "@/components/BandsList";
import DiscsList from "@/components/DiscsList";
import { mapGetters } from "vuex";
export default {
  name: "MainPage",

  components: {
    BandsList,
    DiscsList,
  },

  computed: {
    ...mapGetters(["getBandsList", "getDiscsList"]),
  },
};
</script>

<style lang="scss" scoped></style>
