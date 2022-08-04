import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/todo",
    component: () => import("./views/TodoPage.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
