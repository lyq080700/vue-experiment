<script setup>
import { ArrowRight } from '@element-plus/icons-vue';
import {useComponentsStore} from "@/store/components.js";
const components = useComponentsStore();
</script>

<template>
<el-header class="header-layout">
  <div class="l-container">
    <el-button size="small" @click="components.isCollapse = !components.isCollapse">
      <el-icon><Menu /></el-icon>
    </el-button>
    <el-breadcrumb :separator-icon="ArrowRight" class="ml-8 bread">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>Dashboard</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
  <div class="r-container">
    <el-dropdown>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
  </el-dropdown>
  </div>
</el-header>
</template>

<style scoped>
.header-layout{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  width: 100%;
  .l-container{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

:deep(.bread span){
  cursor: pointer !important;
}

</style>