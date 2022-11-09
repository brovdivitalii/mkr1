<template>
  <div>
    <h1>Discs page</h1>
    <h2>Discs list</h2>
    <div><discs-list :discsListData="getDiscsList"></discs-list></div>
    <div><button @click="addNewDisc()">Add new disc</button></div>
  </div>
</template>

<script>
import DiscsList from "@/components/DiscsList";
import { mapGetters } from "vuex";
export default {
  name: "DiscsPage",

  components: {
    DiscsList,
  },
  computed: {
    ...mapGetters(["getDiscsList"]),
  },
  methods: {
    addNewDisc() {
      this.$router.push({
        name: "add-edit-dics",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
