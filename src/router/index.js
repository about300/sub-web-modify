import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SubConverter",
    component: () => import("../views/Subconverter.vue")
  }
];

const router = new VueRouter({
  mode: "history",

  /**
   * ⭐ 关键：明确子路径
   * 不再依赖 env，避免历史污染
   */
  base: "/subconvert/",

  routes
});

export default router;
