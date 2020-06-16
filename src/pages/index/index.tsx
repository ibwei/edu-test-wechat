import Taro, { Component, Config } from '@tarojs/taro';
import { View, Image, Text, Button } from '@tarojs/components';
import { AtButton, AtCurtain, AtForm, AtInput } from 'taro-ui';
import { login, getList, getResult } from '../../api/api';

import './index.less';
import 'taro-ui/dist/style/components/button.scss';
import 'taro-ui/dist/style/components/loading.scss';
import 'taro-ui/dist/style/components/curtain.scss';
import 'taro-ui/dist/style/components/form.scss';
import 'taro-ui/dist/style/components/input.scss';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {
    Taro.getUserInfo({
      success(res) {
        console.log('res :>> ', res);
        const { userInfo } = res;
        Taro.setStorageSync('userInfo', JSON.stringify(userInfo));
        login();
      },
      fail(res) {
        console.log('res :>> ', res);
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
    navigationBarTitleText: '学商系统',
  };

  getUserInfo(res) {
    if (res.detail.userInfo) {
      console.log('res :>> ', res);
      const { userInfo } = res.detail;
      console.log('userInfo :>> ', userInfo);
      Taro.setStorageSync('userInfo', JSON.stringify(userInfo));
      login();
    }
  }
  onClose() {
    console.log('1 :>> ', 1);
  }
  onSubmit() {
    console.log('1 :>> ', 1);
  }
  studentInfo = {
    name: '',
    school: '',
    grade: '',
    tel: '',
  };
  onChange() {}
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
          {/* <AtButton
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
          </AtButton> */}
          <Button
            className="btn"
            openType="getUserInfo"
            onGetUserInfo={this.getUserInfo}
          >
            开始测试
          </Button>
        </View>
        <AtCurtain isOpened={false} onClose={this.onClose.bind(this)}>
          <View className="tishi">
            <AtForm onSubmit={this.onSubmit.bind(this)}>
              <AtInput
                name="value"
                title="学生姓名:"
                type="text"
                placeholder="请输入学生姓名"
                value={this.studentInfo.name}
                onChange={this.onChange.bind(this)}
              />
              <AtInput
                name="value"
                title="学　　校:"
                type="text"
                placeholder="请输入就读学校"
                value={this.studentInfo.school}
                onChange={this.onChange.bind(this)}
              />
              <AtInput
                name="value"
                title="年　　级:"
                type="text"
                placeholder="请输入就读年级"
                value={this.studentInfo.grade}
                onChange={this.onChange.bind(this)}
              />
              <AtInput
                name="value"
                title="家长电话:"
                type="text"
                placeholder="请输入家长电话"
                value={this.studentInfo.grade}
                onChange={this.onChange.bind(this)}
              />
              <AtButton formType="submit">提交</AtButton>
            </AtForm>
          </View>
        </AtCurtain>
      </View>
    );
  }
}
