import Taro, { Component, Config } from '@tarojs/taro';
import Index from './pages/index';
import { login, getPartList } from './api/api';

import './app.less';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}

  componentDidShow() {
    Taro.getUserInfo({
      success(res) {
        const { userInfo } = res;
        console.log('userInfo :>> ', userInfo);
        Taro.setStorageSync('userInfo', JSON.stringify(userInfo));
        Taro.setStorageSync('shouquan', JSON.stringify(true));
        login().then((res) => {
          console.log('res :>> ', res);
          if (res.err_code) {
            console.log('res :>> ', res);
          } else {
            Taro.setStorageSync('isLogin', JSON.stringify(true));
          }

          getPartList();
        });
      },
      fail(res) {
        console.log('res :>> ', res);
        Taro.setStorageSync('shouquan', JSON.stringify(false));
        Taro.setStorageSync('isLogin', JSON.stringify(false));
      },
    });
  }

  componentDidHide() {}

  componentDidCatchError() {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/analysis/index',
      'pages/user/user',
      'pages/bar/index',
      'pages/question/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      color: '#bfbfbf',
      selectedColor: '#4889f7',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './assets/images/icon/home.png',
          selectedIconPath: './assets/images/icon/home-active.png',
        },
        {
          pagePath: 'pages/analysis/index',
          text: '查看结果',
          iconPath: './assets/images/icon/home.png',
          selectedIconPath: './assets/images/icon/home-active.png',
        },
        {
          pagePath: 'pages/user/user',
          text: '个人中心',
          iconPath: './assets/images/icon/me.png',
          selectedIconPath: './assets/images/icon/me-active.png',
        },
      ],
    },
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById('app'));
