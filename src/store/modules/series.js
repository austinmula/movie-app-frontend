import {
  getAllSeries,
  getOneShow,
  deleteShow,
} from "@/services/series.service";

const state = () => ({
  tv_series: [],
  one_show: {},
  isError: false,
});

const getters = {
  all_series: (state) => state.tv_series,
  single_show: (state) => state.one_show,
};

const actions = {
  getSeries({ commit }) {
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
  getOneShow({ commit }, id) {
    return getOneShow(id).then(
      (data) => {
        commit("setShow", data);
        return Promise.resolve(data);
      },
      (error) => {
        commit("fetchFail");
        return Promise.reject(error);
      }
    );
  },
  deleteShow({ commit }, id) {
    return deleteShow(id).then(
      (data) => {
        commit("removeShow", id);
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
  setShow: (state, data) => (state.one_show = data),
  removeShow: (state, data) =>
    (state.tv_series = state.tv_series.filter((item) => item.id !== data)),
  fetchFail: (state) => state.isError(true),
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
