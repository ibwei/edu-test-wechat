(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
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

var _api = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");

__webpack_require__(/*! ./index.less */ "./src/pages/index/index.less");

__webpack_require__(/*! taro-ui/dist/style/components/button.scss */ "./node_modules/taro-ui/dist/style/components/button.scss");

__webpack_require__(/*! taro-ui/dist/style/components/loading.scss */ "./node_modules/taro-ui/dist/style/components/loading.scss");

__webpack_require__(/*! taro-ui/dist/style/components/curtain.scss */ "./node_modules/taro-ui/dist/style/components/curtain.scss");

__webpack_require__(/*! taro-ui/dist/style/components/form.scss */ "./node_modules/taro-ui/dist/style/components/form.scss");

__webpack_require__(/*! taro-ui/dist/style/components/input.scss */ "./node_modules/taro-ui/dist/style/components/input.scss");

__webpack_require__(/*! taro-ui/dist/style/components/modal.scss */ "./node_modules/taro-ui/dist/style/components/modal.scss");

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__17", "$compid__18", "$compid__19", "$compid__20", "$compid__21", "$compid__22", "$compid__23", "$compid__24", "shouquanBox", "infoShow"], _this.config = {
      navigationBarTitleText: '学商系统'
    }, _this.customComponents = ["AtModal", "AtModalContent", "AtModalAction", "AtCurtain", "AtForm", "AtInput", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',


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
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);
      this.isLogin = false;
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

      this.studentInfo = {
        name: '',
        school: '',
        grade: '',
        tel: ''
      };
      this.state = {
        shouquanBox: false,
        infoShow: false
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
      _taroWeapp2.default.getUserInfo({
        success: function success(res) {
          var userInfo = res.userInfo;

          console.log('userInfo :>> ', userInfo);
          _taroWeapp2.default.setStorageSync('userInfo', JSON.stringify(userInfo));
          _taroWeapp2.default.setStorageSync('shouquan', JSON.stringify(true));
          (0, _api.login)().then(function (res) {
            if (res.err_code) {
              console.log('res :>> ', res);
            } else {
              _taroWeapp2.default.setStorageSync('isLogin', JSON.stringify(true));
            }
          });
        },
        fail: function fail(res) {
          console.log('res :>> ', res);
          _taroWeapp2.default.setStorageSync('shouquan', JSON.stringify(false));
          _taroWeapp2.default.setStorageSync('isLogin', JSON.stringify(false));
        }
      });
    }
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(res) {
      if (res.detail.userInfo) {
        _taroWeapp2.default.setStorageSync('shouquan', JSON.stringify(true));
        this.setState({
          shouquanBox: false
        });
        console.log('res :>> ', res);
        var userInfo = res.detail.userInfo;

        console.log('userInfo :>> ', userInfo);
        _taroWeapp2.default.setStorageSync('userInfo', JSON.stringify(userInfo));
        (0, _api.login)().then(function (res) {
          _taroWeapp2.default.setStorageSync('isLogin', JSON.stringify(true));
          console.log('res :>> ', res);
          // const userInfo = JSON.parse(Taro.getStorageSync('userInfo'));
        });
      }
    }
    // 跳转测试页面

  }, {
    key: 'goTest',
    value: function goTest() {
      var _this2 = this;

      var shouquan = JSON.parse(_taroWeapp2.default.getStorageSync('shouquan'));
      var isLogin = JSON.parse(_taroWeapp2.default.getStorageSync('isLogin'));
      if (shouquan == false) {
        this.setState({
          shouquanBox: true
        });
        return false;
      }
      if (isLogin == true) {
        var userInfo = JSON.parse(_taroWeapp2.default.getStorageSync('userInfo'));
        console.log('userInfo :>> ', userInfo);
        if (userInfo.student_name == '') {
          this.setState({
            infoShow: true
          });
        } else {
          _taroWeapp2.default.navigateTo({
            url: '/pages/question/index'
          });
        }
      } else {
        (0, _api.login)().then(function (res) {
          _taroWeapp2.default.setStorageSync('isLogin', JSON.stringify(true));
          var userInfo = JSON.parse(_taroWeapp2.default.getStorageSync('userInfo'));
          console.log('userInfo :>> ', userInfo);
          if (userInfo.student_name == '') {
            _this2.setState({
              infoShow: true
            });
          }
          // if(userInfo.student)
        });
      }
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      this.setState({
        infoShow: false
      });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      var _this3 = this;

      console.log('this.studentInfo :>> ', this.studentInfo);
      if (this.studentInfo.name.trim() == '') {
        _taroWeapp2.default.showToast({
          title: '学生姓名不能为空',
          icon: 'none',
          duration: 1000
        });
        return false;
      }
      if (this.studentInfo.school.trim() == '') {
        _taroWeapp2.default.showToast({
          title: '学校不能为空',
          icon: 'none',
          duration: 1000
        });
        return false;
      }
      if (this.studentInfo.grade.trim() == '') {
        _taroWeapp2.default.showToast({
          title: '年级不能为空',
          icon: 'none',
          duration: 1000
        });
        return false;
      }
      if (this.studentInfo.tel.trim() == '') {
        _taroWeapp2.default.showToast({
          title: '家长电话不能为空',
          icon: 'none',
          duration: 1000
        });
        return false;
      }
      var params = {
        parent_phone: this.studentInfo.tel,
        school_name: this.studentInfo.school,
        student_name: this.studentInfo.name,
        grade: this.studentInfo.grade
      };
      console.log('params :>> ', params);
      (0, _api.editStudet)(params).then(function (res) {
        if (res.data.err_code == 0) {
          _this3.onClose();
        }
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(field, val) {
      console.log('field :>> ', field);
      console.log('val :>> ', val);
      this.studentInfo[field] = val;
      return val;
    }
  }, {
    key: 'onChangeName',
    value: function onChangeName(val) {
      console.log('this.studentInfo.name :>> ', this.studentInfo.name);
      return val;
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__17"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__17 = _genCompid2[0],
          $compid__17 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__18"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__18 = _genCompid4[0],
          $compid__18 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__19"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__19 = _genCompid6[0],
          $compid__19 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__20"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__20 = _genCompid8[0],
          $compid__20 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__21"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__21 = _genCompid10[0],
          $compid__21 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__22"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__22 = _genCompid12[0],
          $compid__22 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__23"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__23 = _genCompid14[0],
          $compid__23 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__24"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__24 = _genCompid16[0],
          $compid__24 = _genCompid16[1];

      _taroWeapp.propsManager.set({
        "isOpened": this.__state.shouquanBox
      }, $compid__17, $prevCompid__17);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.infoShow,
        "onClose": this.onClose.bind(this)
      }, $compid__18, $prevCompid__18);
      _taroWeapp.propsManager.set({
        "onSubmit": this.onSubmit.bind(this)
      }, $compid__19, $prevCompid__19);
      _taroWeapp.propsManager.set({
        "name": "value",
        "title": '\u5B66\u751F\u59D3\u540D:',
        "type": "text",
        "placeholder": '\u8BF7\u8F93\u5165\u5B66\u751F\u59D3\u540D',
        "value": this.studentInfo.name,
        "onChange": this.onChange.bind(this, 'name')
      }, $compid__20, $prevCompid__20);
      _taroWeapp.propsManager.set({
        "name": "value",
        "title": '\u5B66\u3000\u3000\u6821:',
        "type": "text",
        "placeholder": '\u8BF7\u8F93\u5165\u5C31\u8BFB\u5B66\u6821',
        "value": this.studentInfo.school,
        "onChange": this.onChange.bind(this, 'school')
      }, $compid__21, $prevCompid__21);
      _taroWeapp.propsManager.set({
        "name": "value",
        "title": '\u5E74\u3000\u3000\u7EA7:',
        "type": "text",
        "placeholder": '\u8BF7\u8F93\u5165\u5C31\u8BFB\u5E74\u7EA7',
        "value": this.studentInfo.grade,
        "onChange": this.onChange.bind(this, 'grade')
      }, $compid__22, $prevCompid__22);
      _taroWeapp.propsManager.set({
        "name": "value",
        "title": '\u5BB6\u957F\u7535\u8BDD:',
        "type": "phone",
        "placeholder": '\u8BF7\u8F93\u5165\u5BB6\u957F\u7535\u8BDD',
        "value": this.studentInfo.tel,
        "onChange": this.onChange.bind(this, 'tel')
      }, $compid__23, $prevCompid__23);
      _taroWeapp.propsManager.set({
        "formType": "submit",
        "className": "btn"
      }, $compid__24, $prevCompid__24);
      Object.assign(this.__state, {
        $compid__17: $compid__17,
        $compid__18: $compid__18,
        $compid__19: $compid__19,
        $compid__20: $compid__20,
        $compid__21: $compid__21,
        $compid__22: $compid__22,
        $compid__23: $compid__23,
        $compid__24: $compid__24
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["goTest", "getUserInfo"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/ibaiwei/Desktop/xueshang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/ibaiwei/Desktop/xueshang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/curtain.scss":
/*!*****************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/curtain.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/form.scss":
/*!**************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/form.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/input.scss":
/*!***************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/input.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.less":
/*!************************************!*\
  !*** ./src/pages/index/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_ibaiwei_Desktop_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/ibaiwei/Desktop/xueshang/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/ibaiwei/Desktop/xueshang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_ibaiwei_Desktop_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_ibaiwei_Desktop_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_ibaiwei_Desktop_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_ibaiwei_Desktop_xueshang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors","common"]]]);