import Mock from "mockjs";
export const getDynamicMenu = (config) => {
  const { username, password } = JSON.parse(config.body); //获取用户信息
  //先判断用户是否存在
  //在判断密码是否正确
  //最后分配菜单权限
  if (username === "admin" && password === "123456") {
    return {
      code: 200,
      data: {
        menuList: [
          {
            name: "控制台",
            icon: "Histogram",
            path: "/dashboard",
            label: "dashboard",
          },
          {
            name: "日记",
            icon: "Notebook",
            path: "/diary",
            label: "diary",
          },
          {
            name: "个人中心",
            icon: "UserFilled",
            path: "/user",
            label: "user",
          },
          {
            name: "管理",
            icon: "Management",
            label: "management",
            children: [
              {
                name: "日记管理",
                icon: "Suitcase",
                path: "/management/diary",
                label: "diaryForManagement",
              },
              {
                name: "用户管理",
                icon: "Cloudy",
                path: "/management/user",
                label: "userForManagement",
              },
            ],
          },
        ],
        token: Mock.Random.guid(),
        messgae: "获取成功",
      },
    };
  } else if (username === "user" && password === "123456") {
    return {
      code: 200,
      data: {
        menuList: [
          {
            name: "控制台",
            icon: "Histogram",
            path: "/dashboard",
            label: "dashboard",
          },
          {
            name: "日记",
            icon: "Notebook",
            path: "/diary",
            label: "diary",
          },
        ],
        messgae: "获取成功",
        token: Mock.Random.guid(),
      },
    };
  } else {
    return {
      code: 404,
      data: {
        messgae: "用户不存在或密码错误",
      },
    };
  }
};
