import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtDivider, AtTag } from 'taro-ui';
import { userInfo } from '../../class/userInfo';
import echarts from '../../ec-canvas/echarts';

import './index.less';
import 'taro-ui/dist/style/components/divider.scss';
import 'taro-ui/dist/style/components/timeline.scss';
import 'taro-ui/dist/style/components/icon.scss';
import 'taro-ui/dist/style/components/tag.scss';
import { getResult } from '../../api/api';
type StateType = {
  ec: Object;
  userInfo: userInfo;
  score: number;
  scoreText: Array<any>;
};
let indicatorArray = Taro.getStorageSync('forumList')
  ? JSON.parse(Taro.getStorageSync('forumList'))
  : [{ name: '', key: 0 }];
export default class Index extends Component {
  componentWillMount() {
    indicatorArray = Taro.getStorageSync('forumList')
      ? JSON.parse(Taro.getStorageSync('forumList'))
      : [{ name: '', key: 0 }];
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {
    indicatorArray = Taro.getStorageSync('forumList')
      ? JSON.parse(Taro.getStorageSync('forumList'))
      : [{ name: '', key: 0 }];
    const userInfo = JSON.parse(Taro.getStorageSync('userInfo'));
    this.setState({
      userInfo: userInfo,
    });

    getResult({ id: this.$router.params.id }).then((res) => {
      console.log('res :>> ', res);
      Taro.showLoading({
        title: '加载中...',
      });
      let { err_code, err_msg, data } = res.data;
      data = data[0];
      if (err_code === 0) {
        this.setState({
          score: (data.allScore / 2.5).toFixed(1), // 总分250分转换为百分制保留一位小数
        });
        const scoreArray = data.scoreArray.split('-');
        const scoreText = scoreArray.map((item, index) => {
          let key = '';
          switch (Math.floor(item / 5.01)) {
            case 1:
              key = 'a_answer';
              break;
            case 2:
              key = 'b_answer';
              break;
            case 3:
              key = 'c_answer';
              break;
            case 4:
              key = 'd_answer';
              break;
          }
          return {
            name: indicatorArray[index].name,
            text: indicatorArray[index][key],
          };
        });
        this.setState({
          scoreText: scoreText,
        });
        this.setEcharts(scoreArray);
      }
    });
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
    // 定义需要引入的第三方组件
    usingComponents: {
      'ec-canvas': '../../ec-canvas/ec-canvas', // 书写第三方组件的相对路径
    },
  };
  state: StateType;
  constructor(props) {
    super(props);
    this.state = {
      ec: {
        lazyLoad: true,
      },
      score: 0,
      scoreText: [
        {
          name: '',
          text: '',
        },
      ],
      userInfo: {
        name: '', // 姓名
        avatar: '', // 头像
        parent_phone: '', // 家长电话
        student_name: '', // 学生姓名
        grade: '', // 年级
        school_name: '', // 学校名
      },
    };
  }
  chartNode: any;
  refCharts = (node) => {
    this.chartNode = node;
  };
  setEcharts(value) {
    this.chartNode.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width,
        height,
      });
      canvas.setChart(chart);
      var option = {
        title: {
          text: '',
        },
        tooltip: {
          show: true,
          formatter: function(param) {
            let str = `${param.seriesName}`;
            for (let i = 0; i < param.value.length; i++) {
              str += i % 2 ? ' ' : '\n';
              str += `${indicatorArray[i].name}:${param.value[i]}`;
            }
            return str;
          },
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          indicator: indicatorArray.map((item) => {
            return {
              name: item.name,
              max: 25,
            };
          }),
          radius: 100,
        },
        series: [
          {
            name: '成绩分布图',
            type: 'radar',
            data: [
              {
                value: value,
                name: '学生能力图',
                areaStyle: {
                  opacity: 0.9,
                  color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                    {
                      color: '#B8D3E4',
                      offset: 0,
                    },
                    {
                      color: '#72ACD1',
                      offset: 1,
                    },
                  ]),
                },
              },
            ],
          },
        ],
      };
      chart.setOption(option);
      return chart;
    });
    Taro.hideLoading();
  }

  render() {
    const forumDom = this.state.scoreText.map((item, key) => {
      return (
        <View className="result-item" key={Math.random() + key}>
          <View className="forum-title">
            <AtTag type="primary" circle active={true} disabled={true}>
              {item.name}
            </AtTag>
          </View>
          <View className="forum-content">{item.text}</View>
        </View>
      );
    });
    return (
      <View className="analysis-index">
        <View className="introduce">
          <View className="name">
            <Text>{this.state.userInfo.student_name}</Text>
          </View>
          <View className="item">
            <Text>
              {this.state.userInfo.school_name} / {this.state.userInfo.grade}
            </Text>
          </View>
          <View className="score">
            得分：<Text>{this.state.score}</Text> 分
          </View>
        </View>
        <AtDivider content="成绩分布图" fontColor="#555" lineColor="#bebebe" />
        <View className="echarts">
          <ec-canvas
            id="mychart-dom-area"
            ref={this.refCharts}
            canvas-id="mychart-area"
            ec={this.state.ec}
          ></ec-canvas>
        </View>
        <AtDivider content="成绩分析" fontColor="#555" lineColor="#bebebe" />
        <View className="result">{forumDom}</View>
        <AtDivider
          content="没有更多了"
          fontColor="#999"
          fontSize="10px"
          lineColor="#999"
        />
      </View>
    );
  }
}
