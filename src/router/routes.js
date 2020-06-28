/*
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-22 10:50:46
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-28 08:56:42
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home")
  },
  {
    path: "/homeConfig",
    name: "homeConfig",
    component: () => import("@/views/homeConfig")
  }
];

export default routes;
