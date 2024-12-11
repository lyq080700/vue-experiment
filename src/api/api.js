/***
 * 封装整个项目的api请求
 */

import request from "./request";
export const getTableDataApi = () => {
  return request({
    url: "/dashboard/getTableData",
    method: "get",
  });
};
