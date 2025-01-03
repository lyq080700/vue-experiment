import Mock from "mockjs";
import {
  getTableData,
  lineChartsData,
  timeLineData,
} from "./mockData/dashboard";
import { login } from "./mockData/permission";
//1.拦截路径 方法 mock数据
Mock.mock(/api\/dashboard\/getTableData/, "get", getTableData);
Mock.mock(/api\/dashboard\/lineChartsData/, "get", lineChartsData);
Mock.mock(/api\/dashboard\/timeLineData/, "get", timeLineData);
//关于权限的mock
Mock.mock(/api\/permission\/login/, "post", login);
