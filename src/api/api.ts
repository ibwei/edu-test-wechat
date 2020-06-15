import Taro from '@tarojs/taro';
const url = 'http://edu.ibwei.com/api/wechat/';
export const login = async () => {
  const { code } = await Taro.login();
  const userInfo = JSON.parse(Taro.getStorageSync('userInfo'));
  await Taro.request({
    method: 'POST',
    url: url + 'user/login',
    params: {
      token: Taro.getStorageSync('token'),
    },
    data: {
      code: code,
      ...userInfo,
    },
  }).then((res) => {
    const { data, err_code, err_msg } = res;
    if (err_code) {
      console.log(err_msg);
    } else {
      console.log(res);
      Taro.setStorageSync('token', data.token);
      Taro.setStorageSync('userInfo', JSON.stringify(data.user));
    }
  });
};
// 获取题目列表
export const getList = async (): Promise => {
  let resData = '';
  await Taro.request({
    method: 'GET',
    url: url + 'test/list',
    data: { token: Taro.getStorageSync('token') },
  }).then((res) => {
    const { data, err_code, err_msg } = res;
    if (err_code == 401) {
      console.log('err_msg :>> ', err_msg);
      login();
      getList();
    } else {
      resData = res;
    }
  });
  return Promise.resolve(resData);
};
// 获取结果
export const getResult = async (): Promise => {
  let resData = '';
  const userInfo = JSON.parse(Taro.getStorageSync('userInfo'));
  await Taro.request({
    method: 'GET',
    url: url + 'test/result',
    data: { token: Taro.getStorageSync('token'), id: userInfo.id },
  }).then((res) => {
    const { data, err_code, err_msg } = res;
    if (err_code == 401) {
      console.log('err_msg :>> ', err_msg);
      login();
      getList();
    } else {
      resData = res;
    }
  });
  return Promise.resolve(resData);
};
export const pushAnwser = async (params): Promise => {
  let resData = '';
  const userInfo = JSON.parse(Taro.getStorageSync('userInfo'));
  await Taro.request({
    method: 'POST',
    url: url + 'test/add',
    data: { token: Taro.getStorageSync('token'), ...params },
  }).then((res) => {
    const { data, err_code, err_msg } = res;
    resData = res;
    if (err_code == 401) {
      login();
    }
  });
  return Promise.resolve(resData);
};
