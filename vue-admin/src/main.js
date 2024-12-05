import { createApp } from "vue";
import "@/assets/less/index.less";
//引入路由
import router from "./router";
//引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//引入pina
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(pinia);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.mount("#app");
