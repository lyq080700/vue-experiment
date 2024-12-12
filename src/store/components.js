import { defineStore } from "pinia";
import { ref } from "vue";

export const useComponentsStore = defineStore("components", () => {
  const isCollapse = ref(false); //是否折叠
  //标签列表
  const tagList = ref([
    {
      label: "dashboard",
      name: "控制台",
      path: "/dashboard",
      icon: "Histogram",
    },
  ]);
  //添加标签  action只能是一个普通函数，不能是箭头函数
  function addTag(tag) {
    //判断是否已存在
    if (tagList.value.find((item) => item.label === tag.label)) return;
    tagList.value.push(tag);
  }
  //删除标签
  function removeTag(tag) {
    //判断是否存在
    const index = tagList.value.findIndex((item) => item.label === tag.label);
    if (index === -1 || tagList.value.length === 1) return;
    tagList.value.splice(index, 1);
  }
  //更新标签
  function updateTag(tag) {
    //判断是否存在
    const index = tagList.value.findIndex((item) => item.label === tag.label);
    if (index === -1) {
      //首次加载更新tagList
      tagList.value[0] = tag;
    }
  }
  return { isCollapse, tagList, addTag, removeTag, updateTag };
});
