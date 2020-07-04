import Taro from '@tarojs/taro';
// 引入打印拦截器
// Taro.addInterceptor(Taro.interceptors.logInterceptor)

const BaseUrl = 'https://xueshangcs.com/api/wechat/';

// 定义请求拦截拦截器
const Interceptor = function(chain) {
  //  请求前统一添加 token
  const { method, data, url } = chain.requestParams;
  const requestParams = {
    ...chain.requestParams,
    data: { ...data, token: Taro.getStorageSync('token') },
    url: BaseUrl + url,
  };

  // 添加统一打印日志
  console.log(`http ${method || 'GET'} --> ${requestParams.url} data: `, data);
  // 添加响应拦截处理
  return chain
    .proceed(requestParams)
    .then((res) => {
      console.log(`http <-- ${url} result:`, res);
      const { err_code, err_msg } = res.data;
      // 错误处理
      if (err_code) {
        Taro.showToast({
          title: err_msg.length > 8 ? '请求错误' : err_msg,
          icon: 'none',
          duration: 2000,
        });
        // 如果token 过期,重新登录
        if (err_code === 401) {
          Taro.setStorageSync('isLogin', false);
          Taro.setStorageSync('token', '');
          login();
        }
        return Promise.reject('请求错误');
      } else {
        return res;
      }
    })
    .catch((err) => {
      Taro.showToast({
        title: '网络错误,请稍后再试',
        icon: 'success',
        duration: 2000,
      });
      console.log(err);
      throw new Error('网络错误');
    });
};

Taro.addInterceptor(Interceptor);

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
    url: 'user/login',
    data: {
      code: code,
      ...userInfo,
    },
    success(res) {
      resData = res.data;
      if (resData.err_code == 0) {
        Taro.setStorageSync('token', resData.token);
        Taro.setStorageSync('isLogin', true);
        Taro.setStorageSync('userInfo', JSON.stringify(resData.user));
      } else {
        Taro.setStorageSync('isLogin', false);
      }
      Taro.hideLoading();
    },
    fail() {
      Taro.hideLoading();
      return Promise.reject('登录失败');
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
    url: 'test/list',
    success(res) {
      Taro.hideLoading();
      resData = res;
      return Promise.resolve(resData);
    },
    fail() {
      Taro.hideLoading();
    },
  });
  return Promise.resolve(resData);
};

// 获取结果
export const getResult = async (params): Promise<any> => {
  let resData: any;
  await Taro.request({
    method: 'POST',
    url: 'test/result',
    data: { id: params.id },
  }).then((res) => {
    resData = res;
  });
  return Promise.resolve(resData);
};
// 提交答案
export const pushAnwser = async (params): Promise<any> => {
  let resData = null;
  await Taro.request({
    method: 'POST',
    url: 'test/add',
    data: { ...params },
  }).then((res: any) => {
    resData = res;
    return Promise.resolve(resData);
  });
  return Promise.resolve(resData);
};

// 编辑学生信息
export const editStudet = async (params): Promise<any> => {
  Taro.showLoading({
    title: '保存中...',
  });
  let resData: any;
  await Taro.request({
    method: 'POST',
    url: 'user/completedInfo',
    data: { ...params },
    success(res) {
      resData = res;
      const { data } = res.data;
      Taro.hideLoading();
      Taro.setStorageSync('userInfo', JSON.stringify(data));
    },
    fail() {
      Taro.hideLoading();
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
    url: 'part/list',
    success(res) {
      const { data } = res.data;
      Taro.setStorageSync('forumList', JSON.stringify(data));
      return Promise.resolve(resData);
    },
    fail() {
      Taro.hideLoading();
    },
  });
  return Promise.resolve(resData);
};

// 获取答题记录列表
export const getResutlList = async (params): Promise<any> => {
  // await Taro.addInterceptor()
  let resData = null;
  await Taro.request({
    method: 'POST',
    url: 'test/history',
    data: { ...params },
    success(res) {
      resData = res.data;
      return Promise.resolve(resData);
    },
  });
  return Promise.resolve(resData);
};
