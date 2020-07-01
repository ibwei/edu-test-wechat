import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';

import './index.less';
import 'taro-ui/dist/style/components/list.scss';
import 'taro-ui/dist/style/components/icon.scss';
import { getResutlList, login } from '../../api/api';
type StateType = {
  list: Array<any>;
  page: number;
  size: number;
};
export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {
    this.getList();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  getList() {
    getResutlList({ pageSize: this.state.size, pageNum: this.state.page }).then(
      (res) => {
        if (res.data.resultCode == 0) {
          let list = res.data.data;
          let stateList = this.state.list;
          stateList.push(...list);
          // stateList.push(...list);
          // stateList.push(...list);
          // stateList.push(...list);
          // stateList.push(...list);
          // stateList.push(...list);
          // stateList.push(...list);
          this.setState({
            list: stateList,
          });
        } else if (res.data.err_code == 401) {
          login().then(() => {
            this.getList();
          });
        }
      }
    );
  }
  componentDidHide() {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '测试结果',
  };
  state: StateType;
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      size: 8,
      list: [],
    };
  }
  goDetali(id) {
    Taro.navigateTo({
      url: '/pages/analysis/index?id=' + id,
    });
  }
  render() {
    const listItem = this.state.list.map((item) => {
      return (
        <AtListItem
          key={item.id}
          title="学商测试"
          note={item.created_at}
          arrow="right"
          iconInfo={{ size: 25, color: '#78A4FA', value: 'file-generic' }}
          onClick={this.goDetali.bind(this, item.id)}
        />
      );
    });
    return (
      <View className="index">
        <AtList>{listItem}</AtList>
      </View>
    );
  }
}
