import { getMySubs, getAllSubs } from "@/services/subs.services";

const state = () => ({
  allsubs: [],
  mysubs: [],
  isError: false,
});

const getters = {
  all_subs: (state) => state.allsubs,
  my_subs: (state) => state.mysubs,
};

const actions = {
  getSubscriptions({ commit }) {
    return getAllSubs().then(
      (data) => {
        commit("setAll", data);
        return Promise.resolve(data);
      },
      (error) => {
        commit("fetchFail");
        return Promise.reject(error);
      }
    );
  },
  getMySubscriptions({ commit }, id) {
    return getMySubs(id).then(
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
};

const mutations = {
  setAll: (state, data) => (state.allsubs = data),
  setShow: (state, data) => (state.mysubs = data),
  fetchFail: (state) => state.isError(true),
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
