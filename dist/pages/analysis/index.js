(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/analysis/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/analysis/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/analysis/index.tsx?taro&type=script&parse=PAGE& ***!
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

var _echarts = __webpack_require__(/*! ../../ec-canvas/echarts */ "./src/ec-canvas/echarts.js");

var _echarts2 = _interopRequireDefault(_echarts);

__webpack_require__(/*! ./index.less */ "./src/pages/analysis/index.less");

__webpack_require__(/*! taro-ui/dist/style/components/divider.scss */ "./node_modules/taro-ui/dist/style/components/divider.scss");

__webpack_require__(/*! taro-ui/dist/style/components/timeline.scss */ "./node_modules/taro-ui/dist/style/components/timeline.scss");

__webpack_require__(/*! taro-ui/dist/style/components/icon.scss */ "./node_modules/taro-ui/dist/style/components/icon.scss");

var _api = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var chart = void 0;
var indicatorArrya = _taroWeapp2.default.getStorageSync('forumList') ? JSON.parse(_taroWeapp2.default.getStorageSync('forumList')) : [];
function initChart(canvas, width, height, dpr) {
  chart = _echarts2.default.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);
  var option = {
    title: {
      text: ''
    },
    tooltip: {
      show: true,
      formatter: function formatter(param) {
        var str = "" + param.seriesName;
        for (var i = 0; i < param.value.length; i++) {
          str += i % 2 ? ' ' : '\n';
          str += indicatorArrya[i].name + ":" + param.value[i];
        }
        return str;
      }
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: indicatorArrya.map(function (item) {
        return {
          name: item.name,
          max: 25
        };
      }),
      radius: 100
    },
    series: [{
      name: '成绩分布图',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [{
        value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        name: '成绩分布图',
        areaStyle: {
          opacity: 0.9,
          color: new _echarts2.default.graphic.RadialGradient(0.5, 0.5, 1, [{
            color: '#B8D3E4',
            offset: 0
          }, {
            color: '#72ACD1',
            offset: 1
          }])
        }
      }]
    }]
  };
  chart.setOption(option);
  return chart;
}

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__103", "$compid__104", "ec", "score", "scoreText", "userInfo"], _this.config = {
      navigationBarTitleText: '测试结果',
      // 定义需要引入的第三方组件
      usingComponents: {
        'ec-canvas': '../../ec-canvas/ec-canvas'
      }
    }, _this.customComponents = ["AtDivider"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

      this.state = {
        ec: {
          onInit: initChart
        },
        score: 0,
        scoreText: [{
          name: '',
          text: ''
        }],
        userInfo: {
          name: '',
          avatar: '',
          parent_phone: '',
          student_name: '',
          grade: '',
          school_name: ''
        }
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
      var _this2 = this;

      var userInfo = JSON.parse(_taroWeapp2.default.getStorageSync('userInfo'));
      this.setState({
        userInfo: userInfo
      });
      (0, _api.getResult)({ id: this.$router.params.id }).then(function (res) {
        console.log('res :>> ', res);
        _taroWeapp2.default.showLoading({
          title: '加载中...'
        });
        var _res$data = res.data,
            err_code = _res$data.err_code,
            err_msg = _res$data.err_msg,
            data = _res$data.data;

        data = data[0];
        if (err_code == 0) {
          _this2.setState({
            score: (data.allScore / 2.5).toFixed(1)
          });
          var scoreArray = data.scoreArray.split('-');
          var scoreText = scoreArray.map(function (item, index) {
            var key = '';
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
              name: indicatorArrya[index].name,
              text: indicatorArrya[index][key]
            };
          });
          _this2.setState({
            scoreText: scoreText
          });
          setTimeout(function () {
            _this2.setEcharts(scoreArray);
          }, 1000);
        } else {
          _taroWeapp2.default.showToast({
            title: err_msg,
            icon: 'none',
            duration: 2000
          });
        }
      });
    }
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'setEcharts',
    value: function setEcharts(value) {
      _taroWeapp2.default.hideLoading();
      console.log('chart :>> ', chart);
      chart.setOption({
        series: [{
          data: [{
            value: value,
            name: '学生能力图',
            areaStyle: {
              opacity: 0.9,
              color: new _echarts2.default.graphic.RadialGradient(0.5, 0.5, 1, [{
                color: '#B8D3E4',
                offset: 0
              }, {
                color: '#72ACD1',
                offset: 1
              }])
            }
          }]
        }]
      });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__103"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__103 = _genCompid2[0],
          $compid__103 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__104"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__104 = _genCompid4[0],
          $compid__104 = _genCompid4[1];

      _taroWeapp.propsManager.set({
        "content": '\u6210\u7EE9\u5206\u5E03\u56FE',
        "fontColor": "#555",
        "lineColor": "#bebebe"
      }, $compid__103, $prevCompid__103);
      _taroWeapp.propsManager.set({
        "content": '\u6210\u7EE9\u5206\u6790',
        "fontColor": "#555",
        "lineColor": "#bebebe"
      }, $compid__104, $prevCompid__104);
      Object.assign(this.__state, {
        $compid__103: $compid__103,
        $compid__104: $compid__104
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/analysis/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/ibaiwei/Desktop/xueshang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/analysis/index.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/ibaiwei/Desktop/xueshang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/analysis/index.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/analysis/index.wxml";

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/divider.scss":
/*!*****************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/divider.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/timeline.scss":
/*!******************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/timeline.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/analysis/index.less":
/*!***************************************!*\
  !*** ./src/pages/analysis/index.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/analysis/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/analysis/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/analysis/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/analysis/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/analysis/index.tsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************!*\
  !*** ./src/pages/analysis/index.tsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/analysis/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/analysis/index.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************!*\
  !*** ./src/pages/analysis/index.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_ibaiwei_Desktop_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/ibaiwei/Desktop/xueshang/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/ibaiwei/Desktop/xueshang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/analysis/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_ibaiwei_Desktop_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_ibaiwei_Desktop_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_ibaiwei_Desktop_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_ibaiwei_Desktop_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/analysis/index.tsx","runtime","taro","vendors","common"]]]);