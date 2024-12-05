<script setup>
</script>

<template>
  <router-view></router-view>
</template>

<!-- style中设置scoped是为了防止样式污染，作用就是样式模块化，
 即给组件每一个元素（以及非动态添加的子组件的根元素）加上一个data-v-xxxx的属性，样式选择器也会格式化成选择器[data-v-xxxx],这样就做到了样式隔离，
 每个组件内定义的样式只对该组件生效，避免了不同组件或页面的样式（选择器）冲突 -->

<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
