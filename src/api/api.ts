import Taro from "@tarojs/taro";
const url = "http://edu.pinxianhs.com/api/wechat/";

// 拦截器
const interceptor = function(chain) {
  const requestParams = chain.requestParams;
};
export const login = async (): Promise<any> => {
  const { code } = await Taro.login();
  const userInfo = JSON.parse(Taro.getStorageSync("userInfo"));
  let resData: any = "";
  await Taro.request({
    method: "POST",
    url: url + "user/login",
    data: {
      code: code,
      token: Taro.getStorageSync("token"),
      ...userInfo,
    },
    success: function(res) {
      const { data, err_code, err_msg } = res;
      resData = res;
      if (err_code) {
        console.log(err_msg);
      } else {
        Taro.setStorageSync("token", data.token);
        Taro.setStorageSync("userInfo", JSON.stringify(data.user));
      }
    },
    fail: function(e) {
      console.log("e :>> ", e);
    },
  });
  return Promise.resolve(resData);
};
// 获取题目列表
export const getList = async (): Promise<any> => {
  let resData: any;
  // await Taro.addInterceptor()
  await Taro.request({
    method: "GET",
    url: url + "test/list",
    data: { token: Taro.getStorageSync("token") },
    success: function(res) {
      console.log("success :>> ", res);
      resData = res;
    },
    fail: function(res) {
      console.log("fail :>> ", res);
      // if (res.err_code == 401) {
      //   console.log('1 :>> ', 1);
      // }
    },
  });
  return Promise.resolve(resData);
};
// 获取结果
export const getResult = async (): Promise<any> => {
  let resData: any;
  const userInfo = JSON.parse(Taro.getStorageSync("userInfo"));
  await Taro.request({
    method: "GET",
    url: url + "test/result",
    data: { token: Taro.getStorageSync("token"), id: userInfo.id },
  }).then((res) => {
    const { data, err_code, err_msg } = res;
    if (err_code == 401) {
      console.log("err_msg :>> ", err_msg);
      login();
      getList();
    } else {
      resData = res;
    }
  });
  return Promise.resolve(resData);
};
export const pushAnwser = async (params): Promise<any> => {
  let resData: any;
  const userInfo = JSON.parse(Taro.getStorageSync("userInfo"));
  await Taro.request({
    method: "POST",
    url: url + "test/add",
    data: { token: Taro.getStorageSync("token"), ...params },
  }).then((res) => {
    const { data, err_code, err_msg } = res;
    resData = res;
    if (err_code == 401) {
      login();
    }
  });
  return Promise.resolve(resData);
};
