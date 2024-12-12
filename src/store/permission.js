import { defineStore } from "pinia";
import { ref } from "vue";
export const usePermissionStore = defineStore("permission", () => {
  const menuList = ref([]);
  function setMenuList(list) {
    menuList.value = list;
  }
  return { menuList, setMenuList };
});
