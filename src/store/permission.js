import { defineStore } from "pinia";
import { reactive, ref } from "vue";
export const usePermissionStore = defineStore("permission", () => {
  const menuList = ref([]);
  const userInfo = reactive({});
  const routerList = ref([]);
  function setUserInfo(user) {
    userInfo.username = user.username;
    userInfo.avatar = user.avatar;
    userInfo.roles = user.roles;
    menuList.value = user.menuList;
    //存储用户信息和token和菜单
    localStorage.setItem("USER", JSON.stringify(user));
    localStorage.setItem("TOKEN", user.token);
    localStorage.setItem("MENU", JSON.stringify(user.menuList));
  }
  function addRouter(router) {
    //添加动态路由
    const menu = menuList.value;
    const module = import.meta.glob("../views/**/*.vue");
    const routerArry = [];
    menu.forEach((item) => {
      if (item.children) {
        //有子菜单
        item.children.forEach((subItem) => {
          let url = `../views/${subItem.label}.vue`;
          subItem.component = module[url];
          subItem.meta = { icon: subItem.icon, label: subItem.label };
        });
        item.meta = { icon: item.icon, label: item.label };
        routerArry.push(item);
      } else {
        let url = `../views/${item.path}.vue`;
        item.component = module[url];
        item.meta = { icon: item.icon, label: item.label };
        routerArry.push(item);
      }
    });
    routerArry.forEach((item) => {
      routerList.value.push(router.addRoute("home", item));
    });
  }
  return { menuList, userInfo, setUserInfo, addRouter, routerList };
});
