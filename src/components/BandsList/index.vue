<template>
  <div class="bands-list">
    <band-component
      v-for="item in bandsListData"
      :key="item.id"
      :bandName="item.bandName"
      :songs="item.songs"
      @edit-band="editBand(item.id)"
      @delete-band="deleteBand(item.id)"
    >
    </band-component>
  </div>
</template>

<script>
import BandComponent from "./BandComponent.vue";
import { mapActions } from "vuex";
export default {
  name: "BandsList",

  components: {
    BandComponent,
  },

  props: {
    bandsListData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions(["deleteBandAction"]),
    editBand(id) {
      this.$router.push({
        name: "add-edit-band",
        params: { id: id },
      });
    },
    deleteBand(id) {
      this.deleteBandAction(id);
    },
  },
};
</script>

<style lang="css" scoped>
.bands-list {
  display: flex;
}
</style>
