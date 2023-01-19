import { createRouter, createWebHistory } from "vue-router";
import AdminView from "../views/admin/AdminView.vue";
import LoginView from "../views/LoginView.vue";
import HomePageView from "../views/user/HomePageView.vue";
import AllSeriesView from "../views/user/AllSeriesView.vue";
import SingleSeriesView from "../views/user/SingleSeriesView.vue";
import ProfileView from "../views/user/ProfileView.vue";

const routes = [
  {
    path: "/admin",
    name: "adminhome",
    component: AdminView,
  },
  {
    path: "/",
    name: "homepage",
    component: HomePageView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    // import(/* webpackChunkName: "about" */ "../views/user/HomePageView.vue"),
  },
  {
    path: "/tv-series",
    name: "all-series",
    component: AllSeriesView,
  },
  {
    path: "/tv-series/:id",
    name: "single-series",
    component: SingleSeriesView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
