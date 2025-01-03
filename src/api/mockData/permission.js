import Mock from "mockjs";
export const login = (config) => {
  const { username, password } = JSON.parse(config.body); //获取用户信息
  //先判断用户是否存在
  //在判断密码是否正确
  //最后分配菜单权限
  if (username === "admin" && password === "123456") {
    return {
      code: 200,
      data: {
        username: "admin",
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
          // {
          //   name: "管理",
          //   icon: "Management",
          //   label: "management",
          //   children: [
          //     {
          //       name: "日记管理",
          //       icon: "Suitcase",
          //       path: "/management/diary",
          //       label: "diaryForManagement",
          //     },
          //     {
          //       name: "用户管理",
          //       icon: "Cloudy",
          //       path: "/management/user",
          //       label: "userForManagement",
          //     },
          //   ],
          // },
        ],
        role: "admin",
        avatar:
          "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        token: Mock.Random.guid(),
        messgae: "获取成功",
      },
    };
  } else if (username === "user" && password === "123456") {
    return {
      code: 200,
      data: {
        username: "user",
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
        role: "user",
        avatar:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
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
