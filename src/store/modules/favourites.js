import { getFavourites } from "@/services/favourites.service";

const state = () => ({
  favourites: [],
  isError: false,
});

const getters = {
  my_favourites: (state) => state.favourites,
};

const actions = {
  getFavourite({ commit }, id) {
    return getFavourites(id).then(
      (data) => {
        commit("setFavourites", data);
        return Promise.resolve(data);
      },
      (error) => {
        commit("fetchFail");
        return Promise.reject(error);
      }
    );
  },
};

const mutations = {
  setFavourites: (state, data) => (state.favourites = data),
  fetchFail: (state) => state.isError(true),
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
