import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtDivider, AtTimeline } from 'taro-ui';

import echarts from '../../ec-canvas/echarts';

import './index.less';
import 'taro-ui/dist/style/components/divider.scss';
import 'taro-ui/dist/style/components/timeline.scss';
import 'taro-ui/dist/style/components/icon.scss';
let chart;
function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr, // 像素
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '',
    },
    tooltip: {},
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
      indicator: [
        { name: '预习策略', max: 50 },
        { name: '听课策略', max: 50 },
        { name: '笔记策略', max: 50 },
        { name: '复习策略', max: 50 },
        { name: '作业策略', max: 50 },
        { name: '时间管理', max: 50 },
        { name: '学习计划', max: 50 },
        { name: '错题管理', max: 50 },
        { name: '考试策略', max: 50 },
        { name: '阅读策略', max: 50 },
      ],
      radius: 100,
    },
    series: [
      {
        name: '学生能力图',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [48, 25, 30, 33, 20, 27, 40, 50, 38, 17],
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
}

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
    navigationBarTitleText: '测试结果',
    // 定义需要引入的第三方组件
    usingComponents: {
      'ec-canvas': '../../ec-canvas/ec-canvas', // 书写第三方组件的相对路径
    },
  };
  state = {
    ec: {
      onInit: initChart,
    },
    open: [true],
    content: '考得很不错',
  };
  handleClick(value) {
    this.setState({
      open: [value],
    });
    chart.setOption({
      series: [
        {
          data: [
            {
              value: [25, 25, 25, 25, 25, 25, 25, 25, 25, 17],
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
    });
  }

  render() {
    return (
      <View className="index">
        <View className="introduce">
          <View className="name" onClick={this.handleClick}>
            <Text>张三</Text>
          </View>
          <View className="item">
            <Text>重庆摸鱼小学/五年级</Text>
          </View>
          <View className="score">
            得分：<Text>80</Text> 分
          </View>
        </View>
        <AtDivider content="成绩分布图" fontColor="#555" lineColor="#bebebe" />
        <View className="echarts">
          <ec-canvas
            id="mychart-dom-area"
            canvas-id="mychart-area"
            ec={this.state.ec}
          ></ec-canvas>
        </View>
        <AtDivider content="成绩分析" fontColor="#555" lineColor="#bebebe" />
        <View className="result">
          <AtTimeline
            pending
            items={[
              {
                title: '刷牙洗脸',
                content: [
                  '大概8:00牛奶+面包，餐后记得吃药牛奶+面包，餐后记得吃药牛奶+面包，餐后记得吃药牛奶+面包，餐后记得吃药牛奶+面包，餐后记得吃药',
                ],
                icon: 'bookmark',
              },
              {
                title: '吃早餐',
                content: [
                  '牛奶+面包，餐后记得吃药牛奶+面包，餐后记得吃药牛奶+面包，餐后记得吃药牛奶+面包，餐后记得吃药牛奶+面包，餐后记得吃药',
                ],
                icon: 'bookmark',
              },
              {
                title: '上班',
                content: ['查看邮件', '写PPT', '发送PPT给领导'],
                icon: 'bookmark',
              },
              { title: '睡觉', content: ['不超过23:00'], icon: 'bookmark' },
            ]}
          ></AtTimeline>
        </View>
      </View>
    );
  }
}
