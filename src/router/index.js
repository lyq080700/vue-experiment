import { createRouter, createWebHashHistory } from "vue-router";
//路由规则
const routers = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
    ],
  },
];
//创建路由
const router = createRouter({
  history: createWebHashHistory(), //设置hash路由模式
  routes: routers,
});

//导出总路由
export default router;
