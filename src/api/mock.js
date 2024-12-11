import Mock from "mockjs";
import { getTableData } from "./mockData/dashboard";
//1.拦截路径 方法 mock数据
Mock.mock(/api\/dashboard\/getTableData/, "get", getTableData());
