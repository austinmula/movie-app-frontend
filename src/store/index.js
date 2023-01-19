import { createStore } from "vuex";
import auth from "./modules/auth";
import series from "./modules/series";

export default createStore({
  modules: { auth, series },
});
