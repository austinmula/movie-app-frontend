import { getAllSeries } from "@/services/series.service";

const state = () => ({
  tv_series: [],
  isError: false,
});

const getters = {
  all_series: (state) => state.tv_series,
};

const actions = {
  getSeries({ commit }) {
    console.log("Good");
    return getAllSeries().then(
      (data) => {
        commit("setItems", data);
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
  setItems: (state, data) => (state.tv_series = data),
  fetchFail: (state) => state.isError(true),
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
