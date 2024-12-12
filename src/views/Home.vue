<script setup>
import { computed } from 'vue';
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
import CommonTab from '@/components/CommonTab.vue';
import {useComponentsStore} from "@/store/components.js";
const components = useComponentsStore();
const widthAside = computed(() => components.isCollapse ? '60px' : '250px')
</script>

<template>
  <div class="common-layout">
    <el-container>
      <CommonAside></CommonAside>
      <el-container direction="vertical" :style="{ 'margin-left': widthAside }">
        <CommonHeader></CommonHeader>
        <CommonTab />
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
//动画过渡
.el-container{
  transition: margin-left .3s ease-in-out;
}
</style>