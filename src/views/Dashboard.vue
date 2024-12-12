<script setup>
import { ref,onMounted,reactive } from 'vue';
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts";
const tableData = ref([])
const tableLabels = ref({
    date: '日期',
    name: '姓名',
    address: '地址',
    sex:'性别'
})
import { getTableDataApi,getTimelineDataApi,getlineChartDataApi } from '@/api/api';

const getTableData = async () => {
    const res = await getTableDataApi();
    tableData.value = res.tableData
}

const activities = ref([])
//时间线
const getTimelineData=async ()=>{
  const res = await getTimelineDataApi();
  activities.value = res
}
//Echarts图表
const lineChartRef = ref(null);
const getChartsData=async ()=>{
  const myChart = echarts.init(lineChartRef.value);
  const res = await getlineChartDataApi();
  const option = reactive(res);
  myChart.setOption(option);
  //监听容器大小变化并调整图画大小
  const observer = new ResizeObserver((entries) => {
        myChart.resize();
  })
  //容器检测
  if(lineChartRef.value){
    observer.observe(lineChartRef.value)
  }
}

onMounted(() => {
    getTableData();
    getChartsData();
    getTimelineData();
})

</script>

<template>
<el-row :gutter="20" class="dashboard">
    <el-col :span="10">
        <el-card class="user-card" shadow="hover">
          <div class="card-header flex flex-row justify-between">
            <div class="flex flex-col">
                <span class="font-medium text-2xl">欢迎回来 🫡</span>
                <span class="font-medium text-xl mt-2">admin</span>
            </div>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <div class="user-content mt-5">
              <p class="text-gray-600">上次登录时间:<span class="ml-2">2022-05-13 11:11</span></p>
              <p class="text-gray-600">上次登录IP:<span class="ml-2">北京</span></p>
          </div>
          </el-card>
          <el-card class="table-card mt-4" shadow="hover">
            <el-table :data="tableData">
                <el-table-column 
                v-for="(val,key) in tableLabels"
                :key="key"
                :prop="key"
                :label="val" />
            </el-table>
        </el-card>
    </el-col>
    <el-col :span="14">
        <el-card class="calendar-card" shadow="hover">
            <el-calendar>
                <template #date-cell="{ data }">
                <p :class="data.isSelected ? 'is-selected' : ''">
                    {{ data.day.split('-').slice(1).join('-') }}
                    {{ data.isSelected ? '✔️' : '' }}
                </p>
                </template>
            </el-calendar>
        </el-card>
    </el-col>
</el-row>
<el-row :gutter="20" class="mt-4">
    <el-col :span="8">
        <el-card class="calendar-card" shadow="hover">
            <el-timeline style="max-width: 600px">
                <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :timestamp="activity.timestamp"
                    >
                    {{ activity.content }}
                </el-timeline-item>
            </el-timeline>
        </el-card>
    </el-col>
    <el-col :span="16">
      <el-card class="line-card" shadow="hover">
        <div ref="lineChartRef" style="height: 200px;"></div>
      </el-card>
    </el-col>
</el-row>
</template>

<style scoped lang="less">
.el-card {
  border-radius: 10px;
}

</style>