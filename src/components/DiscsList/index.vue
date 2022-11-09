<template>
  <div class="discs-list">
    <disc-component
      v-for="item in discsListData"
      :key="item.id"
      :discName="item.discName"
      :songs="item.songs"
      @edit-disc="editDisc(item.id)"
      @delete-disc="deleteDisc(item.id)"
    >
    </disc-component>
  </div>
</template>

<script>
import DiscComponent from "./DiscComponent.vue";
import { mapActions } from "vuex";
export default {
  name: "DiscsList",

  components: {
    DiscComponent,
  },

  props: {
    discsListData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions(["deleteDiscAction"]),
    editDisc(id) {
      this.$router.push({
        name: "add-edit-dics",
        params: { id: id },
      });
    },
    deleteDisc(id) {
      this.deleteDiscAction(id);
    },
  },
};
</script>

<style lang="css" scoped>
.discs-list {
  display: flex;
}
</style>
