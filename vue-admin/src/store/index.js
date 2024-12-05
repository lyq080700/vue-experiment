import { defineStore } from "pinia";
import { ref } from "vue";
function useStore() {
  const isCollapse = ref(false);
  return { isCollapse };
}
export const useAllDataStore = defineStore("allData", () => {
  const allData = ref(useStore);
  return { allData };
});
