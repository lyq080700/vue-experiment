import { createRouter, createWebHistory } from "vue-router";
//路由规则
const routers = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    redirect: "/dashboard",
    meta: {
      icon: "Histogram",
      label: "控制台",
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
          icon: "Histogram",
          label: "控制台",
        },
      },
      {
        path: "diary",
        name: "diary",
        component: () => import("@/views/Notebook.vue"),
        meta: {
          icon: "Notebook",
          label: "日记",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
];
//创建路由
const router = createRouter({
  history: createWebHistory(), //设置路由模式
  routes: routers,
});

//导出总路由
export default router;
