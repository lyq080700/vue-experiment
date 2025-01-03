import axios from "axios";
import { ElMessage } from "element-plus";
const instance = axios.create({
  baseURL: "/api",
  timeout: 3000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 给后端传token
    if (localStorage.getItem("TOKEN")) {
      config.headers.Authorization = localStorage.getItem("TOKEN");
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    const { code, data, message } = response.data;
    if (data) {
      return data;
    } else {
      ElMessage.error(message || "没有数据");
      return Promise.reject(new Error(message || "没有数据"));
    }
  },
  function (error) {
    // 对响应错误做点什么
    const { response, message } = error || {};
    let errMsg = "";
    try {
      errMsg = response?.data?.message || message;
    } catch (error) {
      throw new Error(error);
    }
    ElMessage.error(errMsg || "请求失败");
    return Promise.reject(error);
  }
);

//给外部使用的请求方法
function request(config) {
  config.method = config.method || "get";
  return instance(config);
}
export default request;
