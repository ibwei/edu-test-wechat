import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Text, Button, ScrollView } from "@tarojs/components";
import {
  AtButton,
  AtModal,
  AtModalContent,
  AtModalAction,
  AtActivityIndicator,
  AtToast,
} from "taro-ui";

import "./index.less";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/loading.scss";
import "taro-ui/dist/style/components/checkbox.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/modal.scss";
import "taro-ui/dist/style/components/activity-indicator.scss";
import "taro-ui/dist/style/components/toast.scss";

import { getList, pushAnwser } from "../../api/api";

class Question {
  title: string;
  a_answer: string;
  a_score: number;
  b_answer: string;
  b_score: number;
  c_answer: string;
  c_score: number;
  d_answer: string;
  d_score: number;
  e_answer: string;
  e_score: number;
}
export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {
    this.initList();
  }

  componentWillUnmount() {}

  componentDidShow() {}
  // 初始化获取数组
  initList() {
    this.setState({
      nowIndex: 0,
    });
    this.setState({
      chooesAnswer: {
        value: -1,
        key: 0,
      },
    });
    this.setState({
      currentQuestion: "",
    });
    getList()
      .then((res) => {
        console.log("res :>> ", res);
        let { err_code, data } = res.data;
        if (err_code == "0") {
          this.questionList = data.flat(1);
          this.questionArray = this.questionList.map((item) => {
            return item.id;
          });
          // 答案数组
          this.answerArray = this.answerArray.fill(-1);
          this.setState({
            answerArray: this.answerArray,
          });
          // 分数数组
          this.scoreArray = this.scoreArray.fill(-1);
          console.log("this.questionArray :>> ", this.questionArray);
          this.setCurrentQuestion(0);
        }
      })
      .catch((err) => {});
  }
  componentDidHide() {}
  /** 设置当前题目 */
  setCurrentQuestion(index): void {
    // 获取题数
    const length = this.questionList.length;
    // 当前题目索引
    let nowIndex = index;
    // 下一题
    let nextQuestion: Question;
    // 判断是否为最后一题
    if (nowIndex < length) {
      nextQuestion = this.questionList[nowIndex];
      console.log("nextQuestion :>> ", nextQuestion);
      // 设置题目
      this.setState({
        currentQuestion: nextQuestion.title,
      });
      // 设置答案
      this.setState({
        currentAnswerList: [
          {
            label: nextQuestion.a_answer,
            value: 0,
            key: nextQuestion.a_score,
          },
          {
            label: nextQuestion.b_answer,
            value: 1,
            key: nextQuestion.b_score,
          },
          {
            label: nextQuestion.c_answer,
            value: 2,
            key: nextQuestion.c_score,
          },
          {
            label: nextQuestion.d_answer,
            value: 3,
            key: nextQuestion.d_score,
          },
          {
            label: nextQuestion.e_answer,
            value: 4,
            key: nextQuestion.e_score,
          },
        ],
      });
      this.setState({
        nowIndex: nowIndex,
      });
      if (nowIndex > 6 && nowIndex < length - 7) {
        this.scrollLeft = Number(nowIndex - 6) * 33;
      }
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      buttonShow: false, // 按钮是否禁用
      buttonTitle: "下一题",
      answerArray: [],
      nowIndex: 0, // 当前题目索引
      // 选择的答案
      chooesAnswer: {
        value: -1,
        key: 0,
      },
      currentQuestion: "",
      currentAnswerList: [
        {
          label: "",
          value: 0,
          key: 1,
        },
        {
          label: "",
          value: 1,
          key: 2,
        },
        {
          label: "",
          value: 2,
          key: 3,
        },
        {
          label: "",
          value: 3,
          key: 4,
        },
        {
          label: "",
          value: 4,
          key: 5,
        },
      ],
    };
  }
  numberList = new Array(50).fill(0).map((item, index) => index + 1);
  questionList: Array<any> = [];
  // 问题数组
  questionArray: Array<any> = new Array(50);
  // 答案数组
  answerArray: Array<any> = new Array(50);
  // 分数数组
  scoreArray: Array<any> = [];
  scoreSum = 0;
  scrollLeft = 0;
  // 选择选项
  chooesAnswer(value, key) {
    const index = this.state.nowIndex;
    this.setState({
      chooesAnswer: {
        value: value,
        key: key,
      },
    });
    this.answerArray.splice(index, 1, value);
    this.scoreArray.splice(index, 1, key);
    this.setState({
      answerArray: this.answerArray,
    });
    console.log("this.state.answerArray :>> ", this.state.answerArray);
    console.log("this.answerArray.includes(-1) :>> ", this.answerArray);
    if (!this.answerArray.includes(-1) && !this.scoreArray.includes(-1)) {
      this.setState({
        buttonShow: true,
      });
      Taro.showToast({
        title: "恭喜你已经做完全部的题目了，快去提交试卷吧！",
      });
      return false;
    }
    if (index < this.questionList.length - 1) {
      this.setCurrentQuestion(index + 1);
    } else {
      Taro.showToast({
        title: "前面是不是还有题目忘记做了呢？快回去做吧！",
        icon: "none",
        duration: 2000,
      });
    }
  }
  // 保存答案
  addAnswer() {
    let state = this.state;
    this.scoreSum += Number(this.state.chooesAnswer.key);
    this.setState({
      buttonDisabled: true,
    });

    this.setState({
      chooesAnswer: {
        value: -1,
        key: -1,
      },
    });
    if (this.state.nowIndex == this.questionList.length - 2) {
      this.setState({
        buttonTitle: "交卷",
      });
    }
    if (this.state.buttonTitle == "交卷") {
      let scoreArray = [];
      let sum = 0;
      this.scoreArray.forEach((item, index) => {
        sum += item;
        if (index % 5 == 4) {
          scoreArray.push(sum);
          sum = 0;
        }
      });
      let params = {
        questionArray: this.questionArray.join("-"),
        answerArray: this.answerArray.join("-"),
        scoreArray: scoreArray.join("-"),
        allScore: this.scoreSum,
      };
      Taro.showLoading({
        title: "答案提交中...",
      });
      pushAnwser(params).then((res) => {
        let { err_code, data, resultCode } = res.data;
        if (resultCode == "0") {
          Taro.hideLoading();
          Taro.showToast({
            title: "提交成功!",
          });
          setTimeout(() => {
            Taro.hideToast();
          }, 2000);
        }
      });
    }
  }
  onScroll(e) {
    console.log("e :>> ", e);
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "测试界面",
  };

  render() {
    const nowIndex = this.state.nowIndex;
    const anwserList = this.state.currentAnswerList.map((item, index) => {
      return (
        <View
          className={
            this.state.chooesAnswer.value == item.value
              ? "answer-item checked"
              : "answer-item"
          }
          key={index}
          onClick={this.chooesAnswer.bind(this, item.value, item.key)}
        >
          {item.value}.{item.label}
        </View>
      );
    });
    const Threshold = 20;
    return (
      <View className="">
        <View className="question">
          <View className="item-box">
            <ScrollView
              className="scrollview"
              scrollX
              scrollWithAnimation
              scrollLeft={this.scrollLeft}
              lowerThreshold={Threshold}
              onScroll={this.onScroll}
            >
              {this.numberList.map((item) => {
                return (
                  <View
                    className={
                      this.state.answerArray[item - 1] != -1
                        ? "done question-item"
                        : "question-item"
                    }
                    onClick={this.setCurrentQuestion.bind(this, item - 1)}
                  >
                    {item}
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View className="question-box">
            <View className="question-title">{this.state.currentQuestion}</View>
            <View className="answer-box">{anwserList}</View>
          </View>
          <View>
            {this.state.buttonShow ? (
              <AtButton
                className="button"
                onClick={this.addAnswer.bind(this)}
                circle
                type="primary"
              >
                提交
              </AtButton>
            ) : (
              ""
            )}
          </View>
        </View>
      </View>
    );
  }
}
