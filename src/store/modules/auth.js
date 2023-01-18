import { login, logout } from "@/services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

const state = () => ({
  user_data: user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null },
});

const getters = {
  current_user: (state) => state.user_data,
};

const actions = {
  login({ commit }, user) {
    console.log("Good");
    return login(user).then(
      (user) => {
        commit("loginSuccess", user);
        return Promise.resolve(user);
      },
      (error) => {
        commit("loginFailure");
        return Promise.reject(error);
      }
    );
  },
  logout({ commit }) {
    logout();
    commit("logout");
  },
};

const mutations = {
  loginSuccess(state, user) {
    state.user_data.status.loggedIn = true;
    state.user_data.user = user;
  },
  loginFailure(state) {
    state.user_data.status.loggedIn = false;
    state.user_data.user = null;
  },
  logout(state) {
    state.user_data.status.loggedIn = false;
    state.user_data.user = null;
  },
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
