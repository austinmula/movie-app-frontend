import { createStore } from "vuex";
import auth from "./modules/auth";
import series from "./modules/series";
import favourites from "./modules/favourites";
import subscriptions from "./modules/subscriptions";

export default createStore({
  modules: { auth, series, favourites, subscriptions },
});
