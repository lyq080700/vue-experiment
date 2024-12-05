import { defineStore } from "pinia";
import { ref } from "vue";

export const useComponentsStore = defineStore("components", () => {
  const isCollapse = ref(false);
  return { isCollapse };
});
