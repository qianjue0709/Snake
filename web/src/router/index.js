import { createRouter, createWebHistory } from "vue-router";
export default createRouter({
  // 指定路由模式
  history: createWebHistory(),
  // 路由地址
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/pk/",
    },
    {
      path: "/pk/",
      name: "pk_index",
      component: () => import("../views/pk/PkIndex.vue"),
    },
    {
      path: "/ranklist/",
      name: "ranklist_index",
      component: () => import("../views/ranklist/RanklistIndex.vue"),
    },
    {
      path: "/record/",
      name: "record_index",
      component: () => import("../views/record/RecordIndex.vue"),
    },
    {
      path: "/user/bot/",
      name: "user_bot_index",
      component: () => import("../views/user/bot/UserBotIndex.vue"),
    },
    {
      path: "/404/",
      name: "error_index",
      component: () => import("../views/error/NotFound.vue"),
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404/",
    },
  ],
});
