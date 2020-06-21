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

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

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

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Question = function Question() {
  _classCallCheck(this, Question);
};

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray35", "$compid__201", "scrollLeft", "Threshold", "numberList", "buttonShow", "buttonTitle", "answerArray", "doneQuestion", "nowIndex", "chooesAnswer", "currentQuestionPartName", "currentQuestion", "currentAnswerList"], _this.config = {
      navigationBarTitleText: '测试界面'
    }, _this.customComponents = ["AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);
      this.numberList = new Array(50).fill(0).map(function (item, index) {
        return index + 1;
      });
      this.questionList = [];
      // 问题数组
      this.questionArray = new Array(50);
      // 答案数组
      this.answerArray = new Array(50);
      // 分数数组
      this.scoreArray = [];
      // 版块列表
      this.forumList = [];
      this.scrollLeft = 0;
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

      this.state = {
        buttonShow: false,
        buttonTitle: '下一题',
        answerArray: [],
        doneQuestion: [],
        nowIndex: 0,
        // 选择的答案
        chooesAnswer: {
          value: -1,
          key: 0
        },
        currentQuestionPartName: '',
        currentQuestion: '',
        currentAnswerList: [{
          label: '',
          value: 0,
          key: 1
        }, {
          label: '',
          value: 1,
          key: 2
        }, {
          label: '',
          value: 2,
          key: 3
        }, {
          label: '',
          value: 3,
          key: 4
        }, {
          label: '',
          value: 4,
          key: 5
        }]
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {
      this.initList();
    }
    // 初始化获取数组

  }, {
    key: 'initList',
    value: function initList() {
      var _this2 = this;

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
        currentQuestion: ''
      });
      this.setState({
        doneQuestion: new Array(50).fill(false)
      });
      (0, _api.getList)().then(function (res) {
        var _res$data = res.data,
            err_code = _res$data.err_code,
            data = _res$data.data;

        if (err_code == '0') {
          _this2.questionList = data.flat(1);
          _this2.questionArray = _this2.questionList.map(function (item) {
            return item.id;
          });
          // 答案数组
          _this2.answerArray = _this2.answerArray.fill(-1);
          _this2.setState({
            answerArray: _this2.answerArray
          });
          // 分数数组
          _this2.scoreArray = _this2.scoreArray.fill(-1);
          _this2.setCurrentQuestion(0);
        }
      }).catch(function (err) {});
      this.forumList = JSON.parse(_taroWeapp2.default.getStorageSync('forumList'));
    }
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
    /** 设置当前题目 */

  }, {
    key: 'setCurrentQuestion',
    value: function setCurrentQuestion(index) {
      // 获取题数
      var length = this.questionList.length;
      // 当前题目索引
      var nowIndex = index;
      // 下一题
      var nextQuestion = void 0;
      // 判断是否为最后一题
      if (nowIndex < length) {
        nextQuestion = this.questionList[nowIndex];
        // 设置题目
        this.setState({
          currentQuestion: nextQuestion.title
        });
        var partName = '';
        this.forumList.forEach(function (item) {
          if (item.id == nextQuestion.part_id) {
            partName = item.name;
          }
        });
        this.setState({
          currentQuestionPartName: partName
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
        this.setState({
          chooesAnswer: {
            value: this.answerArray[nowIndex],
            key: this.scoreArray[nowIndex]
          }
        });
        this.setState({
          nowIndex: nowIndex
        });
        if (nowIndex > 6 && nowIndex < length - 3) {
          this.scrollLeft = Number(nowIndex - 6) * 33;
        }
      }
    }
    // 选择选项

  }, {
    key: 'chooesAnswer',
    value: function chooesAnswer(value, key) {
      var index = this.state.nowIndex;
      this.setState({
        chooesAnswer: {
          value: value,
          key: key
        }
      });
      this.answerArray.splice(index, 1, value);
      this.scoreArray.splice(index, 1, key);
      this.setState({
        answerArray: this.answerArray
      });
      var doneQ = this.state.doneQuestion;
      doneQ.splice(index, 1, true);
      this.setState({
        doneQuestion: doneQ
      });
      if (!this.answerArray.includes(-1) && !this.scoreArray.includes(-1)) {
        this.setState({
          buttonShow: true
        });
        _taroWeapp2.default.showToast({
          title: '恭喜你已经做完全部的题目了，快去提交试卷吧！'
        });
        return false;
      }
      if (index < this.questionList.length - 1) {
        this.setCurrentQuestion(index + 1);
      } else {
        _taroWeapp2.default.showToast({
          title: '前面是不是还有题目忘记做了呢？快回去做吧！',
          icon: 'none',
          duration: 2000
        });
      }
    }
    // 保存答案

  }, {
    key: 'addAnswer',
    value: function addAnswer() {
      var state = this.state;
      var scoreArray = [];
      var sum = 0;
      var scoreSum = 0;
      this.scoreArray.forEach(function (item, index) {
        scoreSum += item;
        sum += item;
        if (index % 5 == 4) {
          scoreArray.push(sum);
          sum = 0;
        }
      });
      var params = {
        questionArray: this.questionArray.join('-'),
        answerArray: this.answerArray.join('-'),
        scoreArray: scoreArray.join('-'),
        allScore: scoreSum
      };
      _taroWeapp2.default.showLoading({
        title: '答案提交中...'
      });
      (0, _api.pushAnwser)(params).then(function (res) {
        var _res$data2 = res.data,
            err_code = _res$data2.err_code,
            data = _res$data2.data,
            resultCode = _res$data2.resultCode;

        if (resultCode == '0') {
          _taroWeapp2.default.hideLoading();
          _taroWeapp2.default.showToast({
            title: '提交成功!',
            duration: 2000
          });
          setTimeout(function () {
            _taroWeapp2.default.redirectTo({
              url: '/pages/analysis/index'
            });
          }, 2000);
        }
      });
    }
  }, {
    key: 'onScroll',
    value: function onScroll(e) {}
  }, {
    key: '_createData',
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      var scrollLeft = this.scrollLeft,
          numberList = this.numberList;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__201"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__201 = _genCompid2[0],
          $compid__201 = _genCompid2[1];

      var nowIndex = this.__state.nowIndex;

      var Threshold = 20;
      var loopArray35 = this.numberList.map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = (0, _classnames2.default)('question-item', {
          done: _this3.__state.doneQuestion[item.$original - 1]
        });
        return {
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      });
      this.__state.buttonShow && _taroWeapp.propsManager.set({
        "className": "button",
        "onClick": this.addAnswer.bind(this),
        "circle": true,
        "type": "primary"
      }, $compid__201, $prevCompid__201);
      Object.assign(this.__state, {
        loopArray35: loopArray35,
        $compid__201: $compid__201,
        scrollLeft: scrollLeft,
        Threshold: Threshold,
        numberList: numberList
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["chooesAnswer", "onScroll", "setCurrentQuestion"], _class.$$componentPath = "pages/question/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\USER-PC\\Desktop\\code\\xueshang\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/question/index.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:/Users/USER-PC/Desktop/code/xueshang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/question/index.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _file_loader_name_path_name_wxml_context_C_Users_USER_PC_Desktop_code_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=C:/Users/USER-PC/Desktop/code/xueshang/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\USER-PC\\Desktop\\code\\xueshang\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/question/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_C_Users_USER_PC_Desktop_code_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_C_Users_USER_PC_Desktop_code_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_C_Users_USER_PC_Desktop_code_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_C_Users_USER_PC_Desktop_code_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/question/index.tsx","runtime","vendors","common"]]]);