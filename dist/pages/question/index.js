(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/question/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/question/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/question/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.less */ "./src/pages/question/index.less");

__webpack_require__(/*! taro-ui/dist/style/components/button.scss */ "./node_modules/taro-ui/dist/style/components/button.scss");

__webpack_require__(/*! taro-ui/dist/style/components/loading.scss */ "./node_modules/taro-ui/dist/style/components/loading.scss");

__webpack_require__(/*! taro-ui/dist/style/components/checkbox.scss */ "./node_modules/taro-ui/dist/style/components/checkbox.scss");

__webpack_require__(/*! taro-ui/dist/style/components/icon.scss */ "./node_modules/taro-ui/dist/style/components/icon.scss");

__webpack_require__(/*! taro-ui/dist/style/components/modal.scss */ "./node_modules/taro-ui/dist/style/components/modal.scss");

__webpack_require__(/*! taro-ui/dist/style/components/activity-indicator.scss */ "./node_modules/taro-ui/dist/style/components/activity-indicator.scss");

__webpack_require__(/*! taro-ui/dist/style/components/toast.scss */ "./node_modules/taro-ui/dist/style/components/toast.scss");

var _api = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray37", "$compid__35", "numberList", "buttonDisabled", "buttonTitle", "questionId", "nowIndex", "chooesAnswer", "currentQuestion", "currentAnswerList"], _this.config = {
      navigationBarTitleText: "测试界面"
    }, _this.customComponents = ["AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      this.numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      this.questionList = [];
      // 问题数组
      this.questionArray = [];
      // 答案数组
      this.answerArray = [];
      // 分数数组
      this.scoreArray = [];
      this.scoreSum = 0;
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

      this.state = {
        buttonDisabled: true,
        buttonTitle: "下一题",
        questionId: null,
        nowIndex: 0,
        // 选择的答案
        chooesAnswer: {
          value: -1,
          key: 0
        },
        currentQuestion: "",
        currentAnswerList: [{
          label: "",
          value: 0,
          key: 1
        }, {
          label: "",
          value: 1,
          key: 2
        }, {
          label: "",
          value: 2,
          key: 3
        }, {
          label: "",
          value: 3,
          key: 4
        }, {
          label: "",
          value: 4,
          key: 5
        }]
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var _this2 = this;

      this.setState({
        buttonDisabled: true
      });
      this.setState({
        buttonTitle: "下一题"
      });
      this.setState({
        questionId: null
      });
      this.setState({
        nowIndex: 0
      });
      this.setState({
        chooesAnswer: {
          value: -1,
          key: 0
        }
      });
      this.setState({
        currentQuestion: ""
      });
      (0, _api.getList)().then(function (res) {
        console.log("res :>> ", res);
        var _res$data = res.data,
            err_code = _res$data.err_code,
            data = _res$data.data;

        if (err_code == "0") {
          console.log("1 :>> ", 1);
          _this2.questionList = data.flat(1);
          _this2.setCurrentQuestion(true);
        }
      }).catch(function (err) {});
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
    /** 设置当前题目 */

  }, {
    key: "setCurrentQuestion",
    value: function setCurrentQuestion() {
      var initialization = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // 获取题数
      var length = this.questionList.length;
      // 当前题目索引
      var nowIndex = this.state.nowIndex;
      // 下一题
      var nextQuestion = null;
      // 判断是否为最后一题
      console.log("length :>> ", length);
      console.log("nowIndex :>> ", nowIndex);
      if (nowIndex < length - 1) {
        if (initialization) {
          nextQuestion = this.questionList[0];
        } else {
          nextQuestion = this.questionList[nowIndex + 1];
        }
        // 设置题目
        this.setState({
          currentQuestion: nextQuestion.title
        });
        // 设置题目id
        this.setState({
          questionId: nextQuestion.id
        });
        // 设置答案
        this.setState({
          currentAnswerList: [{
            label: nextQuestion.a_answer,
            value: 0,
            key: nextQuestion.a_score
          }, {
            label: nextQuestion.b_answer,
            value: 1,
            key: nextQuestion.b_score
          }, {
            label: nextQuestion.c_answer,
            value: 2,
            key: nextQuestion.c_score
          }, {
            label: nextQuestion.d_answer,
            value: 3,
            key: nextQuestion.d_score
          }, {
            label: nextQuestion.e_answer,
            value: 4,
            key: nextQuestion.e_score
          }]
        });
        // 设置当前题目索引
        if (initialization) {
          nowIndex = -1;
        }
        this.setState({
          nowIndex: nowIndex + 1
        });
        if (nowIndex > 5 && this.numberList[9] < length) {
          this.numberList = this.numberList.map(function (item) {
            return item + 1;
          });
        }
      }
    }
    // 选择选项

  }, {
    key: "chooesAnswer",
    value: function chooesAnswer(value, key) {
      console.log("value :>> ", value);
      console.log("key :>> ", key);
      this.setState({
        chooesAnswer: {
          value: value,
          key: key
        }
      });
      this.setState({
        buttonDisabled: false
      });
    }
    // 保存答案

  }, {
    key: "addAnswer",
    value: function addAnswer() {
      var state = this.state;
      this.questionArray.push(state.questionId);
      this.answerArray.push(state.chooesAnswer.value);
      this.scoreArray.push(state.chooesAnswer.key);
      this.scoreSum += Number(this.state.chooesAnswer.key);
      this.setState({
        buttonDisabled: true
      });
      this.setCurrentQuestion();
      this.setState({
        chooesAnswer: {
          value: -1,
          key: -1
        }
      });
      if (this.state.nowIndex == this.questionList.length - 2) {
        this.setState({
          buttonTitle: "交卷"
        });
      }
      if (this.state.buttonTitle == "交卷") {
        var scoreArray = [];
        var sum = 0;
        this.scoreArray.forEach(function (item, index) {
          sum += item;
          if (index % 5 == 4) {
            scoreArray.push(sum);
            sum = 0;
          }
        });
        var params = {
          questionArray: this.questionArray.join("-"),
          answerArray: this.answerArray.join("-"),
          scoreArray: scoreArray.join("-"),
          allScore: this.scoreSum
        };
        _taroWeapp2.default.showLoading({
          title: "答案提交中..."
        });
        (0, _api.pushAnwser)(params).then(function (res) {
          var _res$data2 = res.data,
              err_code = _res$data2.err_code,
              data = _res$data2.data,
              resultCode = _res$data2.resultCode;

          if (resultCode == "0") {
            _taroWeapp2.default.hideLoading();
            _taroWeapp2.default.showToast({
              title: "提交成功!"
            });
            setTimeout(function () {
              _taroWeapp2.default.hideToast();
            }, 2000);
          }
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      var numberList = this.numberList;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__35"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__35 = _genCompid2[0],
          $compid__35 = _genCompid2[1];

      var nowIndex = this.__state.nowIndex;
      var loopArray37 = this.numberList.map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = Number(item.$original - 1) < Number(nowIndex) ? "done question-item" : "question-item";
        return {
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "className": "button",
        "disabled": this.__state.buttonDisabled,
        "onClick": this.addAnswer.bind(this),
        "circle": true,
        "type": "primary"
      }, $compid__35, $prevCompid__35);
      Object.assign(this.__state, {
        loopArray37: loopArray37,
        $compid__35: $compid__35,
        numberList: numberList
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["chooesAnswer"], _class.$$componentPath = "pages/question/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\Administrator\\Desktop\\my-projects\\xueshang\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/question/index.tsx?taro&type=template&parse=PAGE&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:/Users/Administrator/Desktop/my-projects/xueshang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/question/index.tsx?taro&type=template&parse=PAGE& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/question/index.wxml";

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/activity-indicator.scss":
/*!****************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/activity-indicator.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/checkbox.scss":
/*!******************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/checkbox.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/modal.scss":
/*!***************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/modal.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/toast.scss":
/*!***************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/toast.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/question/index.less":
/*!***************************************!*\
  !*** ./src/pages/question/index.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/question/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/question/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/question/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/question/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/question/index.tsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************!*\
  !*** ./src/pages/question/index.tsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/question/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/question/index.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************!*\
  !*** ./src/pages/question/index.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_C_Users_Administrator_Desktop_my_projects_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=C:/Users/Administrator/Desktop/my-projects/xueshang/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\Administrator\\Desktop\\my-projects\\xueshang\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/question/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_C_Users_Administrator_Desktop_my_projects_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_C_Users_Administrator_Desktop_my_projects_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_C_Users_Administrator_Desktop_my_projects_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_C_Users_Administrator_Desktop_my_projects_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/question/index.tsx","runtime","vendors","common"]]]);