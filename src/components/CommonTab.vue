<script setup>
import { ref,onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {useComponentsStore} from "@/store/components.js";
const components = useComponentsStore();
const {removeTag,updateTag} = components;
const tagList = components.tagList;
const route = useRoute();
const router = useRouter();
//移除标签并跳转最后一个标签的页面路径
const handleClose = (tag) => {
    removeTag(tag);
    //若关闭的不是当前页面，则不做处理
    if(route.name !== tag.label) return;
    //若关系的是当前页面，则跳转到最后一个标签的路径
    router.push(tagList[tagList.length - 1].path);
}
//tag跳转
const handleMenu = (tag) => {
    router.push(tag.path);
}
//组件加载时确认页面加载的菜单
onMounted(() => {
    if(!tagList.some(item => item.label === route.name)){
        const newTag = {
            name:route.meta.label,
            label:route.name,
            path:route.path,
            icon:route.meta.icon
        }
        updateTag(newTag);
    }
})
</script>

<template>
    <div class="flex gap-1 menu-tabs">
    <el-tag v-for="tag in tagList" 
    :key="tag.label" 
    :closable="tagList.length > 1"
    :effect="route.name === tag.label ? 'dark' : 'plain'"
    @close="handleClose(tag)"
    @click="handleMenu(tag)"
    :disable-transitions="false">
      {{ tag.name }}
    </el-tag>
</div>
</template>

<style scoped lang="less">
.menu-tabs{
    border-bottom: 1px solid #e6e6e6;
    padding: 20px 10px 0 10px;
    .el-tag{
        cursor: pointer;
        border-bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
}
</style>