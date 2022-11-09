import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      bandsData: [
        {
          id: 0,
          bandName: "Band_1",
          songs: ["Band_1_song_1", "Band_1_song_2", "Band_1_song_3"],
        },
        {
          id: 1,
          bandName: "Band_2",
          songs: ["Band_2_song_1", "Band_2_song_2", "Band_2_song_3"],
        },
        {
          id: 2,
          bandName: "Band_3",
          songs: ["Band_3_song_1", "Band_3_song_2", "Band_3_song_3"],
        },
        {
          id: 3,
          bandName: "Band_4",
          songs: ["Band_4_song_1", "Band_4_song_2", "Band_4_song_3"],
        },
      ],
      discsData: [
        {
          id: 0,
          discName: "Disc_1",
          songs: ["Band_1_song_1", "Band_2_song_3", "Band_4_song_2"],
        },
        {
          id: 1,
          discName: "Disc_2",
          songs: ["Band_2_song_1", "Band_3_song_3", "Band_3_song_2"],
        },
        {
          id: 2,
          discName: "Disc_3",
          songs: ["Band_3_song_1", "Band_4_song_3", "Band_2_song_2"],
        },
        {
          id: 3,
          discName: "Disc_4",
          songs: ["Band_4_song_1", "Band_1_song_3", "Band_1_song_2"],
        },
      ],
    };
  },
  getters: {
    getBandsList: (state) => state.bandsData,
    getDiscsList: (state) => state.discsData,
    getDiscById: (state) => (id) => {
      return state.discsData[id];
    },
    getBandById: (state) => (id) => {
      return state.bandsData[id];
    },
  },

  mutations: {
    addNewBand(state, arr) {
      state.bandsData.push(arr);
    },
    editBand(state, arr) {
      state.bandsData[arr.id] = arr;
    },
    deleteBand(state, id) {
      state.bandsData = state.bandsData.filter((item) => item.id !== id);
    },
    addNewDisc(state, arr) {
      state.discsData.push(arr);
    },
    editDisc(state, arr) {
      state.discsData[arr.id] = arr;
    },
    deleteDisc(state, id) {
      state.discsData = state.discsData.filter((item) => item.id !== id);
    },
  },
  actions: {
    addNewBandAction({ commit }, arr) {
      commit("addNewBand", arr);
    },
    editBandAction({ commit }, arr) {
      commit("editBand", arr);
    },
    deleteBandAction({ commit }, id) {
      commit("deleteBand", id);
    },
    addNewDiscAction({ commit }, arr) {
      commit("addNewDisc", arr);
    },
    editDiscAction({ commit }, arr) {
      commit("editDisc", arr);
    },
    deleteDiscAction({ commit }, id) {
      commit("deleteDisc", id);
    },
  },
});

export default store;
