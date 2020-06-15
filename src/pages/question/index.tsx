import Taro, { Component, Config } from '@tarojs/taro';
import { View, Image, Text, Button } from '@tarojs/components';
import {
  AtButton,
  AtModal,
  AtModalContent,
  AtModalAction,
  AtActivityIndicator,
  AtToast,
} from 'taro-ui';

import './index.less';
import 'taro-ui/dist/style/components/button.scss';
import 'taro-ui/dist/style/components/loading.scss';
import 'taro-ui/dist/style/components/checkbox.scss';
import 'taro-ui/dist/style/components/icon.scss';
import 'taro-ui/dist/style/components/modal.scss';
import 'taro-ui/dist/style/components/activity-indicator.scss';
import 'taro-ui/dist/style/components/toast.scss';

import { getList, pushAnwser } from '../../api/api';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {
    getList()
      .then((res) => {
        console.log('res :>> ', res);
        let { err_code, data } = res.data;
        if (err_code == '0') {
          console.log('1 :>> ', 1);
          this.questionList = data.flat(1);
          console.log('this.questionList :>> ', this.questionList);
          this.setCurrentQuestion(true);
        }
      })
      .catch((err) => {});
  }
  componentDidHide() {}
  /** 设置当前题目 */
  setCurrentQuestion(initialization = false): void {
    // 获取题数
    const length = this.questionList.length;
    // 当前题目索引
    let nowIndex = this.state.nowIndex;
    // 下一题
    let nextQuestion = null;
    // 判断是否为最后一题
    console.log('length :>> ', length);
    console.log('nowIndex :>> ', nowIndex);
    if (nowIndex < length - 1) {
      if (initialization) {
        nextQuestion = this.questionList[0];
      } else {
        nextQuestion = this.questionList[nowIndex + 1];
      }
      // 设置题目
      this.setState({
        currentQuestion: nextQuestion.title,
      });
      // 设置题目id
      this.setState({
        questionId: nextQuestion.id,
      });
      // 设置答案
      this.setState({
        currentAnswerList: [
          {
            label: nextQuestion.a_answer,
            value: 'A',
            key: nextQuestion.a_score,
          },
          {
            label: nextQuestion.b_answer,
            value: 'B',
            key: nextQuestion.b_score,
          },
          {
            label: nextQuestion.c_answer,
            value: 'C',
            key: nextQuestion.c_score,
          },
          {
            label: nextQuestion.d_answer,
            value: 'D',
            key: nextQuestion.d_score,
          },
          {
            label: nextQuestion.e_answer,
            value: 'E',
            key: nextQuestion.e_score,
          },
        ],
      });
      // 设置当前题目索引
      if (initialization) {
        nowIndex = -1;
      }
      this.setState({
        nowIndex: nowIndex + 1,
      });
      if (nowIndex > 5 && this.numberList[9] < length) {
        this.numberList = this.numberList.map((item) => {
          return item + 1;
        });
      }
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      buttonDisabled: true, // 按钮是否禁用
      buttonTitle: '下一题',
      questionId: null, // 题目id
      nowIndex: 0, // 当前题目索引
      // 选择的答案
      chooesAnswer: {
        value: '',
        key: 0,
      },
      currentQuestion: '',
      currentAnswerList: [
        {
          label: '',
          value: 'A',
          key: 1,
        },
        {
          label: '',
          value: 'B',
          key: 2,
        },
        {
          label: '',
          value: 'C',
          key: 3,
        },
        {
          label: '',
          value: 'D',
          key: 4,
        },
        {
          label: '',
          value: 'E',
          key: 5,
        },
      ],
    };
  }
  buttonText = '下一题';
  numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  questionList = [];
  // 问题数组
  questionArray = [];
  // 答案数组
  answerArray = [];
  // 分数数组
  scoreArray = [];
  scoreSum = 0;
  // 选择选项
  chooesAnswer(value, key) {
    console.log('value :>> ', value);
    console.log('key :>> ', key);
    this.setState({
      chooesAnswer: {
        value: value,
        key: key,
      },
    });
    this.setState({
      buttonDisabled: false,
    });
    Taro.showLoading({
      title: '答案提交中...',
    });
    setTimeout(() => {
      Taro.hideLoading();
      Taro.showToast({
        title: '提交成功!',
      });
      setTimeout(() => {
        Taro.hideToast();
      }, 2000);
    }, 2000);
  }
  // 保存答案
  addAnswer() {
    let state = this.state;
    this.questionArray.push(state.questionId);
    this.answerArray.push(state.chooesAnswer.value);
    this.scoreArray.push(state.chooesAnswer.key);
    this.scoreSum += Number(this.state.chooesAnswer.key);
    this.setState({
      buttonDisabled: true,
    });
    this.setCurrentQuestion();
    this.setState({
      chooesAnswer: {
        value: '',
        key: -1,
      },
    });
    if (this.state.nowIndex == this.questionList.length - 2) {
      this.setState({
        buttonTitle: '交卷',
      });
    }
    if (this.state.buttonTitle == '交卷') {
      let params = {
        questionArray: this.questionArray.join('-'),
        answerArray: this.answerArray.join('-'),
        scoreArray: this.scoreArray.join('-'),
        allScore: this.scoreSum,
      };
      console.log('params :>> ', params);
      pushAnwser(params).then((res) => {
        console.log('res :>> ', res);
        let { err_code, data, resultCode } = res.data;
        if (resultCode == '0') {
        }
      });
    }
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '测试界面',
  };

  render() {
    const nowIndex = this.state.nowIndex;
    const anwserList = this.state.currentAnswerList.map((item, index) => {
      return (
        <View
          className={
            this.state.chooesAnswer.value == item.value
              ? 'answer-item checked'
              : 'answer-item'
          }
          key={index}
          onClick={this.chooesAnswer.bind(this, item.value, item.key)}
        >
          {item.value}.{item.label}
        </View>
      );
    });
    return (
      <View className="">
        <View className="question">
          <View className="item-box">
            {this.numberList.map((item) => {
              return (
                <View
                  className={
                    Number(item - 1) < Number(nowIndex)
                      ? 'done question-item'
                      : 'question-item'
                  }
                >
                  {item}
                </View>
              );
            })}
          </View>
          <View className="question-box">
            <View className="question-title">{this.state.currentQuestion}</View>
            <View className="answer-box">{anwserList}</View>
          </View>
          <View>
            <AtButton
              className="button"
              disabled={this.state.buttonDisabled}
              onClick={this.addAnswer.bind(this)}
              circle
              type="primary"
            >
              {this.state.buttonTitle}
            </AtButton>
          </View>
        </View>
      </View>
    );
  }
}
