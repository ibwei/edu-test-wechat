import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtAvatar, AtIcon } from 'taro-ui';
import 'taro-ui/dist/style/components/avatar.scss';
import 'taro-ui/dist/style/components/icon.scss';
import './index.less';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '个人中心',
  };

  render() {
    return (
      <View className="index">
        <View className="userInfo">
          <AtAvatar
            circle
            size="large"
            image="https://jdc.jd.com/img/200"
            text="无"
          ></AtAvatar>
          <View className="introduce">
            <View className="name">
              <Text>张三</Text>
            </View>
            <View className="item">
              <Text>重庆摸鱼小学/五年级</Text>
            </View>
          </View>
        </View>
        <View className="card">
          <View className="cardItem">
            <View className="cardName">
              <AtIcon value="file-generic" size="19" color="#f5222d"></AtIcon>
              <Text className="iconLeft">测试结果</Text>
            </View>
            <View className="cardArrow">
              <AtIcon value="chevron-right" size="20" color="#555"></AtIcon>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
