
<script setup>
import { ref ,computed} from 'vue';
import {useComponentsStore} from "@/store/components.js";
const menuList = ref([
  {
    title: '控制台',
    icon: 'Histogram',
    path: '/dashboard',
  },
  {
    title: '日记',
    icon: 'Notebook',
    path: '/diary',
  },{
    title: '个人中心',
    icon: 'UserFilled',
    path: '/user',
  },
  {
    title: '管理',  
    icon: 'Management',
    children: [
      {
        title: '日记管理',
        icon: 'Suitcase',
        path: '/management/diary',
      },
      {
        title: '用户管理',
        icon: 'Cloudy',
        path: '/management/user',
      }
    ]
  }
])
const noChildren = computed(() => menuList.value.filter(item => !item.children))
const hasChildren = computed(() => menuList.value.filter(item => item.children))
const components = useComponentsStore();
//面板折叠
const widthAside = computed(() => components.isCollapse ? '60px' : '250px')
</script>

<template>
<el-aside class="aside-layout h-screen" :width="widthAside">
  <el-menu class="el-menu" :collapse="components.isCollapse" default-active="1" >
      <h3 class="text-xl font-bold m-4 text-nowrap">管理系统</h3>
        <el-menu-item v-for="item in noChildren" :key="item.path" :index="item.path">
          <component class="icon" :is="item.icon" />
          <span class="name">{{ item.title }}</span>
        </el-menu-item>
        <el-sub-menu v-for="item in hasChildren" :key="item.path" :index="item.path">
          <template #title>
            <component class="icon" :is="item.icon" />
            <span class="name">{{ item.title }}</span>
          </template>
          <!-- 二级菜单 -->
           <el-sub-menu-group>
            <el-menu-item v-for="subItem in item.children" :key="subItem.path" :index="subItem.path">
            <component class="icon" :is="subItem.icon" />
            <span class="name">{{ subItem.title }}</span>
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
.el-menu{
  border-right: none;
}
.icon{
  width:24px;
  height:24px;
}
</style>