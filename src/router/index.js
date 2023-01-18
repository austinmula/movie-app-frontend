import { createRouter, createWebHistory } from "vue-router";
import AdminView from "../views/admin/AdminView.vue";

const routes = [
  {
    path: "/admin",
    name: "adminhome",
    component: AdminView,
  },
  {
    path: "/",
    name: "homepage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user/HomePageView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
