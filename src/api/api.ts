import Taro from '@tarojs/taro';
const url = 'https://xueshangcs.com/api/wechat/';

// 登录
export const login = async (): Promise<any> => {
  Taro.showLoading({
    title: '加载中...',
  });
  const { code } = await Taro.login();
  const userInfo = JSON.parse(Taro.getStorageSync('userInfo'));
  let resData: any = '';
  await Taro.request({
    method: 'POST',
    url: url + 'user/login',
    data: {
      code: code,
      token: Taro.getStorageSync('token'),
      ...userInfo,
    },
    success: function(res) {
      const { data } = res;
      resData = res;
      console.log('res :>> ', res);
      if (data.err_code == 0) {
        Taro.setStorageSync('token', data.token);
        Taro.setStorageSync('userInfo', JSON.stringify(data.user));

        Taro.hideLoading();
      }
    },
    fail: function(e) {
      console.log('e :>> ', e);
      Taro.hideLoading();
    },
  });
  return Promise.resolve(resData);
};
// 获取题目列表
export const getList = async (): Promise<any> => {
  let resData: any;
  Taro.showLoading({
    title: '获取题目加载中...',
  });
  await Taro.request({
    method: 'GET',
    url: url + 'test/list',
    data: { token: Taro.getStorageSync('token') },
    success: function(res) {
      console.log('list :>> ', res);
      const { data, err_msg, err_code } = res.data;
      if (err_code == 0) {
        Taro.hideLoading();
        resData = res;
      }
    },
    fail: function(res) {
      Taro.hideLoading();
      console.log('list :>> ', res);
      // if (res.err_code == 401) {
      //   console.log('1 :>> ', 1);
      // }
    },
  });
  return Promise.resolve(resData);
};
// 获取结果
export const getResult = async (params): Promise<any> => {
  let resData: any;
  const userInfo = JSON.parse(Taro.getStorageSync('userInfo'));
  await Taro.request({
    method: 'POST',
    url: url + 'test/result',
    data: { token: Taro.getStorageSync('token'), id: params.id },
  }).then((res) => {
    const { data, err_code, err_msg } = res;
    resData = res;
    if (err_code == 401) {
      console.log('err_msg :>> ', err_msg);
    }
  });
  return Promise.resolve(resData);
};
// 提交答案
export const pushAnwser = async (params): Promise<any> => {
  let resData: any;
  await Taro.request({
    method: 'POST',
    url: url + 'test/add',
    data: { token: Taro.getStorageSync('token'), ...params },
  }).then((res) => {
    console.log('提交答案返回 :>> ', res);
    const { data, err_code, err_msg } = res;
    resData = res;
    if (err_code == 401) {
      login();
    }
  });
  return Promise.resolve(resData);
};

// 编辑学生信息
export const editStudet = async (params): Promise<any> => {
  Taro.showLoading({
    title: '保存中...',
  });
  let resData: any;
  const userInfo = JSON.parse(Taro.getStorageSync('userInfo'));
  await Taro.request({
    method: 'POST',
    url: url + 'user/completedInfo',
    data: { token: Taro.getStorageSync('token'), ...params },
    success: function(res) {
      console.log('res :>> ', res);
      resData = res;
      const { data, err_code, err_msg } = res.data;
      if (err_code == 0) {
        Taro.hideLoading();
        console.log('data :>> ', data);
        Taro.setStorageSync('userInfo', JSON.stringify(data));
      } else {
        Taro.showToast({
          title: err_msg,
        });
      }
    },
    fail: function(res) {
      Taro.hideLoading();
      console.log('res :>> ', res);
    },
  });
  return Promise.resolve(resData);
};

// 获取模板列表
export const getPartList = async (): Promise<any> => {
  let resData: any;
  // await Taro.addInterceptor()
  await Taro.request({
    method: 'GET',
    url: url + 'part/list',
    data: { token: Taro.getStorageSync('token') },
    success: function(res) {
      console.log('list :>> ', res);
      const { data, err_msg, err_code } = res.data;
      if (err_code == 0) {
        console.log('data :>> ', data);
        Taro.setStorageSync('forumList', JSON.stringify(data));
      }
    },
    fail: function(res) {
      Taro.hideLoading();
    },
  });
  return Promise.resolve(resData);
};

// 获取答题记录列表
export const getResutlList = async (params): Promise<any> => {
  let resData: any;
  // await Taro.addInterceptor()
  await Taro.request({
    method: 'POST',
    url: url + 'test/history',
    data: { token: Taro.getStorageSync('token'), ...params },
    success: function(res) {
      console.log('list :>> ', res);
      resData = res;
    },
    fail: function(res) {
      resData = res;
      console.log('res :>> ', res);
    },
  });
  return Promise.resolve(resData);
};
