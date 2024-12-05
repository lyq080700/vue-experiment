<script setup>
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
</script>

<template>
<div class="h-screen">
    <el-container>
      <CommonAside></CommonAside>
      <el-container>
        <CommonHeader></CommonHeader>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

</style>