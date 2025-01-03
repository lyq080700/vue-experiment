/***
 * 封装整个项目的api请求
 */

import request from "./request";
//获取控制台表格数据
export const getTableDataApi = () => {
  return request({
    url: "/dashboard/getTableData",
    method: "get",
  });
};
//获取时间轴数据
export const getTimelineDataApi = () => {
  return request({
    url: "/dashboard/timeLineData",
    method: "get",
  });
};
//获取折线图数据
export const getlineChartDataApi = () => {
  return request({
    url: "/dashboard/lineChartsData",
    method: "get",
  });
};

//获取动态菜单数据
export const login = (params) => {
  return request({
    url: "/permission/login",
    method: "post",
    data: params,
  });
};
