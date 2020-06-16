import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Text, Button } from "@tarojs/components";
import { AtButton, AtCurtain } from "taro-ui";
import { login, getList, getResult } from "../../api/api";

import "./index.less";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/loading.scss";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {
    Taro.getUserInfo({
      success(res) {
        console.log("333");
        console.log("res :>> ", res);
        const { userInfo } = res;
        Taro.setStorageSync("userInfo", JSON.stringify(userInfo));
        login();
      },
      fail(res) {
        console.log("res :>> ", res);
      },
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  /* getUserInfo() {
    Taro.authorize({
      scope: 'scope.userInfo',
      success() {
        Taro.getUserInfo({
          success(res) {
            console.log('res :>> ', res);
          },
        });
      },
      fail(res) {
        console.log('res :>> ', res);
      },
    });
  } */
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "学商系统",
  };

  getUserInfo(res) {
    if (res.detail.userInfo) {
      const { userInfo } = res;
      Taro.setStorageSync("userInfo", JSON.stringify(userInfo));
      login();
    }
  }
  getList() {
    getList().then((res) => {
      console.log("res :>> ", res);
    });
  }
  getresult() {
    getResult().then((res) => {
      console.log("res :>> ", res);
    });
  }
  render() {
    return (
      <View>
        <View className="index">
          <View className="icon">
            <Image src="../../assets/images/shijiashi.jpg" />
          </View>
          <View className="introduce">
            <View className="title">
              <Text>拾加拾教育：学商测试</Text>
            </View>
            <View className="content">
              <Text>测试内容：考察学生各方面能力</Text>
            </View>
            <View className="content">
              <Text>测试时间：不限</Text>
            </View>
            <View className="content">
              <Text>提交条件：题目全部完成后方可提交</Text>
            </View>
            <View className="content">
              <Text>测试形式：自主测试</Text>
            </View>
          </View>
        </View>
        <View className="button">
          <AtButton
            type="primary"
            open-type="getUserInfo"
            onClick={this.getList}
          >
            获取题库
          </AtButton>
          <AtButton
            type="primary"
            open-type="getUserInfo"
            onClick={this.getresult}
          >
            获取测试结果
          </AtButton>
          <Button openType="getUserInfo" onGetUserInfo={this.getUserInfo}>
            开始测试
          </Button>
        </View>
      </View>
    );
  }
}
