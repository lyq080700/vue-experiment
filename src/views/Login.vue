<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/api/api';
import { usePermissionStore } from '@/store/permission';
const permissionStore = usePermissionStore();
const { setUserInfo,addRouter } = permissionStore;
const loginForm = reactive({
    username:'admin',
    password:'123456',
    rememberMe:true,
})
const router = useRouter();
const onSubmit = async (config) => {
    const res = await login(config);
    setUserInfo(res);
    // addRouter(router);
    router.push('/');
}
</script>

<template>
  <div class="login-body relative flex !min-h-screen !w-full !flex-row">
    <div
        class="hidden grow flex-col items-center justify-center gap-[80px] md:flex"
        style="background: url('@/assets/background/overlay_2.jpg') no-repeat center center / cover"
      >
        <div class="text-3xl font-bold leading-normal lg:text-4xl xl:text-5xl mt-10">不知道管理什么的系统</div>
            <img class="max-w-[480px] xl:max-w-[560px]" src="@/assets/background/dashboard.png" alt="" />
        </div>

      <div class="m-auto flex !h-screen w-full max-w-[480px] flex-col justify-center px-[16px] lg:px-[64px]">
        <div class="mb-4 text-2xl font-bold xl:text-3xl">欢迎登录</div>
        看看为啥背景图不显示！！！！！！！！
        <el-form :model="loginForm" label-width="auto" style="max-width: 600px" size="large">
            <el-form-item>
                <el-input type="input" clearable placeholder="请输入账号" v-model="loginForm.username"/>
            </el-form-item>
            <el-form-item>
                <el-input type="password" show-password clearable placeholder="请输入密码" v-model="loginForm.password"/>
            </el-form-item>
            <el-form-item class="flex items-center justify-between">
                <el-checkbox name="rememberMe" v-model="loginForm.rememberMe">
                    记住我
                </el-checkbox>
                <el-button type="" link class="ml-auto">
                忘记密码
                </el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="w-full" @click="onSubmit(loginForm)">登录</el-button>
            </el-form-item>
        </el-form>
        
      </div>
  </div>
</template>

<style scoped lang="less">

</style>