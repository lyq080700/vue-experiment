
<script setup>
import { ref ,computed, onMounted} from 'vue';
import {useComponentsStore} from "@/store/components.js";
import { useRoute, useRouter } from 'vue-router';
import { usePermissionStore } from '@/store/permission';
const permissionStore = usePermissionStore();
//菜单
const menuList = ref(permissionStore.menuList);
const noChildren = computed(() => menuList.value.filter(item => !item.children))
const hasChildren = computed(() => menuList.value.filter(item => item.children))
//面板折叠
const components = useComponentsStore();
const widthAside = computed(() => components.isCollapse ? '60px' : '250px')
const margnLeft = computed(() => components.isCollapse ? '0' : '10px')
//切换菜单 并自动激活
const router = useRouter();
const route = useRoute();
const activeMenu = computed(() => route.path)
const {addTag} = components;
const handleMenuClick = (item) => {
  router.push(item.path);
  addTag(item);
}
</script>

<template>
<el-aside class="aside-layout h-screen z-50 fixed bg-white" :width="widthAside">
  <div class="aside-title h-16" :style="{ justifyContent: components.isCollapse ? 'flex-start' : 'center',padding:components.isCollapse ? '0 15px' : '0 20px'}" >
      <img src="/vite.svg" alt="logo"/>
      <h3 class="text-2xl text-nowrap font-bold ml-4">管理系统</h3>
  </div>
  <el-menu class="el-menu" :collapse="components.isCollapse" :default-active="activeMenu">
        <el-menu-item v-for="item in noChildren" :key="item.path" :index="item.path"
        @click="handleMenuClick(item)">
          <component class="icon" :is="item.icon" />
          <span class="name" :style="{marginLeft:margnLeft}">{{ item.name }}</span>
        </el-menu-item>
        <el-sub-menu v-for="item in hasChildren" :key="item.path" :index="item.path">
          <template #title>
            <component class="icon" :is="item.icon" />
            <span class="name" :style="{marginLeft:margnLeft}">{{ item.name }}</span>
          </template>
          <!-- 二级菜单 -->
           <el-sub-menu-group>
            <el-menu-item v-for="subItem in item.children" :key="subItem.path" :index="subItem.path"
            @click="handleMenuClick(item)">
            <component class="icon" :is="subItem.icon" />
            <span class="name" :style="{marginLeft:margnLeft}">{{ subItem.name }}</span>
          </el-menu-item>
           </el-sub-menu-group>
        </el-sub-menu>
      </el-menu>
</el-aside>
</template>

<style lang="less" scoped>
.aside-layout{
  border-right: 1px solid #e6e6e6;
  overflow: hidden;
  transition: width .3s ease-in-out;
}
.aside-title{
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: width .3s ease-in-out;
}
.el-menu{
  border-right: none;
}
.icon{
  width:24px;
  height:24px;
}
</style>