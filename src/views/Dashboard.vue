<script setup>
    import { ref,onMounted } from 'vue';
    const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    sex:'male'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    sex:'male'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    sex:'male'
  },
])
const tableLabels = ref({
    date: '日期',
    name: '姓名',
    address: '地址',
    sex:'性别'
})
import { getTableDataApi } from '@/api/api';
const getTableData = async () => {
    const res = await getTableDataApi();
    tableData.value = res.tableData
}
onMounted(() => {
    getTableData();
})
const activities = ref([
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
])
</script>

<template>
<el-row :gutter="20">
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
    <el-col :span="8">sss</el-col>
    <el-col :span="8">sss</el-col>
</el-row>
</template>

<style scoped>
.el-card {
  border-radius: 10px;
}

</style>