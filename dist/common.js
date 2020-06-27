(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResutlList = exports.getPartList = exports.editStudet = exports.pushAnwser = exports.getResult = exports.getList = exports.login = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var url = 'http://edu.pinxianhs.com/api/wechat/';
// 登录
var login = exports.login = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var _ref2, code, userInfo, resData;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _taroWeapp2.default.showLoading({
              title: '加载中...'
            });
            _context.next = 3;
            return _taroWeapp2.default.login();

          case 3:
            _ref2 = _context.sent;
            code = _ref2.code;
            userInfo = JSON.parse(_taroWeapp2.default.getStorageSync('userInfo'));
            resData = '';
            _context.next = 9;
            return _taroWeapp2.default.request({
              method: 'POST',
              url: "http://edu.pinxianhs.com/api/wechat/user/login",
              data: _extends({
                code: code,
                token: _taroWeapp2.default.getStorageSync('token')
              }, userInfo),
              success: function success(res) {
                var data = res.data;

                resData = res;
                console.log('res :>> ', res);
                if (data.err_code == 0) {
                  _taroWeapp2.default.setStorageSync('token', data.token);
                  _taroWeapp2.default.setStorageSync('userInfo', JSON.stringify(data.user));
                  _taroWeapp2.default.hideLoading();
                }
              },
              fail: function fail(e) {
                console.log('e :>> ', e);
                _taroWeapp2.default.hideLoading();
              }
            });

          case 9:
            return _context.abrupt('return', Promise.resolve(resData));

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function login() {
    return _ref.apply(this, arguments);
  };
}();
// 获取题目列表
var getList = exports.getList = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var resData;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            resData = void 0;

            _taroWeapp2.default.showLoading({
              title: '获取题目加载中...'
            });
            _context2.next = 4;
            return _taroWeapp2.default.request({
              method: 'GET',
              url: "http://edu.pinxianhs.com/api/wechat/test/list",
              data: { token: _taroWeapp2.default.getStorageSync('token') },
              success: function success(res) {
                console.log('list :>> ', res);
                var _res$data = res.data,
                    data = _res$data.data,
                    err_msg = _res$data.err_msg,
                    err_code = _res$data.err_code;

                if (err_code == 0) {
                  _taroWeapp2.default.hideLoading();
                  resData = res;
                }
              },
              fail: function fail(res) {
                _taroWeapp2.default.hideLoading();
                console.log('list :>> ', res);
                // if (res.err_code == 401) {
                //   console.log('1 :>> ', 1);
                // }
              }
            });

          case 4:
            return _context2.abrupt('return', Promise.resolve(resData));

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getList() {
    return _ref3.apply(this, arguments);
  };
}();
// 获取结果
var getResult = exports.getResult = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(params) {
    var resData, userInfo;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            resData = void 0;
            userInfo = JSON.parse(_taroWeapp2.default.getStorageSync('userInfo'));
            _context3.next = 4;
            return _taroWeapp2.default.request({
              method: 'POST',
              url: "http://edu.pinxianhs.com/api/wechat/test/result",
              data: { token: _taroWeapp2.default.getStorageSync('token'), id: params.id }
            }).then(function (res) {
              var data = res.data,
                  err_code = res.err_code,
                  err_msg = res.err_msg;

              resData = res;
              if (err_code == 401) {
                console.log('err_msg :>> ', err_msg);
              }
            });

          case 4:
            return _context3.abrupt('return', Promise.resolve(resData));

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getResult(_x) {
    return _ref4.apply(this, arguments);
  };
}();
// 提交答案
var pushAnwser = exports.pushAnwser = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(params) {
    var resData;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            resData = void 0;
            _context4.next = 3;
            return _taroWeapp2.default.request({
              method: 'POST',
              url: "http://edu.pinxianhs.com/api/wechat/test/add",
              data: _extends({ token: _taroWeapp2.default.getStorageSync('token') }, params)
            }).then(function (res) {
              console.log('提交答案返回 :>> ', res);
              var data = res.data,
                  err_code = res.err_code,
                  err_msg = res.err_msg;

              resData = res;
              if (err_code == 401) {
                login();
              }
            });

          case 3:
            return _context4.abrupt('return', Promise.resolve(resData));

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function pushAnwser(_x2) {
    return _ref5.apply(this, arguments);
  };
}();
// 编辑学生信息
var editStudet = exports.editStudet = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(params) {
    var resData, userInfo;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _taroWeapp2.default.showLoading({
              title: '保存中...'
            });
            resData = void 0;
            userInfo = JSON.parse(_taroWeapp2.default.getStorageSync('userInfo'));
            _context5.next = 5;
            return _taroWeapp2.default.request({
              method: 'POST',
              url: "http://edu.pinxianhs.com/api/wechat/user/completedInfo",
              data: _extends({ token: _taroWeapp2.default.getStorageSync('token') }, params),
              success: function success(res) {
                console.log('res :>> ', res);
                resData = res;
                var _res$data2 = res.data,
                    data = _res$data2.data,
                    err_code = _res$data2.err_code,
                    err_msg = _res$data2.err_msg;

                if (err_code == 0) {
                  _taroWeapp2.default.hideLoading();
                  console.log('data :>> ', data);
                  _taroWeapp2.default.setStorageSync('userInfo', JSON.stringify(data));
                } else {
                  _taroWeapp2.default.showToast({
                    title: err_msg
                  });
                }
              },
              fail: function fail(res) {
                _taroWeapp2.default.hideLoading();
                console.log('res :>> ', res);
              }
            });

          case 5:
            return _context5.abrupt('return', Promise.resolve(resData));

          case 6:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function editStudet(_x3) {
    return _ref6.apply(this, arguments);
  };
}();
// 获取模板列表
var getPartList = exports.getPartList = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
    var resData;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            resData = void 0;
            // await Taro.addInterceptor()

            _context6.next = 3;
            return _taroWeapp2.default.request({
              method: 'GET',
              url: "http://edu.pinxianhs.com/api/wechat/part/list",
              data: { token: _taroWeapp2.default.getStorageSync('token') },
              success: function success(res) {
                console.log('list :>> ', res);
                var _res$data3 = res.data,
                    data = _res$data3.data,
                    err_msg = _res$data3.err_msg,
                    err_code = _res$data3.err_code;

                if (err_code == 0) {
                  console.log('data :>> ', data);
                  _taroWeapp2.default.setStorageSync('forumList', JSON.stringify(data));
                }
              },
              fail: function fail(res) {
                _taroWeapp2.default.hideLoading();
              }
            });

          case 3:
            return _context6.abrupt('return', Promise.resolve(resData));

          case 4:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function getPartList() {
    return _ref7.apply(this, arguments);
  };
}();
// 获取答题记录列表
var getResutlList = exports.getResutlList = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7(params) {
    var resData;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            resData = void 0;
            // await Taro.addInterceptor()

            _context7.next = 3;
            return _taroWeapp2.default.request({
              method: 'POST',
              url: "http://edu.pinxianhs.com/api/wechat/test/history",
              data: _extends({ token: _taroWeapp2.default.getStorageSync('token') }, params),
              success: function success(res) {
                console.log('list :>> ', res);
                resData = res;
              },
              fail: function fail(res) {
                resData = res;
                console.log('res :>> ', res);
              }
            });

          case 3:
            return _context7.abrupt('return', Promise.resolve(resData));

          case 4:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined);
  }));

  return function getResutlList(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/ec-canvas/echarts.js":
/*!**********************************!*\
  !*** ./src/ec-canvas/echarts.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(undefined, function (t) {
  "use strict";

  function e(t) {
    var e = {},
        n = {},
        i = t.match(/Firefox\/([\d.]+)/),
        r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
        a = t.match(/Edge\/([\d.]+)/),
        o = /micromessenger/i.test(t);return i && (n.firefox = true, n.version = i[1]), r && (n.ie = true, n.version = r[1]), a && (n.edge = true, n.version = a[1]), o && (n.weChat = true), { browser: n, os: e, node: false, canvasSupported: !!document.createElement("canvas").getContext, svgSupported: "undefined" != typeof SVGRect, touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge, pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11), domSupported: "undefined" != typeof document };
  }function n(t, e) {
    "createCanvas" === t && (qd = null), Yd[t] = e;
  }function i(t) {
    if (null == t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) return t;var e = t,
        n = Fd.call(t);if ("[object Array]" === n) {
      if (!z(t)) {
        e = [];for (var r = 0, a = t.length; a > r; r++) {
          e[r] = i(t[r]);
        }
      }
    } else if (Rd[n]) {
      if (!z(t)) {
        var o = t.constructor;if (t.constructor.from) e = o.from(t);else {
          e = new o(t.length);for (var r = 0, a = t.length; a > r; r++) {
            e[r] = i(t[r]);
          }
        }
      }
    } else if (!zd[n] && !z(t) && !I(t)) {
      e = {};for (var s in t) {
        t.hasOwnProperty(s) && (e[s] = i(t[s]));
      }
    }return e;
  }function r(t, e, n) {
    if (!S(e) || !S(t)) return n ? i(e) : t;for (var a in e) {
      if (e.hasOwnProperty(a)) {
        var o = t[a],
            s = e[a];!S(s) || !S(o) || x(s) || x(o) || I(s) || I(o) || M(s) || M(o) || z(s) || z(o) ? !n && a in t || (t[a] = i(e[a], true)) : r(o, s, n);
      }
    }return t;
  }function a(t, e) {
    for (var n = t[0], i = 1, a = t.length; a > i; i++) {
      n = r(n, t[i], e);
    }return n;
  }function o(t, e) {
    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }return t;
  }function s(t, e, n) {
    for (var i in e) {
      e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
    }return t;
  }function l() {
    return qd || (qd = jd().getContext("2d")), qd;
  }function u(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);for (var n = 0, i = t.length; i > n; n++) {
        if (t[n] === e) return n;
      }
    }return -1;
  }function h(t, e) {
    function n() {}var i = t.prototype;n.prototype = e.prototype, t.prototype = new n();for (var r in i) {
      i.hasOwnProperty(r) && (t.prototype[r] = i[r]);
    }t.prototype.constructor = t, t.superClass = e;
  }function c(t, e, n) {
    t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n);
  }function d(t) {
    return t ? "string" == typeof t ? false : "number" == typeof t.length : undefined;
  }function f(t, e, n) {
    if (t && e) if (t.forEach && t.forEach === Hd) t.forEach(e, n);else if (t.length === +t.length) for (var i = 0, r = t.length; r > i; i++) {
      e.call(n, t[i], i, t);
    } else for (var a in t) {
      t.hasOwnProperty(a) && e.call(n, t[a], a, t);
    }
  }function p(t, e, n) {
    if (t && e) {
      if (t.map && t.map === Gd) return t.map(e, n);for (var i = [], r = 0, a = t.length; a > r; r++) {
        i.push(e.call(n, t[r], r, t));
      }return i;
    }
  }function g(t, e, n, i) {
    if (t && e) {
      if (t.reduce && t.reduce === Xd) return t.reduce(e, n, i);for (var r = 0, a = t.length; a > r; r++) {
        n = e.call(i, n, t[r], r, t);
      }return n;
    }
  }function v(t, e, n) {
    if (t && e) {
      if (t.filter && t.filter === Vd) return t.filter(e, n);for (var i = [], r = 0, a = t.length; a > r; r++) {
        e.call(n, t[r], r, t) && i.push(t[r]);
      }return i;
    }
  }function m(t, e, n) {
    if (t && e) for (var i = 0, r = t.length; r > i; i++) {
      if (e.call(n, t[i], i, t)) return t[i];
    }
  }function y(t, e) {
    var n = Wd.call(arguments, 2);return function () {
      return t.apply(e, n.concat(Wd.call(arguments)));
    };
  }function _(t) {
    var e = Wd.call(arguments, 1);return function () {
      return t.apply(this, e.concat(Wd.call(arguments)));
    };
  }function x(t) {
    return "[object Array]" === Fd.call(t);
  }function w(t) {
    return "function" == typeof t;
  }function b(t) {
    return "[object String]" === Fd.call(t);
  }function S(t) {
    var e = typeof t === "undefined" ? "undefined" : _typeof(t);return "function" === e || !!t && "object" === e;
  }function M(t) {
    return !!zd[Fd.call(t)];
  }function T(t) {
    return !!Rd[Fd.call(t)];
  }function I(t) {
    return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.nodeType && "object" == _typeof(t.ownerDocument);
  }function C(t) {
    return t !== t;
  }function k() {
    for (var t = 0, e = arguments.length; e > t; t++) {
      if (null != arguments[t]) return arguments[t];
    }
  }function D(t, e) {
    return null != t ? t : e;
  }function A(t, e, n) {
    return null != t ? t : null != e ? e : n;
  }function P() {
    return Function.call.apply(Wd, arguments);
  }function O(t) {
    if ("number" == typeof t) return [t, t, t, t];var e = t.length;return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;
  }function L(t, e) {
    if (!t) throw new Error(e);
  }function B(t) {
    return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }function E(t) {
    t[Ud] = true;
  }function z(t) {
    return t[Ud];
  }function R(t) {
    function e(t, e) {
      n ? i.set(t, e) : i.set(e, t);
    }var n = x(t);this.data = {};var i = this;t instanceof R ? t.each(e) : t && f(t, e);
  }function F(t) {
    return new R(t);
  }function N(t, e) {
    for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) {
      n[i] = t[i];
    }var r = t.length;for (i = 0; i < e.length; i++) {
      n[i + r] = e[i];
    }return n;
  }function H() {}function V(t, e) {
    var n = new Kd(2);return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n;
  }function W(t, e) {
    return t[0] = e[0], t[1] = e[1], t;
  }function G(t) {
    var e = new Kd(2);return e[0] = t[0], e[1] = t[1], e;
  }function X(t, e, n) {
    return t[0] = e, t[1] = n, t;
  }function Y(t, e, n) {
    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
  }function j(t, e, n, i) {
    return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t;
  }function q(t, e, n) {
    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
  }function U(t) {
    return Math.sqrt(Z(t));
  }function Z(t) {
    return t[0] * t[0] + t[1] * t[1];
  }function K(t, e, n) {
    return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t;
  }function $(t, e, n) {
    return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t;
  }function Q(t, e) {
    return t[0] * e[0] + t[1] * e[1];
  }function J(t, e, n) {
    return t[0] = e[0] * n, t[1] = e[1] * n, t;
  }function te(t, e) {
    var n = U(e);return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t;
  }function ee(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
  }function ne(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
  }function ie(t, e) {
    return t[0] = -e[0], t[1] = -e[1], t;
  }function re(t, e, n, i) {
    return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t;
  }function ae(t, e, n) {
    var i = e[0],
        r = e[1];return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t;
  }function oe(t, e, n) {
    return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;
  }function se(t, e, n) {
    return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;
  }function le() {
    this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this);
  }function ue(t, e) {
    return { target: t, topTarget: e && e.topTarget };
  }function he(t, e) {
    var n = t._$eventProcessor;return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e;
  }function ce(t, e, n, i, r, a) {
    var o = t._$handlers;if ("function" == typeof n && (r = i, i = n, n = null), !i || !e) return t;n = he(t, n), o[e] || (o[e] = []);for (var s = 0; s < o[e].length; s++) {
      if (o[e][s].h === i) return t;
    }var l = { h: i, one: a, query: n, ctx: r || t, callAtLast: i.zrEventfulCallAtLast },
        u = o[e].length - 1,
        h = o[e][u];return h && h.callAtLast ? o[e].splice(u, 0, l) : o[e].push(l), t;
  }function de(t, e, n, i, r, a) {
    var o = i + "-" + r,
        s = t.length;if (a.hasOwnProperty(o)) return a[o];if (1 === e) {
      var l = Math.round(Math.log((1 << s) - 1 & ~r) / af);return t[n][l];
    }for (var u = i | 1 << n, h = n + 1; i & 1 << h;) {
      h++;
    }for (var c = 0, d = 0, f = 0; s > d; d++) {
      var p = 1 << d;p & r || (c += (f % 2 ? -1 : 1) * t[n][d] * de(t, e - 1, h, u, r | p, a), f++);
    }return a[o] = c, c;
  }function fe(t, e) {
    var n = [[t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]], [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]], [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]], [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]], [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]], [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]], [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]], [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]],
        i = {},
        r = de(n, 8, 0, 0, 0, i);if (0 !== r) {
      for (var a = [], o = 0; 8 > o; o++) {
        for (var s = 0; 8 > s; s++) {
          null == a[s] && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * de(n, 7, 0 === o ? 1 : 0, 1 << o, 1 << s, i) / r * e[o];
        }
      }return function (t, e, n) {
        var i = e * a[6] + n * a[7] + 1;t[0] = (e * a[0] + n * a[1] + a[2]) / i, t[1] = (e * a[3] + n * a[4] + a[5]) / i;
      };
    }
  }function pe(t, e, n, i, r) {
    return ge(sf, e, i, r, true) && ge(t, n, sf[0], sf[1]);
  }function ge(t, e, n, i, r) {
    if (e.getBoundingClientRect && Ed.domSupported && !ye(e)) {
      var a = e[of] || (e[of] = {}),
          o = ve(e, a),
          s = me(o, a, r);if (s) return s(t, n, i), true;
    }return false;
  }function ve(t, e) {
    var n = e.markers;if (n) return n;n = e.markers = [];for (var i = ["left", "right"], r = ["top", "bottom"], a = 0; 4 > a; a++) {
      var o = document.createElement("div"),
          s = o.style,
          l = a % 2,
          u = (a >> 1) % 2;s.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", i[l] + ":0", r[u] + ":0", i[1 - l] + ":auto", r[1 - u] + ":auto", ""].join("!important;"), t.appendChild(o), n.push(o);
    }return n;
  }function me(t, e, n) {
    for (var i = n ? "invTrans" : "trans", r = e[i], a = e.srcCoords, o = true, s = [], l = [], u = 0; 4 > u; u++) {
      var h = t[u].getBoundingClientRect(),
          c = 2 * u,
          d = h.left,
          f = h.top;s.push(d, f), o = o && a && d === a[c] && f === a[c + 1], l.push(t[u].offsetLeft, t[u].offsetTop);
    }return o && r ? r : (e.srcCoords = s, e[i] = n ? fe(l, s) : fe(s, l));
  }function ye(t) {
    return "CANVAS" === t.nodeName.toUpperCase();
  }function _e(t, e, n, i) {
    return n = n || {}, i || !Ed.canvasSupported ? xe(t, e, n) : Ed.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : xe(t, e, n), n;
  }function xe(t, e, n) {
    if (Ed.domSupported && t.getBoundingClientRect) {
      var i = e.clientX,
          r = e.clientY;if (ye(t)) {
        var a = t.getBoundingClientRect();return n.zrX = i - a.left, undefined;
      }if (ge(hf, t, i, r)) return n.zrX = hf[0], undefined;
    }n.zrX = n.zrY = 0;
  }function we(t) {
    return t || window.event;
  }function be(t, e, n) {
    if (e = we(e), null != e.zrX) return e;var i = e.type,
        r = i && i.indexOf("touch") >= 0;if (r) {
      var a = "touchend" !== i ? e.targetTouches[0] : e.changedTouches[0];a && _e(t, a, e, n);
    } else _e(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;var o = e.button;return null == e.which && undefined !== o && uf.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
  }function Se(t, e, n, i) {
    lf ? t.addEventListener(e, n, i) : t.attachEvent("on" + e, n);
  }function Me(t, e, n, i) {
    lf ? t.removeEventListener(e, n, i) : t.detachEvent("on" + e, n);
  }function Te(t) {
    var e = t[1][0] - t[0][0],
        n = t[1][1] - t[0][1];return Math.sqrt(e * e + n * n);
  }function Ie(t) {
    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
  }function Ce(t, e, n) {
    return { type: t, event: n, target: e.target, topTarget: e.topTarget, cancelBubble: false, offsetX: n.zrX, offsetY: n.zrY, gestureEvent: n.gestureEvent, pinchX: n.pinchX, pinchY: n.pinchY, pinchScale: n.pinchScale, wheelDelta: n.zrDelta, zrByTouch: n.zrByTouch, which: n.which, stop: ke };
  }function ke() {
    cf(this.event);
  }function De() {}function Ae(t, e, n) {
    if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
      for (var i, r = t; r;) {
        if (r.clipPath && !r.clipPath.contain(e, n)) return false;r.silent && (i = true), r = r.parent;
      }return i ? pf : true;
    }return false;
  }function Pe(t, e, n) {
    var i = t.painter;return 0 > e || e > i.getWidth() || 0 > n || n > i.getHeight();
  }function Oe() {
    var t = new mf(6);return Le(t), t;
  }function Le(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
  }function Be(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
  }function Ee(t, e, n) {
    var i = e[0] * n[0] + e[2] * n[1],
        r = e[1] * n[0] + e[3] * n[1],
        a = e[0] * n[2] + e[2] * n[3],
        o = e[1] * n[2] + e[3] * n[3],
        s = e[0] * n[4] + e[2] * n[5] + e[4],
        l = e[1] * n[4] + e[3] * n[5] + e[5];return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t;
  }function ze(t, e, n) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t;
  }function Re(t, e, n) {
    var i = e[0],
        r = e[2],
        a = e[4],
        o = e[1],
        s = e[3],
        l = e[5],
        u = Math.sin(n),
        h = Math.cos(n);return t[0] = i * h + o * u, t[1] = -i * u + o * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * a + u * l, t[5] = h * l - u * a, t;
  }function Fe(t, e, n) {
    var i = n[0],
        r = n[1];return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t;
  }function Ne(t, e) {
    var n = e[0],
        i = e[2],
        r = e[4],
        a = e[1],
        o = e[3],
        s = e[5],
        l = n * o - a * i;return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null;
  }function He(t) {
    var e = Oe();return Be(e, t), e;
  }function Ve(t) {
    return t > xf || -xf > t;
  }function We(t) {
    this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = false, this.loop = null == t.loop ? false : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = false;
  }function Ge(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t;
  }function Xe(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t;
  }function Ye(t) {
    return 0 > t ? 0 : t > 1 ? 1 : t;
  }function je(t) {
    return Ge(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));
  }function qe(t) {
    return Ye(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));
  }function Ue(t, e, n) {
    return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (0.6666666666666666 - n) * 6 : t;
  }function Ze(t, e, n) {
    return t + (e - t) * n;
  }function Ke(t, e, n, i, r) {
    return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t;
  }function $e(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
  }function Qe(t, e) {
    Bf && $e(Bf, e), Bf = Lf.put(t, Bf || e.slice());
  }function Je(t, e) {
    if (t) {
      e = e || [];var n = Lf.get(t);if (n) return $e(e, n);t += "";var i = t.replace(/ /g, "").toLowerCase();if (i in Of) return $e(e, Of[i]), Qe(t, e), e;if ("#" !== i.charAt(0)) {
        var r = i.indexOf("("),
            a = i.indexOf(")");if (-1 !== r && a + 1 === i.length) {
          var o = i.substr(0, r),
              s = i.substr(r + 1, a - (r + 1)).split(","),
              l = 1;switch (o) {case "rgba":
              if (4 !== s.length) return undefined;l = qe(s.pop());case "rgb":
              return 3 !== s.length ? undefined : (Ke(e, je(s[0]), je(s[1]), je(s[2]), l), Qe(t, e), e);case "hsla":
              return 4 !== s.length ? undefined : (s[3] = qe(s[3]), tn(s, e), Qe(t, e), e);case "hsl":
              return 3 !== s.length ? undefined : (tn(s, e), Qe(t, e), e);default:
              return;}
        }Ke(e, 0, 0, 0, 1);
      } else {
        if (4 === i.length) {
          var u = parseInt(i.substr(1), 16);return u >= 0 && 4095 >= u ? (Ke(e, (3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1), Qe(t, e), e) : undefined;
        }if (7 === i.length) {
          var u = parseInt(i.substr(1), 16);return u >= 0 && 16777215 >= u ? (Ke(e, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1), Qe(t, e), e) : undefined;
        }
      }
    }
  }function tn(t, e) {
    var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
        i = qe(t[1]),
        r = qe(t[2]),
        a = .5 >= r ? r * (i + 1) : r + i - r * i,
        o = 2 * r - a;return e = e || [], Ke(e, Ge(255 * Ue(o, a, n + 0.3333333333333333)), Ge(255 * Ue(o, a, n)), Ge(255 * Ue(o, a, n - 0.3333333333333333)), 1), 4 === t.length && (e[3] = t[3]), e;
  }function en(t) {
    if (t) {
      var e,
          n,
          i = t[0] / 255,
          r = t[1] / 255,
          a = t[2] / 255,
          o = Math.min(i, r, a),
          s = Math.max(i, r, a),
          l = s - o,
          u = (s + o) / 2;if (0 === l) e = 0, n = 0;else {
        n = .5 > u ? l / (s + o) : l / (2 - s - o);var h = ((s - i) / 6 + l / 2) / l,
            c = ((s - r) / 6 + l / 2) / l,
            d = ((s - a) / 6 + l / 2) / l;i === s ? e = d - c : r === s ? e = 0.3333333333333333 + h - d : a === s && (e = 0.6666666666666666 + c - h), 0 > e && (e += 1), e > 1 && (e -= 1);
      }var f = [360 * e, n, u];return null != t[3] && f.push(t[3]), f;
    }
  }function nn(t, e) {
    var n = Je(t);if (n) {
      for (var i = 0; 3 > i; i++) {
        n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
      }return un(n, 4 === n.length ? "rgba" : "rgb");
    }
  }function rn(t) {
    var e = Je(t);return e ? (16777216 + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : undefined;
  }function an(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      n = n || [];var i = t * (e.length - 1),
          r = Math.floor(i),
          a = Math.ceil(i),
          o = e[r],
          s = e[a],
          l = i - r;return n[0] = Ge(Ze(o[0], s[0], l)), n[1] = Ge(Ze(o[1], s[1], l)), n[2] = Ge(Ze(o[2], s[2], l)), n[3] = Ye(Ze(o[3], s[3], l)), n;
    }
  }function on(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      var i = t * (e.length - 1),
          r = Math.floor(i),
          a = Math.ceil(i),
          o = Je(e[r]),
          s = Je(e[a]),
          l = i - r,
          u = un([Ge(Ze(o[0], s[0], l)), Ge(Ze(o[1], s[1], l)), Ge(Ze(o[2], s[2], l)), Ye(Ze(o[3], s[3], l))], "rgba");return n ? { color: u, leftIndex: r, rightIndex: a, value: i } : u;
    }
  }function sn(t, e, n, i) {
    return t = Je(t), t ? (t = en(t), null != e && (t[0] = Xe(e)), null != n && (t[1] = qe(n)), null != i && (t[2] = qe(i)), un(tn(t), "rgba")) : undefined;
  }function ln(t, e) {
    return t = Je(t), t && null != e ? (t[3] = Ye(e), un(t, "rgba")) : undefined;
  }function un(t, e) {
    if (t && t.length) {
      var n = t[0] + "," + t[1] + "," + t[2];return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")";
    }
  }function hn(t, e) {
    return t[e];
  }function cn(t, e, n) {
    t[e] = n;
  }function dn(t, e, n) {
    return (e - t) * n + t;
  }function fn(t, e, n) {
    return n > .5 ? e : t;
  }function pn(t, e, n, i, r) {
    var a = t.length;if (1 === r) for (var o = 0; a > o; o++) {
      i[o] = dn(t[o], e[o], n);
    } else for (var s = a && t[0].length, o = 0; a > o; o++) {
      for (var l = 0; s > l; l++) {
        i[o][l] = dn(t[o][l], e[o][l], n);
      }
    }
  }function gn(t, e, n) {
    var i = t.length,
        r = e.length;if (i !== r) {
      var a = i > r;if (a) t.length = r;else for (var o = i; r > o; o++) {
        t.push(1 === n ? e[o] : Ff.call(e[o]));
      }
    }for (var s = t[0] && t[0].length, o = 0; o < t.length; o++) {
      if (1 === n) isNaN(t[o]) && (t[o] = e[o]);else for (var l = 0; s > l; l++) {
        isNaN(t[o][l]) && (t[o][l] = e[o][l]);
      }
    }
  }function vn(t, e, n) {
    if (t === e) return true;var i = t.length;if (i !== e.length) return false;if (1 === n) {
      for (var r = 0; i > r; r++) {
        if (t[r] !== e[r]) return false;
      }
    } else for (var a = t[0].length, r = 0; i > r; r++) {
      for (var o = 0; a > o; o++) {
        if (t[r][o] !== e[r][o]) return false;
      }
    }return true;
  }function mn(t, e, n, i, r, a, o, s, l) {
    var u = t.length;if (1 === l) for (var h = 0; u > h; h++) {
      s[h] = yn(t[h], e[h], n[h], i[h], r, a, o);
    } else for (var c = t[0].length, h = 0; u > h; h++) {
      for (var d = 0; c > d; d++) {
        s[h][d] = yn(t[h][d], e[h][d], n[h][d], i[h][d], r, a, o);
      }
    }
  }function yn(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
        l = .5 * (i - e);return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
  }function _n(t) {
    if (d(t)) {
      var e = t.length;if (d(t[0])) {
        for (var n = [], i = 0; e > i; i++) {
          n.push(Ff.call(t[i]));
        }return n;
      }return Ff.call(t);
    }return t;
  }function xn(t) {
    return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")";
  }function wn(t) {
    var e = t[t.length - 1].value;return d(e && e[0]) ? 2 : 1;
  }function bn(t, e, n, i, r, a) {
    var o = t._getter,
        s = t._setter,
        l = "spline" === e,
        u = i.length;if (u) {
      var h,
          c = i[0].value,
          f = d(c),
          p = false,
          g = false,
          v = f ? wn(i) : 0;i.sort(function (t, e) {
        return t.time - e.time;
      }), h = i[u - 1].time;for (var m = [], y = [], _ = i[0].value, x = true, w = 0; u > w; w++) {
        m.push(i[w].time / h);var b = i[w].value;if (f && vn(b, _, v) || !f && b === _ || (x = false), _ = b, "string" == typeof b) {
          var S = Je(b);S ? (b = S, p = true) : g = true;
        }y.push(b);
      }if (a || !x) {
        for (var M = y[u - 1], w = 0; u - 1 > w; w++) {
          f ? gn(y[w], M, v) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);
        }f && gn(o(t._target, r), M, v);var T,
            I,
            C,
            k,
            D,
            A,
            P = 0,
            O = 0;if (p) var L = [0, 0, 0, 0];var B = function B(t, e) {
          var n;if (0 > e) n = 0;else if (O > e) {
            for (T = Math.min(P + 1, u - 1), n = T; n >= 0 && !(m[n] <= e); n--) {}n = Math.min(n, u - 2);
          } else {
            for (n = P; u > n && !(m[n] > e); n++) {}n = Math.min(n - 1, u - 2);
          }P = n, O = e;var i = m[n + 1] - m[n];if (0 !== i) if (I = (e - m[n]) / i, l) {
            if (k = y[n], C = y[0 === n ? n : n - 1], D = y[n > u - 2 ? u - 1 : n + 1], A = y[n > u - 3 ? u - 1 : n + 2], f) mn(C, k, D, A, I, I * I, I * I * I, o(t, r), v);else {
              var a;if (p) a = mn(C, k, D, A, I, I * I, I * I * I, L, 1), a = xn(L);else {
                if (g) return fn(k, D, I);a = yn(C, k, D, A, I, I * I, I * I * I);
              }s(t, r, a);
            }
          } else if (f) pn(y[n], y[n + 1], I, o(t, r), v);else {
            var a;if (p) pn(y[n], y[n + 1], I, L, 1), a = xn(L);else {
              if (g) return fn(y[n], y[n + 1], I);a = dn(y[n], y[n + 1], I);
            }s(t, r, a);
          }
        },
            E = new We({ target: t._target, life: h, loop: t._loop, delay: t._delay, onframe: B, ondestroy: n });return e && "spline" !== e && (E.easing = e), E;
      }
    }
  }function Sn(t, e, n, i, r, a, o, s) {
    function l() {
      h--, h || a && a();
    }b(i) ? (a = r, r = i, i = 0) : w(r) ? (a = r, r = "linear", i = 0) : w(i) ? (a = i, i = 0) : w(n) ? (a = n, n = 500) : n || (n = 500), t.stopAnimation(), Mn(t, "", t, e, n, i, s);var u = t.animators.slice(),
        h = u.length;h || a && a();for (var c = 0; c < u.length; c++) {
      u[c].done(l).start(r, o);
    }
  }function Mn(t, e, n, i, r, a, o) {
    var s = {},
        l = 0;for (var u in i) {
      i.hasOwnProperty(u) && (null != n[u] ? S(i[u]) && !d(i[u]) ? Mn(t, e ? e + "." + u : u, n[u], i[u], r, a, o) : (o ? (s[u] = n[u], Tn(t, e, u, i[u])) : s[u] = i[u], l++) : null == i[u] || o || Tn(t, e, u, i[u]));
    }l > 0 && t.animate(e, false).when(null == r ? 500 : r, s).delay(a || 0);
  }function Tn(t, e, n, i) {
    if (e) {
      var r = {};r[e] = {}, r[e][n] = i, t.attr(r);
    } else t.attr(n, i);
  }function In(t, e, n, i) {
    0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i;
  }function Cn(t) {
    for (var e = 0; t >= $f;) {
      e |= 1 & t, t >>= 1;
    }return t + e;
  }function kn(t, e, n, i) {
    var r = e + 1;if (r === n) return 1;if (i(t[r++], t[e]) < 0) {
      for (; n > r && i(t[r], t[r - 1]) < 0;) {
        r++;
      }Dn(t, e, r);
    } else for (; n > r && i(t[r], t[r - 1]) >= 0;) {
      r++;
    }return r - e;
  }function Dn(t, e, n) {
    for (n--; n > e;) {
      var i = t[e];t[e++] = t[n], t[n--] = i;
    }
  }function An(t, e, n, i, r) {
    for (i === e && i++; n > i; i++) {
      for (var a, o = t[i], s = e, l = i; l > s;) {
        a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
      }var u = i - s;switch (u) {case 3:
          t[s + 3] = t[s + 2];case 2:
          t[s + 2] = t[s + 1];case 1:
          t[s + 1] = t[s];break;default:
          for (; u > 0;) {
            t[s + u] = t[s + u - 1], u--;
          }}t[s] = o;
    }
  }function Pn(t, e, n, i, r, a) {
    var o = 0,
        s = 0,
        l = 1;if (a(t, e[n + r]) > 0) {
      for (s = i - r; s > l && a(t, e[n + r + l]) > 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }l > s && (l = s), o += r, l += r;
    } else {
      for (s = r + 1; s > l && a(t, e[n + r - l]) <= 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }l > s && (l = s);var u = o;o = r - l, l = r - u;
    }for (o++; l > o;) {
      var h = o + (l - o >>> 1);a(t, e[n + h]) > 0 ? o = h + 1 : l = h;
    }return l;
  }function On(t, e, n, i, r, a) {
    var o = 0,
        s = 0,
        l = 1;if (a(t, e[n + r]) < 0) {
      for (s = r + 1; s > l && a(t, e[n + r - l]) < 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }l > s && (l = s);var u = o;o = r - l, l = r - u;
    } else {
      for (s = i - r; s > l && a(t, e[n + r + l]) >= 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }l > s && (l = s), o += r, l += r;
    }for (o++; l > o;) {
      var h = o + (l - o >>> 1);a(t, e[n + h]) < 0 ? l = h : o = h + 1;
    }return l;
  }function Ln(t, e) {
    function n(t, e) {
      l[c] = t, u[c] = e, c += 1;
    }function i() {
      for (; c > 1;) {
        var t = c - 2;if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--;else if (u[t] > u[t + 1]) break;a(t);
      }
    }function r() {
      for (; c > 1;) {
        var t = c - 2;t > 0 && u[t - 1] < u[t + 1] && t--, a(t);
      }
    }function a(n) {
      var i = l[n],
          r = u[n],
          a = l[n + 1],
          h = u[n + 1];u[n] = r + h, n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]), c--;var d = On(t[a], t, i, r, 0, e);i += d, r -= d, 0 !== r && (h = Pn(t[i + r - 1], t, a, h, h - 1, e), 0 !== h && (h >= r ? o(i, r, a, h) : s(i, r, a, h)));
    }function o(n, i, r, a) {
      var o = 0;for (o = 0; i > o; o++) {
        d[o] = t[n + o];
      }var s = 0,
          l = r,
          u = n;if (t[u++] = t[l++], 0 !== --a) {
        if (1 === i) {
          for (o = 0; a > o; o++) {
            t[u + o] = t[l + o];
          }return undefined;
        }for (var c, f, p, g = h;;) {
          c = 0, f = 0, p = false;do {
            if (e(t[l], d[s]) < 0) {
              if (t[u++] = t[l++], f++, c = 0, 0 === --a) {
                p = true;break;
              }
            } else if (t[u++] = d[s++], c++, f = 0, 1 === --i) {
              p = true;break;
            }
          } while (g > (c | f));if (p) break;do {
            if (c = On(t[l], d, s, i, 0, e), 0 !== c) {
              for (o = 0; c > o; o++) {
                t[u + o] = d[s + o];
              }if (u += c, s += c, i -= c, 1 >= i) {
                p = true;break;
              }
            }if (t[u++] = t[l++], 0 === --a) {
              p = true;break;
            }if (f = Pn(d[s], t, l, a, 0, e), 0 !== f) {
              for (o = 0; f > o; o++) {
                t[u + o] = t[l + o];
              }if (u += f, l += f, a -= f, 0 === a) {
                p = true;break;
              }
            }if (t[u++] = d[s++], 1 === --i) {
              p = true;break;
            }g--;
          } while (c >= Qf || f >= Qf);if (p) break;0 > g && (g = 0), g += 2;
        }if (h = g, 1 > h && (h = 1), 1 === i) {
          for (o = 0; a > o; o++) {
            t[u + o] = t[l + o];
          }t[u + a] = d[s];
        } else {
          if (0 === i) throw new Error();for (o = 0; i > o; o++) {
            t[u + o] = d[s + o];
          }
        }
      } else for (o = 0; i > o; o++) {
        t[u + o] = d[s + o];
      }
    }function s(n, i, r, a) {
      var o = 0;for (o = 0; a > o; o++) {
        d[o] = t[r + o];
      }var s = n + i - 1,
          l = a - 1,
          u = r + a - 1,
          c = 0,
          f = 0;if (t[u--] = t[s--], 0 !== --i) {
        if (1 === a) {
          for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) {
            t[f + o] = t[c + o];
          }return undefined;
        }for (var p = h;;) {
          var g = 0,
              v = 0,
              m = false;do {
            if (e(d[l], t[s]) < 0) {
              if (t[u--] = t[s--], g++, v = 0, 0 === --i) {
                m = true;break;
              }
            } else if (t[u--] = d[l--], v++, g = 0, 1 === --a) {
              m = true;break;
            }
          } while (p > (g | v));if (m) break;do {
            if (g = i - On(d[l], t, n, i, i - 1, e), 0 !== g) {
              for (u -= g, s -= g, i -= g, f = u + 1, c = s + 1, o = g - 1; o >= 0; o--) {
                t[f + o] = t[c + o];
              }if (0 === i) {
                m = true;break;
              }
            }if (t[u--] = d[l--], 1 === --a) {
              m = true;break;
            }if (v = a - Pn(t[s], d, 0, a, a - 1, e), 0 !== v) {
              for (u -= v, l -= v, a -= v, f = u + 1, c = l + 1, o = 0; v > o; o++) {
                t[f + o] = d[c + o];
              }if (1 >= a) {
                m = true;break;
              }
            }if (t[u--] = t[s--], 0 === --i) {
              m = true;break;
            }p--;
          } while (g >= Qf || v >= Qf);if (m) break;0 > p && (p = 0), p += 2;
        }if (h = p, 1 > h && (h = 1), 1 === a) {
          for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) {
            t[f + o] = t[c + o];
          }t[u] = d[l];
        } else {
          if (0 === a) throw new Error();for (c = u - (a - 1), o = 0; a > o; o++) {
            t[c + o] = d[o];
          }
        }
      } else for (c = u - (a - 1), o = 0; a > o; o++) {
        t[c + o] = d[o];
      }
    }var l,
        u,
        h = Qf,
        c = 0,
        d = [];l = [], u = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n;
  }function Bn(t, e, n, i) {
    n || (n = 0), i || (i = t.length);var r = i - n;if (!(2 > r)) {
      var a = 0;if ($f > r) return a = kn(t, n, i, e), undefined;var o = new Ln(t, e),
          s = Cn(r);do {
        if (a = kn(t, n, i, e), s > a) {
          var l = r;l > s && (l = s), An(t, n, n + l, n + a, e), a = l;
        }o.pushRun(n, a), o.mergeRuns(), r -= a, n += a;
      } while (0 !== r);o.forceMergeRuns();
    }
  }function En(t, e) {
    return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
  }function zn(t, e, n) {
    var i = null == e.x ? 0 : e.x,
        r = null == e.x2 ? 1 : e.x2,
        a = null == e.y ? 0 : e.y,
        o = null == e.y2 ? 0 : e.y2;e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;var s = t.createLinearGradient(i, a, r, o);return s;
  }function Rn(t, e, n) {
    var i = n.width,
        r = n.height,
        a = Math.min(i, r),
        o = null == e.x ? .5 : e.x,
        s = null == e.y ? .5 : e.y,
        l = null == e.r ? .5 : e.r;e.global || (o = o * i + n.x, s = s * r + n.y, l *= a);var u = t.createRadialGradient(o, s, 0, o, s, l);return u;
  }function Fn() {
    return false;
  }function Nn(t, e, n) {
    var i = jd(),
        r = e.getWidth(),
        a = e.getHeight(),
        o = i.style;return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i;
  }function Hn(t) {
    if ("string" == typeof t) {
      var e = dp.get(t);return e && e.image;
    }return t;
  }function Vn(t, e, n, i, r) {
    if (t) {
      if ("string" == typeof t) {
        if (e && e.__zrImageSrc === t || !n) return e;var a = dp.get(t),
            o = { hostEl: n, cb: i, cbPayload: r };return a ? (e = a.image, !Gn(e) && a.pending.push(o)) : (e = new Image(), e.onload = e.onerror = Wn, dp.put(t, e.__cachedImgObj = { image: e, pending: [o] }), e.src = e.__zrImageSrc = t), e;
      }return t;
    }return e;
  }function Wn() {
    var t = this.__cachedImgObj;this.onload = this.onerror = this.__cachedImgObj = null;for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
          i = n.cb;i && i(this, n.cbPayload), n.hostEl.dirty();
    }t.pending.length = 0;
  }function Gn(t) {
    return t && t.width && t.height;
  }function Xn(t, e) {
    e = e || mp;var n = t + ":" + e;if (fp[n]) return fp[n];for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) {
      r = Math.max(ni(i[a], e).width, r);
    }return pp > gp && (pp = 0, fp = {}), pp++, fp[n] = r, r;
  }function Yn(t, e, n, i, r, a, o, s) {
    return o ? qn(t, e, n, i, r, a, o, s) : jn(t, e, n, i, r, a, s);
  }function jn(t, e, n, i, r, a, o) {
    var s = ii(t, e, r, a, o),
        l = Xn(t, e);r && (l += r[1] + r[3]);var u = s.outerHeight,
        h = Un(0, l, n),
        c = Zn(0, u, i),
        d = new In(h, c, l, u);return d.lineHeight = s.lineHeight, d;
  }function qn(t, e, n, i, r, a, o, s) {
    var l = ri(t, { rich: o, truncate: s, font: e, textAlign: n, textPadding: r, textLineHeight: a }),
        u = l.outerWidth,
        h = l.outerHeight,
        c = Un(0, u, n),
        d = Zn(0, h, i);return new In(c, d, u, h);
  }function Un(t, e, n) {
    return "right" === n ? t -= e : "center" === n && (t -= e / 2), t;
  }function Zn(t, e, n) {
    return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t;
  }function Kn(t, e, n) {
    var i = e.textPosition,
        r = e.textDistance,
        a = n.x,
        o = n.y;r = r || 0;var s = n.height,
        l = n.width,
        u = s / 2,
        h = "left",
        c = "top";switch (i) {case "left":
        a -= r, o += u, h = "right", c = "middle";break;case "right":
        a += r + l, o += u, c = "middle";break;case "top":
        a += l / 2, o -= r, h = "center", c = "bottom";break;case "bottom":
        a += l / 2, o += s + r, h = "center";break;case "inside":
        a += l / 2, o += u, h = "center", c = "middle";break;case "insideLeft":
        a += r, o += u, c = "middle";break;case "insideRight":
        a += l - r, o += u, h = "right", c = "middle";break;case "insideTop":
        a += l / 2, o += r, h = "center";break;case "insideBottom":
        a += l / 2, o += s - r, h = "center", c = "bottom";break;case "insideTopLeft":
        a += r, o += r;break;case "insideTopRight":
        a += l - r, o += r, h = "right";break;case "insideBottomLeft":
        a += r, o += s - r, c = "bottom";break;case "insideBottomRight":
        a += l - r, o += s - r, h = "right", c = "bottom";}return t = t || {}, t.x = a, t.y = o, t.textAlign = h, t.textVerticalAlign = c, t;
  }function $n(t, e, n, i, r) {
    if (!e) return "";var a = (t + "").split("\n");r = Qn(e, n, i, r);for (var o = 0, s = a.length; s > o; o++) {
      a[o] = Jn(a[o], r);
    }return a.join("\n");
  }function Qn(t, e, n, i) {
    i = o({}, i), i.font = e;var n = D(n, "...");i.maxIterations = D(i.maxIterations, 2);var r = i.minChar = D(i.minChar, 0);i.cnCharWidth = Xn("国", e);var a = i.ascCharWidth = Xn("a", e);i.placeholder = D(i.placeholder, "");for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) {
      s -= a;
    }var u = Xn(n, e);return u > s && (n = "", u = 0), s = t - u, i.ellipsis = n, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = t, i;
  }function Jn(t, e) {
    var n = e.containerWidth,
        i = e.font,
        r = e.contentWidth;if (!n) return "";var a = Xn(t, i);if (n >= a) return t;for (var o = 0;; o++) {
      if (r >= a || o >= e.maxIterations) {
        t += e.ellipsis;break;
      }var s = 0 === o ? ti(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;t = t.substr(0, s), a = Xn(t, i);
    }return "" === t && (t = e.placeholder), t;
  }function ti(t, e, n, i) {
    for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
      var s = t.charCodeAt(a);r += s >= 0 && 127 >= s ? n : i;
    }return a;
  }function ei(t) {
    return Xn("国", t);
  }function ni(t, e) {
    return yp.measureText(t, e);
  }function ii(t, e, n, i, r) {
    null != t && (t += "");var a = D(i, ei(e)),
        o = t ? t.split("\n") : [],
        s = o.length * a,
        l = s,
        u = true;if (n && (l += n[0] + n[2]), t && r) {
      u = false;var h = r.outerHeight,
          c = r.outerWidth;if (null != h && l > h) t = "", o = [];else if (null != c) for (var d = Qn(c - (n ? n[1] + n[3] : 0), e, r.ellipsis, { minChar: r.minChar, placeholder: r.placeholder }), f = 0, p = o.length; p > f; f++) {
        o[f] = Jn(o[f], d);
      }
    }return { lines: o, height: s, outerHeight: l, lineHeight: a, canCacheByTextString: u };
  }function ri(t, e) {
    var n = { lines: [], width: 0, height: 0 };if (null != t && (t += ""), !t) return n;for (var i, r = vp.lastIndex = 0; null != (i = vp.exec(t));) {
      var a = i.index;a > r && ai(n, t.substring(r, a)), ai(n, i[2], i[1]), r = vp.lastIndex;
    }r < t.length && ai(n, t.substring(r, t.length));var o = n.lines,
        s = 0,
        l = 0,
        u = [],
        h = e.textPadding,
        c = e.truncate,
        d = c && c.outerWidth,
        f = c && c.outerHeight;h && (null != d && (d -= h[1] + h[3]), null != f && (f -= h[0] + h[2]));for (var p = 0; p < o.length; p++) {
      for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
        var _ = g.tokens[y],
            x = _.styleName && e.rich[_.styleName] || {},
            w = _.textPadding = x.textPadding,
            b = _.font = x.font || e.font,
            S = _.textHeight = D(x.textHeight, ei(b));if (w && (S += w[0] + w[2]), _.height = S, _.lineHeight = A(x.textLineHeight, e.textLineHeight, S), _.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign || "middle", null != f && s + _.lineHeight > f) return { lines: [], width: 0, height: 0 };_.textWidth = Xn(_.text, b);var M = x.textWidth,
            T = null == M || "auto" === M;if ("string" == typeof M && "%" === M.charAt(M.length - 1)) _.percentWidth = M, u.push(_), M = 0;else {
          if (T) {
            M = _.textWidth;var I = x.textBackgroundColor,
                C = I && I.image;C && (C = Hn(C), Gn(C) && (M = Math.max(M, C.width * S / C.height)));
          }var k = w ? w[1] + w[3] : 0;M += k;var P = null != d ? d - m : null;null != P && M > P && (!T || k > P ? (_.text = "", _.textWidth = M = 0) : (_.text = $n(_.text, P - k, b, c.ellipsis, { minChar: c.minChar }), _.textWidth = Xn(_.text, b), M = _.textWidth + k));
        }m += _.width = M, x && (v = Math.max(v, _.lineHeight));
      }g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m);
    }n.outerWidth = n.width = D(e.textWidth, l), n.outerHeight = n.height = D(e.textHeight, s), h && (n.outerWidth += h[1] + h[3], n.outerHeight += h[0] + h[2]);for (var p = 0; p < u.length; p++) {
      var _ = u[p],
          O = _.percentWidth;_.width = parseInt(O, 10) / 100 * l;
    }return n;
  }function ai(t, e, n) {
    for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
      var s = r[o],
          l = { styleName: n, text: s, isLineHolder: !s && !i };if (o) a.push({ tokens: [l] });else {
        var u = (a[a.length - 1] || (a[0] = { tokens: [] })).tokens,
            h = u.length;1 === h && u[0].isLineHolder ? u[0] = l : (s || !h || i) && u.push(l);
      }
    }
  }function oi(t) {
    var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");return e && B(e) || t.textFont || t.font;
  }function si(t, e) {
    var n,
        i,
        r,
        a,
        o = e.x,
        s = e.y,
        l = e.width,
        u = e.height,
        h = e.r;0 > l && (o += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? n = i = r = a = h : h instanceof Array ? 1 === h.length ? n = i = r = a = h[0] : 2 === h.length ? (n = r = h[0], i = a = h[1]) : 3 === h.length ? (n = h[0], i = a = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], a = h[3]) : n = i = r = a = 0;var c;n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r > u && (c = i + r, i *= u / c, r *= u / c), n + a > u && (c = n + a, n *= u / c, a *= u / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o + l, s + u - r), 0 !== r && t.arc(o + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + u), 0 !== a && t.arc(o + a, s + u - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI);
  }function li(t) {
    return ui(t), f(t.rich, ui), t;
  }function ui(t) {
    if (t) {
      t.font = oi(t);var e = t.textAlign;"middle" === e && (e = "center"), t.textAlign = null == e || xp[e] ? e : "left";var n = t.textVerticalAlign || t.textBaseline;"center" === n && (n = "middle"), t.textVerticalAlign = null == n || wp[n] ? n : "top";var i = t.textPadding;i && (t.textPadding = O(t.textPadding));
    }
  }function hi(t, e, n, i, r, a) {
    i.rich ? di(t, e, n, i, r, a) : ci(t, e, n, i, r, a);
  }function ci(t, e, n, i, r, a) {
    var o,
        s = vi(i),
        l = false,
        u = e.__attrCachedBy === np.PLAIN_TEXT;a !== ip ? (a && (o = a.style, l = !s && u && o), e.__attrCachedBy = s ? np.NONE : np.PLAIN_TEXT) : u && (e.__attrCachedBy = np.NONE);var h = i.font || _p;l && h === (o.font || _p) || (e.font = h);var c = t.__computedFont;t.__styleFont !== h && (t.__styleFont = h, c = t.__computedFont = e.font);var d = i.textPadding,
        f = i.textLineHeight,
        p = t.__textCotentBlock;(!p || t.__dirtyText) && (p = t.__textCotentBlock = ii(n, c, d, f, i.truncate));var g = p.outerHeight,
        v = p.lines,
        m = p.lineHeight,
        y = _i(Mp, t, i, r),
        _ = y.baseX,
        x = y.baseY,
        w = y.textAlign || "left",
        b = y.textVerticalAlign;pi(e, i, r, _, x);var S = Zn(x, g, b),
        M = _,
        T = S;if (s || d) {
      var I = Xn(n, c),
          C = I;d && (C += d[1] + d[3]);var k = Un(_, C, w);s && mi(t, e, i, k, S, C, g), d && (M = Mi(_, w, d), T += d[0]);
    }e.textAlign = w, e.textBaseline = "middle", e.globalAlpha = i.opacity || 1;for (var D = 0; D < bp.length; D++) {
      var A = bp[D],
          P = A[0],
          O = A[1],
          L = i[P];l && L === o[P] || (e[O] = ep(e, O, L || A[2]));
    }T += m / 2;var B = i.textStrokeWidth,
        E = l ? o.textStrokeWidth : null,
        z = !l || B !== E,
        R = !l || z || i.textStroke !== o.textStroke,
        F = wi(i.textStroke, B),
        N = bi(i.textFill);if (F && (z && (e.lineWidth = B), R && (e.strokeStyle = F)), N && (l && i.textFill === o.textFill || (e.fillStyle = N)), 1 === v.length) F && e.strokeText(v[0], M, T), N && e.fillText(v[0], M, T);else for (var D = 0; D < v.length; D++) {
      F && e.strokeText(v[D], M, T), N && e.fillText(v[D], M, T), T += m;
    }
  }function di(t, e, n, i, r, a) {
    a !== ip && (e.__attrCachedBy = np.NONE);var o = t.__textCotentBlock;(!o || t.__dirtyText) && (o = t.__textCotentBlock = ri(n, i)), fi(t, e, o, i, r);
  }function fi(t, e, n, i, r) {
    var a = n.width,
        o = n.outerWidth,
        s = n.outerHeight,
        l = i.textPadding,
        u = _i(Mp, t, i, r),
        h = u.baseX,
        c = u.baseY,
        d = u.textAlign,
        f = u.textVerticalAlign;pi(e, i, r, h, c);var p = Un(h, o, d),
        g = Zn(c, s, f),
        v = p,
        m = g;l && (v += l[3], m += l[0]);var y = v + a;vi(i) && mi(t, e, i, p, g, o, s);for (var _ = 0; _ < n.lines.length; _++) {
      for (var x, w = n.lines[_], b = w.tokens, S = b.length, M = w.lineHeight, T = w.width, I = 0, C = v, k = y, D = S - 1; S > I && (x = b[I], !x.textAlign || "left" === x.textAlign);) {
        gi(t, e, x, i, M, m, C, "left"), T -= x.width, C += x.width, I++;
      }for (; D >= 0 && (x = b[D], "right" === x.textAlign);) {
        gi(t, e, x, i, M, m, k, "right"), T -= x.width, k -= x.width, D--;
      }for (C += (a - (C - v) - (y - k) - T) / 2; D >= I;) {
        x = b[I], gi(t, e, x, i, M, m, C + x.width / 2, "center"), C += x.width, I++;
      }m += M;
    }
  }function pi(t, e, n, i, r) {
    if (n && e.textRotation) {
      var a = e.textOrigin;"center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r);
    }
  }function gi(t, e, n, i, r, a, o, s) {
    var l = i.rich[n.styleName] || {};l.text = n.text;var u = n.textVerticalAlign,
        h = a + r / 2;
    "top" === u ? h = a + n.height / 2 : "bottom" === u && (h = a + r - n.height / 2), !n.isLineHolder && vi(l) && mi(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, h - n.height / 2, n.width, n.height);var c = n.textPadding;c && (o = Mi(o, s, c), h -= n.height / 2 - c[2] - n.textHeight / 2), xi(e, "shadowBlur", A(l.textShadowBlur, i.textShadowBlur, 0)), xi(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), xi(e, "shadowOffsetX", A(l.textShadowOffsetX, i.textShadowOffsetX, 0)), xi(e, "shadowOffsetY", A(l.textShadowOffsetY, i.textShadowOffsetY, 0)), xi(e, "textAlign", s), xi(e, "textBaseline", "middle"), xi(e, "font", n.font || _p);var d = wi(l.textStroke || i.textStroke, p),
        f = bi(l.textFill || i.textFill),
        p = D(l.textStrokeWidth, i.textStrokeWidth);d && (xi(e, "lineWidth", p), xi(e, "strokeStyle", d), e.strokeText(n.text, o, h)), f && (xi(e, "fillStyle", f), e.fillText(n.text, o, h));
  }function vi(t) {
    return !!(t.textBackgroundColor || t.textBorderWidth && t.textBorderColor);
  }function mi(t, e, n, i, r, a, o) {
    var s = n.textBackgroundColor,
        l = n.textBorderWidth,
        u = n.textBorderColor,
        h = b(s);if (xi(e, "shadowBlur", n.textBoxShadowBlur || 0), xi(e, "shadowColor", n.textBoxShadowColor || "transparent"), xi(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), xi(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), h || l && u) {
      e.beginPath();var c = n.textBorderRadius;c ? si(e, { x: i, y: r, width: a, height: o, r: c }) : e.rect(i, r, a, o), e.closePath();
    }if (h) {
      if (xi(e, "fillStyle", s), null != n.fillOpacity) {
        var d = e.globalAlpha;e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = d;
      } else e.fill();
    } else if (S(s)) {
      var f = s.image;f = Vn(f, null, t, yi, s), f && Gn(f) && e.drawImage(f, i, r, a, o);
    }if (l && u) if (xi(e, "lineWidth", l), xi(e, "strokeStyle", u), null != n.strokeOpacity) {
      var d = e.globalAlpha;e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = d;
    } else e.stroke();
  }function yi(t, e) {
    e.image = t;
  }function _i(t, e, n, i) {
    var r = n.x || 0,
        a = n.y || 0,
        o = n.textAlign,
        s = n.textVerticalAlign;if (i) {
      var l = n.textPosition;if (l instanceof Array) r = i.x + Si(l[0], i.width), a = i.y + Si(l[1], i.height);else {
        var u = e && e.calculateTextPosition ? e.calculateTextPosition(Sp, n, i) : Kn(Sp, n, i);r = u.x, a = u.y, o = o || u.textAlign, s = s || u.textVerticalAlign;
      }var h = n.textOffset;h && (r += h[0], a += h[1]);
    }return t = t || {}, t.baseX = r, t.baseY = a, t.textAlign = o, t.textVerticalAlign = s, t;
  }function xi(t, e, n) {
    return t[e] = ep(t, e, n), t[e];
  }function wi(t, e) {
    return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }function bi(t) {
    return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }function Si(t, e) {
    return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
  }function Mi(t, e, n) {
    return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];
  }function Ti(t, e) {
    return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);
  }function Ii(t) {
    t = t || {}, jf.call(this, t);for (var e in t) {
      t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
    }this.style = new ap(t.style, this), this._rect = null, this.__clipPaths = null;
  }function Ci(t) {
    Ii.call(this, t);
  }function ki(t) {
    return parseInt(t, 10);
  }function Di(t) {
    return t ? t.__builtin__ ? true : "function" != typeof t.resize || "function" != typeof t.refresh ? false : true : false;
  }function Ai(t, e, n) {
    return Pp.copy(t.getBoundingRect()), t.transform && Pp.applyTransform(t.transform), Op.width = e, Op.height = n, !Pp.intersect(Op);
  }function Pi(t, e) {
    if (t === e) return false;if (!t || !e || t.length !== e.length) return true;for (var n = 0; n < t.length; n++) {
      if (t[n] !== e[n]) return true;
    }return false;
  }function Oi(t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e);
    }
  }function Li(t, e) {
    var n = document.createElement("div");return n.style.cssText = ["position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n;
  }function Bi(t) {
    return "mousewheel" === t && Ed.browser.firefox ? "DOMMouseScroll" : t;
  }function Ei(t) {
    var e = t.pointerType;return "pen" === e || "touch" === e;
  }function zi(t) {
    t.touching = true, null != t.touchTimer && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout(function () {
      t.touching = false, t.touchTimer = null;
    }, 700);
  }function Ri(t) {
    t && (t.zrByTouch = true);
  }function Fi(t, e) {
    return be(t.dom, new Hi(t, e), true);
  }function Ni(t, e) {
    for (var n = e, i = false; n && 9 !== n.nodeType && !(i = n.domBelongToZr || n !== e && n === t.painterRoot);) {
      n = n.parentNode;
    }return i;
  }function Hi(t, e) {
    this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }function Vi(t, e) {
    var n = e.domHandlers;Ed.pointerEventsSupported ? f(Rp.pointer, function (i) {
      Gi(e, i, function (e) {
        n[i].call(t, e);
      });
    }) : (Ed.touchEventsSupported && f(Rp.touch, function (i) {
      Gi(e, i, function (r) {
        n[i].call(t, r), zi(e);
      });
    }), f(Rp.mouse, function (i) {
      Gi(e, i, function (r) {
        r = we(r), e.touching || n[i].call(t, r);
      });
    }));
  }function Wi(t, e) {
    function n(n) {
      function i(i) {
        i = we(i), Ni(t, i.target) || (i = Fi(t, i), e.domHandlers[n].call(t, i));
      }Gi(e, n, i, { capture: true });
    }Ed.pointerEventsSupported ? f(Fp.pointer, n) : Ed.touchEventsSupported || f(Fp.mouse, n);
  }function Gi(t, e, n, i) {
    t.mounted[e] = n, t.listenerOpts[e] = i, Se(t.domTarget, Bi(e), n, i);
  }function Xi(t) {
    var e = t.mounted;for (var n in e) {
      e.hasOwnProperty(n) && Me(t.domTarget, Bi(n), e[n], t.listenerOpts[n]);
    }t.mounted = {};
  }function Yi(t, e) {
    if (t._mayPointerCapture = null, zp && t._pointerCapturing ^ e) {
      t._pointerCapturing = e;var n = t._globalHandlerScope;e ? Wi(t, n) : Xi(n);
    }
  }function ji(t, e) {
    this.domTarget = t, this.domHandlers = e, this.mounted = {}, this.listenerOpts = {}, this.touchTimer = null, this.touching = false;
  }function qi(t, e) {
    rf.call(this), this.dom = t, this.painterRoot = e, this._localHandlerScope = new ji(t, Hp), zp && (this._globalHandlerScope = new ji(document, Vp)), this._pointerCapturing = false, this._mayPointerCapture = null, Vi(this, this._localHandlerScope);
  }function Ui(t, e) {
    var n = new qp(Ld(), t, e);return Yp[n.id] = n, n;
  }function Zi(t) {
    if (t) t.dispose();else {
      for (var e in Yp) {
        Yp.hasOwnProperty(e) && Yp[e].dispose();
      }Yp = {};
    }return this;
  }function Ki(t) {
    return Yp[t];
  }function $i(t, e) {
    Xp[t] = e;
  }function Qi(t) {
    delete Yp[t];
  }function Ji(t) {
    return t instanceof Array ? t : null == t ? [] : [t];
  }function tr(t, e, n) {
    if (t) {
      t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};for (var i = 0, r = n.length; r > i; i++) {
        var a = n[i];!t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
      }
    }
  }function er(t) {
    return !Kp(t) || $p(t) || t instanceof Date ? t : t.value;
  }function nr(t) {
    return Kp(t) && !(t instanceof Array);
  }function ir(t, e) {
    e = (e || []).slice();var n = p(t || [], function (t) {
      return { exist: t };
    });return Zp(e, function (t, i) {
      if (Kp(t)) {
        for (var r = 0; r < n.length; r++) {
          if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, undefined;
        }for (var r = 0; r < n.length; r++) {
          var a = n[r].exist;if (!(n[r].option || null != a.id && null != t.id || null == t.name || or(t) || or(a) || a.name !== t.name + "")) return n[r].option = t, undefined;
        }
      }
    }), Zp(e, function (t) {
      if (Kp(t)) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e].exist;if (!n[e].option && !or(i) && null == t.id) {
            n[e].option = t;break;
          }
        }e >= n.length && n.push({ option: t });
      }
    }), n;
  }function rr(t) {
    var e = F();Zp(t, function (t) {
      var n = t.exist;n && e.set(n.id, t);
    }), Zp(t, function (t) {
      var n = t.option;L(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {});
    }), Zp(t, function (t, n) {
      var i = t.exist,
          r = t.option,
          a = t.keyInfo;if (Kp(r)) {
        if (a.name = null != r.name ? r.name + "" : i ? i.name : Qp + n, i) a.id = i.id;else if (null != r.id) a.id = r.id + "";else {
          var o = 0;do {
            a.id = "\x00" + a.name + "\x00" + o++;
          } while (e.get(a.id));
        }e.set(a.id, t);
      }
    });
  }function ar(t) {
    var e = t.name;return !(!e || !e.indexOf(Qp));
  }function or(t) {
    return Kp(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00");
  }function sr(t, e) {
    return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? x(e.dataIndex) ? p(e.dataIndex, function (e) {
      return t.indexOfRawIndex(e);
    }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? x(e.name) ? p(e.name, function (e) {
      return t.indexOfName(e);
    }) : t.indexOfName(e.name) : undefined;
  }function lr() {
    var t = "__\x00ec_inner_" + tg++ + "_" + Math.random().toFixed(5);return function (e) {
      return e[t] || (e[t] = {});
    };
  }function ur(t, e, n) {
    if (b(e)) {
      var i = {};i[e + "Index"] = 0, e = i;
    }var r = n && n.defaultMainType;!r || hr(e, r + "Index") || hr(e, r + "Id") || hr(e, r + "Name") || (e[r + "Index"] = 0);var a = {};return Zp(e, function (i, r) {
      var i = e[r];if ("dataIndex" === r || "dataIndexInside" === r) return undefined;var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
          s = o[1],
          l = (o[2] || "").toLowerCase();if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && u(n.includeMainTypes, s) < 0)) {
        var h = { mainType: s };("index" !== l || "all" !== i) && (h[l] = i);var c = t.queryComponents(h);a[s + "Models"] = c, a[s + "Model"] = c[0];
      }
    }), a;
  }function hr(t, e) {
    return t && t.hasOwnProperty(e);
  }function cr(t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : t[e] = n;
  }function dr(t, e) {
    return t.getAttribute ? t.getAttribute(e) : t[e];
  }function fr(t) {
    return "auto" === t ? Ed.domSupported ? "html" : "richText" : t || "html";
  }function pr(t) {
    var e = { main: "", sub: "" };return t && (t = t.split(eg), e.main = t[0] || "", e.sub = t[1] || ""), e;
  }function gr(t) {
    L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
  }function vr(t) {
    t.$constructor = t, t.extend = function (t) {
      var e = this,
          n = function n() {
        t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments);
      };return o(n.prototype, t), n.extend = this.extend, n.superCall = yr, n.superApply = _r, h(n, this), n.superClass = e, n;
    };
  }function mr(t) {
    var e = ["__\x00is_clz", ig++, Math.random().toFixed(3)].join("_");t.prototype[e] = true, t.isInstance = function (t) {
      return !(!t || !t[e]);
    };
  }function yr(t, e) {
    var n = P(arguments, 2);return this.superClass.prototype[e].apply(t, n);
  }function _r(t, e, n) {
    return this.superClass.prototype[e].apply(t, n);
  }function xr(t, e) {
    function n(t) {
      var e = i[t.main];return e && e[ng] || (e = i[t.main] = {}, e[ng] = true), e;
    }e = e || {};var i = {};if (t.registerClass = function (t, e) {
      if (e) if (gr(e), e = pr(e), e.sub) {
        if (e.sub !== ng) {
          var r = n(e);r[e.sub] = t;
        }
      } else i[e.main] = t;return t;
    }, t.getClass = function (t, e, n) {
      var r = i[t];if (r && r[ng] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");return r;
    }, t.getClassesByMainType = function (t) {
      t = pr(t);var e = [],
          n = i[t.main];return n && n[ng] ? f(n, function (t, n) {
        n !== ng && e.push(t);
      }) : e.push(n), e;
    }, t.hasClass = function (t) {
      return t = pr(t), !!i[t.main];
    }, t.getAllClassMainTypes = function () {
      var t = [];return f(i, function (e, n) {
        t.push(n);
      }), t;
    }, t.hasSubTypes = function (t) {
      t = pr(t);var e = i[t.main];return e && e[ng];
    }, t.parseClassType = pr, e.registerWhenExtend) {
      var r = t.extend;r && (t.extend = function (e) {
        var n = r.call(this, e);return t.registerClass(n, e.type);
      });
    }return t;
  }function wr(t) {
    return t > -cg && cg > t;
  }function br(t) {
    return t > cg || -cg > t;
  }function Sr(t, e, n, i, r) {
    var a = 1 - r;return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n);
  }function Mr(t, e, n, i, r) {
    var a = 1 - r;return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r);
  }function Tr(t, e, n, i, r, a) {
    var o = i + 3 * (e - n) - t,
        s = 3 * (n - 2 * e + t),
        l = 3 * (e - t),
        u = t - r,
        h = s * s - 3 * o * l,
        c = s * l - 9 * o * u,
        d = l * l - 3 * s * u,
        f = 0;if (wr(h) && wr(c)) {
      if (wr(s)) a[0] = 0;else {
        var p = -l / s;p >= 0 && 1 >= p && (a[f++] = p);
      }
    } else {
      var g = c * c - 4 * h * d;if (wr(g)) {
        var v = c / h,
            p = -s / o + v,
            m = -v / 2;p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m);
      } else if (g > 0) {
        var y = hg(g),
            _ = h * s + 1.5 * o * (-c + y),
            x = h * s + 1.5 * o * (-c - y);_ = 0 > _ ? -ug(-_, pg) : ug(_, pg), x = 0 > x ? -ug(-x, pg) : ug(x, pg);var p = (-s - (_ + x)) / (3 * o);p >= 0 && 1 >= p && (a[f++] = p);
      } else {
        var w = (2 * h * s - 3 * o * c) / (2 * hg(h * h * h)),
            b = Math.acos(w) / 3,
            S = hg(h),
            M = Math.cos(b),
            p = (-s - 2 * S * M) / (3 * o),
            m = (-s + S * (M + fg * Math.sin(b))) / (3 * o),
            T = (-s + S * (M - fg * Math.sin(b))) / (3 * o);p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m), T >= 0 && 1 >= T && (a[f++] = T);
      }
    }return f;
  }function Ir(t, e, n, i, r) {
    var a = 6 * n - 12 * e + 6 * t,
        o = 9 * e + 3 * i - 3 * t - 9 * n,
        s = 3 * e - 3 * t,
        l = 0;if (wr(o)) {
      if (br(a)) {
        var u = -s / a;u >= 0 && 1 >= u && (r[l++] = u);
      }
    } else {
      var h = a * a - 4 * o * s;if (wr(h)) r[0] = -a / (2 * o);else if (h > 0) {
        var c = hg(h),
            u = (-a + c) / (2 * o),
            d = (-a - c) / (2 * o);u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d);
      }
    }return l;
  }function Cr(t, e, n, i, r, a) {
    var o = (e - t) * r + t,
        s = (n - e) * r + e,
        l = (i - n) * r + n,
        u = (s - o) * r + o,
        h = (l - s) * r + s,
        c = (h - u) * r + u;a[0] = t, a[1] = o, a[2] = u, a[3] = c, a[4] = c, a[5] = h, a[6] = l, a[7] = i;
  }function kr(t, e, n, i, r, a, o, s, l, u, h) {
    var c,
        d,
        f,
        p,
        g,
        v = .005,
        m = Infinity;gg[0] = l, gg[1] = u;for (var y = 0; 1 > y; y += .05) {
      vg[0] = Sr(t, n, r, o, y), vg[1] = Sr(e, i, a, s, y), p = tf(gg, vg), m > p && (c = y, m = p);
    }m = Infinity;for (var _ = 0; 32 > _ && !(dg > v); _++) {
      d = c - v, f = c + v, vg[0] = Sr(t, n, r, o, d), vg[1] = Sr(e, i, a, s, d), p = tf(vg, gg), d >= 0 && m > p ? (c = d, m = p) : (mg[0] = Sr(t, n, r, o, f), mg[1] = Sr(e, i, a, s, f), g = tf(mg, gg), 1 >= f && m > g ? (c = f, m = g) : v *= .5);
    }return h && (h[0] = Sr(t, n, r, o, c), h[1] = Sr(e, i, a, s, c)), hg(m);
  }function Dr(t, e, n, i) {
    var r = 1 - i;return r * (r * t + 2 * i * e) + i * i * n;
  }function Ar(t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e));
  }function Pr(t, e, n, i, r) {
    var a = t - 2 * e + n,
        o = 2 * (e - t),
        s = t - i,
        l = 0;if (wr(a)) {
      if (br(o)) {
        var u = -s / o;u >= 0 && 1 >= u && (r[l++] = u);
      }
    } else {
      var h = o * o - 4 * a * s;if (wr(h)) {
        var u = -o / (2 * a);u >= 0 && 1 >= u && (r[l++] = u);
      } else if (h > 0) {
        var c = hg(h),
            u = (-o + c) / (2 * a),
            d = (-o - c) / (2 * a);u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d);
      }
    }return l;
  }function Or(t, e, n) {
    var i = t + n - 2 * e;return 0 === i ? .5 : (t - e) / i;
  }function Lr(t, e, n, i, r) {
    var a = (e - t) * i + t,
        o = (n - e) * i + e,
        s = (o - a) * i + a;r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n;
  }function Br(t, e, n, i, r, a, o, s, l) {
    var u,
        h = .005,
        c = Infinity;gg[0] = o, gg[1] = s;for (var d = 0; 1 > d; d += .05) {
      vg[0] = Dr(t, n, r, d), vg[1] = Dr(e, i, a, d);var f = tf(gg, vg);c > f && (u = d, c = f);
    }c = Infinity;for (var p = 0; 32 > p && !(dg > h); p++) {
      var g = u - h,
          v = u + h;vg[0] = Dr(t, n, r, g), vg[1] = Dr(e, i, a, g);var f = tf(vg, gg);if (g >= 0 && c > f) u = g, c = f;else {
        mg[0] = Dr(t, n, r, v), mg[1] = Dr(e, i, a, v);var m = tf(mg, gg);1 >= v && c > m ? (u = v, c = m) : h *= .5;
      }
    }return l && (l[0] = Dr(t, n, r, u), l[1] = Dr(e, i, a, u)), hg(c);
  }function Er(t, e, n) {
    if (0 !== t.length) {
      var i,
          r = t[0],
          a = r[0],
          o = r[0],
          s = r[1],
          l = r[1];for (i = 1; i < t.length; i++) {
        r = t[i], a = yg(a, r[0]), o = _g(o, r[0]), s = yg(s, r[1]), l = _g(l, r[1]);
      }e[0] = a, e[1] = s, n[0] = o, n[1] = l;
    }
  }function zr(t, e, n, i, r, a) {
    r[0] = yg(t, n), r[1] = yg(e, i), a[0] = _g(t, n), a[1] = _g(e, i);
  }function Rr(t, e, n, i, r, a, o, s, l, u) {
    var h,
        c = Ir,
        d = Sr,
        f = c(t, n, r, o, Ig);for (l[0] = Infinity, l[1] = Infinity, u[0] = -Infinity, u[1] = -Infinity, h = 0; f > h; h++) {
      var p = d(t, n, r, o, Ig[h]);l[0] = yg(p, l[0]), u[0] = _g(p, u[0]);
    }for (f = c(e, i, a, s, Cg), h = 0; f > h; h++) {
      var g = d(e, i, a, s, Cg[h]);l[1] = yg(g, l[1]), u[1] = _g(g, u[1]);
    }l[0] = yg(t, l[0]), u[0] = _g(t, u[0]), l[0] = yg(o, l[0]), u[0] = _g(o, u[0]), l[1] = yg(e, l[1]), u[1] = _g(e, u[1]), l[1] = yg(s, l[1]), u[1] = _g(s, u[1]);
  }function Fr(t, e, n, i, r, a, o, s) {
    var l = Or,
        u = Dr,
        h = _g(yg(l(t, n, r), 1), 0),
        c = _g(yg(l(e, i, a), 1), 0),
        d = u(t, n, r, h),
        f = u(e, i, a, c);o[0] = yg(t, r, d), o[1] = yg(e, a, f), s[0] = _g(t, r, d), s[1] = _g(e, a, f);
  }function Nr(t, e, n, i, r, a, o, s, l) {
    var u = oe,
        h = se,
        c = Math.abs(r - a);if (1e-4 > c % bg && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, undefined;if (Sg[0] = wg(r) * n + t, Sg[1] = xg(r) * i + e, Mg[0] = wg(a) * n + t, Mg[1] = xg(a) * i + e, u(s, Sg, Mg), h(l, Sg, Mg), r %= bg, 0 > r && (r += bg), a %= bg, 0 > a && (a += bg), r > a && !o ? a += bg : a > r && o && (r += bg), o) {
      var d = a;a = r, r = d;
    }for (var f = 0; a > f; f += Math.PI / 2) {
      f > r && (Tg[0] = wg(f) * n + t, Tg[1] = xg(f) * i + e, u(s, Tg, s), h(l, Tg, l));
    }
  }function Hr(t, e, n, i, r, a, o) {
    if (0 === r) return false;var s = r,
        l = 0,
        u = t;if (o > e + s && o > i + s || e - s > o && i - s > o || a > t + s && a > n + s || t - s > a && n - s > a) return false;if (t === n) return Math.abs(a - t) <= s / 2;l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);var h = l * a - o + u,
        c = h * h / (l * l + 1);return s / 2 * s / 2 >= c;
  }function Vr(t, e, n, i, r, a, o, s, l, u, h) {
    if (0 === l) return false;var c = l;if (h > e + c && h > i + c && h > a + c && h > s + c || e - c > h && i - c > h && a - c > h && s - c > h || u > t + c && u > n + c && u > r + c && u > o + c || t - c > u && n - c > u && r - c > u && o - c > u) return false;var d = kr(t, e, n, i, r, a, o, s, u, h, null);return c / 2 >= d;
  }function Wr(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return false;var u = o;if (l > e + u && l > i + u && l > a + u || e - u > l && i - u > l && a - u > l || s > t + u && s > n + u && s > r + u || t - u > s && n - u > s && r - u > s) return false;var h = Br(t, e, n, i, r, a, s, l, null);return u / 2 >= h;
  }function Gr(t) {
    return t %= Vg, 0 > t && (t += Vg), t;
  }function Xr(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return false;var u = o;s -= t, l -= e;var h = Math.sqrt(s * s + l * l);if (h - u > n || n > h + u) return false;if (Math.abs(i - r) % Wg < 1e-4) return true;if (a) {
      var c = i;i = Gr(r), r = Gr(c);
    } else i = Gr(i), r = Gr(r);i > r && (r += Wg);var d = Math.atan2(l, s);return 0 > d && (d += Wg), d >= i && r >= d || d + Wg >= i && r >= d + Wg;
  }function Yr(t, e, n, i, r, a) {
    if (a > e && a > i || e > a && i > a) return 0;if (i === e) return 0;var o = e > i ? 1 : -1,
        s = (a - e) / (i - e);(1 === s || 0 === s) && (o = e > i ? .5 : -0.5);var l = s * (n - t) + t;return l === r ? Infinity : l > r ? o : 0;
  }function jr(t, e) {
    return Math.abs(t - e) < Yg;
  }function qr() {
    var t = qg[0];qg[0] = qg[1], qg[1] = t;
  }function Ur(t, e, n, i, r, a, o, s, l, u) {
    if (u > e && u > i && u > a && u > s || e > u && i > u && a > u && s > u) return 0;var h = Tr(e, i, a, s, u, jg);if (0 === h) return 0;for (var c, d, f = 0, p = -1, g = 0; h > g; g++) {
      var v = jg[g],
          m = 0 === v || 1 === v ? .5 : 1,
          y = Sr(t, n, r, o, v);l > y || (0 > p && (p = Ir(e, i, a, s, qg), qg[1] < qg[0] && p > 1 && qr(), c = Sr(e, i, a, s, qg[0]), p > 1 && (d = Sr(e, i, a, s, qg[1]))), f += 2 === p ? v < qg[0] ? e > c ? m : -m : v < qg[1] ? c > d ? m : -m : d > s ? m : -m : v < qg[0] ? e > c ? m : -m : c > s ? m : -m);
    }return f;
  }function Zr(t, e, n, i, r, a, o, s) {
    if (s > e && s > i && s > a || e > s && i > s && a > s) return 0;var l = Pr(e, i, a, s, jg);if (0 === l) return 0;var u = Or(e, i, a);if (u >= 0 && 1 >= u) {
      for (var h = 0, c = Dr(e, i, a, u), d = 0; l > d; d++) {
        var f = 0 === jg[d] || 1 === jg[d] ? .5 : 1,
            p = Dr(t, n, r, jg[d]);o > p || (h += jg[d] < u ? e > c ? f : -f : c > a ? f : -f);
      }return h;
    }var f = 0 === jg[0] || 1 === jg[0] ? .5 : 1,
        p = Dr(t, n, r, jg[0]);return o > p ? 0 : e > a ? f : -f;
  }function Kr(t, e, n, i, r, a, o, s) {
    if (s -= e, s > n || -n > s) return 0;var l = Math.sqrt(n * n - s * s);jg[0] = -l, jg[1] = l;var u = Math.abs(i - r);if (1e-4 > u) return 0;if (1e-4 > u % Xg) {
      i = 0, r = Xg;var h = a ? 1 : -1;return o >= jg[0] + t && o <= jg[1] + t ? h : 0;
    }if (a) {
      var l = i;i = Gr(r), r = Gr(l);
    } else i = Gr(i), r = Gr(r);i > r && (r += Xg);for (var c = 0, d = 0; 2 > d; d++) {
      var f = jg[d];if (f + t > o) {
        var p = Math.atan2(s, f),
            h = a ? 1 : -1;0 > p && (p = Xg + p), (p >= i && r >= p || p + Xg >= i && r >= p + Xg) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (h = -h), c += h);
      }
    }return c;
  }function $r(t, e, n, i, r) {
    for (var a = 0, o = 0, s = 0, l = 0, u = 0, h = 0; h < t.length;) {
      var c = t[h++];switch (c === Gg.M && h > 1 && (n || (a += Yr(o, s, l, u, i, r))), 1 === h && (o = t[h], s = t[h + 1], l = o, u = s), c) {case Gg.M:
          l = t[h++], u = t[h++], o = l, s = u;break;case Gg.L:
          if (n) {
            if (Hr(o, s, t[h], t[h + 1], e, i, r)) return true;
          } else a += Yr(o, s, t[h], t[h + 1], i, r) || 0;o = t[h++], s = t[h++];break;case Gg.C:
          if (n) {
            if (Vr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], e, i, r)) return true;
          } else a += Ur(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], i, r) || 0;o = t[h++], s = t[h++];break;case Gg.Q:
          if (n) {
            if (Wr(o, s, t[h++], t[h++], t[h], t[h + 1], e, i, r)) return true;
          } else a += Zr(o, s, t[h++], t[h++], t[h], t[h + 1], i, r) || 0;o = t[h++], s = t[h++];break;case Gg.A:
          var d = t[h++],
              f = t[h++],
              p = t[h++],
              g = t[h++],
              v = t[h++],
              m = t[h++];h += 1;var y = 1 - t[h++],
              _ = Math.cos(v) * p + d,
              x = Math.sin(v) * g + f;h > 1 ? a += Yr(o, s, _, x, i, r) : (l = _, u = x);var w = (i - d) * g / p + d;if (n) {
            if (Xr(d, f, g, v, v + m, y, e, w, r)) return true;
          } else a += Kr(d, f, g, v, v + m, y, w, r);o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;break;case Gg.R:
          l = o = t[h++], u = s = t[h++];var b = t[h++],
              S = t[h++],
              _ = l + b,
              x = u + S;if (n) {
            if (Hr(l, u, _, u, e, i, r) || Hr(_, u, _, x, e, i, r) || Hr(_, x, l, x, e, i, r) || Hr(l, x, l, u, e, i, r)) return true;
          } else a += Yr(_, u, _, x, i, r), a += Yr(l, x, l, u, i, r);break;case Gg.Z:
          if (n) {
            if (Hr(o, s, l, u, e, i, r)) return true;
          } else a += Yr(o, s, l, u, i, r);o = l, s = u;}
    }return n || jr(s, u) || (a += Yr(o, s, l, u, i, r) || 0), 0 !== a;
  }function Qr(t, e, n) {
    return $r(t, 0, false, e, n);
  }function Jr(t, e, n, i) {
    return $r(t, e, true, n, i);
  }function ta(t) {
    Ii.call(this, t), this.path = null;
  }function ea(t, e, n, i, r, a, o, s, l, u, h) {
    var c = l * (av / 180),
        d = rv(c) * (t - n) / 2 + iv(c) * (e - i) / 2,
        f = -1 * iv(c) * (t - n) / 2 + rv(c) * (e - i) / 2,
        p = d * d / (o * o) + f * f / (s * s);p > 1 && (o *= nv(p), s *= nv(p));var g = (r === a ? -1 : 1) * nv((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,
        v = g * o * f / s,
        m = g * -s * d / o,
        y = (t + n) / 2 + rv(c) * v - iv(c) * m,
        _ = (e + i) / 2 + iv(c) * v + rv(c) * m,
        x = lv([1, 0], [(d - v) / o, (f - m) / s]),
        w = [(d - v) / o, (f - m) / s],
        b = [(-1 * d - v) / o, (-1 * f - m) / s],
        S = lv(w, b);sv(w, b) <= -1 && (S = av), sv(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * av), 1 === a && 0 > S && (S += 2 * av), h.addData(u, y, _, o, s, x, S, c, a);
  }function na(t) {
    if (!t) return new Hg();for (var e, n = 0, i = 0, r = n, a = i, o = new Hg(), s = Hg.CMD, l = t.match(uv), u = 0; u < l.length; u++) {
      for (var h, c = l[u], d = c.charAt(0), f = c.match(hv) || [], p = f.length, g = 0; p > g; g++) {
        f[g] = parseFloat(f[g]);
      }for (var v = 0; p > v;) {
        var m,
            y,
            _,
            x,
            w,
            b,
            S,
            M = n,
            T = i;switch (d) {case "l":
            n += f[v++], i += f[v++], h = s.L, o.addData(h, n, i);break;case "L":
            n = f[v++], i = f[v++], h = s.L, o.addData(h, n, i);break;case "m":
            n += f[v++], i += f[v++], h = s.M, o.addData(h, n, i), r = n, a = i, d = "l";break;case "M":
            n = f[v++], i = f[v++], h = s.M, o.addData(h, n, i), r = n, a = i, d = "L";break;case "h":
            n += f[v++], h = s.L, o.addData(h, n, i);break;case "H":
            n = f[v++], h = s.L, o.addData(h, n, i);break;case "v":
            i += f[v++], h = s.L, o.addData(h, n, i);break;case "V":
            i = f[v++], h = s.L, o.addData(h, n, i);break;case "C":
            h = s.C, o.addData(h, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), n = f[v - 2], i = f[v - 1];break;case "c":
            h = s.C, o.addData(h, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i), n += f[v - 2], i += f[v - 1];break;case "S":
            m = n, y = i;var I = o.len(),
                C = o.data;e === s.C && (m += n - C[I - 4], y += i - C[I - 3]), h = s.C, M = f[v++], T = f[v++], n = f[v++], i = f[v++], o.addData(h, m, y, M, T, n, i);break;case "s":
            m = n, y = i;var I = o.len(),
                C = o.data;e === s.C && (m += n - C[I - 4], y += i - C[I - 3]), h = s.C, M = n + f[v++], T = i + f[v++], n += f[v++], i += f[v++], o.addData(h, m, y, M, T, n, i);break;case "Q":
            M = f[v++], T = f[v++], n = f[v++], i = f[v++], h = s.Q, o.addData(h, M, T, n, i);break;case "q":
            M = f[v++] + n, T = f[v++] + i, n += f[v++], i += f[v++], h = s.Q, o.addData(h, M, T, n, i);break;case "T":
            m = n, y = i;var I = o.len(),
                C = o.data;e === s.Q && (m += n - C[I - 4], y += i - C[I - 3]), n = f[v++], i = f[v++], h = s.Q, o.addData(h, m, y, n, i);break;case "t":
            m = n, y = i;var I = o.len(),
                C = o.data;e === s.Q && (m += n - C[I - 4], y += i - C[I - 3]), n += f[v++], i += f[v++], h = s.Q, o.addData(h, m, y, n, i);break;case "A":
            _ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], M = n, T = i, n = f[v++], i = f[v++], h = s.A, ea(M, T, n, i, b, S, _, x, w, h, o);break;case "a":
            _ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], M = n, T = i, n += f[v++], i += f[v++], h = s.A, ea(M, T, n, i, b, S, _, x, w, h, o);}
      }("z" === d || "Z" === d) && (h = s.Z, o.addData(h), n = r, i = a), e = h;
    }return o.toStatic(), o;
  }function ia(t, e) {
    var n = na(t);return e = e || {}, e.buildPath = function (t) {
      if (t.setData) {
        t.setData(n.data);var e = t.getContext();e && t.rebuildPath(e);
      } else {
        var e = t;n.rebuildPath(e);
      }
    }, e.applyTransform = function (t) {
      ev(n, t), this.dirty(true);
    }, e;
  }function ra(t, e) {
    return new ta(ia(t, e));
  }function aa(t, e) {
    return ta.extend(ia(t, e));
  }function oa(t, e) {
    for (var n = [], i = t.length, r = 0; i > r; r++) {
      var a = t[r];a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, true), n.push(a.path);
    }var o = new ta(e);return o.createPathProxy(), o.buildPath = function (t) {
      t.appendPath(n);var e = t.getContext();e && t.rebuildPath(e);
    }, o;
  }function sa(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
        l = .5 * (i - e);return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
  }function la(t, e, n) {
    var i = e.points,
        r = e.smooth;if (i && i.length >= 2) {
      if (r && "spline" !== r) {
        var a = yv(i, r, n, e.smoothConstraint);t.moveTo(i[0][0], i[0][1]);for (var o = i.length, s = 0; (n ? o : o - 1) > s; s++) {
          var l = a[2 * s],
              u = a[2 * s + 1],
              h = i[(s + 1) % o];t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1]);
        }
      } else {
        "spline" === r && (i = mv(i, n)), t.moveTo(i[0][0], i[0][1]);for (var s = 1, c = i.length; c > s; s++) {
          t.lineTo(i[s][0], i[s][1]);
        }
      }n && t.closePath();
    }
  }function ua(t, e, n) {
    if (e) {
      var i = e.x1,
          r = e.x2,
          a = e.y1,
          o = e.y2;t.x1 = i, t.x2 = r, t.y1 = a, t.y2 = o;var s = n && n.lineWidth;s && (wv(2 * i) === wv(2 * r) && (t.x1 = t.x2 = ca(i, s, true)), wv(2 * a) === wv(2 * o) && (t.y1 = t.y2 = ca(a, s, true)));
    }
  }function ha(t, e, n) {
    if (e) {
      var i = e.x,
          r = e.y,
          a = e.width,
          o = e.height;t.x = i, t.y = r, t.width = a, t.height = o;var s = n && n.lineWidth;s && (t.x = ca(i, s, true), t.y = ca(r, s, true), t.width = Math.max(ca(i + a, s, false) - t.x, 0 === a ? 0 : 1), t.height = Math.max(ca(r + o, s, false) - t.y, 0 === o ? 0 : 1));
    }
  }function ca(t, e, n) {
    if (!e) return t;var i = wv(2 * t);return (i + wv(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2;
  }function da(t, e, n) {
    var i = t.cpx2,
        r = t.cpy2;return null === i || null === r ? [(n ? Mr : Sr)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? Mr : Sr)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? Ar : Dr)(t.x1, t.cpx1, t.x2, e), (n ? Ar : Dr)(t.y1, t.cpy1, t.y2, e)];
  }function fa(t) {
    Ii.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = true;
  }function pa(t) {
    return ta.extend(t);
  }function ga(t, e) {
    return aa(t, e);
  }function va(t, e) {
    Gv[t] = e;
  }function ma(t) {
    return Gv.hasOwnProperty(t) ? Gv[t] : undefined;
  }function ya(t, e, n, i) {
    var r = ra(t, e);return n && ("center" === i && (n = xa(n, r.getBoundingRect())), wa(r, n)), r;
  }function _a(t, e, n) {
    var i = new Ci({ style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height }, onload: function onload(t) {
        if ("center" === n) {
          var r = { width: t.width, height: t.height };i.setStyle(xa(e, r));
        }
      } });return i;
  }function xa(t, e) {
    var n,
        i = e.width / e.height,
        r = t.height * i;r <= t.width ? n = t.height : (r = t.width, n = r / i);var a = t.x + t.width / 2,
        o = t.y + t.height / 2;return { x: a - r / 2, y: o - n / 2, width: r, height: n };
  }function wa(t, e) {
    if (t.applyTransform) {
      var n = t.getBoundingRect(),
          i = n.calculateTransform(e);t.applyTransform(i);
    }
  }function ba(t) {
    return ua(t.shape, t.shape, t.style), t;
  }function Sa(t) {
    return ha(t.shape, t.shape, t.style), t;
  }function Ma(t) {
    return null != t && "none" !== t;
  }function Ta(t) {
    if ("string" != typeof t) return t;var e = jv.get(t);return e || (e = nn(t, -0.1), 1e4 > qv && (jv.set(t, e), qv++)), e;
  }function Ia(t) {
    if (t.__hoverStlDirty) {
      t.__hoverStlDirty = false;var e = t.__hoverStl;if (!e) return undefined;var n = t.__cachedNormalStl = {};t.__cachedNormalZ2 = t.z2;var i = t.style;for (var r in e) {
        null != e[r] && (n[r] = i[r]);
      }n.fill = i.fill, n.stroke = i.stroke;
    }
  }function Ca(t) {
    var e = t.__hoverStl;if (e && !t.__highlighted) {
      var n = t.__zr,
          i = t.useHoverLayer && n && "canvas" === n.painter.type;if (t.__highlighted = i ? "layer" : "plain", !(t.isGroup || !n && t.useHoverLayer)) {
        var r = t,
            a = t.style;i && (r = n.addHover(t), a = r.style), Ka(a), i || Ia(r), a.extendFrom(e), ka(a, e, "fill"), ka(a, e, "stroke"), Za(a), i || (t.dirty(false), t.z2 += Rv);
      }
    }
  }function ka(t, e, n) {
    !Ma(e[n]) && Ma(t[n]) && (t[n] = Ta(t[n]));
  }function Da(t) {
    var e = t.__highlighted;if (e && (t.__highlighted = false, !t.isGroup)) if ("layer" === e) t.__zr && t.__zr.removeHover(t);else {
      var n = t.style,
          i = t.__cachedNormalStl;i && (Ka(n), t.setStyle(i), Za(n));var r = t.__cachedNormalZ2;null != r && t.z2 - r === Rv && (t.z2 = r);
    }
  }function Aa(t, e, n) {
    var i,
        r = Hv,
        a = Hv;t.__highlighted && (r = Nv, i = true), e(t, n), t.__highlighted && (a = Nv, i = true), t.isGroup && t.traverse(function (t) {
      !t.isGroup && e(t, n);
    }), i && t.__highDownOnUpdate && t.__highDownOnUpdate(r, a);
  }function Pa(t, e) {
    e = t.__hoverStl = e !== false && (t.hoverStyle || e || {}), t.__hoverStlDirty = true, t.__highlighted && (t.__cachedNormalStl = null, Da(t), Ca(t));
  }function Oa(t) {
    !za(this, t) && !this.__highByOuter && Aa(this, Ca);
  }function La(t) {
    !za(this, t) && !this.__highByOuter && Aa(this, Da);
  }function Ba(t) {
    this.__highByOuter |= 1 << (t || 0), Aa(this, Ca);
  }function Ea(t) {
    !(this.__highByOuter &= ~(1 << (t || 0))) && Aa(this, Da);
  }function za(t, e) {
    return t.__highDownSilentOnTouch && e.zrByTouch;
  }function Ra(t, e) {
    Fa(t, true), Aa(t, Pa, e);
  }function Fa(t, e) {
    var n = e === false;if (t.__highDownSilentOnTouch = t.highDownSilentOnTouch, t.__highDownOnUpdate = t.highDownOnUpdate, !n || t.__highDownDispatcher) {
      var i = n ? "off" : "on";t[i]("mouseover", Oa)[i]("mouseout", La), t[i]("emphasis", Ba)[i]("normal", Ea), t.__highByOuter = t.__highByOuter || 0, t.__highDownDispatcher = !n;
    }
  }function Na(t) {
    return !(!t || !t.__highDownDispatcher);
  }function Ha(t) {
    var e = Wv[t];return null == e && 32 >= Vv && (e = Wv[t] = Vv++), e;
  }function Va(t, e, n, i, r, a, o) {
    r = r || zv;var s,
        l = r.labelFetcher,
        u = r.labelDataIndex,
        h = r.labelDimIndex,
        c = r.labelProp,
        d = n.getShallow("show"),
        f = i.getShallow("show");(d || f) && (l && (s = l.getFormattedLabel(u, "normal", null, h, c)), null == s && (s = w(r.defaultText) ? r.defaultText(u, r) : r.defaultText));var p = d ? s : null,
        g = f ? D(l ? l.getFormattedLabel(u, "emphasis", null, h, c) : null, s) : null;(null != p || null != g) && (Ga(t, n, a, r), Ga(e, i, o, r, true)), t.text = p, e.text = g;
  }function Wa(t, e, n) {
    var i = t.style;e && (Ka(i), t.setStyle(e), Za(i)), i = t.__hoverStl, n && i && (Ka(i), o(i, n), Za(i));
  }function Ga(t, e, n, i, r) {
    return Ya(t, e, i, r), n && o(t, n), t;
  }function Xa(t, e, n) {
    var i,
        r = { isRectText: true };n === false ? i = true : r.autoColor = n, Ya(t, e, r, i);
  }function Ya(t, e, n, i) {
    if (n = n || zv, n.isRectText) {
      var r;n.getTextPosition ? r = n.getTextPosition(e, i) : (r = e.getShallow("position") || (i ? null : "inside"), "outside" === r && (r = "top")), t.textPosition = r, t.textOffset = e.getShallow("offset");var a = e.getShallow("rotate");null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = D(e.getShallow("distance"), i ? null : 5);
    }var o,
        s = e.ecModel,
        l = s && s.option.textStyle,
        u = ja(e);if (u) {
      o = {};for (var h in u) {
        if (u.hasOwnProperty(h)) {
          var c = e.getModel(["rich", h]);qa(o[h] = {}, c, l, n, i);
        }
      }
    }return t.rich = o, qa(t, e, l, n, i, true), n.forceRich && !n.textStyle && (n.textStyle = {}), t;
  }function ja(t) {
    for (var e; t && t !== t.ecModel;) {
      var n = (t.option || zv).rich;if (n) {
        e = e || {};for (var i in n) {
          n.hasOwnProperty(i) && (e[i] = 1);
        }
      }t = t.parentModel;
    }return e;
  }function qa(t, e, n, i, r, a) {
    n = !r && n || zv, t.textFill = Ua(e.getShallow("color"), i) || n.color, t.textStroke = Ua(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = D(e.getShallow("textBorderWidth"), n.textBorderWidth), r || (a && (t.insideRollbackOpt = i, Za(t)), null == t.textFill && (t.textFill = i.autoColor)), t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = Ua(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = Ua(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY;
  }function Ua(t, e) {
    return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;
  }function Za(t) {
    var e,
        n = t.textPosition,
        i = t.insideRollbackOpt;if (i && null == t.textFill) {
      var r = i.autoColor,
          a = i.isRectText,
          o = i.useInsideStyle,
          s = o !== false && (o === true || a && n && "string" == typeof n && n.indexOf("inside") >= 0),
          l = !s && null != r;(s || l) && (e = { textFill: t.textFill, textStroke: t.textStroke, textStrokeWidth: t.textStrokeWidth }), s && (t.textFill = "#fff", null == t.textStroke && (t.textStroke = r, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), l && (t.textFill = r);
    }t.insideRollback = e;
  }function Ka(t) {
    var e = t.insideRollback;e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null);
  }function $a(t, e) {
    var n = e && e.getModel("textStyle");return B([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "));
  }function Qa(t, e, n, i, r, a) {
    "function" == typeof r && (a = r, r = null);var o = i && i.isAnimationEnabled();if (o) {
      var s = t ? "Update" : "",
          l = i.getShallow("animationDuration" + s),
          u = i.getShallow("animationEasing" + s),
          h = i.getShallow("animationDelay" + s);"function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(n, l, h || 0, u, a, !!a) : (e.stopAnimation(), e.attr(n), a && a());
    } else e.stopAnimation(), e.attr(n), a && a();
  }function Ja(t, e, n, i, r) {
    Qa(true, t, e, n, i, r);
  }function to(t, e, n, i, r) {
    Qa(false, t, e, n, i, r);
  }function eo(t, e) {
    for (var n = Le([]); t && t !== e;) {
      Ee(n, t.getLocalTransform(), n), t = t.parent;
    }return n;
  }function no(t, e, n) {
    return e && !d(e) && (e = wf.getLocalTransform(e)), n && (e = Ne([], e)), ae([], t, e);
  }function io(t, e, n) {
    var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
        r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
        a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];return a = no(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
  }function ro(t, e, n) {
    function i(t) {
      var e = {};return t.traverse(function (t) {
        !t.isGroup && t.anid && (e[t.anid] = t);
      }), e;
    }function r(t) {
      var e = { position: G(t.position), rotation: t.rotation };return t.shape && (e.shape = o({}, t.shape)), e;
    }if (t && e) {
      var a = i(t);e.traverse(function (t) {
        if (!t.isGroup && t.anid) {
          var e = a[t.anid];if (e) {
            var i = r(t);t.attr(r(e)), Ja(t, i, n, t.dataIndex);
          }
        }
      });
    }
  }function ao(t, e) {
    return p(t, function (t) {
      var n = t[0];n = Bv(n, e.x), n = Ev(n, e.x + e.width);var i = t[1];return i = Bv(i, e.y), i = Ev(i, e.y + e.height), [n, i];
    });
  }function oo(t, e) {
    var n = Bv(t.x, e.x),
        i = Ev(t.x + t.width, e.x + e.width),
        r = Bv(t.y, e.y),
        a = Ev(t.y + t.height, e.y + e.height);return i >= n && a >= r ? { x: n, y: r, width: i - n, height: a - r } : undefined;
  }function so(t, e, n) {
    e = o({ rectHover: true }, e);var i = e.style = { strokeNoScale: true };return n = n || { x: -1, y: -1, width: 2, height: 2 }, t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new Ci(e)) : ya(t.replace("path://", ""), e, n, "center") : undefined;
  }function lo(t, e, n, i, r) {
    for (var a = 0, o = r[r.length - 1]; a < r.length; a++) {
      var s = r[a];if (uo(t, e, n, i, s[0], s[1], o[0], o[1])) return true;o = s;
    }
  }function uo(t, e, n, i, r, a, o, s) {
    var l = n - t,
        u = i - e,
        h = o - r,
        c = s - a,
        d = ho(h, c, l, u);if (co(d)) return false;var f = t - r,
        p = e - a,
        g = ho(f, p, l, u) / d;if (0 > g || g > 1) return false;var v = ho(f, p, h, c) / d;return 0 > v || v > 1 ? false : true;
  }function ho(t, e, n, i) {
    return t * i - n * e;
  }function co(t) {
    return 1e-6 >= t && t >= -0.000001;
  }function fo(t, e, n) {
    this.parentModel = e, this.ecModel = n, this.option = t;
  }function po(t, e, n) {
    for (var i = 0; i < e.length && (!e[i] || (t = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t[e[i]] : null, null != t)); i++) {}return null == t && n && (t = n.get(e)), t;
  }function go(t, e) {
    var n = tm(t).getParent;return n ? n.call(t, e) : t.parentModel;
  }function vo(t) {
    return [t || "", em++, Math.random().toFixed(5)].join("_");
  }function mo(t) {
    var e = {};return t.registerSubTypeDefaulter = function (t, n) {
      t = pr(t), e[t.main] = n;
    }, t.determineSubType = function (n, i) {
      var r = i.type;if (!r) {
        var a = pr(n).main;t.hasSubTypes(n) && e[a] && (r = e[a](i));
      }return r;
    }, t;
  }function yo(t, e) {
    function n(t) {
      var n = {},
          a = [];return f(t, function (o) {
        var s = i(n, o),
            l = s.originalDeps = e(o),
            h = r(l, t);s.entryCount = h.length, 0 === s.entryCount && a.push(o), f(h, function (t) {
          u(s.predecessor, t) < 0 && s.predecessor.push(t);var e = i(n, t);u(e.successor, t) < 0 && e.successor.push(o);
        });
      }), { graph: n, noEntryList: a };
    }function i(t, e) {
      return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];
    }function r(t, e) {
      var n = [];return f(t, function (t) {
        u(e, t) >= 0 && n.push(t);
      }), n;
    }t.topologicalTravel = function (t, e, i, r) {
      function a(t) {
        l[t].entryCount--, 0 === l[t].entryCount && u.push(t);
      }function o(t) {
        h[t] = true, a(t);
      }if (t.length) {
        var s = n(e),
            l = s.graph,
            u = s.noEntryList,
            h = {};for (f(t, function (t) {
          h[t] = true;
        }); u.length;) {
          var c = u.pop(),
              d = l[c],
              p = !!h[c];p && (i.call(r, c, d.originalDeps.slice()), delete h[c]), f(d.successor, p ? o : a);
        }f(h, function () {
          throw new Error("Circle dependency may exists");
        });
      }
    };
  }function _o(t) {
    return t.replace(/^\s+|\s+$/g, "");
  }function xo(t, e, n, i) {
    var r = e[1] - e[0],
        a = n[1] - n[0];if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;if (i) {
      if (r > 0) {
        if (t <= e[0]) return n[0];if (t >= e[1]) return n[1];
      } else {
        if (t >= e[0]) return n[0];if (t <= e[1]) return n[1];
      }
    } else {
      if (t === e[0]) return n[0];if (t === e[1]) return n[1];
    }return (t - e[0]) / r * a + n[0];
  }function wo(t, e) {
    switch (t) {case "center":case "middle":
        t = "50%";break;case "left":case "top":
        t = "0%";break;case "right":case "bottom":
        t = "100%";}return "string" == typeof t ? _o(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t;
  }function bo(t, e, n) {
    return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t;
  }function So(t) {
    return t.sort(function (t, e) {
      return t - e;
    }), t;
  }function Mo(t) {
    if (t = +t, isNaN(t)) return 0;for (var e = 1, n = 0; Math.round(t * e) / e !== t;) {
      e *= 10, n++;
    }return n;
  }function To(t) {
    var e = t.toString(),
        n = e.indexOf("e");if (n > 0) {
      var i = +e.slice(n + 1);return 0 > i ? -i : 0;
    }var r = e.indexOf(".");return 0 > r ? 0 : e.length - 1 - r;
  }function Io(t, e) {
    var n = Math.log,
        i = Math.LN10,
        r = Math.floor(n(t[1] - t[0]) / i),
        a = Math.round(n(Math.abs(e[1] - e[0])) / i),
        o = Math.min(Math.max(-r + a, 0), 20);return isFinite(o) ? o : 20;
  }function Co(t, e, n) {
    if (!t[e]) return 0;var i = g(t, function (t, e) {
      return t + (isNaN(e) ? 0 : e);
    }, 0);if (0 === i) return 0;for (var r = Math.pow(10, n), a = p(t, function (t) {
      return (isNaN(t) ? 0 : t) / i * r * 100;
    }), o = 100 * r, s = p(a, function (t) {
      return Math.floor(t);
    }), l = g(s, function (t, e) {
      return t + e;
    }, 0), u = p(a, function (t, e) {
      return t - s[e];
    }); o > l;) {
      for (var h = Number.NEGATIVE_INFINITY, c = null, d = 0, f = u.length; f > d; ++d) {
        u[d] > h && (h = u[d], c = d);
      }++s[c], u[c] = 0, ++l;
    }return s[e] / r;
  }function ko(t) {
    var e = 2 * Math.PI;return (t % e + e) % e;
  }function Do(t) {
    return t > -nm && nm > t;
  }function Ao(t) {
    if (t instanceof Date) return t;if ("string" == typeof t) {
      var e = rm.exec(t);if (!e) return new Date(NaN);if (e[8]) {
        var n = +e[4] || 0;return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0));
      }return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
    }return new Date(null == t ? NaN : Math.round(t));
  }function Po(t) {
    return Math.pow(10, Oo(t));
  }function Oo(t) {
    if (0 === t) return 0;var e = Math.floor(Math.log(t) / Math.LN10);return t / Math.pow(10, e) >= 10 && e++, e;
  }function Lo(t, e) {
    var n,
        i = Oo(t),
        r = Math.pow(10, i),
        a = t / r;return n = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t;
  }function Bo(t, e) {
    var n = (t.length - 1) * e + 1,
        i = Math.floor(n),
        r = +t[i - 1],
        a = n - i;return a ? r + a * (t[i] - r) : r;
  }function Eo(t) {
    function e(t, n, i) {
      return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1));
    }t.sort(function (t, n) {
      return e(t, n, 0) ? -1 : 1;
    });for (var n = -Infinity, i = 1, r = 0; r < t.length;) {
      for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) {
        a[s] <= n && (a[s] = n, o[s] = s ? 1 : 1 - i), n = a[s], i = o[s];
      }a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++;
    }return t;
  }function zo(t) {
    return t - parseFloat(t) >= 0;
  }function Ro(t) {
    return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""));
  }function Fo(t, e) {
    return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
      return e.toUpperCase();
    }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;
  }function No(t) {
    return null == t ? "" : (t + "").replace(sm, function (t, e) {
      return lm[e];
    });
  }function Ho(t, e, n) {
    x(e) || (e = [e]);var i = e.length;if (!i) return "";for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
      var o = um[a];t = t.replace(hm(o), hm(o, 0));
    }for (var s = 0; i > s; s++) {
      for (var l = 0; l < r.length; l++) {
        var u = e[s][r[l]];t = t.replace(hm(um[l], s), n ? No(u) : u);
      }
    }return t;
  }function Vo(t, e, n) {
    return f(e, function (e, i) {
      t = t.replace("{" + i + "}", n ? No(e) : e);
    }), t;
  }function Wo(t, e) {
    t = b(t) ? { color: t, extraCssText: e } : t || {};var n = t.color,
        i = t.type,
        e = t.extraCssText,
        r = t.renderMode || "html",
        a = t.markerId || "X";return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + No(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + No(n) + ";" + (e || "") + '"></span>' : { renderMode: r, content: "{marker" + a + "|}  ", style: { color: n } } : "";
  }function Go(t, e) {
    return t += "", "0000".substr(0, e - t.length) + t;
  }function Xo(t, e, n) {
    ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");var i = Ao(e),
        r = n ? "UTC" : "",
        a = i["get" + r + "FullYear"](),
        o = i["get" + r + "Month"]() + 1,
        s = i["get" + r + "Date"](),
        l = i["get" + r + "Hours"](),
        u = i["get" + r + "Minutes"](),
        h = i["get" + r + "Seconds"](),
        c = i["get" + r + "Milliseconds"]();return t = t.replace("MM", Go(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", Go(s, 2)).replace("d", s).replace("hh", Go(l, 2)).replace("h", l).replace("mm", Go(u, 2)).replace("m", u).replace("ss", Go(h, 2)).replace("s", h).replace("SSS", Go(c, 3));
  }function Yo(t) {
    return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;
  }function jo(t) {
    return Yn(t.text, t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich, t.truncate);
  }function qo(t, e, n, i, r, a, o, s) {
    return Yn(t, e, n, i, r, s, a, o);
  }function Uo(t, e) {
    if ("_blank" === e || "blank" === e) {
      var n = window.open();n.opener = null, n.location = t;
    } else window.open(t, e);
  }function Zo(t, e, n, i, r) {
    var a = 0,
        o = 0;null == i && (i = Infinity), null == r && (r = Infinity);var s = 0;e.eachChild(function (l, u) {
      var h,
          c,
          d = l.position,
          f = l.getBoundingRect(),
          p = e.childAt(u + 1),
          g = p && p.getBoundingRect();if ("horizontal" === t) {
        var v = f.width + (g ? -g.x + f.x : 0);h = a + v, h > i || l.newline ? (a = 0, h = v, o += s + n, s = f.height) : s = Math.max(s, f.height);
      } else {
        var m = f.height + (g ? -g.y + f.y : 0);c = o + m, c > r || l.newline ? (a += s + n, o = 0, c = m, s = f.width) : s = Math.max(s, f.width);
      }l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = h + n : o = c + n);
    });
  }function Ko(t, e, n) {
    n = om(n || 0);var i = e.width,
        r = e.height,
        a = wo(t.left, i),
        o = wo(t.top, r),
        s = wo(t.right, i),
        l = wo(t.bottom, r),
        u = wo(t.width, i),
        h = wo(t.height, r),
        c = n[2] + n[0],
        d = n[1] + n[3],
        f = t.aspect;switch (isNaN(u) && (u = i - s - d - a), isNaN(h) && (h = r - l - c - o), null != f && (isNaN(u) && isNaN(h) && (f > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(a) && (a = i - s - u - d), isNaN(o) && (o = r - l - h - c), t.left || t.right) {case "center":
        a = i / 2 - u / 2 - n[3];break;case "right":
        a = i - u - d;}switch (t.top || t.bottom) {case "middle":case "center":
        o = r / 2 - h / 2 - n[0];break;case "bottom":
        o = r - h - c;}a = a || 0, o = o || 0, isNaN(u) && (u = i - d - a - (s || 0)), isNaN(h) && (h = r - c - o - (l || 0));var p = new In(a + n[3], o + n[0], u, h);return p.margin = n, p;
  }function $o(t, e, n) {
    function i(n, i) {
      var o = {},
          l = 0,
          u = {},
          h = 0,
          c = 2;if (fm(n, function (e) {
        u[e] = t[e];
      }), fm(n, function (t) {
        r(e, t) && (o[t] = u[t] = e[t]), a(o, t) && l++, a(u, t) && h++;
      }), s[i]) return a(e, n[1]) ? u[n[2]] = null : a(e, n[2]) && (u[n[1]] = null), u;if (h !== c && l) {
        if (l >= c) return o;for (var d = 0; d < n.length; d++) {
          var f = n[d];if (!r(o, f) && r(t, f)) {
            o[f] = t[f];break;
          }
        }return o;
      }return u;
    }function r(t, e) {
      return t.hasOwnProperty(e);
    }function a(t, e) {
      return null != t[e] && "auto" !== t[e];
    }function o(t, e, n) {
      fm(t, function (t) {
        e[t] = n[t];
      });
    }!S(n) && (n = {});var s = n.ignoreSize;!x(s) && (s = [s, s]);var l = i(gm[0], 0),
        u = i(gm[1], 1);o(gm[0], t, l), o(gm[1], t, u);
  }function Qo(t) {
    return Jo({}, t);
  }function Jo(t, e) {
    return e && t && fm(pm, function (n) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }), t;
  }function ts(t) {
    var e = [];return f(ym.getClassesByMainType(t), function (t) {
      e = e.concat(t.prototype.dependencies || []);
    }), e = p(e, function (t) {
      return pr(t).main;
    }), "dataset" !== t && u(e, "dataset") <= 0 && e.unshift("dataset"), e;
  }function es(t, e) {
    for (var n = t.length, i = 0; n > i; i++) {
      if (t[i].length > e) return t[i];
    }return t[n - 1];
  }function ns(t) {
    this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === Im ? {} : []), this.sourceFormat = t.sourceFormat || Cm, this.seriesLayoutBy = t.seriesLayoutBy || Dm, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && F(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount;
  }function is(t) {
    var e = t.option.source,
        n = Cm;if (T(e)) n = km;else if (x(e)) {
      0 === e.length && (n = Mm);for (var i = 0, r = e.length; r > i; i++) {
        var a = e[i];if (null != a) {
          if (x(a)) {
            n = Mm;break;
          }if (S(a)) {
            n = Tm;break;
          }
        }
      }
    } else if (S(e)) {
      for (var o in e) {
        if (e.hasOwnProperty(o) && d(e[o])) {
          n = Im;break;
        }
      }
    } else if (null != e) throw new Error("Invalid data");Om(t).sourceFormat = n;
  }function rs(t) {
    return Om(t).source;
  }function as(t) {
    Om(t).datasetMap = F();
  }function os(t) {
    var e = t.option,
        n = e.data,
        i = T(n) ? km : Sm,
        r = false,
        a = e.seriesLayoutBy,
        o = e.sourceHeader,
        s = e.dimensions,
        l = ds(t);if (l) {
      var u = l.option;n = u.source, i = Om(l).sourceFormat, r = true, a = a || u.seriesLayoutBy, null == o && (o = u.sourceHeader), s = s || u.dimensions;
    }var h = ss(n, i, a, o, s);Om(t).source = new ns({ data: n, fromDataset: r, seriesLayoutBy: a, sourceFormat: i, dimensionsDefine: h.dimensionsDefine, startIndex: h.startIndex, dimensionsDetectCount: h.dimensionsDetectCount, encodeDefine: e.encode });
  }function ss(t, e, n, i, r) {
    if (!t) return { dimensionsDefine: ls(r) };var a, o;if (e === Mm) "auto" === i || null == i ? us(function (t) {
      null != t && "-" !== t && (b(t) ? null == o && (o = 1) : o = 0);
    }, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], us(function (t, e) {
      r[e] = null != t ? t : "";
    }, n, t)), a = r ? r.length : n === Am ? t.length : t[0] ? t[0].length : null;else if (e === Tm) r || (r = hs(t));else if (e === Im) r || (r = [], f(t, function (t, e) {
      r.push(e);
    }));else if (e === Sm) {
      var s = er(t[0]);a = x(s) && s.length || 1;
    }return { startIndex: o, dimensionsDefine: ls(r), dimensionsDetectCount: a };
  }function ls(t) {
    if (t) {
      var e = F();return p(t, function (t) {
        if (t = o({}, S(t) ? t : { name: t }), null == t.name) return t;t.name += "", null == t.displayName && (t.displayName = t.name);var n = e.get(t.name);return n ? t.name += "-" + n.count++ : e.set(t.name, { count: 1 }), t;
      });
    }
  }function us(t, e, n, i) {
    if (null == i && (i = Infinity), e === Am) for (var r = 0; r < n.length && i > r; r++) {
      t(n[r] ? n[r][0] : null, r);
    } else for (var a = n[0] || [], r = 0; r < a.length && i > r; r++) {
      t(a[r], r);
    }
  }function hs(t) {
    for (var e, n = 0; n < t.length && !(e = t[n++]);) {}if (e) {
      var i = [];return f(e, function (t, e) {
        i.push(e);
      }), i;
    }
  }function cs(t, e, n) {
    function i(t, e, n) {
      for (var i = 0; n > i; i++) {
        t.push(e + i);
      }
    }function r(t) {
      var e = t.dimsDef;return e ? e.length : 1;
    }var a = {},
        o = ds(e);if (!o || !t) return a;var s,
        l,
        u = [],
        h = [],
        c = e.ecModel,
        d = Om(c).datasetMap,
        p = o.uid + "_" + n.seriesLayoutBy;t = t.slice(), f(t, function (e, n) {
      !S(e) && (t[n] = { name: e }), "ordinal" === e.type && null == s && (s = n, l = r(t[n])), a[e.name] = [];
    });var g = d.get(p) || d.set(p, { categoryWayDim: l, valueWayDim: 0 });return f(t, function (t, e) {
      var n = t.name,
          o = r(t);if (null == s) {
        var l = g.valueWayDim;i(a[n], l, o), i(h, l, o), g.valueWayDim += o;
      } else if (s === e) i(a[n], 0, o), i(u, 0, o);else {
        var l = g.categoryWayDim;i(a[n], l, o), i(h, l, o), g.categoryWayDim += o;
      }
    }), u.length && (a.itemName = u), h.length && (a.seriesName = h), a;
  }function ds(t) {
    var e = t.option,
        n = e.data;return n ? undefined : t.ecModel.getComponent("dataset", e.datasetIndex || 0);
  }function fs(t, e) {
    return ps(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
  }function ps(t, e, n, i, r, a) {
    function o(t) {
      var e = b(t);return null != t && isFinite(t) && "" !== t ? e ? Pm.Might : Pm.Not : e && "-" !== t ? Pm.Must : undefined;
    }var s,
        l = 5;if (T(t)) return Pm.Not;var u, h;if (i) {
      var c = i[a];S(c) ? (u = c.name, h = c.type) : b(c) && (u = c);
    }if (null != h) return "ordinal" === h ? Pm.Must : Pm.Not;if (e === Mm) {
      if (n === Am) {
        for (var d = t[a], f = 0; f < (d || []).length && l > f; f++) {
          if (null != (s = o(d[r + f]))) return s;
        }
      } else for (var f = 0; f < t.length && l > f; f++) {
        var p = t[r + f];if (p && null != (s = o(p[a]))) return s;
      }
    } else if (e === Tm) {
      if (!u) return Pm.Not;for (var f = 0; f < t.length && l > f; f++) {
        var g = t[f];if (g && null != (s = o(g[u]))) return s;
      }
    } else if (e === Im) {
      if (!u) return Pm.Not;var d = t[u];if (!d || T(d)) return Pm.Not;for (var f = 0; f < d.length && l > f; f++) {
        if (null != (s = o(d[f]))) return s;
      }
    } else if (e === Sm) for (var f = 0; f < t.length && l > f; f++) {
      var g = t[f],
          v = er(g);if (!x(v)) return Pm.Not;if (null != (s = o(v[a]))) return s;
    }return Pm.Not;
  }function gs(t, e) {
    if (e) {
      var n = e.seiresIndex,
          i = e.seriesId,
          r = e.seriesName;return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r;
    }
  }function vs(t, e) {
    var n = t.color && !t.colorLayer;f(e, function (e, a) {
      "colorLayer" === a && n || ym.hasClass(a) || ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? t[a] = t[a] ? r(t[a], e, false) : i(e) : null == t[a] && (t[a] = e));
    });
  }function ms(t) {
    t = t, this.option = {}, this.option[Lm] = 1, this._componentsMap = F({ series: [] }), this._seriesIndices, this._seriesIndicesMap, vs(t, this._theme.option), r(t, xm, false), this.mergeOption(t);
  }function ys(t, e) {
    x(e) || (e = e ? [e] : []);var n = {};return f(e, function (e) {
      n[e] = (t.get(e) || []).slice();
    }), n;
  }function _s(t, e, n) {
    var i = e.type ? e.type : n ? n.subType : ym.determineSubType(t, e);return i;
  }function xs(t, e) {
    t._seriesIndicesMap = F(t._seriesIndices = p(e, function (t) {
      return t.componentIndex;
    }) || []);
  }function ws(t, e) {
    return e.hasOwnProperty("subType") ? v(t, function (t) {
      return t.subType === e.subType;
    }) : t;
  }function bs(t) {
    f(Em, function (e) {
      this[e] = y(t[e], t);
    }, this);
  }function Ss() {
    this._coordinateSystems = [];
  }function Ms(t) {
    this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;
  }function Ts(t, e, n) {
    var i,
        r,
        a = [],
        o = [],
        s = t.timeline;if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
      r = r || {};var l = t.media;Rm(l, function (t) {
        t && t.option && (t.query ? o.push(t) : i || (i = t));
      });
    }return r || (r = t), r.timeline || (r.timeline = s), Rm([r].concat(a).concat(p(o, function (t) {
      return t.option;
    })), function (t) {
      Rm(e, function (e) {
        e(t, n);
      });
    }), { baseOption: r, timelineOptions: a, mediaDefault: i, mediaList: o };
  }function Is(t, e, n) {
    var i = { width: e, height: n, aspectratio: e / n },
        r = true;return f(t, function (t, e) {
      var n = e.match(Vm);if (n && n[1] && n[2]) {
        var a = n[1],
            o = n[2].toLowerCase();Cs(i[o], t, a) || (r = false);
      }
    }), r;
  }function Cs(t, e, n) {
    return "min" === n ? t >= e : "max" === n ? e >= t : t === e;
  }function ks(t, e) {
    return t.join(",") === e.join(",");
  }function Ds(t, e) {
    e = e || {}, Rm(e, function (e, n) {
      if (null != e) {
        var i = t[n];if (ym.hasClass(n)) {
          e = Ji(e), i = Ji(i);var r = ir(i, e);t[n] = Nm(r, function (t) {
            return t.option && t.exist ? Hm(t.exist, t.option, true) : t.exist || t.option;
          });
        } else t[n] = Hm(i, e, true);
      }
    });
  }function As(t) {
    var e = t && t.itemStyle;if (e) for (var n = 0, i = Xm.length; i > n; n++) {
      var a = Xm[n],
          o = e.normal,
          s = e.emphasis;o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null);
    }
  }function Ps(t, e, n) {
    if (t && t[e] && (t[e].normal || t[e].emphasis)) {
      var i = t[e].normal,
          r = t[e].emphasis;i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r);
    }
  }function Os(t) {
    Ps(t, "itemStyle"), Ps(t, "lineStyle"), Ps(t, "areaStyle"), Ps(t, "label"), Ps(t, "labelLine"), Ps(t, "upperLabel"), Ps(t, "edgeLabel");
  }function Ls(t, e) {
    var n = Gm(t) && t[e],
        i = Gm(n) && n.textStyle;if (i) for (var r = 0, a = Jp.length; a > r; r++) {
      var e = Jp[r];i.hasOwnProperty(e) && (n[e] = i[e]);
    }
  }function Bs(t) {
    t && (Os(t), Ls(t, "label"), t.emphasis && Ls(t.emphasis, "label"));
  }function Es(t) {
    if (Gm(t)) {
      As(t), Os(t), Ls(t, "label"), Ls(t, "upperLabel"), Ls(t, "edgeLabel"), t.emphasis && (Ls(t.emphasis, "label"), Ls(t.emphasis, "upperLabel"), Ls(t.emphasis, "edgeLabel"));var e = t.markPoint;e && (As(e), Bs(e));var n = t.markLine;n && (As(n), Bs(n));var i = t.markArea;i && Bs(i);var r = t.data;if ("graph" === t.type) {
        r = r || t.nodes;var a = t.links || t.edges;if (a && !T(a)) for (var o = 0; o < a.length; o++) {
          Bs(a[o]);
        }f(t.categories, function (t) {
          Os(t);
        });
      }if (r && !T(r)) for (var o = 0; o < r.length; o++) {
        Bs(r[o]);
      }var e = t.markPoint;if (e && e.data) for (var s = e.data, o = 0; o < s.length; o++) {
        Bs(s[o]);
      }var n = t.markLine;if (n && n.data) for (var l = n.data, o = 0; o < l.length; o++) {
        x(l[o]) ? (Bs(l[o][0]), Bs(l[o][1])) : Bs(l[o]);
      }"gauge" === t.type ? (Ls(t, "axisLabel"), Ls(t, "title"), Ls(t, "detail")) : "treemap" === t.type ? (Ps(t.breadcrumb, "itemStyle"), f(t.levels, function (t) {
        Os(t);
      })) : "tree" === t.type && Os(t.leaves);
    }
  }function zs(t) {
    return x(t) ? t : t ? [t] : [];
  }function Rs(t) {
    return (x(t) ? t[0] : t) || {};
  }function Fs(t, e) {
    e = e.split(",");for (var n = t, i = 0; i < e.length && (n = n && n[e[i]], null != n); i++) {}return n;
  }function Ns(t, e, n, i) {
    e = e.split(",");for (var r, a = t, o = 0; o < e.length - 1; o++) {
      r = e[o], null == a[r] && (a[r] = {}), a = a[r];
    }(i || null == a[e[o]]) && (a[e[o]] = n);
  }function Hs(t) {
    f(jm, function (e) {
      e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
    });
  }function Vs(t) {
    f(t, function (e, n) {
      var i = [],
          r = [NaN, NaN],
          a = [e.stackResultDimension, e.stackedOverDimension],
          o = e.data,
          s = e.isStackedByIndex,
          l = o.map(a, function (a, l, u) {
        var h = o.get(e.stackedDimension, u);if (isNaN(h)) return r;var c, d;s ? d = o.getRawIndex(u) : c = o.get(e.stackedByDimension, u);for (var f = NaN, p = n - 1; p >= 0; p--) {
          var g = t[p];if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
            var v = g.data.getByRawIndex(g.stackResultDimension, d);if (h >= 0 && v > 0 || 0 >= h && 0 > v) {
              h += v, f = v;break;
            }
          }
        }return i[0] = h, i[1] = f, i;
      });o.hostModel.setData(l), e.data = l;
    });
  }function Ws(t, e) {
    ns.isInstance(t) || (t = ns.seriesDataToSource(t)), this._source = t;var n = this._data = t.data,
        i = t.sourceFormat;i === km && (this._offset = 0, this._dimSize = e, this._data = n);var r = $m[i === Mm ? i + "_" + t.seriesLayoutBy : i];o(this, r);
  }function Gs() {
    return this._data.length;
  }function Xs(t) {
    return this._data[t];
  }function Ys(t) {
    for (var e = 0; e < t.length; e++) {
      this._data.push(t[e]);
    }
  }function js(t, e, n) {
    return null != n ? t[n] : t;
  }function qs(t, e, n, i) {
    return Us(t[i], this._dimensionInfos[e]);
  }function Us(t, e) {
    var n = e && e.type;if ("ordinal" === n) {
      var i = e && e.ordinalMeta;return i ? i.parseAndCollect(t) : t;
    }return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +Ao(t)), null == t || "" === t ? NaN : +t;
  }function Zs(t, e, n) {
    if (t) {
      var i = t.getRawDataItem(e);if (null != i) {
        var r,
            a,
            o = t.getProvider().getSource().sourceFormat,
            s = t.getDimensionInfo(n);return s && (r = s.name, a = s.index), Qm[o](i, e, a, r);
      }
    }
  }function Ks(t) {
    return new $s(t);
  }function $s(t) {
    t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = true, this.context;
  }function Qs(t, e, n, i, r, a) {
    iy.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({ start: n, end: i, count: i - n, next: iy.next }, t.context);
  }function Js(t, e) {
    t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;var n, i;!e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress), x(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;var r = t._downstream;return r && r.dirty(), i;
  }function tl(t) {
    var e = t.name;ar(t) || (t.name = el(t) || e);
  }function el(t) {
    var e = t.getRawData(),
        n = e.mapDimension("seriesName", true),
        i = [];return f(n, function (t) {
      var n = e.getDimensionInfo(t);n.displayName && i.push(n.displayName);
    }), i.join(" ");
  }function nl(t) {
    return t.model.getRawData().count();
  }function il(t) {
    var e = t.model;return e.setData(e.getRawData().cloneShallow()), rl;
  }function rl(t, e) {
    e.outputData && t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
  }function al(t, e) {
    f(t.CHANGABLE_METHODS, function (n) {
      t.wrapMethod(n, _(ol, e));
    });
  }function ol(t) {
    var e = sl(t);e && e.setOutputEnd(this.count());
  }function sl(t) {
    var e = (t.ecModel || {}).scheduler,
        n = e && e.getPipeline(t.uid);if (n) {
      var i = n.currentTask;if (i) {
        var r = i.agentStubMap;r && (i = r.get(t.uid));
      }return i;
    }
  }function ll() {
    this.group = new Kf(), this.uid = vo("viewChart"), this.renderTask = Ks({ plan: cl, reset: dl }), this.renderTask.context = { view: this };
  }function ul(t, e, n) {
    if (t && (t.trigger(e, n), t.isGroup && !Na(t))) for (var i = 0, r = t.childCount(); r > i; i++) {
      ul(t.childAt(i), e, n);
    }
  }function hl(t, e, n) {
    var i = sr(t, e),
        r = e && null != e.highlightKey ? Ha(e.highlightKey) : null;null != i ? f(Ji(i), function (e) {
      ul(t.getItemGraphicEl(e), n, r);
    }) : t.eachItemGraphicEl(function (t) {
      ul(t, n, r);
    });
  }function cl(t) {
    return hy(t.model);
  }function dl(t) {
    var e = t.model,
        n = t.ecModel,
        i = t.api,
        r = t.payload,
        a = e.pipelineContext.progressiveRender,
        o = t.view,
        s = r && uy(r).updateMethod,
        l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";return "render" !== l && o[l](e, n, i, r), dy[l];
  }function fl(t, e, n) {
    function i() {
      h = new Date().getTime(), c = null, t.apply(o, s || []);
    }var r,
        a,
        o,
        s,
        l,
        u = 0,
        h = 0,
        c = null;e = e || 0;var d = function d() {
      r = new Date().getTime(), o = this, s = arguments;var t = l || e,
          d = l || n;l = null, a = r - (d ? u : h) - t, clearTimeout(c), d ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), u = r;
    };return d.clear = function () {
      c && (clearTimeout(c), c = null);
    }, d.debounceNextCall = function (t) {
      l = t;
    }, d;
  }function pl(t, e, n, i) {
    var r = t[e];if (r) {
      var a = r[fy] || r,
          o = r[gy],
          s = r[py];if (s !== n || o !== i) {
        if (null == n || !i) return t[e] = a;r = t[e] = fl(a, n, "debounce" === i), r[fy] = a, r[gy] = i, r[py] = n;
      }return r;
    }
  }function gl(t, e, n, i) {
    this.ecInstance = t, this.api = e, this.unfinished;var n = this._dataProcessorHandlers = n.slice(),
        i = this._visualHandlers = i.slice();this._allHandlers = n.concat(i), this._stageTaskMap = F();
  }function vl(t, e, n, i, r) {
    function a(t, e) {
      return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
    }r = r || {};var o;f(e, function (e) {
      if (!r.visualType || r.visualType === e.visualType) {
        var s = t._stageTaskMap.get(e.uid),
            l = s.seriesTaskMap,
            u = s.overallTask;if (u) {
          var h,
              c = u.agentStubMap;c.each(function (t) {
            a(r, t) && (t.dirty(), h = true);
          }), h && u.dirty(), by(u, i);var d = t.getPerformArgs(u, r.block);c.each(function (t) {
            t.perform(d);
          }), o |= u.perform(d);
        } else l && l.each(function (s) {
          a(r, s) && s.dirty();var l = t.getPerformArgs(s, r.block);l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), by(s, i), o |= s.perform(l);
        });
      }
    }), t.unfinished |= o;
  }function ml(t, e, n, i, r) {
    function a(n) {
      var a = n.uid,
          s = o.get(a) || o.set(a, Ks({ plan: Sl, reset: Ml, count: Il }));s.context = { model: n, ecModel: i, api: r, useClearVisual: e.isVisual && !e.isLayout, plan: e.plan, reset: e.reset, scheduler: t }, Cl(t, n, s);
    }var o = n.seriesTaskMap || (n.seriesTaskMap = F()),
        s = e.seriesType,
        l = e.getTargetSeries;e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);var u = t._pipelineMap;o.each(function (t, e) {
      u.get(e) || (t.dispose(), o.removeKey(e));
    });
  }function yl(t, e, n, i, r) {
    function a(e) {
      var n = e.uid,
          i = s.get(n);i || (i = s.set(n, Ks({ reset: xl, onDirty: bl })), o.dirty()), i.context = { model: e, overallProgress: h, modifyOutputEnd: c }, i.agent = o, i.__block = h, Cl(t, e, i);
    }var o = n.overallTask = n.overallTask || Ks({ reset: _l });o.context = { ecModel: i, api: r, overallReset: e.overallReset, scheduler: t };var s = o.agentStubMap = o.agentStubMap || F(),
        l = e.seriesType,
        u = e.getTargetSeries,
        h = true,
        c = e.modifyOutputEnd;l ? i.eachRawSeriesByType(l, a) : u ? u(i, r).each(a) : (h = false, f(i.getSeries(), a));var d = t._pipelineMap;s.each(function (t, e) {
      d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e));
    });
  }function _l(t) {
    t.overallReset(t.ecModel, t.api, t.payload);
  }function xl(t) {
    return t.overallProgress && wl;
  }function wl() {
    this.agent.dirty(), this.getDownstream().dirty();
  }function bl() {
    this.agent && this.agent.dirty();
  }function Sl(t) {
    return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
  }function Ml(t) {
    t.useClearVisual && t.data.clearAllVisual();var e = t.resetDefines = Ji(t.reset(t.model, t.ecModel, t.api, t.payload));return e.length > 1 ? p(e, function (t, e) {
      return Tl(e);
    }) : Sy;
  }function Tl(t) {
    return function (e, n) {
      var i = n.data,
          r = n.resetDefines[t];if (r && r.dataEach) for (var a = e.start; a < e.end; a++) {
        r.dataEach(i, a);
      } else r && r.progress && r.progress(e, i);
    };
  }function Il(t) {
    return t.data.count();
  }function Cl(t, e, n) {
    var i = e.uid,
        r = t._pipelineMap.get(i);!r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r;
  }function kl(t) {
    My = null;try {
      t(Ty, Iy);
    } catch (e) {}return My;
  }function Dl(t, e) {
    for (var n in e.prototype) {
      t[n] = H;
    }
  }function Al(t) {
    if (b(t)) {
      var e = new DOMParser();t = e.parseFromString(t, "text/xml");
    }for (9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) {
      t = t.nextSibling;
    }return t;
  }function Pl() {
    this._defs = {}, this._root = null, this._isDefine = false, this._isText = false;
  }function Ol(t, e) {
    for (var n = t.firstChild; n;) {
      if (1 === n.nodeType) {
        var i = n.getAttribute("offset");i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;var r = n.getAttribute("stop-color") || "#000000";e.addColorStop(i, r);
      }n = n.nextSibling;
    }
  }function Ll(t, e) {
    t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle));
  }function Bl(t) {
    for (var e = B(t).split(By), n = [], i = 0; i < e.length; i += 2) {
      var r = parseFloat(e[i]),
          a = parseFloat(e[i + 1]);n.push([r, a]);
    }return n;
  }function El(t, e, n, i) {
    var r = e.__inheritedStyle || {},
        a = "text" === e.type;if (1 === t.nodeType && (Rl(t, e), o(r, Fl(t)), !i)) for (var s in Ry) {
      if (Ry.hasOwnProperty(s)) {
        var l = t.getAttribute(s);null != l && (r[Ry[s]] = l);
      }
    }var u = a ? "textFill" : "fill",
        h = a ? "textStroke" : "stroke";e.style = e.style || new ap();var c = e.style;null != r.fill && c.set(u, zl(r.fill, n)), null != r.stroke && c.set(h, zl(r.stroke, n)), f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
      var e = "lineWidth" === t && a ? "textStrokeWidth" : t;null != r[t] && c.set(e, parseFloat(r[t]));
    }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {
      null != r[t] && c.set(t, r[t]);
    }), r.lineDash && (e.style.lineDash = B(r.lineDash).split(By)), c[h] && "none" !== c[h] && (e[h] = true), e.__inheritedStyle = r;
  }function zl(t, e) {
    var n = e && t && t.match(Fy);if (n) {
      var i = B(n[1]),
          r = e[i];return r;
    }return t;
  }function Rl(t, e) {
    var n = t.getAttribute("transform");if (n) {
      n = n.replace(/,/g, " ");var i = null,
          r = [];n.replace(Ny, function (t, e, n) {
        r.push(e, n);
      });for (var a = r.length - 1; a > 0; a -= 2) {
        var o = r[a],
            s = r[a - 1];switch (i = i || Oe(), s) {case "translate":
            o = B(o).split(By), ze(i, i, [parseFloat(o[0]), parseFloat(o[1] || 0)]);break;case "scale":
            o = B(o).split(By), Fe(i, i, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);break;case "rotate":
            o = B(o).split(By), Re(i, i, parseFloat(o[0]));break;case "skew":
            o = B(o).split(By), console.warn("Skew transform is not supported yet");break;case "matrix":
            var o = B(o).split(By);i[0] = parseFloat(o[0]), i[1] = parseFloat(o[1]), i[2] = parseFloat(o[2]), i[3] = parseFloat(o[3]), i[4] = parseFloat(o[4]), i[5] = parseFloat(o[5]);}
      }e.setLocalTransform(i);
    }
  }function Fl(t) {
    var e = t.getAttribute("style"),
        n = {};if (!e) return n;var i = {};Hy.lastIndex = 0;for (var r; null != (r = Hy.exec(e));) {
      i[r[1]] = r[2];
    }for (var a in Ry) {
      Ry.hasOwnProperty(a) && null != i[a] && (n[Ry[a]] = i[a]);
    }return n;
  }function Nl(t, e, n) {
    var i = e / t.width,
        r = n / t.height,
        a = Math.min(i, r),
        o = [a, a],
        s = [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + n / 2];return { scale: o, position: s };
  }function Hl(t, e) {
    return function (n, i, r) {
      (e || !this._disposed) && (n = n && n.toLowerCase(), rf.prototype[t].call(this, n, i, r));
    };
  }function Vl() {
    rf.call(this);
  }function Wl(t, e, n) {
    function r(t, e) {
      return t.__prio - e.__prio;
    }n = n || {}, "string" == typeof e && (e = b_[e]), this.id, this.group, this._dom = t;var a = "canvas",
        o = this._zr = Ui(t, { renderer: n.renderer || a, devicePixelRatio: n.devicePixelRatio, width: n.width, height: n.height });this._throttledZrFlush = fl(y(o.flush, o), 17);var e = i(e);e && Um(e, true), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Ss();var s = this._api = ou(this);Bn(w_, r), Bn(y_, r), this._scheduler = new gl(this, s, y_, w_), rf.call(this, this._ecEventProcessor = new su()), this._messageCenter = new Vl(), this._initEvents(), this.resize = y(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), Kl(o, this), E(this);
  }function Gl(t, e, n) {
    if (!this._disposed) {
      var i,
          r = this._model,
          a = this._coordSysMgr.getCoordinateSystems();e = ur(r, e);for (var o = 0; o < a.length; o++) {
        var s = a[o];if (s[t] && null != (i = s[t](r, e, n))) return i;
      }
    }
  }function Xl(t) {
    var e = t._model,
        n = t._scheduler;n.restorePipelines(e), n.prepareStageTasks(), $l(t, "component", e, n), $l(t, "chart", e, n), n.plan();
  }function Yl(t, e, n, i, r) {
    function a(i) {
      i && i.__alive && i[e] && i[e](i.__model, o, t._api, n);
    }var o = t._model;if (!i) return undefined;var s = {};s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];var l = { mainType: i, query: s };r && (l.subType = r);var u = n.excludeSeriesId;null != u && (u = F(Ji(u))), o && o.eachComponent(l, function (e) {
      u && null != u.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId]);
    }, t);
  }function jl(t, e) {
    var n = t._chartsMap,
        i = t._scheduler;e.eachSeries(function (t) {
      i.updateStreamModes(t, n[t.__viewId]);
    });
  }function ql(t, e) {
    var n = t.type,
        i = t.escapeConnect,
        r = v_[n],
        a = r.actionInfo,
        l = (a.update || "update").split(":"),
        u = l.pop();l = null != l[0] && Uy(l[0]), this[h_] = true;var h = [t],
        c = false;t.batch && (c = true, h = p(t.batch, function (e) {
      return e = s(o({}, e), t), e.batch = null, e;
    }));var d,
        f = [],
        g = "highlight" === n || "downplay" === n;Yy(h, function (t) {
      d = r.action(t, this._model, this._api), d = d || o({}, t), d.type = a.event || d.type, f.push(d), g ? Yl(this, u, t, "series") : l && Yl(this, u, t, l.main, l.sub);
    }, this), "none" === u || g || l || (this[c_] ? (Xl(this), p_.update.call(this, t), this[c_] = false) : p_[u].call(this, t)), d = c ? { type: a.event || n, escapeConnect: i, batch: f } : f[0], this[h_] = false, !e && this._messageCenter.trigger(d.type, d);
  }function Ul(t) {
    for (var e = this._pendingActions; e.length;) {
      var n = e.shift();ql.call(this, n, t);
    }
  }function Zl(t) {
    !t && this.trigger("updated");
  }function Kl(t, e) {
    t.on("rendered", function () {
      e.trigger("rendered"), !t.animation.isFinished() || e[c_] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");
    });
  }function $l(t, e, n, i) {
    function r(t) {
      var e = "_ec_" + t.id + "_" + t.type,
          r = s[e];if (!r) {
        var h = Uy(t.type),
            c = a ? oy.getClass(h.main, h.sub) : ll.getClass(h.sub);r = new c(), r.init(n, u), s[e] = r, o.push(r), l.add(r.group);
      }t.__viewId = r.__id = e, r.__alive = true, r.__model = t, r.group.__ecComponentInfo = { mainType: t.mainType, index: t.componentIndex }, !a && i.prepareView(r, t, n, u);
    }for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, u = t._api, h = 0; h < o.length; h++) {
      o[h].__alive = false;
    }a ? n.eachComponent(function (t, e) {
      "series" !== t && r(e);
    }) : n.eachSeries(r);for (var h = 0; h < o.length;) {
      var c = o[h];c.__alive ? h++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, u), o.splice(h, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null);
    }
  }function Ql(t) {
    t.clearColorPalette(), t.eachSeries(function (t) {
      t.clearColorPalette();
    });
  }function Jl(t, e, n, i) {
    tu(t, e, n, i), Yy(t._chartsViews, function (t) {
      t.__alive = false;
    }), eu(t, e, n, i), Yy(t._chartsViews, function (t) {
      t.__alive || t.remove(e, n);
    });
  }function tu(t, e, n, i, r) {
    Yy(r || t._componentsViews, function (t) {
      var r = t.__model;t.render(r, e, n, i), au(r, t);
    });
  }function eu(t, e, n, i, r) {
    var a,
        o = t._scheduler;e.eachSeries(function (e) {
      var n = t._chartsMap[e.__viewId];n.__alive = true;var s = n.renderTask;o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n.group.silent = !!e.get("silent"), au(e, n), ru(e, n);
    }), o.unfinished |= a, iu(t, e), yy(t._zr.dom, e);
  }function nu(t, e) {
    Yy(x_, function (n) {
      n(t, e);
    });
  }function iu(t, e) {
    var n = t._zr,
        i = n.storage,
        r = 0;i.traverse(function () {
      r++;
    }), r > e.get("hoverLayerThreshold") && !Ed.node && e.eachSeries(function (e) {
      if (!e.preventUsingHoverLayer) {
        var n = t._chartsMap[e.__viewId];n.__alive && n.group.traverse(function (t) {
          t.useHoverLayer = true;
        });
      }
    });
  }function ru(t, e) {
    var n = t.get("blendMode") || null;e.group.traverse(function (t) {
      t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
        t.setStyle("blend", n);
      });
    });
  }function au(t, e) {
    var n = t.get("z"),
        i = t.get("zlevel");e.group.traverse(function (t) {
      "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i));
    });
  }function ou(t) {
    var e = t._coordSysMgr;return o(new bs(t), { getCoordinateSystems: y(e.getCoordinateSystems, e), getComponentByElement: function getComponentByElement(e) {
        for (; e;) {
          var n = e.__ecComponentInfo;if (null != n) return t._model.getComponent(n.mainType, n.index);e = e.parent;
        }
      } });
  }function su() {
    this.eventInfo;
  }function lu(t) {
    function e(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i[a] = e;
      }
    }var n = 0,
        i = 1,
        r = 2,
        a = "__connectUpdateStatus";Yy(m_, function (o, s) {
      t._messageCenter.on(s, function (o) {
        if (T_[t.group] && t[a] !== n) {
          if (o && o.escapeConnect) return;var s = t.makeActionFromEvent(o),
              l = [];Yy(M_, function (e) {
            e !== t && e.group === t.group && l.push(e);
          }), e(l, n), Yy(l, function (t) {
            t[a] !== i && t.dispatchAction(s);
          }), e(l, r);
        }
      });
    });
  }function uu(t, e, n) {
    var i = fu(t);if (i) return i;var r = new Wl(t, e, n);return r.id = "ec_" + I_++, M_[r.id] = r, cr(t, k_, r.id), lu(r), r;
  }function hu(t) {
    if (x(t)) {
      var e = t;t = null, Yy(e, function (e) {
        null != e.group && (t = e.group);
      }), t = t || "g_" + C_++, Yy(e, function (e) {
        e.group = t;
      });
    }return T_[t] = true, t;
  }function cu(t) {
    T_[t] = false;
  }function du(t) {
    "string" == typeof t ? t = M_[t] : t instanceof Wl || (t = fu(t)), t instanceof Wl && !t.isDisposed() && t.dispose();
  }function fu(t) {
    return M_[dr(t, k_)];
  }function pu(t) {
    return M_[t];
  }function gu(t, e) {
    b_[t] = e;
  }function vu(t) {
    __.push(t);
  }function mu(t, e) {
    Mu(y_, t, e, Qy);
  }function yu(t) {
    x_.push(t);
  }function _u(t, e, n) {
    "function" == typeof e && (n = e, e = "");var i = qy(t) ? t.type : [t, t = { event: e }][0];t.event = (t.event || i).toLowerCase(), e = t.event, Xy(d_.test(i) && d_.test(e)), v_[i] || (v_[i] = { action: n, actionInfo: t }), m_[e] = i;
  }function xu(t, e) {
    Ss.register(t, e);
  }function wu(t) {
    var e = Ss.get(t);return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : undefined;
  }function bu(t, e) {
    Mu(w_, t, e, n_, "layout");
  }function Su(t, e) {
    Mu(w_, t, e, a_, "visual");
  }function Mu(t, e, n, i, r) {
    (jy(e) || qy(e)) && (n = e, e = i);var a = gl.wrapStageHandler(n, r);return a.__prio = e, a.__raw = n, t.push(a), a;
  }function Tu(t, e) {
    S_[t] = e;
  }function Iu(t) {
    return ym.extend(t);
  }function Cu(t) {
    return oy.extend(t);
  }function ku(t) {
    return ay.extend(t);
  }function Du(t) {
    return ll.extend(t);
  }function Au(t) {
    n("createCanvas", t);
  }function Pu(t, e, n) {
    Wy.registerMap(t, e, n);
  }function Ou(t) {
    var e = Wy.retrieveMap(t);return e && e[0] && { geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas };
  }function Lu(t) {
    return t;
  }function Bu(t, e, n, i, r) {
    this._old = t, this._new = e, this._oldKeyGetter = n || Lu, this._newKeyGetter = i || Lu, this.context = r;
  }function Eu(t, e, n, i, r) {
    for (var a = 0; a < t.length; a++) {
      var o = "_ec_" + r[i](t[a], a),
          s = e[o];null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a));
    }
  }function zu(t) {
    var e = {},
        n = e.encode = {},
        i = F(),
        r = [],
        a = [],
        o = e.userOutput = { dimensionNames: t.dimensions.slice(), encode: {} };f(t.dimensions, function (e) {
      var s = t.getDimensionInfo(e),
          l = s.coordDim;if (l) {
        var u = s.coordDimIndex;Ru(n, l)[u] = e, s.isExtraCoord || (i.set(l, 1), Nu(s.type) && (r[0] = e), Ru(o.encode, l)[u] = s.index), s.defaultTooltip && a.push(e);
      }P_.each(function (t, e) {
        var i = Ru(n, e),
            r = s.otherDims[e];null != r && r !== false && (i[r] = s.name);
      });
    });var s = [],
        l = {};i.each(function (t, e) {
      var i = n[e];l[e] = i[0], s = s.concat(i);
    }), e.dataDimsOnCoord = s, e.encodeFirstDimNotExtra = l;var u = n.label;u && u.length && (r = u.slice());var h = n.tooltip;return h && h.length ? a = h.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = a, e;
  }function Ru(t, e) {
    return t.hasOwnProperty(e) || (t[e] = []), t[e];
  }function Fu(t) {
    return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
  }function Nu(t) {
    return !("ordinal" === t || "time" === t);
  }function Hu(t) {
    null != t && o(this, t), this.otherDims = {};
  }function Vu(t) {
    return t._rawCount > 65535 ? R_ : N_;
  }function Wu(t) {
    var e = t.constructor;return e === Array ? t.slice() : new e(t);
  }function Gu(t, e) {
    f(H_.concat(e.__wrappedMethods || []), function (n) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }), t.__wrappedMethods = e.__wrappedMethods, f(V_, function (n) {
      t[n] = i(e[n]);
    }), t._calculationInfo = o(e._calculationInfo);
  }function Xu(t, e, n, i, r) {
    var a = z_[e.type],
        o = i - 1,
        s = e.name,
        l = t[s][o];if (l && l.length < n) {
      for (var u = new a(Math.min(r - o * n, n)), h = 0; h < l.length; h++) {
        u[h] = l[h];
      }t[s][o] = u;
    }for (var c = i * n; r > c; c += n) {
      t[s].push(new a(Math.min(r - c, n)));
    }
  }function Yu(t) {
    var e = t._invertedIndicesMap;f(e, function (n, i) {
      var r = t._dimensionInfos[i],
          a = r.ordinalMeta;if (a) {
        n = e[i] = new F_(a.categories.length);for (var o = 0; o < n.length; o++) {
          n[o] = B_;
        }for (var o = 0; o < t._count; o++) {
          n[t.get(i, o)] = o;
        }
      }
    });
  }function ju(t, e, n) {
    var i;if (null != e) {
      var r = t._chunkSize,
          a = Math.floor(n / r),
          o = n % r,
          s = t.dimensions[e],
          l = t._storage[s][a];if (l) {
        i = l[o];var u = t._dimensionInfos[s].ordinalMeta;u && u.categories.length && (i = u.categories[i]);
      }
    }return i;
  }function qu(t) {
    return t;
  }function Uu(t) {
    return t < this._count && t >= 0 ? this._indices[t] : -1;
  }function Zu(t, e) {
    var n = t._idList[e];return null == n && (n = ju(t, t._idDimIdx, e)), null == n && (n = E_ + e), n;
  }function Ku(t) {
    return x(t) || (t = [t]), t;
  }function $u(t, e) {
    var n = t.dimensions,
        i = new W_(p(n, t.getDimensionInfo, t), t.hostModel);Gu(i, t);for (var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {
      var s = n[o];a[s] && (u(e, s) >= 0 ? (r[s] = Qu(a[s]), i._rawExtent[s] = Ju(), i._extent[s] = null) : r[s] = a[s]);
    }return i;
  }function Qu(t) {
    for (var e = new Array(t.length), n = 0; n < t.length; n++) {
      e[n] = Wu(t[n]);
    }return e;
  }function Ju() {
    return [Infinity, -Infinity];
  }function th(t, e, n) {
    function r(t, e, n) {
      null != P_.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, u.set(e, true));
    }ns.isInstance(e) || (e = ns.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();for (var a = (n.dimsDef || []).slice(), l = F(), u = F(), h = [], c = eh(e, t, a, n.dimCount), d = 0; c > d; d++) {
      var p = a[d] = o({}, S(a[d]) ? a[d] : { name: a[d] }),
          g = p.name,
          v = h[d] = new Hu();null != g && null == l.get(g) && (v.name = v.displayName = g, l.set(g, d)), null != p.type && (v.type = p.type), null != p.displayName && (v.displayName = p.displayName);
    }var m = n.encodeDef;!m && n.encodeDefaulter && (m = n.encodeDefaulter(e, c)), m = F(m), m.each(function (t, e) {
      if (t = Ji(t).slice(), 1 === t.length && !b(t[0]) && t[0] < 0) return undefined;var n = m.set(e, []);f(t, function (t, i) {
        b(t) && (t = l.get(t)), null != t && c > t && (n[i] = t, r(h[t], e, i));
      });
    });var y = 0;f(t, function (t) {
      var e, t, n, a;if (b(t)) e = t, t = {};else {
        e = t.name;var o = t.ordinalMeta;t.ordinalMeta = null, t = i(t), t.ordinalMeta = o, n = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null;
      }var l = m.get(e);if (l !== false) {
        var l = Ji(l);if (!l.length) for (var u = 0; u < (n && n.length || 1); u++) {
          for (; y < h.length && null != h[y].coordDim;) {
            y++;
          }y < h.length && l.push(y++);
        }f(l, function (i, o) {
          var l = h[i];if (r(s(l, t), e, o), null == l.name && n) {
            var u = n[o];!S(u) && (u = { name: u }), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip;
          }a && s(l.otherDims, a);
        });
      }
    });var _ = n.generateCoord,
        x = n.generateCoordCount,
        w = null != x;x = _ ? x || 1 : 0;for (var M = _ || "value", T = 0; c > T; T++) {
      var v = h[T] = h[T] || new Hu(),
          I = v.coordDim;null == I && (v.coordDim = nh(M, u, w), v.coordDimIndex = 0, (!_ || 0 >= x) && (v.isExtraCoord = true), x--), null == v.name && (v.name = nh(v.coordDim, l)), null != v.type || fs(e, T, v.name) !== Pm.Must && (!v.isExtraCoord || null == v.otherDims.itemName && null == v.otherDims.seriesName) || (v.type = "ordinal");
    }return h;
  }function eh(t, e, n, i) {
    var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);return f(e, function (t) {
      var e = t.dimsDef;e && (r = Math.max(r, e.length));
    }), r;
  }function nh(t, e, n) {
    if (n || null != e.get(t)) {
      for (var i = 0; null != e.get(t + i);) {
        i++;
      }t += i;
    }return e.set(t, true), t;
  }function ih(t) {
    this.coordSysName = t, this.coordSysDims = [], this.axisMap = F(), this.categoryAxisMap = F(), this.firstCategoryDimIndex = null;
  }function rh(t) {
    var e = t.get("coordinateSystem"),
        n = new ih(e),
        i = j_[e];return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : undefined;
  }function ah(t) {
    return "category" === t.get("type");
  }function oh(t, e, n) {
    n = n || {};var i,
        r,
        a,
        o,
        s = n.byIndex,
        l = n.stackedCoordDimension,
        u = !(!t || !t.get("stack"));if (f(e, function (t, n) {
      b(t) && (e[n] = t = { name: t }), u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));
    }), !r || s || i || (s = true), r) {
      a = "__\x00ecstackresult", o = "__\x00ecstackedover", i && (i.createInvertedIndices = true);var h = r.coordDim,
          c = r.type,
          d = 0;f(e, function (t) {
        t.coordDim === h && d++;
      }), e.push({ name: a, coordDim: h, coordDimIndex: d, type: c, isExtraCoord: true, isCalculationCoord: true }), d++, e.push({ name: o, coordDim: o, coordDimIndex: d, type: c, isExtraCoord: true, isCalculationCoord: true });
    }return { stackedDimension: r && r.name, stackedByDimension: i && i.name, isStackedByIndex: s, stackedOverDimension: o, stackResultDimension: a };
  }function sh(t, e) {
    return !!e && e === t.getCalculationInfo("stackedDimension");
  }function lh(t, e) {
    return sh(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
  }function uh(t, e, n) {
    n = n || {}, ns.isInstance(t) || (t = ns.seriesDataToSource(t));var i,
        r = e.get("coordinateSystem"),
        a = Ss.get(r),
        o = rh(e);o && (i = p(o.coordSysDims, function (t) {
      var e = { name: t },
          n = o.axisMap.get(t);if (n) {
        var i = n.get("type");e.type = Fu(i);
      }return e;
    })), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);var s,
        l,
        u = Y_(t, { coordDimensions: i, generateCoord: n.generateCoord, encodeDefaulter: n.useEncodeDefaulter ? _(cs, i, e) : null });o && f(u, function (t, e) {
      var n = t.coordDim,
          i = o.categoryAxisMap.get(n);i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = true);
    }), l || null == s || (u[s].otherDims.itemName = 0);var h = oh(e, u),
        c = new W_(u, e);c.setCalculationInfo(h);var d = null != s && hh(t) ? function (t, e, n, i) {
      return i === s ? n : this.defaultDimValueGetter(t, e, n, i);
    } : null;return c.hasItemOption = false, c.initData(t, null, d), c;
  }function hh(t) {
    if (t.sourceFormat === Sm) {
      var e = ch(t.data || []);return null != e && !x(er(e));
    }
  }function ch(t) {
    for (var e = 0; e < t.length && null == t[e];) {
      e++;
    }return t[e];
  }function dh(t) {
    this._setting = t || {}, this._extent = [Infinity, -Infinity], this._interval = 0, this.init && this.init.apply(this, arguments);
  }function fh(t) {
    this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map;
  }function ph(t) {
    return t._map || (t._map = F(t.categories));
  }function gh(t) {
    return S(t) && null != t.value ? t.value : t + "";
  }function vh(t, e, n, i) {
    var r = {},
        a = t[1] - t[0],
        o = r.interval = Lo(a / e, true);null != n && n > o && (o = r.interval = n), null != i && o > i && (o = r.interval = i);var s = r.intervalPrecision = mh(o),
        l = r.niceTickExtent = [K_(Math.ceil(t[0] / o) * o, s), K_(Math.floor(t[1] / o) * o, s)];return _h(l, t), r;
  }function mh(t) {
    return To(t) + 2;
  }function yh(t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
  }function _h(t, e) {
    !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), yh(t, 0, e), yh(t, 1, e), t[0] > t[1] && (t[0] = t[1]);
  }function xh(t) {
    return t.get("stack") || J_ + t.seriesIndex;
  }function wh(t) {
    return t.dim + t.index;
  }function bh(t, e) {
    var n = [];return e.eachSeriesByType(t, function (t) {
      Ch(t) && !kh(t) && n.push(t);
    }), n;
  }function Sh(t) {
    var e = {};f(t, function (t) {
      var n = t.coordinateSystem,
          i = n.getBaseAxis();if ("time" === i.type || "value" === i.type) for (var r = t.getData(), a = i.dim + "_" + i.index, o = r.mapDimension(i.dim), s = 0, l = r.count(); l > s; ++s) {
        var u = r.get(o, s);e[a] ? e[a].push(u) : e[a] = [u];
      }
    });var n = [];for (var i in e) {
      if (e.hasOwnProperty(i)) {
        var r = e[i];if (r) {
          r.sort(function (t, e) {
            return t - e;
          });for (var a = null, o = 1; o < r.length; ++o) {
            var s = r[o] - r[o - 1];s > 0 && (a = null === a ? s : Math.min(a, s));
          }n[i] = a;
        }
      }
    }return n;
  }function Mh(t) {
    var e = Sh(t),
        n = [];return f(t, function (t) {
      var i,
          r = t.coordinateSystem,
          a = r.getBaseAxis(),
          o = a.getExtent();if ("category" === a.type) i = a.getBandWidth();else if ("value" === a.type || "time" === a.type) {
        var s = a.dim + "_" + a.index,
            l = e[s],
            u = Math.abs(o[1] - o[0]),
            h = a.scale.getExtent(),
            c = Math.abs(h[1] - h[0]);i = l ? u / c * l : u;
      } else {
        var d = t.getData();i = Math.abs(o[1] - o[0]) / d.count();
      }var f = wo(t.get("barWidth"), i),
          p = wo(t.get("barMaxWidth"), i),
          g = wo(t.get("barMinWidth") || 1, i),
          v = t.get("barGap"),
          m = t.get("barCategoryGap");n.push({ bandWidth: i, barWidth: f, barMaxWidth: p, barMinWidth: g, barGap: v, barCategoryGap: m, axisKey: wh(a), stackId: xh(t) });
    }), Th(n);
  }function Th(t) {
    var e = {};f(t, function (t) {
      var n = t.axisKey,
          i = t.bandWidth,
          r = e[n] || { bandWidth: i, remainedWidth: i, autoWidthCount: 0, categoryGap: "20%", gap: "30%", stacks: {} },
          a = r.stacks;e[n] = r;var o = t.stackId;a[o] || r.autoWidthCount++, a[o] = a[o] || { width: 0, maxWidth: 0 };var s = t.barWidth;s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);var l = t.barMaxWidth;l && (a[o].maxWidth = l);var u = t.barMinWidth;u && (a[o].minWidth = u);var h = t.barGap;null != h && (r.gap = h);var c = t.barCategoryGap;null != c && (r.categoryGap = c);
    });var n = {};return f(e, function (t, e) {
      n[e] = {};var i = t.stacks,
          r = t.bandWidth,
          a = wo(t.categoryGap, r),
          o = wo(t.gap, 1),
          s = t.remainedWidth,
          l = t.autoWidthCount,
          u = (s - a) / (l + (l - 1) * o);u = Math.max(u, 0), f(i, function (t) {
        var e = t.maxWidth,
            n = t.minWidth;if (t.width) {
          var i = t.width;e && (i = Math.min(i, e)), n && (i = Math.max(i, n)), t.width = i, s -= i + o * i, l--;
        } else {
          var i = u;e && i > e && (i = Math.min(e, s)), n && n > i && (i = n), i !== u && (t.width = i, s -= i + o * i, l--);
        }
      }), u = (s - a) / (l + (l - 1) * o), u = Math.max(u, 0);var h,
          c = 0;f(i, function (t) {
        t.width || (t.width = u), h = t, c += t.width * (1 + o);
      }), h && (c -= h.width * o);var d = -c / 2;f(i, function (t, i) {
        n[e][i] = n[e][i] || { bandWidth: r, offset: d, width: t.width }, d += t.width * (1 + o);
      });
    }), n;
  }function Ih(t, e, n) {
    if (t && e) {
      var i = t[wh(e)];return null != i && null != n && (i = i[xh(n)]), i;
    }
  }function Ch(t) {
    return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
  }function kh(t) {
    return t.pipelineContext && t.pipelineContext.large;
  }function Dh(t, e) {
    return e.toGlobalCoord(e.dataToCoord("log" === e.type ? 1 : 0));
  }function Ah(t, e) {
    return gx(t, px(e));
  }function Ph(t, e) {
    var n,
        i,
        r,
        a = t.type,
        o = e.getMin(),
        s = e.getMax(),
        l = t.getExtent();"ordinal" === a ? n = e.getCategories().length : (i = e.get("boundaryGap"), x(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = wo(i[0], 1), i[1] = wo(i[1], 1), r = l[1] - l[0] || Math.abs(l[0])), "dataMin" === o ? o = l[0] : "function" == typeof o && (o = o({ min: l[0], max: l[1] })), "dataMax" === s ? s = l[1] : "function" == typeof s && (s = s({ min: l[0], max: l[1] }));var u = null != o,
        h = null != s;null == o && (o = "ordinal" === a ? n ? 0 : NaN : l[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : NaN : l[1] + i[1] * r), (null == o || !isFinite(o)) && (o = NaN), (null == s || !isFinite(s)) && (s = NaN), t.setBlank(C(o) || C(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !u && (o = 0), 0 > o && 0 > s && !h && (s = 0));var c = e.ecModel;if (c && "time" === a) {
      var d,
          p = bh("bar", c);if (f(p, function (t) {
        d |= t.getBaseAxis() === e.axis;
      }), d) {
        var g = Mh(p),
            v = Oh(o, s, e, g);o = v.min, s = v.max;
      }
    }return { extent: [o, s], fixMin: u, fixMax: h };
  }function Oh(t, e, n, i) {
    var r = n.axis.getExtent(),
        a = r[1] - r[0],
        o = Ih(i, n.axis);if (undefined === o) return { min: t, max: e };var s = Infinity;f(o, function (t) {
      s = Math.min(t.offset, s);
    });var l = -Infinity;f(o, function (t) {
      l = Math.max(t.offset + t.width, l);
    }), s = Math.abs(s), l = Math.abs(l);var u = s + l,
        h = e - t,
        c = 1 - (s + l) / a,
        d = h / c - h;return e += d * (l / u), t -= d * (s / u), { min: t, max: e };
  }function Lh(t, e) {
    var n = Ph(t, e),
        i = n.extent,
        r = e.get("splitNumber");"log" === t.type && (t.base = e.get("logBase"));var a = t.type;t.setExtent(i[0], i[1]), t.niceExtent({ splitNumber: r, fixMin: n.fixMin, fixMax: n.fixMax, minInterval: "interval" === a || "time" === a ? e.get("minInterval") : null, maxInterval: "interval" === a || "time" === a ? e.get("maxInterval") : null });var o = e.get("interval");null != o && t.setInterval && t.setInterval(o);
  }function Bh(t, e) {
    if (e = e || t.get("type")) switch (e) {case "category":
        return new Z_(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [Infinity, -Infinity]);case "value":
        return new Q_();default:
        return (dh.getClass(e) || Q_).create(t);}
  }function Eh(t) {
    var e = t.getLabelModel().get("formatter"),
        n = "category" === t.type ? t.scale.getExtent()[0] : null;return "string" == typeof e ? e = function (e) {
      return function (n) {
        return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "");
      };
    }(e) : "function" == typeof e ? function (i, r) {
      return null != n && (r = i - n), e(zh(t, i), r);
    } : function (e) {
      return t.scale.getLabel(e);
    };
  }function zh(t, e) {
    return "category" === t.type ? t.scale.getLabel(e) : e;
  }function Rh(t) {
    var e = t.get("interval");return null == e ? "auto" : e;
  }function Fh(t) {
    return "category" === t.type && 0 === Rh(t.getLabelModel());
  }function Nh(t, e) {
    if ("image" !== this.type) {
      var n = this.style,
          i = this.shape;i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(false);
    }
  }function Hh(t, e, n, i, r, a, o) {
    var s = 0 === t.indexOf("empty");s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));var l;return l = 0 === t.indexOf("image://") ? _a(t.slice(8), new In(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? ya(t.slice(7), {}, new In(e, n, i, r), o ? "center" : "cover") : new Ax({ shape: { symbolType: t, x: e, y: n, width: i, height: r } }), l.__isEmptyBrush = s, l.setColor = Nh, l.setColor(a), l;
  }function Vh(t) {
    return uh(t.getSource(), t);
  }function Wh(t, e) {
    var n = e;fo.isInstance(e) || (n = new fo(e), c(n, bx));var i = Bh(n);return i.setExtent(t[0], t[1]), Lh(i, n), i;
  }function Gh(t) {
    c(t, bx);
  }function Xh(t, e) {
    return Math.abs(t - e) < Lx;
  }function Yh(t, e, n) {
    var i = 0,
        r = t[0];if (!r) return false;for (var a = 1; a < t.length; a++) {
      var o = t[a];i += Yr(r[0], r[1], o[0], o[1], e, n), r = o;
    }var s = t[0];return Xh(r[0], s[0]) && Xh(r[1], s[1]) || (i += Yr(r[0], r[1], s[0], s[1], e, n)), 0 !== i;
  }function jh(t, e, n) {
    if (this.name = t, this.geometries = e, n) n = [n[0], n[1]];else {
      var i = this.getBoundingRect();n = [i.x + i.width / 2, i.y + i.height / 2];
    }this.center = n;
  }function qh(t) {
    if (!t.UTF8Encoding) return t;var e = t.UTF8Scale;null == e && (e = 1024);for (var n = t.features, i = 0; i < n.length; i++) {
      for (var r = n[i], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
        var u = o[l];if ("Polygon" === a.type) o[l] = Uh(u, s[l], e);else if ("MultiPolygon" === a.type) for (var h = 0; h < u.length; h++) {
          var c = u[h];u[h] = Uh(c, s[l][h], e);
        }
      }
    }return t.UTF8Encoding = false, t;
  }function Uh(t, e, n) {
    for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
      var s = t.charCodeAt(o) - 64,
          l = t.charCodeAt(o + 1) - 64;s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, i.push([s / n, l / n]);
    }return i;
  }function Zh(t) {
    return "category" === t.type ? $h(t) : tc(t);
  }function Kh(t, e) {
    return "category" === t.type ? Jh(t, e) : { ticks: t.scale.getTicks() };
  }function $h(t) {
    var e = t.getLabelModel(),
        n = Qh(t, e);return !e.get("show") || t.scale.isBlank() ? { labels: [], labelCategoryInterval: n.labelCategoryInterval } : n;
  }function Qh(t, e) {
    var n = ec(t, "labels"),
        i = Rh(e),
        r = nc(n, i);if (r) return r;var a, o;return w(i) ? a = lc(t, i) : (o = "auto" === i ? rc(t) : i, a = sc(t, o)), ic(n, i, { labels: a, labelCategoryInterval: o });
  }function Jh(t, e) {
    var n = ec(t, "ticks"),
        i = Rh(e),
        r = nc(n, i);if (r) return r;var a, o;if ((!e.get("show") || t.scale.isBlank()) && (a = []), w(i)) a = lc(t, i, true);else if ("auto" === i) {
      var s = Qh(t, t.getLabelModel());o = s.labelCategoryInterval, a = p(s.labels, function (t) {
        return t.tickValue;
      });
    } else o = i, a = sc(t, o, true);return ic(n, i, { ticks: a, tickCategoryInterval: o });
  }function tc(t) {
    var e = t.scale.getTicks(),
        n = Eh(t);return { labels: p(e, function (e, i) {
        return { formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e };
      }) };
  }function ec(t, e) {
    return Ex(t)[e] || (Ex(t)[e] = []);
  }function nc(t, e) {
    for (var n = 0; n < t.length; n++) {
      if (t[n].key === e) return t[n].value;
    }
  }function ic(t, e, n) {
    return t.push({ key: e, value: n }), n;
  }function rc(t) {
    var e = Ex(t).autoInterval;return null != e ? e : Ex(t).autoInterval = t.calculateCategoryInterval();
  }function ac(t) {
    var e = oc(t),
        n = Eh(t),
        i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
        r = t.scale,
        a = r.getExtent(),
        o = r.count();if (a[1] - a[0] < 1) return 0;var s = 1;o > 40 && (s = Math.max(1, Math.floor(o / 40)));for (var l = a[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), d = 0, f = 0; l <= a[1]; l += s) {
      var p = 0,
          g = 0,
          v = Yn(n(l), e.font, "center", "top");p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7);
    }var m = d / h,
        y = f / c;isNaN(m) && (m = Infinity), isNaN(y) && (y = Infinity);var _ = Math.max(0, Math.floor(Math.min(m, y))),
        x = Ex(t.model),
        w = t.getExtent(),
        b = x.lastAutoInterval,
        S = x.lastTickCount;return null != b && null != S && Math.abs(b - _) <= 1 && Math.abs(S - o) <= 1 && b > _ && x.axisExtend0 === w[0] && x.axisExtend1 === w[1] ? _ = b : (x.lastTickCount = o, x.lastAutoInterval = _, x.axisExtend0 = w[0], x.axisExtend1 = w[1]), _;
  }function oc(t) {
    var e = t.getLabelModel();return { axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0, labelRotate: e.get("rotate") || 0, font: e.getFont() };
  }function sc(t, e, n) {
    function i(t) {
      l.push(n ? t : { formattedLabel: r(t), rawLabel: a.getLabel(t), tickValue: t });
    }var r = Eh(t),
        a = t.scale,
        o = a.getExtent(),
        s = t.getLabelModel(),
        l = [],
        u = Math.max((e || 0) + 1, 1),
        h = o[0],
        c = a.count();0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));var d = Fh(t),
        f = s.get("showMinLabel") || d,
        p = s.get("showMaxLabel") || d;f && h !== o[0] && i(o[0]);for (var g = h; g <= o[1]; g += u) {
      i(g);
    }return p && g - u !== o[1] && i(o[1]), l;
  }function lc(t, e, n) {
    var i = t.scale,
        r = Eh(t),
        a = [];return f(i.getTicks(), function (t) {
      var o = i.getLabel(t);e(t, o) && a.push(n ? t : { formattedLabel: r(t), rawLabel: o, tickValue: t });
    }), a;
  }function uc(t, e) {
    var n = t[1] - t[0],
        i = e,
        r = n / i / 2;t[0] += r, t[1] -= r;
  }function hc(t, e, n, i) {
    function r(t, e) {
      return t = bo(t), e = bo(e), d ? t > e : e > t;
    }var a = e.length;if (t.onBand && !n && a) {
      var o,
          s,
          l = t.getExtent();if (1 === a) e[0].coord = l[0], o = e[1] = { coord: l[0] };else {
        var u = e[a - 1].tickValue - e[0].tickValue,
            h = (e[a - 1].coord - e[0].coord) / u;f(e, function (t) {
          t.coord -= h / 2;
        });var c = t.scale.getExtent();s = 1 + c[1] - e[a - 1].tickValue, o = { coord: e[a - 1].coord + h * s }, e.push(o);
      }var d = l[0] > l[1];r(e[0].coord, l[0]) && (i ? e[0].coord = l[0] : e.shift()), i && r(l[0], e[0].coord) && e.unshift({ coord: l[0] }), r(l[1], o.coord) && (i ? o.coord = l[1] : e.pop()), i && r(o.coord, l[1]) && e.push({ coord: l[1] });
    }
  }function cc(t, e, n) {
    Rx.call(this, t, e, n), this.type = "value", this.angle = 0, this.name = "", this.model;
  }function dc(t, e, n) {
    this._model = t, this.dimensions = [], this._indicatorAxes = p(t.getIndicatorModels(), function (t, e) {
      var n = "indicator_" + e,
          i = new cc(n, "log" === t.get("axisType") ? new xx() : new Q_());return i.name = t.get("name"), i.model = t, t.axis = i, this.dimensions.push(n), i;
    }, this), this.resize(t, n), this.cx, this.cy, this.r, this.r0, this.startAngle;
  }function fc(t, e) {
    return s({ show: e }, t);
  }function pc(t, e, n, i) {
    var r,
        a,
        o = ko(n - t.rotation),
        s = i[0] > i[1],
        l = "start" === e && !s || "start" !== e && s;return Do(o - Xx / 2) ? (a = l ? "bottom" : "top", r = "center") : Do(o - 1.5 * Xx) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * Xx > o && o > Xx / 2 ? l ? "left" : "right" : l ? "right" : "left"), { rotation: o, textAlign: r, textVerticalAlign: a };
  }function gc(t, e, n) {
    if (!Fh(t.axis)) {
      var i = t.get("axisLabel.showMinLabel"),
          r = t.get("axisLabel.showMaxLabel");e = e || [], n = n || [];var a = e[0],
          o = e[1],
          s = e[e.length - 1],
          l = e[e.length - 2],
          u = n[0],
          h = n[1],
          c = n[n.length - 1],
          d = n[n.length - 2];i === false ? (vc(a), vc(u)) : mc(a, o) && (i ? (vc(o), vc(h)) : (vc(a), vc(u))), r === false ? (vc(s), vc(c)) : mc(l, s) && (r ? (vc(l), vc(d)) : (vc(s), vc(c)));
    }
  }function vc(t) {
    t && (t.ignore = true);
  }function mc(t, e) {
    var n = t && t.getBoundingRect().clone(),
        i = e && e.getBoundingRect().clone();if (n && i) {
      var r = Le([]);return Re(r, r, -t.rotation), n.applyTransform(Ee([], r, t.getLocalTransform())), i.applyTransform(Ee([], r, e.getLocalTransform())), n.intersect(i);
    }
  }function yc(t) {
    return "middle" === t || "center" === t;
  }function _c(t, e, n, i, r) {
    for (var a = [], o = [], s = [], l = 0; l < t.length; l++) {
      var u = t[l].coord;o[0] = u, o[1] = 0, s[0] = u, s[1] = n, e && (ae(o, o, e), ae(s, s, e));var h = new Tv({ anid: r + "_" + t[l].tickValue, subPixelOptimize: true, shape: { x1: o[0], y1: o[1], x2: s[0], y2: s[1] }, style: i, z2: 2, silent: true });a.push(h);
    }return a;
  }function xc(t, e, n) {
    var i = e.axis,
        r = e.getModel("axisTick");if (r.get("show") && !i.scale.isBlank()) {
      for (var a = r.getModel("lineStyle"), o = n.tickDirection * r.get("length"), l = i.getTicksCoords(), u = _c(l, t._transform, o, s(a.getLineStyle(), { stroke: e.get("axisLine.lineStyle.color") }), "ticks"), h = 0; h < u.length; h++) {
        t.group.add(u[h]);
      }return u;
    }
  }function wc(t, e, n) {
    var i = e.axis,
        r = e.getModel("minorTick");if (r.get("show") && !i.scale.isBlank()) {
      var a = i.getMinorTicksCoords();if (a.length) for (var o = r.getModel("lineStyle"), l = n.tickDirection * r.get("length"), u = s(o.getLineStyle(), s(e.getModel("axisTick").getLineStyle(), { stroke: e.get("axisLine.lineStyle.color") })), h = 0; h < a.length; h++) {
        for (var c = _c(a[h], t._transform, l, u, "minorticks_" + h), d = 0; d < c.length; d++) {
          t.group.add(c[d]);
        }
      }
    }
  }function bc(t, e, n) {
    var i = e.axis,
        r = k(n.axisLabelShow, e.get("axisLabel.show"));if (r && !i.scale.isBlank()) {
      var a = e.getModel("axisLabel"),
          o = a.get("margin"),
          s = i.getViewLabels(),
          l = (k(n.labelRotate, a.get("rotate")) || 0) * Xx / 180,
          u = Ux(n.rotation, l, n.labelDirection),
          h = e.getCategories && e.getCategories(true),
          c = [],
          d = Zx(e),
          p = e.get("triggerEvent");return f(s, function (r, s) {
        var l = r.tickValue,
            f = r.formattedLabel,
            g = r.rawLabel,
            v = a;h && h[l] && h[l].textStyle && (v = new fo(h[l].textStyle, a, e.ecModel));var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),
            y = i.dataToCoord(l),
            _ = [y, n.labelOffset + n.labelDirection * o],
            x = new cv({ anid: "label_" + l, position: _, rotation: u.rotation, silent: d, z2: 10 });Ga(x.style, v, { text: f, textAlign: v.getShallow("align", true) || u.textAlign, textVerticalAlign: v.getShallow("verticalAlign", true) || v.getShallow("baseline", true) || u.textVerticalAlign, textFill: "function" == typeof m ? m("category" === i.type ? g : "value" === i.type ? l + "" : l, s) : m }), p && (x.eventData = qx(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), t._dumbGroup.add(x), x.updateTransform(), c.push(x), t.group.add(x), x.decomposeTransform();
      }), c;
    }
  }function Sc(t, e) {
    this.getAllNames = function () {
      var t = e();return t.mapArray(t.getName);
    }, this.containName = function (t) {
      var n = e();return n.indexOfName(t) >= 0;
    }, this.indexOfName = function (e) {
      var n = t();return n.indexOfName(e);
    }, this.getItemVisual = function (e, n) {
      var i = t();return i.getItemVisual(e, n);
    };
  }function Mc(t) {
    return x(t) || (t = [+t, +t]), t;
  }function Tc(t) {
    return !isNaN(t[0]) && !isNaN(t[1]);
  }function Ic(t) {
    return [t.cx, t.cy];
  }function Cc(t, e) {
    var n = { axesInfo: {}, seriesInvolved: false, coordSysAxesInfo: {}, coordSysMap: {} };return kc(n, t, e), n.seriesInvolved && Ac(n, t), n;
  }function kc(t, e, n) {
    var i = e.getComponent("tooltip"),
        r = e.getComponent("axisPointer"),
        a = r.get("link", true) || [],
        o = [];rw(n.getCoordinateSystems(), function (n) {
      function s(i, s, l) {
        var h = l.model.getModel("axisPointer", r),
            d = h.get("show");if (d && ("auto" !== d || i || zc(h))) {
          null == s && (s = h.get("triggerTooltip")), h = i ? Dc(l, c, r, e, i, s) : h;var f = h.get("snap"),
              p = Rc(l.model),
              g = s || f || "category" === l.type,
              v = t.axesInfo[p] = { key: p, axis: l, coordSys: n, axisPointerModel: h, triggerTooltip: s, involveSeries: g, snap: f, useHandle: zc(h), seriesModels: [] };u[p] = v, t.seriesInvolved |= g;var m = Pc(a, l);if (null != m) {
            var y = o[m] || (o[m] = { axesInfo: {} });y.axesInfo[p] = v, y.mapper = a[m].mapper, v.linkGroup = y;
          }
        }
      }if (n.axisPointerEnabled) {
        var l = Rc(n.model),
            u = t.coordSysAxesInfo[l] = {};t.coordSysMap[l] = n;var h = n.model,
            c = h.getModel("tooltip", i);if (rw(n.getAxes(), aw(s, false, null)), n.getTooltipAxes && i && c.get("show")) {
          var d = "axis" === c.get("trigger"),
              f = "cross" === c.get("axisPointer.type"),
              p = n.getTooltipAxes(c.get("axisPointer.axis"));(d || f) && rw(p.baseAxes, aw(s, f ? "cross" : true, d)), f && rw(p.otherAxes, aw(s, "cross", false));
        }
      }
    });
  }function Dc(t, e, n, r, a, o) {
    var l = e.getModel("axisPointer"),
        u = {};rw(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {
      u[t] = i(l.get(t));
    }), u.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (u.type = "line");var h = u.label || (u.label = {});if (null == h.show && (h.show = false), "cross" === a) {
      var c = l.get("label.show");if (h.show = null != c ? c : true, !o) {
        var d = u.lineStyle = l.get("crossStyle");d && s(h, d.textStyle);
      }
    }return t.model.getModel("axisPointer", new fo(u, n, r));
  }function Ac(t, e) {
    e.eachSeries(function (e) {
      var n = e.coordinateSystem,
          i = e.get("tooltip.trigger", true),
          r = e.get("tooltip.show", true);n && "none" !== i && i !== false && "item" !== i && r !== false && e.get("axisPointer.show", true) !== false && rw(t.coordSysAxesInfo[Rc(n.model)], function (t) {
        var i = t.axis;n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count());
      });
    }, this);
  }function Pc(t, e) {
    for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
      var a = t[r] || {};if (Oc(a[i + "AxisId"], n.id) || Oc(a[i + "AxisIndex"], n.componentIndex) || Oc(a[i + "AxisName"], n.name)) return r;
    }
  }function Oc(t, e) {
    return "all" === t || x(t) && u(t, e) >= 0 || t === e;
  }function Lc(t) {
    var e = Bc(t);if (e) {
      var n = e.axisPointerModel,
          i = e.axis.scale,
          r = n.option,
          a = n.get("status"),
          o = n.get("value");null != o && (o = i.parse(o));var s = zc(n);null == a && (r.status = s ? "show" : "hide");var l = i.getExtent().slice();l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");
    }
  }function Bc(t) {
    var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;return e && e.axesInfo[Rc(t)];
  }function Ec(t) {
    var e = Bc(t);return e && e.axisPointerModel;
  }function zc(t) {
    return !!t.get("handle.show");
  }function Rc(t) {
    return t.type + "||" + t.id;
  }function Fc(t, e, n, i, r) {
    var a = t.axis;if (!a.scale.isBlank() && a.containData(e)) {
      if (!t.involveSeries) return undefined;var s = Nc(e, t),
          l = s.payloadBatch,
          u = s.snapToValue;l[0] && null == r.seriesIndex && o(r, l[0]), !i && t.snap && a.containData(u) && null != u && (e = u), n.showPointer(t, e, l, r), n.showTooltip(t, s, u);
    }
  }function Nc(t, e) {
    var n = e.axis,
        i = n.dim,
        r = t,
        a = [],
        o = Number.MAX_VALUE,
        s = -1;return sw(e.seriesModels, function (e) {
      var l,
          u,
          h = e.getData().mapDimension(i, true);if (e.getAxisTooltipData) {
        var c = e.getAxisTooltipData(h, t, n);u = c.dataIndices, l = c.nestestValue;
      } else {
        if (u = e.getData().indicesOfNearest(h[0], t, "category" === n.type ? .5 : null), !u.length) return;l = e.getData().get(h[0], u[0]);
      }if (null != l && isFinite(l)) {
        var d = t - l,
            f = Math.abs(d);o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), sw(u, function (t) {
          a.push({ seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t) });
        }));
      }
    }), { payloadBatch: a, snapToValue: r };
  }function Hc(t, e, n, i) {
    t[e.key] = { value: n, payloadBatch: i };
  }function Vc(t, e, n, i) {
    var r = n.payloadBatch,
        a = e.axis,
        o = a.model,
        s = e.axisPointerModel;if (e.triggerTooltip && r.length) {
      var l = e.coordSys.model,
          u = Rc(l),
          h = t.map[u];h || (h = t.map[u] = { coordSysId: l.id, coordSysIndex: l.componentIndex, coordSysType: l.type, coordSysMainType: l.mainType, dataByAxis: [] }, t.list.push(h)), h.dataByAxis.push({ axisDim: a.dim, axisIndex: o.componentIndex, axisType: o.type, axisId: o.id, value: i, valueLabelOpt: { precision: s.get("label.precision"), formatter: s.get("label.formatter") }, seriesDataIndices: r.slice() });
    }
  }function Wc(t, e, n) {
    var i = n.axesInfo = [];sw(e, function (e, n) {
      var r = e.axisPointerModel.option,
          a = t[n];a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({ axisDim: e.axis.dim, axisIndex: e.axis.model.componentIndex, value: r.value });
    });
  }function Gc(t, e, n, i) {
    if (qc(e) || !t.list.length) return undefined;var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};i({ type: "showTip", escapeConnect: true, x: e[0], y: e[1], tooltipOption: n.tooltipOption, position: n.position, dataIndexInside: r.dataIndexInside, dataIndex: r.dataIndex, seriesIndex: r.seriesIndex, dataByCoordSys: t.list });
  }function Xc(t, e, n) {
    var i = n.getZr(),
        r = "axisPointerLastHighlights",
        a = uw(i)[r] || {},
        o = uw(i)[r] = {};sw(t, function (t) {
      var e = t.axisPointerModel.option;"show" === e.status && sw(e.seriesDataIndices, function (t) {
        var e = t.seriesIndex + " | " + t.dataIndex;o[e] = t;
      });
    });var s = [],
        l = [];f(a, function (t, e) {
      !o[e] && l.push(t);
    }), f(o, function (t, e) {
      !a[e] && s.push(t);
    }), l.length && n.dispatchAction({ type: "downplay", escapeConnect: true, batch: l }), s.length && n.dispatchAction({ type: "highlight", escapeConnect: true, batch: s });
  }function Yc(t, e) {
    for (var n = 0; n < (t || []).length; n++) {
      var i = t[n];if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i;
    }
  }function jc(t) {
    var e = t.axis.model,
        n = {},
        i = n.axisDim = t.axis.dim;return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n;
  }function qc(t) {
    return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
  }function Uc(t, e, n) {
    if (!Ed.node) {
      var i = e.getZr();cw(i).records || (cw(i).records = {}), Zc(i, e);var r = cw(i).records[t] || (cw(i).records[t] = {});r.handler = n;
    }
  }function Zc(t, e) {
    function n(n, i) {
      t.on(n, function (n) {
        var r = Jc(e);dw(cw(t).records, function (t) {
          t && i(t, n, r.dispatchAction);
        }), Kc(r.pendings, e);
      });
    }cw(t).initialized || (cw(t).initialized = true, n("click", _(Qc, "click")), n("mousemove", _(Qc, "mousemove")), n("globalout", $c));
  }function Kc(t, e) {
    var n,
        i = t.showTip.length,
        r = t.hideTip.length;i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n));
  }function $c(t, e, n) {
    t.handler("leave", null, n);
  }function Qc(t, e, n, i) {
    e.handler(t, n, i);
  }function Jc(t) {
    var e = { showTip: [], hideTip: [] },
        n = function n(i) {
      var r = e[i.type];r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i));
    };return { dispatchAction: n, pendings: e };
  }function td(t, e) {
    if (!Ed.node) {
      var n = e.getZr(),
          i = (cw(n).records || {})[t];i && (cw(n).records[t] = null);
    }
  }function ed() {}function nd(t, e, n, i) {
    id(pw(n).lastProp, i) || (pw(n).lastProp = i, e ? Ja(n, i, t) : (n.stopAnimation(), n.attr(i)));
  }function id(t, e) {
    if (S(t) && S(e)) {
      var n = true;return f(e, function (e, i) {
        n = n && id(t[i], e);
      }), !!n;
    }return t === e;
  }function rd(t, e) {
    t[e.get("label.show") ? "show" : "hide"]();
  }function ad(t) {
    return { position: t.position.slice(), rotation: t.rotation || 0 };
  }function od(t, e, n) {
    var i = e.get("z"),
        r = e.get("zlevel");t && t.traverse(function (t) {
      "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n);
    });
  }function sd(t) {
    var e,
        n = t.get("type"),
        i = t.getModel(n + "Style");return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e;
  }function ld(t, e, n, i, r) {
    var a = n.get("value"),
        o = hd(a, e.axis, e.ecModel, n.get("seriesDataIndices"), { precision: n.get("label.precision"), formatter: n.get("label.formatter") }),
        s = n.getModel("label"),
        l = om(s.get("padding") || 0),
        u = s.getFont(),
        h = Yn(o, u),
        c = r.position,
        d = h.width + l[1] + l[3],
        f = h.height + l[0] + l[2],
        p = r.align;"right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);var g = r.verticalAlign;"bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), ud(c, d, f, i);var v = s.get("backgroundColor");v && "auto" !== v || (v = e.get("axisLine.lineStyle.color")), t.label = { shape: { x: 0, y: 0, width: d, height: f, r: s.get("borderRadius") }, position: c.slice(), style: { text: o, textFont: u, textFill: s.getTextColor(), textPosition: "inside", textPadding: l, fill: v, stroke: s.get("borderColor") || "transparent", lineWidth: s.get("borderWidth") || 0, shadowBlur: s.get("shadowBlur"), shadowColor: s.get("shadowColor"), shadowOffsetX: s.get("shadowOffsetX"), shadowOffsetY: s.get("shadowOffsetY") }, z2: 10 };
  }function ud(t, e, n, i) {
    var r = i.getWidth(),
        a = i.getHeight();t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, a) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0);
  }function hd(t, e, n, i, r) {
    t = e.scale.parse(t);var a = e.scale.getLabel(t, { precision: r.precision }),
        o = r.formatter;if (o) {
      var s = { value: zh(e, t), axisDimension: e.dim, axisIndex: e.index, seriesData: [] };f(i, function (t) {
        var e = n.getSeriesByIndex(t.seriesIndex),
            i = t.dataIndexInside,
            r = e && e.getDataParams(i);r && s.seriesData.push(r);
      }), b(o) ? a = o.replace("{value}", a) : w(o) && (a = o(s));
    }return a;
  }function cd(t, e, n) {
    var i = Oe();return Re(i, i, n.rotation), ze(i, i, n.position), no([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i);
  }function dd(t, e, n, i, r, a) {
    var o = Yx.innerTextLayout(n.rotation, 0, n.labelDirection);n.labelMargin = r.get("label.margin"), ld(e, i, r, a, { position: cd(i.axis, t, n), align: o.textAlign, verticalAlign: o.textVerticalAlign });
  }function fd(t, e, n) {
    return n = n || 0, { x1: t[n], y1: t[1 - n], x2: e[n], y2: e[1 - n] };
  }function pd(t, e, n) {
    return n = n || 0, { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };
  }function gd(t, e, n) {
    n = n || {};var i = t.coordinateSystem,
        r = e.axis,
        a = {},
        o = r.getAxesOnZeroOf()[0],
        s = r.position,
        l = o ? "onZero" : s,
        u = r.dim,
        h = i.getRect(),
        c = [h.x, h.x + h.width, h.y, h.y + h.height],
        d = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
        f = e.get("offset") || 0,
        p = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];if (o) {
      var g = o.toGlobalCoord(o.dataToCoord(0));p[d.onZero] = Math.max(Math.min(g, p[1]), p[0]);
    }a.position = ["y" === u ? p[d[l]] : c[0], "x" === u ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);var v = { top: -1, bottom: 1, left: -1, right: 1 };a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), k(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);var m = e.get("axisLabel.rotate");return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a;
  }function vd(t, e, n, i, r, a) {
    var o = mw.getAxisPointerClass(t.axisPointerClass);if (o) {
      var s = Ec(e);s ? (t._axisPointer || (t._axisPointer = new o())).render(e, s, i, a) : md(t, i);
    }
  }function md(t, e, n) {
    var i = t._axisPointer;i && i.dispose(e, n), t._axisPointer = null;
  }function yd(t, e) {
    var n = {};return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n);
  }function _d(t) {
    return "x" === t.dim ? 0 : 1;
  }function xd(t) {
    var e = "cubic-bezier(0.23, 1, 0.32, 1)",
        n = "left " + t + "s " + e + ",top " + t + "s " + e;return p(Sw, function (t) {
      return t + "transition:" + n;
    }).join(";");
  }function wd(t) {
    var e = [],
        n = t.get("fontSize"),
        i = t.getTextColor();return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px"), ww(["decoration", "align"], function (n) {
      var i = t.get(n);i && e.push("text-" + n + ":" + i);
    }), e.join(";");
  }function bd(t) {
    var e = [],
        n = t.get("transitionDuration"),
        i = t.get("backgroundColor"),
        r = t.getModel("textStyle"),
        a = t.get("padding");return n && e.push(xd(n)), i && (Ed.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + rn(i)), e.push("filter:alpha(opacity=70)"))), ww(["width", "color", "radius"], function (n) {
      var i = "border-" + n,
          r = bw(i),
          a = t.get(r);null != a && e.push(i + ":" + a + ("color" === n ? "" : "px"));
    }), e.push(wd(r)), null != a && e.push("padding:" + om(a).join("px ") + "px"), e.join(";") + ";";
  }function Sd(t, e, n, i, r) {
    var a = e && e.painter;if (n) {
      var o = a && a.getViewportRoot();o && pe(t, o, document.body, i, r);
    } else {
      t[0] = i, t[1] = r;var s = a && a.getViewportRootOffset();s && (t[0] += s.offsetLeft, t[1] += s.offsetTop);
    }
  }function Md(t, e, n) {
    if (Ed.wxa) return null;var i = document.createElement("div");i.domBelongToZr = true, this.el = i;var r = this._zr = e.getZr(),
        a = this._appendToBody = n && n.appendToBody;this._styleCoord = [0, 0], Sd(this._styleCoord, r, a, e.getWidth() / 2, e.getHeight() / 2), a ? document.body.appendChild(i) : t.appendChild(i), this._container = t, this._show = false, this._hideTimeout;var o = this;i.onmouseenter = function () {
      o._enterable && (clearTimeout(o._hideTimeout), o._show = true), o._inContent = true;
    }, i.onmousemove = function (t) {
      if (t = t || window.event, !o._enterable) {
        var e = r.handler,
            n = r.painter.getViewportRoot();be(n, t, true), e.dispatch("mousemove", t);
      }
    }, i.onmouseleave = function () {
      o._enterable && o._show && o.hideLater(o._hideDelay), o._inContent = false;
    };
  }function Td(t) {
    this._zr = t.getZr(), this._show = false, this._hideTimeout;
  }function Id(t) {
    for (var e = t.pop(); t.length;) {
      var n = t.pop();n && (fo.isInstance(n) && (n = n.get("tooltip", true)), "string" == typeof n && (n = { formatter: n }), e = new fo(n, e, e.ecModel));
    }return e;
  }function Cd(t, e) {
    return t.dispatchAction || y(e.dispatchAction, e);
  }function kd(t, e, n, i, r, a, o) {
    var s = n.getOuterSize(),
        l = s.width,
        u = s.height;return null != a && (t + l + a > i ? t -= l + a : t += a), null != o && (e + u + o > r ? e -= u + o : e += o), [t, e];
  }function Dd(t, e, n, i, r) {
    var a = n.getOuterSize(),
        o = a.width,
        s = a.height;return t = Math.min(t + o, i) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e];
  }function Ad(t, e, n) {
    var i = n[0],
        r = n[1],
        a = 5,
        o = 0,
        s = 0,
        l = e.width,
        u = e.height;switch (t) {case "inside":
        o = e.x + l / 2 - i / 2, s = e.y + u / 2 - r / 2;break;case "top":
        o = e.x + l / 2 - i / 2, s = e.y - r - a;break;case "bottom":
        o = e.x + l / 2 - i / 2, s = e.y + u + a;break;case "left":
        o = e.x - i - a, s = e.y + u / 2 - r / 2;break;case "right":
        o = e.x + l + a, s = e.y + u / 2 - r / 2;}return [o, s];
  }function Pd(t) {
    return "center" === t || "middle" === t;
  }var Od = 2311,
      Ld = function Ld() {
    return Od++;
  },
      Bd = {};Bd = "object" == (typeof wx === "undefined" ? "undefined" : _typeof(wx)) && "function" == typeof wx.getSystemInfoSync ? { browser: {}, os: {}, node: false, wxa: true, canvasSupported: true, svgSupported: false, touchEventsSupported: true, domSupported: false } : "undefined" == typeof document && "undefined" != typeof self ? { browser: {}, os: {}, node: false, worker: true, canvasSupported: true, domSupported: false } : "undefined" == typeof navigator ? { browser: {}, os: {}, node: true, worker: false, canvasSupported: true, svgSupported: true, domSupported: false } : e(navigator.userAgent);var Ed = Bd,
      zd = { "[object Function]": 1, "[object RegExp]": 1, "[object Date]": 1, "[object Error]": 1, "[object CanvasGradient]": 1, "[object CanvasPattern]": 1, "[object Image]": 1, "[object Canvas]": 1 },
      Rd = { "[object Int8Array]": 1, "[object Uint8Array]": 1, "[object Uint8ClampedArray]": 1, "[object Int16Array]": 1, "[object Uint16Array]": 1, "[object Int32Array]": 1, "[object Uint32Array]": 1, "[object Float32Array]": 1, "[object Float64Array]": 1 },
      Fd = Object.prototype.toString,
      Nd = Array.prototype,
      Hd = Nd.forEach,
      Vd = Nd.filter,
      Wd = Nd.slice,
      Gd = Nd.map,
      Xd = Nd.reduce,
      Yd = {},
      jd = function jd() {
    return Yd.createCanvas();
  };Yd.createCanvas = function () {
    return document.createElement("canvas");
  };var qd,
      Ud = "__ec_primitive__";R.prototype = { constructor: R, get: function get(t) {
      return this.data.hasOwnProperty(t) ? this.data[t] : null;
    }, set: function set(t, e) {
      return this.data[t] = e;
    }, each: function each(t, e) {
      undefined !== e && (t = y(t, e));for (var n in this.data) {
        this.data.hasOwnProperty(n) && t(this.data[n], n);
      }
    }, removeKey: function removeKey(t) {
      delete this.data[t];
    } };var Zd = (Object.freeze || Object)({ $override: n, clone: i, merge: r, mergeAll: a, extend: o, defaults: s, createCanvas: jd, getContext: l, indexOf: u, inherits: h, mixin: c, isArrayLike: d, each: f, map: p, reduce: g, filter: v, find: m, bind: y, curry: _, isArray: x, isFunction: w, isString: b, isObject: S, isBuiltInObject: M, isTypedArray: T, isDom: I, eqNaN: C, retrieve: k, retrieve2: D, retrieve3: A, slice: P, normalizeCssArray: O, assert: L, trim: B, setAsPrimitive: E, isPrimitive: z, createHashMap: F, concatArray: N, noop: H }),
      Kd = "undefined" == typeof Float32Array ? Array : Float32Array,
      $d = U,
      Qd = Z,
      Jd = ee,
      tf = ne,
      ef = (Object.freeze || Object)({ create: V, copy: W, clone: G, set: X, add: Y, scaleAndAdd: j, sub: q, len: U, length: $d, lenSquare: Z, lengthSquare: Qd, mul: K, div: $, dot: Q, scale: J, normalize: te, distance: ee, dist: Jd, distanceSquare: ne, distSquare: tf, negate: ie, lerp: re, applyTransform: ae, min: oe, max: se });le.prototype = { constructor: le, _dragStart: function _dragStart(t) {
      for (var e = t.target; e && !e.draggable;) {
        e = e.parent;
      }e && (this._draggingTarget = e, e.dragging = true, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(ue(e, t), "dragstart", t.event));
    }, _drag: function _drag(t) {
      var e = this._draggingTarget;if (e) {
        var n = t.offsetX,
            i = t.offsetY,
            r = n - this._x,
            a = i - this._y;this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(ue(e, t), "drag", t.event);var o = this.findHover(n, i, e).target,
            s = this._dropTarget;this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(ue(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(ue(o, t), "dragenter", t.event));
      }
    }, _dragEnd: function _dragEnd(t) {
      var e = this._draggingTarget;e && (e.dragging = false), this.dispatchToElement(ue(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(ue(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
    } };var nf = Array.prototype.slice,
      rf = function rf(t) {
    this._$handlers = {}, this._$eventProcessor = t;
  };rf.prototype = { constructor: rf, one: function one(t, e, n, i) {
      return ce(this, t, e, n, i, true);
    }, on: function on(t, e, n, i) {
      return ce(this, t, e, n, i, false);
    }, isSilent: function isSilent(t) {
      var e = this._$handlers;return !e[t] || !e[t].length;
    }, off: function off(t, e) {
      var n = this._$handlers;if (!t) return this._$handlers = {}, this;if (e) {
        if (n[t]) {
          for (var i = [], r = 0, a = n[t].length; a > r; r++) {
            n[t][r].h !== e && i.push(n[t][r]);
          }n[t] = i;
        }n[t] && 0 === n[t].length && delete n[t];
      } else delete n[t];return this;
    }, trigger: function trigger(t) {
      var e = this._$handlers[t],
          n = this._$eventProcessor;if (e) {
        var i = arguments,
            r = i.length;r > 3 && (i = nf.call(i, 1));for (var a = e.length, o = 0; a > o;) {
          var s = e[o];if (n && n.filter && null != s.query && !n.filter(t, s.query)) o++;else {
            switch (r) {case 1:
                s.h.call(s.ctx);break;case 2:
                s.h.call(s.ctx, i[1]);break;case 3:
                s.h.call(s.ctx, i[1], i[2]);break;default:
                s.h.apply(s.ctx, i);}s.one ? (e.splice(o, 1), a--) : o++;
          }
        }
      }return n && n.afterTrigger && n.afterTrigger(t), this;
    }, triggerWithContext: function triggerWithContext(t) {
      var e = this._$handlers[t],
          n = this._$eventProcessor;if (e) {
        var i = arguments,
            r = i.length;r > 4 && (i = nf.call(i, 1, i.length - 1));for (var a = i[i.length - 1], o = e.length, s = 0; o > s;) {
          var l = e[s];if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++;else {
            switch (r) {case 1:
                l.h.call(a);break;case 2:
                l.h.call(a, i[1]);break;case 3:
                l.h.call(a, i[1], i[2]);break;default:
                l.h.apply(a, i);}l.one ? (e.splice(s, 1), o--) : s++;
          }
        }
      }return n && n.afterTrigger && n.afterTrigger(t), this;
    } };var af = Math.log(2),
      of = "___zrEVENTSAVED",
      sf = [],
      lf = "undefined" != typeof window && !!window.addEventListener,
      uf = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      hf = [],
      cf = lf ? function (t) {
    t.preventDefault(), t.stopPropagation(), t.cancelBubble = true;
  } : function (t) {
    t.returnValue = false, t.cancelBubble = true;
  },
      df = function df() {
    this._track = [];
  };df.prototype = { constructor: df, recognize: function recognize(t, e, n) {
      return this._doTrack(t, e, n), this._recognize(t);
    }, clear: function clear() {
      return this._track.length = 0, this;
    }, _doTrack: function _doTrack(t, e, n) {
      var i = t.touches;if (i) {
        for (var r = { points: [], touches: [], target: e, event: t }, a = 0, o = i.length; o > a; a++) {
          var s = i[a],
              l = _e(n, s, {});r.points.push([l.zrX, l.zrY]), r.touches.push(s);
        }this._track.push(r);
      }
    }, _recognize: function _recognize(t) {
      for (var e in ff) {
        if (ff.hasOwnProperty(e)) {
          var n = ff[e](this._track, t);if (n) return n;
        }
      }
    } };var ff = { pinch: function pinch(t, e) {
      var n = t.length;if (n) {
        var i = (t[n - 1] || {}).points,
            r = (t[n - 2] || {}).points || i;if (r && r.length > 1 && i && i.length > 1) {
          var a = Te(i) / Te(r);!isFinite(a) && (a = 1), e.pinchScale = a;var o = Ie(i);return e.pinchX = o[0], e.pinchY = o[1], { type: "pinch", target: t[0].target, event: e };
        }
      }
    } },
      pf = "silent";De.prototype.dispose = function () {};var gf = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
      vf = function vf(t, e, n, i) {
    rf.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new De(), this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, this._gestureMgr, le.call(this), this.setHandlerProxy(n);
  };vf.prototype = { constructor: vf, setHandlerProxy: function setHandlerProxy(t) {
      this.proxy && this.proxy.dispose(), t && (f(gf, function (e) {
        t.on && t.on(e, this[e], this);
      }, this), t.handler = this), this.proxy = t;
    }, mousemove: function mousemove(t) {
      var e = t.zrX,
          n = t.zrY,
          i = Pe(this, e, n),
          r = this._hovered,
          a = r.target;a && !a.__zr && (r = this.findHover(r.x, r.y), a = r.target);var o = this._hovered = i ? { x: e, y: n } : this.findHover(e, n),
          s = o.target,
          l = this.proxy;l.setCursor && l.setCursor(s ? s.cursor : "default"), a && s !== a && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(o, "mousemove", t), s && s !== a && this.dispatchToElement(o, "mouseover", t);
    }, mouseout: function mouseout(t) {
      var e = t.zrEventControl,
          n = t.zrIsToLocalDOM;"only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t), "no_globalout" !== e && !n && this.trigger("globalout", { type: "globalout", event: t });
    }, resize: function resize() {
      this._hovered = {};
    }, dispatch: function dispatch(t, e) {
      var n = this[t];n && n.call(this, e);
    }, dispose: function dispose() {
      this.proxy.dispose(), this.storage = this.proxy = this.painter = null;
    }, setCursorStyle: function setCursorStyle(t) {
      var e = this.proxy;e.setCursor && e.setCursor(t);
    }, dispatchToElement: function dispatchToElement(t, e, n) {
      t = t || {};var i = t.target;if (!i || !i.silent) {
        for (var r = "on" + e, a = Ce(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble);) {}a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
          "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a);
        }));
      }
    }, findHover: function findHover(t, e, n) {
      for (var i = this.storage.getDisplayList(), r = { x: t, y: e }, a = i.length - 1; a >= 0; a--) {
        var o;if (i[a] !== n && !i[a].ignore && (o = Ae(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== pf)) {
          r.target = i[a];break;
        }
      }return r;
    }, processGesture: function processGesture(t, e) {
      this._gestureMgr || (this._gestureMgr = new df());var n = this._gestureMgr;"start" === e && n.clear();var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);if ("end" === e && n.clear(), i) {
        var r = i.type;t.gestureEvent = r, this.dispatchToElement({ target: i.target }, r, i.event);
      }
    } }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
    vf.prototype[t] = function (e) {
      var n,
          i,
          r = e.zrX,
          a = e.zrY,
          o = Pe(this, r, a);if ("mouseup" === t && o || (n = this.findHover(r, a), i = n.target), "mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;else if ("mouseup" === t) this._upEl = i;else if ("click" === t) {
        if (this._downEl !== this._upEl || !this._downPoint || Jd(this._downPoint, [e.zrX, e.zrY]) > 4) return;this._downPoint = null;
      }this.dispatchToElement(n, t, e);
    };
  }), c(vf, rf), c(vf, le);var mf = "undefined" == typeof Float32Array ? Array : Float32Array,
      yf = (Object.freeze || Object)({ create: Oe, identity: Le, copy: Be, mul: Ee, translate: ze, rotate: Re, scale: Fe, invert: Ne, clone: He }),
      _f = Le,
      xf = 5e-5,
      wf = function wf(t) {
    t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null;
  },
      bf = wf.prototype;bf.transform = null, bf.needLocalTransform = function () {
    return Ve(this.rotation) || Ve(this.position[0]) || Ve(this.position[1]) || Ve(this.scale[0] - 1) || Ve(this.scale[1] - 1);
  };var Sf = [];bf.updateTransform = function () {
    var t = this.parent,
        e = t && t.transform,
        n = this.needLocalTransform(),
        i = this.transform;if (!n && !e) return undefined;i = i || Oe(), n ? this.getLocalTransform(i) : _f(i), e && (n ? Ee(i, t.transform, i) : Be(i, t.transform)), this.transform = i;var r = this.globalScaleRatio;if (null != r && 1 !== r) {
      this.getGlobalScale(Sf);var a = Sf[0] < 0 ? -1 : 1,
          o = Sf[1] < 0 ? -1 : 1,
          s = ((Sf[0] - a) * r + a) / Sf[0] || 0,
          l = ((Sf[1] - o) * r + o) / Sf[1] || 0;i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l;
    }this.invTransform = this.invTransform || Oe(), Ne(this.invTransform, i);
  }, bf.getLocalTransform = function (t) {
    return wf.getLocalTransform(this, t);
  }, bf.setTransform = function (t) {
    var e = this.transform,
        n = t.dpr || 1;e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0);
  }, bf.restoreTransform = function (t) {
    var e = t.dpr || 1;t.setTransform(e, 0, 0, e, 0, 0);
  };var Mf = [],
      Tf = Oe();bf.setLocalTransform = function (t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1],
          n = t[2] * t[2] + t[3] * t[3],
          i = this.position,
          r = this.scale;Ve(e - 1) && (e = Math.sqrt(e)), Ve(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], r[0] = e, r[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e);
    }
  }, bf.decomposeTransform = function () {
    if (this.transform) {
      var t = this.parent,
          e = this.transform;t && t.transform && (Ee(Mf, t.invTransform, e), e = Mf);var n = this.origin;n && (n[0] || n[1]) && (Tf[4] = n[0], Tf[5] = n[1], Ee(Mf, e, Tf), Mf[4] -= n[0], Mf[5] -= n[1], e = Mf), this.setLocalTransform(e);
    }
  }, bf.getGlobalScale = function (t) {
    var e = this.transform;return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, bf.transformCoordToLocal = function (t, e) {
    var n = [t, e],
        i = this.invTransform;return i && ae(n, n, i), n;
  }, bf.transformCoordToGlobal = function (t, e) {
    var n = [t, e],
        i = this.transform;return i && ae(n, n, i), n;
  }, wf.getLocalTransform = function (t, e) {
    e = e || [], _f(e);var n = t.origin,
        i = t.scale || [1, 1],
        r = t.rotation || 0,
        a = t.position || [0, 0];return n && (e[4] -= n[0], e[5] -= n[1]), Fe(e, e, i), r && Re(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += a[0], e[5] += a[1], e;
  };var If = { linear: function linear(t) {
      return t;
    }, quadraticIn: function quadraticIn(t) {
      return t * t;
    }, quadraticOut: function quadraticOut(t) {
      return t * (2 - t);
    }, quadraticInOut: function quadraticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1);
    }, cubicIn: function cubicIn(t) {
      return t * t * t;
    }, cubicOut: function cubicOut(t) {
      return --t * t * t + 1;
    }, cubicInOut: function cubicInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    }, quarticIn: function quarticIn(t) {
      return t * t * t * t;
    }, quarticOut: function quarticOut(t) {
      return 1 - --t * t * t * t;
    }, quarticInOut: function quarticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
    }, quinticIn: function quinticIn(t) {
      return t * t * t * t * t;
    }, quinticOut: function quinticOut(t) {
      return --t * t * t * t * t + 1;
    }, quinticInOut: function quinticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    }, sinusoidalIn: function sinusoidalIn(t) {
      return 1 - Math.cos(t * Math.PI / 2);
    }, sinusoidalOut: function sinusoidalOut(t) {
      return Math.sin(t * Math.PI / 2);
    }, sinusoidalInOut: function sinusoidalInOut(t) {
      return .5 * (1 - Math.cos(Math.PI * t));
    }, exponentialIn: function exponentialIn(t) {
      return 0 === t ? 0 : Math.pow(1024, t - 1);
    }, exponentialOut: function exponentialOut(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    }, exponentialInOut: function exponentialInOut(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2);
    }, circularIn: function circularIn(t) {
      return 1 - Math.sqrt(1 - t * t);
    }, circularOut: function circularOut(t) {
      return Math.sqrt(1 - --t * t);
    }, circularInOut: function circularInOut(t) {
      return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    }, elasticIn: function elasticIn(t) {
      var e,
          n = .1,
          i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = 0.1) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)));
    }, elasticOut: function elasticOut(t) {
      var e,
          n = .1,
          i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = 0.1) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1);
    }, elasticInOut: function elasticInOut(t) {
      var e,
          n = .1,
          i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = 0.1) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -0.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1);
    }, backIn: function backIn(t) {
      var e = 1.70158;return t * t * (2.70158 * t - e);
    }, backOut: function backOut(t) {
      var e = 1.70158;return --t * t * (2.70158 * t + e) + 1;
    }, backInOut: function backInOut(t) {
      var e = 2.5949095;return (t *= 2) < 1 ? .5 * t * t * (3.5949095 * t - e) : .5 * ((t -= 2) * t * (3.5949095 * t + e) + 2);
    }, bounceIn: function bounceIn(t) {
      return 1 - If.bounceOut(1 - t);
    }, bounceOut: function bounceOut(t) {
      return 0.36363636363636365 > t ? 7.5625 * t * t : 0.7272727272727273 > t ? 7.5625 * (t -= 0.5454545454545454) * t + .75 : 0.9090909090909091 > t ? 7.5625 * (t -= 0.8181818181818182) * t + .9375 : 7.5625 * (t -= 0.9545454545454546) * t + .984375;
    }, bounceInOut: function bounceInOut(t) {
      return .5 > t ? .5 * If.bounceIn(2 * t) : .5 * If.bounceOut(2 * t - 1) + .5;
    } };We.prototype = { constructor: We, step: function step(t, e) {
      if (this._initialized || (this._startTime = t + this._delay, this._initialized = true), this._paused) return undefined;var n = (t - this._startTime - this._pausedTime) / this._life;if (!(0 > n)) {
        n = Math.min(n, 1);var i = this.easing,
            r = "string" == typeof i ? If[i] : i,
            a = "function" == typeof r ? r(n) : n;return this.fire("frame", a), 1 === n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = true, "destroy") : null;
      }
    }, restart: function restart(t) {
      var e = (t - this._startTime - this._pausedTime) % this._life;this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = false;
    }, fire: function fire(t, e) {
      t = "on" + t, this[t] && this[t](this._target, e);
    }, pause: function pause() {
      this._paused = true;
    }, resume: function resume() {
      this._paused = false;
    } };var Cf = function Cf() {
    this.head = null, this.tail = null, this._len = 0;
  },
      kf = Cf.prototype;kf.insert = function (t) {
    var e = new Df(t);return this.insertEntry(e), e;
  }, kf.insertEntry = function (t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, kf.remove = function (t) {
    var e = t.prev,
        n = t.next;e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, kf.len = function () {
    return this._len;
  }, kf.clear = function () {
    this.head = this.tail = null, this._len = 0;
  };var Df = function Df(t) {
    this.value = t, this.next, this.prev;
  },
      Af = function Af(t) {
    this._list = new Cf(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;
  },
      Pf = Af.prototype;Pf.put = function (t, e) {
    var n = this._list,
        i = this._map,
        r = null;if (null == i[t]) {
      var a = n.len(),
          o = this._lastRemovedEntry;if (a >= this._maxSize && a > 0) {
        var s = n.head;n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s;
      }o ? o.value = e : o = new Df(e), o.key = t, n.insertEntry(o), i[t] = o;
    }return r;
  }, Pf.get = function (t) {
    var e = this._map[t],
        n = this._list;return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : undefined;
  }, Pf.clear = function () {
    this._list.clear(), this._map = {};
  };var Of = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255, 1], antiquewhite: [250, 235, 215, 1], aqua: [0, 255, 255, 1], aquamarine: [127, 255, 212, 1], azure: [240, 255, 255, 1], beige: [245, 245, 220, 1], bisque: [255, 228, 196, 1], black: [0, 0, 0, 1], blanchedalmond: [255, 235, 205, 1], blue: [0, 0, 255, 1], blueviolet: [138, 43, 226, 1], brown: [165, 42, 42, 1], burlywood: [222, 184, 135, 1], cadetblue: [95, 158, 160, 1], chartreuse: [127, 255, 0, 1], chocolate: [210, 105, 30, 1], coral: [255, 127, 80, 1], cornflowerblue: [100, 149, 237, 1], cornsilk: [255, 248, 220, 1], crimson: [220, 20, 60, 1], cyan: [0, 255, 255, 1], darkblue: [0, 0, 139, 1], darkcyan: [0, 139, 139, 1], darkgoldenrod: [184, 134, 11, 1], darkgray: [169, 169, 169, 1], darkgreen: [0, 100, 0, 1], darkgrey: [169, 169, 169, 1], darkkhaki: [189, 183, 107, 1], darkmagenta: [139, 0, 139, 1], darkolivegreen: [85, 107, 47, 1], darkorange: [255, 140, 0, 1], darkorchid: [153, 50, 204, 1], darkred: [139, 0, 0, 1], darksalmon: [233, 150, 122, 1], darkseagreen: [143, 188, 143, 1], darkslateblue: [72, 61, 139, 1], darkslategray: [47, 79, 79, 1], darkslategrey: [47, 79, 79, 1], darkturquoise: [0, 206, 209, 1], darkviolet: [148, 0, 211, 1], deeppink: [255, 20, 147, 1], deepskyblue: [0, 191, 255, 1], dimgray: [105, 105, 105, 1], dimgrey: [105, 105, 105, 1], dodgerblue: [30, 144, 255, 1], firebrick: [178, 34, 34, 1], floralwhite: [255, 250, 240, 1], forestgreen: [34, 139, 34, 1], fuchsia: [255, 0, 255, 1], gainsboro: [220, 220, 220, 1], ghostwhite: [248, 248, 255, 1], gold: [255, 215, 0, 1], goldenrod: [218, 165, 32, 1], gray: [128, 128, 128, 1], green: [0, 128, 0, 1], greenyellow: [173, 255, 47, 1], grey: [128, 128, 128, 1], honeydew: [240, 255, 240, 1], hotpink: [255, 105, 180, 1], indianred: [205, 92, 92, 1], indigo: [75, 0, 130, 1], ivory: [255, 255, 240, 1], khaki: [240, 230, 140, 1], lavender: [230, 230, 250, 1], lavenderblush: [255, 240, 245, 1], lawngreen: [124, 252, 0, 1], lemonchiffon: [255, 250, 205, 1], lightblue: [173, 216, 230, 1], lightcoral: [240, 128, 128, 1], lightcyan: [224, 255, 255, 1], lightgoldenrodyellow: [250, 250, 210, 1], lightgray: [211, 211, 211, 1], lightgreen: [144, 238, 144, 1], lightgrey: [211, 211, 211, 1], lightpink: [255, 182, 193, 1], lightsalmon: [255, 160, 122, 1], lightseagreen: [32, 178, 170, 1], lightskyblue: [135, 206, 250, 1], lightslategray: [119, 136, 153, 1], lightslategrey: [119, 136, 153, 1], lightsteelblue: [176, 196, 222, 1], lightyellow: [255, 255, 224, 1], lime: [0, 255, 0, 1], limegreen: [50, 205, 50, 1], linen: [250, 240, 230, 1], magenta: [255, 0, 255, 1], maroon: [128, 0, 0, 1], mediumaquamarine: [102, 205, 170, 1], mediumblue: [0, 0, 205, 1], mediumorchid: [186, 85, 211, 1], mediumpurple: [147, 112, 219, 1], mediumseagreen: [60, 179, 113, 1], mediumslateblue: [123, 104, 238, 1], mediumspringgreen: [0, 250, 154, 1], mediumturquoise: [72, 209, 204, 1], mediumvioletred: [199, 21, 133, 1], midnightblue: [25, 25, 112, 1], mintcream: [245, 255, 250, 1], mistyrose: [255, 228, 225, 1], moccasin: [255, 228, 181, 1], navajowhite: [255, 222, 173, 1], navy: [0, 0, 128, 1], oldlace: [253, 245, 230, 1], olive: [128, 128, 0, 1], olivedrab: [107, 142, 35, 1], orange: [255, 165, 0, 1], orangered: [255, 69, 0, 1], orchid: [218, 112, 214, 1], palegoldenrod: [238, 232, 170, 1], palegreen: [152, 251, 152, 1], paleturquoise: [175, 238, 238, 1], palevioletred: [219, 112, 147, 1], papayawhip: [255, 239, 213, 1], peachpuff: [255, 218, 185, 1], peru: [205, 133, 63, 1], pink: [255, 192, 203, 1], plum: [221, 160, 221, 1], powderblue: [176, 224, 230, 1], purple: [128, 0, 128, 1], red: [255, 0, 0, 1], rosybrown: [188, 143, 143, 1], royalblue: [65, 105, 225, 1], saddlebrown: [139, 69, 19, 1], salmon: [250, 128, 114, 1], sandybrown: [244, 164, 96, 1], seagreen: [46, 139, 87, 1], seashell: [255, 245, 238, 1], sienna: [160, 82, 45, 1], silver: [192, 192, 192, 1], skyblue: [135, 206, 235, 1], slateblue: [106, 90, 205, 1], slategray: [112, 128, 144, 1], slategrey: [112, 128, 144, 1], snow: [255, 250, 250, 1], springgreen: [0, 255, 127, 1], steelblue: [70, 130, 180, 1], tan: [210, 180, 140, 1], teal: [0, 128, 128, 1], thistle: [216, 191, 216, 1], tomato: [255, 99, 71, 1], turquoise: [64, 224, 208, 1], violet: [238, 130, 238, 1], wheat: [245, 222, 179, 1], white: [255, 255, 255, 1], whitesmoke: [245, 245, 245, 1], yellow: [255, 255, 0, 1], yellowgreen: [154, 205, 50, 1] },
      Lf = new Af(20),
      Bf = null,
      Ef = an,
      zf = on,
      Rf = (Object.freeze || Object)({ parse: Je, lift: nn, toHex: rn, fastLerp: an, fastMapToColor: Ef, lerp: on, mapToColor: zf, modifyHSL: sn, modifyAlpha: ln, stringify: un }),
      Ff = Array.prototype.slice,
      Nf = function Nf(t, e, n, i) {
    this._tracks = {}, this._target = t, this._loop = e || false, this._getter = n || hn, this._setter = i || cn, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = [];
  };Nf.prototype = { when: function when(t, e) {
      var n = this._tracks;for (var i in e) {
        if (e.hasOwnProperty(i)) {
          if (!n[i]) {
            n[i] = [];var r = this._getter(this._target, i);if (null == r) continue;0 !== t && n[i].push({ time: 0, value: _n(r) });
          }n[i].push({ time: t, value: e[i] });
        }
      }return this;
    }, during: function during(t) {
      return this._onframeList.push(t), this;
    }, pause: function pause() {
      for (var t = 0; t < this._clipList.length; t++) {
        this._clipList[t].pause();
      }this._paused = true;
    }, resume: function resume() {
      for (var t = 0; t < this._clipList.length; t++) {
        this._clipList[t].resume();
      }this._paused = false;
    }, isPaused: function isPaused() {
      return !!this._paused;
    }, _doneCallback: function _doneCallback() {
      this._tracks = {}, this._clipList.length = 0;for (var t = this._doneList, e = t.length, n = 0; e > n; n++) {
        t[n].call(this);
      }
    }, start: function start(t, e) {
      var n,
          i = this,
          r = 0,
          a = function a() {
        r--, r || i._doneCallback();
      };for (var o in this._tracks) {
        if (this._tracks.hasOwnProperty(o)) {
          var s = bn(this, t, a, this._tracks[o], o, e);s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s);
        }
      }if (n) {
        var l = n.onframe;n.onframe = function (t, e) {
          l(t, e);for (var n = 0; n < i._onframeList.length; n++) {
            i._onframeList[n](t, e);
          }
        };
      }return r || this._doneCallback(), this;
    }, stop: function stop(t) {
      for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
        var r = e[i];t && r.onframe(this._target, 1), n && n.removeClip(r);
      }e.length = 0;
    }, delay: function delay(t) {
      return this._delay = t, this;
    }, done: function done(t) {
      return t && this._doneList.push(t), this;
    }, getClips: function getClips() {
      return this._clipList;
    } };var Hf = 1;"undefined" != typeof window && (Hf = Math.max(window.devicePixelRatio || 1, 1));var Vf = 0,
      Wf = Hf,
      Gf = function Gf() {};false;var Xf = Gf,
      Yf = function Yf() {
    this.animators = [];
  };Yf.prototype = { constructor: Yf, animate: function animate(t, e) {
      var n,
          i = false,
          r = this,
          a = this.__zr;if (t) {
        var o = t.split("."),
            s = r;i = "shape" === o[0];for (var l = 0, h = o.length; h > l; l++) {
          s && (s = s[o[l]]);
        }s && (n = s);
      } else n = r;if (!n) return undefined;var c = r.animators,
          d = new Nf(n, e);return d.during(function () {
        r.dirty(i);
      }).done(function () {
        c.splice(u(c, d), 1);
      }), c.push(d), a && a.animation.addAnimator(d), d;
    }, stopAnimation: function stopAnimation(t) {
      for (var e = this.animators, n = e.length, i = 0; n > i; i++) {
        e[i].stop(t);
      }return e.length = 0, this;
    }, animateTo: function animateTo(t, e, n, i, r, a) {
      Sn(this, t, e, n, i, r, a);
    }, animateFrom: function animateFrom(t, e, n, i, r, a) {
      Sn(this, t, e, n, i, r, a, true);
    } };var jf = function jf(t) {
    wf.call(this, t), rf.call(this, t), Yf.call(this, t), this.id = t.id || Ld();
  };jf.prototype = { type: "element", name: "", __zr: null, ignore: false, clipPath: null, isGroup: false, drift: function drift(t, e) {
      switch (this.draggable) {case "horizontal":
          e = 0;break;case "vertical":
          t = 0;}var n = this.transform;n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(false);
    }, beforeUpdate: function beforeUpdate() {}, afterUpdate: function afterUpdate() {}, update: function update() {
      this.updateTransform();
    }, traverse: function traverse() {}, attrKV: function attrKV(t, e) {
      if ("position" === t || "scale" === t || "origin" === t) {
        if (e) {
          var n = this[t];n || (n = this[t] = []), n[0] = e[0], n[1] = e[1];
        }
      } else this[t] = e;
    }, hide: function hide() {
      this.ignore = true, this.__zr && this.__zr.refresh();
    }, show: function show() {
      this.ignore = false, this.__zr && this.__zr.refresh();
    }, attr: function attr(t, e) {
      if ("string" == typeof t) this.attrKV(t, e);else if (S(t)) for (var n in t) {
        t.hasOwnProperty(n) && this.attrKV(n, t[n]);
      }return this.dirty(false), this;
    }, setClipPath: function setClipPath(t) {
      var e = this.__zr;e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(false);
    }, removeClipPath: function removeClipPath() {
      var t = this.clipPath;t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(false));
    }, addSelfToZr: function addSelfToZr(t) {
      this.__zr = t;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) {
        t.animation.addAnimator(e[n]);
      }this.clipPath && this.clipPath.addSelfToZr(t);
    }, removeSelfFromZr: function removeSelfFromZr(t) {
      this.__zr = null;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) {
        t.animation.removeAnimator(e[n]);
      }this.clipPath && this.clipPath.removeSelfFromZr(t);
    } }, c(jf, Yf), c(jf, wf), c(jf, rf);var qf = ae,
      Uf = Math.min,
      Zf = Math.max;In.prototype = { constructor: In, union: function union(t) {
      var e = Uf(t.x, this.x),
          n = Uf(t.y, this.y);this.width = Zf(t.x + t.width, this.x + this.width) - e, this.height = Zf(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n;
    }, applyTransform: function () {
      var t = [],
          e = [],
          n = [],
          i = [];return function (r) {
        if (r) {
          t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, qf(t, t, r), qf(e, e, r), qf(n, n, r), qf(i, i, r), this.x = Uf(t[0], e[0], n[0], i[0]), this.y = Uf(t[1], e[1], n[1], i[1]);var a = Zf(t[0], e[0], n[0], i[0]),
              o = Zf(t[1], e[1], n[1], i[1]);this.width = a - this.x, this.height = o - this.y;
        }
      };
    }(), calculateTransform: function calculateTransform(t) {
      var e = this,
          n = t.width / e.width,
          i = t.height / e.height,
          r = Oe();return ze(r, r, [-e.x, -e.y]), Fe(r, r, [n, i]), ze(r, r, [t.x, t.y]), r;
    }, intersect: function intersect(t) {
      if (!t) return false;t instanceof In || (t = In.create(t));var e = this,
          n = e.x,
          i = e.x + e.width,
          r = e.y,
          a = e.y + e.height,
          o = t.x,
          s = t.x + t.width,
          l = t.y,
          u = t.y + t.height;return !(o > i || n > s || l > a || r > u);
    }, contain: function contain(t, e) {
      var n = this;return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
    }, clone: function clone() {
      return new In(this.x, this.y, this.width, this.height);
    }, copy: function copy(t) {
      this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
    }, plain: function plain() {
      return { x: this.x, y: this.y, width: this.width, height: this.height };
    } }, In.create = function (t) {
    return new In(t.x, t.y, t.width, t.height);
  };var Kf = function Kf(t) {
    t = t || {}, jf.call(this, t);for (var e in t) {
      t.hasOwnProperty(e) && (this[e] = t[e]);
    }this._children = [], this.__storage = null, this.__dirty = true;
  };Kf.prototype = { constructor: Kf, isGroup: true, type: "group", silent: false, children: function children() {
      return this._children.slice();
    }, childAt: function childAt(t) {
      return this._children[t];
    }, childOfName: function childOfName(t) {
      for (var e = this._children, n = 0; n < e.length; n++) {
        if (e[n].name === t) return e[n];
      }
    }, childCount: function childCount() {
      return this._children.length;
    }, add: function add(t) {
      return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;
    }, addBefore: function addBefore(t, e) {
      if (t && t !== this && t.parent !== this && e && e.parent === this) {
        var n = this._children,
            i = n.indexOf(e);i >= 0 && (n.splice(i, 0, t), this._doAdd(t));
      }return this;
    }, _doAdd: function _doAdd(t) {
      t.parent && t.parent.remove(t), t.parent = this;var e = this.__storage,
          n = this.__zr;e && e !== t.__storage && (e.addToStorage(t), t instanceof Kf && t.addChildrenToStorage(e)), n && n.refresh();
    }, remove: function remove(t) {
      var e = this.__zr,
          n = this.__storage,
          i = this._children,
          r = u(i, t);return 0 > r ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof Kf && t.delChildrenFromStorage(n)), e && e.refresh(), this);
    }, removeAll: function removeAll() {
      var t,
          e,
          n = this._children,
          i = this.__storage;for (e = 0; e < n.length; e++) {
        t = n[e], i && (i.delFromStorage(t), t instanceof Kf && t.delChildrenFromStorage(i)), t.parent = null;
      }return n.length = 0, this;
    }, eachChild: function eachChild(t, e) {
      for (var n = this._children, i = 0; i < n.length; i++) {
        var r = n[i];t.call(e, r, i);
      }return this;
    }, traverse: function traverse(t, e) {
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];t.call(e, i), "group" === i.type && i.traverse(t, e);
      }return this;
    }, addChildrenToStorage: function addChildrenToStorage(t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];t.addToStorage(n), n instanceof Kf && n.addChildrenToStorage(t);
      }
    }, delChildrenFromStorage: function delChildrenFromStorage(t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];t.delFromStorage(n), n instanceof Kf && n.delChildrenFromStorage(t);
      }
    }, dirty: function dirty() {
      return this.__dirty = true, this.__zr && this.__zr.refresh(), this;
    }, getBoundingRect: function getBoundingRect(t) {
      for (var e = null, n = new In(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
        var o = i[a];if (!o.ignore && !o.invisible) {
          var s = o.getBoundingRect(),
              l = o.getLocalTransform(r);l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s));
        }
      }return e || n;
    } }, h(Kf, jf);var $f = 32,
      Qf = 7,
      Jf = function Jf() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  };Jf.prototype = { constructor: Jf, traverse: function traverse(t, e) {
      for (var n = 0; n < this._roots.length; n++) {
        this._roots[n].traverse(t, e);
      }
    }, getDisplayList: function getDisplayList(t, e) {
      return e = e || false, t && this.updateDisplayList(e), this._displayList;
    }, updateDisplayList: function updateDisplayList(t) {
      this._displayListLen = 0;for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) {
        this._updateAndAddDisplayable(e[i], null, t);
      }n.length = this._displayListLen, Ed.canvasSupported && Bn(n, En);
    }, _updateAndAddDisplayable: function _updateAndAddDisplayable(t, e, n) {
      if (!t.ignore || n) {
        t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();var i = t.clipPath;if (i) {
          e = e ? e.slice() : [];for (var r = i, a = t; r;) {
            r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath;
          }
        }if (t.isGroup) {
          for (var o = t._children, s = 0; s < o.length; s++) {
            var l = o[s];t.__dirty && (l.__dirty = true), this._updateAndAddDisplayable(l, e, n);
          }t.__dirty = false;
        } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;
      }
    }, addRoot: function addRoot(t) {
      t.__storage !== this && (t instanceof Kf && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t));
    }, delRoot: function delRoot(t) {
      if (null == t) {
        for (var e = 0; e < this._roots.length; e++) {
          var n = this._roots[e];n instanceof Kf && n.delChildrenFromStorage(this);
        }return this._roots = [], this._displayList = [], undefined;
      }if (t instanceof Array) for (var e = 0, i = t.length; i > e; e++) {
        this.delRoot(t[e]);
      } else {
        var r = u(this._roots, t);r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof Kf && t.delChildrenFromStorage(this));
      }
    }, addToStorage: function addToStorage(t) {
      return t && (t.__storage = this, t.dirty(false)), this;
    }, delFromStorage: function delFromStorage(t) {
      return t && (t.__storage = null), this;
    }, dispose: function dispose() {
      this._renderList = this._roots = null;
    }, displayableSortFunc: En };var tp = { shadowBlur: 1, shadowOffsetX: 1, shadowOffsetY: 1, textShadowBlur: 1, textShadowOffsetX: 1, textShadowOffsetY: 1, textBoxShadowBlur: 1, textBoxShadowOffsetX: 1, textBoxShadowOffsetY: 1 },
      ep = function ep(t, e, n) {
    return tp.hasOwnProperty(e) ? n *= t.dpr : n;
  },
      np = { NONE: 0, STYLE_BIND: 1, PLAIN_TEXT: 2 },
      ip = 9,
      rp = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
      ap = function ap(t) {
    this.extendFrom(t, false);
  };ap.prototype = { constructor: ap, fill: "#000", stroke: null, opacity: 1, fillOpacity: null, strokeOpacity: null, lineDash: null, lineDashOffset: 0, shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0, lineWidth: 1, strokeNoScale: false, text: null, font: null, textFont: null, fontStyle: null, fontWeight: null, fontSize: null, fontFamily: null, textTag: null, textFill: "#000", textStroke: null, textWidth: null, textHeight: null, textStrokeWidth: 0, textLineHeight: null, textPosition: "inside", textRect: null, textOffset: null, textAlign: null, textVerticalAlign: null, textDistance: 5, textShadowColor: "transparent", textShadowBlur: 0, textShadowOffsetX: 0, textShadowOffsetY: 0, textBoxShadowColor: "transparent", textBoxShadowBlur: 0, textBoxShadowOffsetX: 0, textBoxShadowOffsetY: 0, transformText: false, textRotation: 0, textOrigin: null, textBackgroundColor: null, textBorderColor: null, textBorderWidth: 0, textBorderRadius: 0, textPadding: null, rich: null, truncate: null, blend: null, bind: function bind(t, e, n) {
      var i = this,
          r = n && n.style,
          a = !r || t.__attrCachedBy !== np.STYLE_BIND;t.__attrCachedBy = np.STYLE_BIND;for (var o = 0; o < rp.length; o++) {
        var s = rp[o],
            l = s[0];(a || i[l] !== r[l]) && (t[l] = ep(t, l, i[l] || s[1]));
      }if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
        var u = i.lineWidth;t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
      }
    }, hasFill: function hasFill() {
      var t = this.fill;return null != t && "none" !== t;
    }, hasStroke: function hasStroke() {
      var t = this.stroke;return null != t && "none" !== t && this.lineWidth > 0;
    }, extendFrom: function extendFrom(t, e) {
      if (t) for (var n in t) {
        !t.hasOwnProperty(n) || e !== true && (e === false ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n]);
      }
    }, set: function set(t, e) {
      "string" == typeof t ? this[t] = e : this.extendFrom(t, true);
    }, clone: function clone() {
      var t = new this.constructor();return t.extendFrom(this, true), t;
    }, getGradient: function getGradient(t, e, n) {
      for (var i = "radial" === e.type ? Rn : zn, r = i(t, e, n), a = e.colorStops, o = 0; o < a.length; o++) {
        r.addColorStop(a[o].offset, a[o].color);
      }return r;
    } };for (var op = ap.prototype, sp = 0; sp < rp.length; sp++) {
    var lp = rp[sp];lp[0] in op || (op[lp[0]] = lp[1]);
  }ap.getGradient = op.getGradient;var up = function up(t, e) {
    this.image = t, this.repeat = e, this.type = "pattern";
  };up.prototype.getCanvasPattern = function (t) {
    return t.createPattern(this.image, this.repeat || "repeat");
  };var hp = function hp(t, e, n) {
    var i;n = n || Wf, "string" == typeof t ? i = Nn(t, e, n) : S(t) && (i = t, t = i.id), this.id = t, this.dom = i;var r = i.style;r && (i.onselectstart = Fn, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = false, this.lastFrameAlpha = .7, this.dpr = n;
  };hp.prototype = { constructor: hp, __dirty: true, __used: false, __drawIndex: 0, __startIndex: 0, __endIndex: 0, incremental: false, getElementCount: function getElementCount() {
      return this.__endIndex - this.__startIndex;
    }, initContext: function initContext() {
      this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
    }, createBackBuffer: function createBackBuffer() {
      var t = this.dpr;this.domBack = Nn("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 !== t && this.ctxBack.scale(t, t);
    }, resize: function resize(t, e) {
      var n = this.dpr,
          i = this.dom,
          r = i.style,
          a = this.domBack;r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 !== n && this.ctxBack.scale(n, n));
    }, clear: function clear(t, e) {
      var n = this.dom,
          i = this.ctx,
          r = n.width,
          a = n.height,
          e = e || this.clearColor,
          o = this.motionBlur && !t,
          s = this.lastFrameAlpha,
          l = this.dpr;if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
        var u;e.colorStops ? (u = e.__canvasGradient || ap.getGradient(i, e, { x: 0, y: 0, width: r, height: a }), e.__canvasGradient = u) : e.image && (u = up.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = u || e, i.fillRect(0, 0, r, a), i.restore();
      }if (o) {
        var h = this.domBack;i.save(), i.globalAlpha = s, i.drawImage(h, 0, 0, r, a), i.restore();
      }
    } };var cp = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
    setTimeout(t, 16);
  },
      dp = new Af(50),
      fp = {},
      pp = 0,
      gp = 5e3,
      vp = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
      mp = "12px sans-serif",
      yp = {};yp.measureText = function (t, e) {
    var n = l();return n.font = e || mp, n.measureText(t);
  };var _p = mp,
      xp = { left: 1, right: 1, center: 1 },
      wp = { top: 1, bottom: 1, middle: 1 },
      bp = [["textShadowBlur", "shadowBlur", 0], ["textShadowOffsetX", "shadowOffsetX", 0], ["textShadowOffsetY", "shadowOffsetY", 0], ["textShadowColor", "shadowColor", "transparent"]],
      Sp = {},
      Mp = {},
      Tp = new In(),
      Ip = function Ip() {};Ip.prototype = { constructor: Ip, drawRectText: function drawRectText(t, e) {
      var n = this.style;e = n.textRect || e, this.__dirty && li(n, true);var i = n.text;if (null != i && (i += ""), Ti(i, n)) {
        t.save();var r = this.transform;n.transformText ? this.setTransform(t) : r && (Tp.copy(e), Tp.applyTransform(r), e = Tp), hi(this, t, i, n, e, ip), t.restore();
      }
    } }, Ii.prototype = { constructor: Ii, type: "displayable", __dirty: true, invisible: false, z: 0, z2: 0, zlevel: 0, draggable: false, dragging: false, silent: false, culling: false, cursor: "pointer", rectHover: false, progressive: false, incremental: false, globalScaleRatio: 1, beforeBrush: function beforeBrush() {}, afterBrush: function afterBrush() {}, brush: function brush() {}, getBoundingRect: function getBoundingRect() {}, contain: function contain(t, e) {
      return this.rectContain(t, e);
    }, traverse: function traverse(t, e) {
      t.call(e, this);
    }, rectContain: function rectContain(t, e) {
      var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect();return i.contain(n[0], n[1]);
    }, dirty: function dirty() {
      this.__dirty = this.__dirtyText = true, this._rect = null, this.__zr && this.__zr.refresh();
    }, animateStyle: function animateStyle(t) {
      return this.animate("style", t);
    }, attrKV: function attrKV(t, e) {
      "style" !== t ? jf.prototype.attrKV.call(this, t, e) : this.style.set(e);
    }, setStyle: function setStyle(t, e) {
      return this.style.set(t, e), this.dirty(false), this;
    }, useStyle: function useStyle(t) {
      return this.style = new ap(t, this), this.dirty(false), this;
    }, calculateTextPosition: null }, h(Ii, jf), c(Ii, Ip), Ci.prototype = { constructor: Ci, type: "image", brush: function brush(t, e) {
      var n = this.style,
          i = n.image;n.bind(t, this, e);var r = this._image = Vn(i, this._image, this, this.onload);if (r && Gn(r)) {
        var a = n.x || 0,
            o = n.y || 0,
            s = n.width,
            l = n.height,
            u = r.width / r.height;if (null == s && null != l ? s = l * u : null == l && null != s ? l = s / u : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
          var h = n.sx || 0,
              c = n.sy || 0;t.drawImage(r, h, c, n.sWidth, n.sHeight, a, o, s, l);
        } else if (n.sx && n.sy) {
          var h = n.sx,
              c = n.sy,
              d = s - h,
              f = l - c;t.drawImage(r, h, c, d, f, a, o, s, l);
        } else t.drawImage(r, a, o, s, l);null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
      }
    }, getBoundingRect: function getBoundingRect() {
      var t = this.style;return this._rect || (this._rect = new In(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect;
    } }, h(Ci, Ii);var Cp = 1e5,
      kp = 314159,
      Dp = .01,
      Ap = .001,
      Pp = new In(0, 0, 0, 0),
      Op = new In(0, 0, 0, 0),
      Lp = function Lp(t, e, n) {
    this.type = "canvas";var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || Wf, this._singleCanvas = i, this.root = t;var r = t.style;r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;var a = this._zlevelList = [],
        s = this._layers = {};if (this._layerConfig = {}, this._needsManuallyCompositing = false, i) {
      var l = t.width,
          u = t.height;null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = u * this.dpr, this._width = l, this._height = u;var h = new hp(t, this, this.dpr);h.__builtin__ = true, h.initContext(), s[kp] = h, h.zlevel = kp, a.push(kp), this._domRoot = t;
    } else {
      this._width = this._getSize(0), this._height = this._getSize(1);var c = this._domRoot = Li(this._width, this._height);t.appendChild(c);
    }this._hoverlayer = null, this._hoverElements = [];
  };Lp.prototype = { constructor: Lp, getType: function getType() {
      return "canvas";
    }, isSingleCanvas: function isSingleCanvas() {
      return this._singleCanvas;
    }, getViewportRoot: function getViewportRoot() {
      return this._domRoot;
    }, getViewportRootOffset: function getViewportRootOffset() {
      var t = this.getViewportRoot();return t ? { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 } : undefined;
    }, refresh: function refresh(t) {
      var e = this.storage.getDisplayList(true),
          n = this._zlevelList;this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);for (var i = 0; i < n.length; i++) {
        var r = n[i],
            a = this._layers[r];if (!a.__builtin__ && a.refresh) {
          var o = 0 === i ? this._backgroundColor : null;a.refresh(o);
        }
      }return this.refreshHover(), this;
    }, addHover: function addHover(t, e) {
      if (!t.__hoverMir) {
        var n = new t.constructor({ style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent });return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), n;
      }
    }, removeHover: function removeHover(t) {
      var e = t.__hoverMir,
          n = this._hoverElements,
          i = u(n, e);i >= 0 && n.splice(i, 1), t.__hoverMir = null;
    }, clearHover: function clearHover() {
      for (var t = this._hoverElements, e = 0; e < t.length; e++) {
        var n = t[e].__from;n && (n.__hoverMir = null);
      }t.length = 0;
    }, refreshHover: function refreshHover() {
      var t = this._hoverElements,
          e = t.length,
          n = this._hoverlayer;if (n && n.clear(), e) {
        Bn(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(Cp));var i = {};n.ctx.save();for (var r = 0; e > r;) {
          var a = t[r],
              o = a.__from;o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, true, i))) : (t.splice(r, 1), o.__hoverMir = null, e--);
        }n.ctx.restore();
      }
    }, getHoverLayer: function getHoverLayer() {
      return this.getLayer(Cp);
    }, _paintList: function _paintList(t, e, n) {
      if (this._redrawId === n) {
        e = e || false, this._updateLayerStatus(t);var i = this._doPaintList(t, e);if (this._needsManuallyCompositing && this._compositeManually(), !i) {
          var r = this;cp(function () {
            r._paintList(t, e, n);
          });
        }
      }
    }, _compositeManually: function _compositeManually() {
      var t = this.getLayer(kp).ctx,
          e = this._domRoot.width,
          n = this._domRoot.height;t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {
        i.virtual && t.drawImage(i.dom, 0, 0, e, n);
      });
    }, _doPaintList: function _doPaintList(t, e) {
      for (var n = [], i = 0; i < this._zlevelList.length; i++) {
        var r = this._zlevelList[i],
            a = this._layers[r];a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a);
      }for (var o = true, s = 0; s < n.length; s++) {
        var a = n[s],
            l = a.ctx,
            u = {};l.save();var h = e ? a.__startIndex : a.__drawIndex,
            c = !e && a.incremental && Date.now,
            d = c && Date.now(),
            p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;if (a.__startIndex === a.__endIndex) a.clear(false, p);else if (h === a.__startIndex) {
          var g = t[h];g.incremental && g.notClear && !e || a.clear(false, p);
        }-1 === h && (console.error("For some unknown reason. drawIndex is -1"), h = a.__startIndex);for (var v = h; v < a.__endIndex; v++) {
          var m = t[v];if (this._doPaintEl(m, a, e, u), m.__dirty = m.__dirtyText = false, c) {
            var y = Date.now() - d;if (y > 15) break;
          }
        }a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = false), u.prevElClipPaths && l.restore(), l.restore();
      }return Ed.wxa && f(this._layers, function (t) {
        t && t.ctx && t.ctx.draw && t.ctx.draw();
      }), o;
    }, _doPaintEl: function _doPaintEl(t, e, n, i) {
      var r = e.ctx,
          a = t.transform;if (!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && Ai(t, this._width, this._height))) {
        var o = t.__clipPaths,
            s = i.prevElClipPaths;(!s || Pi(o, s)) && (s && (r.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), Oi(o, r), i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r);
      }
    }, getLayer: function getLayer(t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = kp);var n = this._layers[t];return n || (n = new hp("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = true, this._layerConfig[t] ? r(n, this._layerConfig[t], true) : this._layerConfig[t - Dp] && r(n, this._layerConfig[t - Dp], true), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
    }, insertLayer: function insertLayer(t, e) {
      var n = this._layers,
          i = this._zlevelList,
          r = i.length,
          a = null,
          o = -1,
          s = this._domRoot;if (n[t]) return undefined;if (!Di(e)) return undefined;if (r > 0 && t > i[0]) {
        for (o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++) {}a = n[i[o]];
      }if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual) if (a) {
        var l = a.dom;l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom);
      } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
    }, eachLayer: function eachLayer(t, e) {
      var n,
          i,
          r = this._zlevelList;for (i = 0; i < r.length; i++) {
        n = r[i], t.call(e, this._layers[n], n);
      }
    }, eachBuiltinLayer: function eachBuiltinLayer(t, e) {
      var n,
          i,
          r,
          a = this._zlevelList;for (r = 0; r < a.length; r++) {
        i = a[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i);
      }
    }, eachOtherLayer: function eachOtherLayer(t, e) {
      var n,
          i,
          r,
          a = this._zlevelList;for (r = 0; r < a.length; r++) {
        i = a[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i);
      }
    }, getLayers: function getLayers() {
      return this._layers;
    }, _updateLayerStatus: function _updateLayerStatus(t) {
      function e(t) {
        a && (a.__endIndex !== t && (a.__dirty = true), a.__endIndex = t);
      }if (this.eachBuiltinLayer(function (t) {
        t.__dirty = t.__used = false;
      }), this._singleCanvas) for (var n = 1; n < t.length; n++) {
        var i = t[n];if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
          this._needsManuallyCompositing = true;break;
        }
      }for (var r, a = null, o = 0, n = 0; n < t.length; n++) {
        var s,
            i = t[n],
            l = i.zlevel;r !== l && (r = l, o = 0), i.incremental ? (s = this.getLayer(l + Ap, this._needsManuallyCompositing), s.incremental = true, o = 1) : s = this.getLayer(l + (o > 0 ? Dp : 0), this._needsManuallyCompositing), s.__builtin__ || Xf("ZLevel " + l + " has been used by unkown layer " + s.id), s !== a && (s.__used = true, s.__startIndex !== n && (s.__dirty = true), s.__startIndex = n, s.__drawIndex = s.incremental ? -1 : n, e(n), a = s), i.__dirty && (s.__dirty = true, s.incremental && s.__drawIndex < 0 && (s.__drawIndex = n));
      }e(n), this.eachBuiltinLayer(function (t) {
        !t.__used && t.getElementCount() > 0 && (t.__dirty = true, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
      });
    }, clear: function clear() {
      return this.eachBuiltinLayer(this._clearLayer), this;
    }, _clearLayer: function _clearLayer(t) {
      t.clear();
    }, setBackgroundColor: function setBackgroundColor(t) {
      this._backgroundColor = t;
    }, configLayer: function configLayer(t, e) {
      if (e) {
        var n = this._layerConfig;n[t] ? r(n[t], e, true) : n[t] = e;for (var i = 0; i < this._zlevelList.length; i++) {
          var a = this._zlevelList[i];if (a === t || a === t + Dp) {
            var o = this._layers[a];r(o, n[t], true);
          }
        }
      }
    }, delLayer: function delLayer(t) {
      var e = this._layers,
          n = this._zlevelList,
          i = e[t];i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(u(n, t), 1));
    }, resize: function resize(t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot;n.style.display = "none";var i = this._opts;if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width !== t || e !== this._height) {
          n.style.width = t + "px", n.style.height = e + "px";for (var r in this._layers) {
            this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
          }f(this._progressiveLayers, function (n) {
            n.resize(t, e);
          }), this.refresh(true);
        }this._width = t, this._height = e;
      } else {
        if (null == t || null == e) return;this._width = t, this._height = e, this.getLayer(kp).resize(t, e);
      }return this;
    }, clearLayer: function clearLayer(t) {
      var e = this._layers[t];e && e.clear();
    }, dispose: function dispose() {
      this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
    }, getRenderedCanvas: function getRenderedCanvas(t) {
      if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[kp].dom;var e = new hp("image", this, t.pixelRatio || this.dpr);if (e.initContext(), e.clear(false, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
        this.refresh();var n = e.dom.width,
            i = e.dom.height,
            r = e.ctx;this.eachLayer(function (t) {
          t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore());
        });
      } else for (var a = {}, o = this.storage.getDisplayList(true), s = 0; s < o.length; s++) {
        var l = o[s];this._doPaintEl(l, e, true, a);
      }return e.dom;
    }, getWidth: function getWidth() {
      return this._width;
    }, getHeight: function getHeight() {
      return this._height;
    }, _getSize: function _getSize(t) {
      var e = this._opts,
          n = ["width", "height"][t],
          i = ["clientWidth", "clientHeight"][t],
          r = ["paddingLeft", "paddingTop"][t],
          a = ["paddingRight", "paddingBottom"][t];if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);var o = this.root,
          s = document.defaultView.getComputedStyle(o);return (o[i] || ki(s[n]) || ki(o.style[n])) - (ki(s[r]) || 0) - (ki(s[a]) || 0) | 0;
    }, pathToImage: function pathToImage(t, e) {
      e = e || this.dpr;var n = document.createElement("canvas"),
          i = n.getContext("2d"),
          r = t.getBoundingRect(),
          a = t.style,
          o = a.shadowBlur * e,
          s = a.shadowOffsetX * e,
          l = a.shadowOffsetY * e,
          u = a.hasStroke() ? a.lineWidth : 0,
          h = Math.max(u / 2, -s + o),
          c = Math.max(u / 2, s + o),
          d = Math.max(u / 2, -l + o),
          f = Math.max(u / 2, l + o),
          p = r.width + h + c,
          g = r.height + d + f;n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;var v = { position: t.position, rotation: t.rotation, scale: t.scale };t.position = [h - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);var m = Ci,
          y = new m({ style: { x: 0, y: 0, image: n } });return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y;
    } };var Bp = function Bp(t) {
    t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {}, this._clips = [], this._running = false, this._time, this._pausedTime, this._pauseStart, this._paused = false, rf.call(this);
  };Bp.prototype = { constructor: Bp, addClip: function addClip(t) {
      this._clips.push(t);
    }, addAnimator: function addAnimator(t) {
      t.animation = this;for (var e = t.getClips(), n = 0; n < e.length; n++) {
        this.addClip(e[n]);
      }
    }, removeClip: function removeClip(t) {
      var e = u(this._clips, t);e >= 0 && this._clips.splice(e, 1);
    }, removeAnimator: function removeAnimator(t) {
      for (var e = t.getClips(), n = 0; n < e.length; n++) {
        this.removeClip(e[n]);
      }t.animation = null;
    }, _update: function _update() {
      for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; i > o; o++) {
        var s = n[o],
            l = s.step(t, e);l && (r.push(l), a.push(s));
      }for (var o = 0; i > o;) {
        n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
      }i = r.length;for (var o = 0; i > o; o++) {
        a[o].fire(r[o]);
      }this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
    }, _startLoop: function _startLoop() {
      function t() {
        e._running && (cp(t), !e._paused && e._update());
      }var e = this;this._running = true, cp(t);
    }, start: function start() {
      this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();
    }, stop: function stop() {
      this._running = false;
    }, pause: function pause() {
      this._paused || (this._pauseStart = new Date().getTime(), this._paused = true);
    }, resume: function resume() {
      this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = false);
    }, clear: function clear() {
      this._clips = [];
    }, isFinished: function isFinished() {
      return !this._clips.length;
    }, animate: function animate(t, e) {
      e = e || {};var n = new Nf(t, e.loop, e.getter, e.setter);return this.addAnimator(n), n;
    } }, c(Bp, rf);var Ep = 300,
      zp = Ed.domSupported,
      Rp = function () {
    var t = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        e = ["touchstart", "touchend", "touchmove"],
        n = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 },
        i = p(t, function (t) {
      var e = t.replace("mouse", "pointer");return n.hasOwnProperty(e) ? e : t;
    });return { mouse: t, touch: e, pointer: i };
  }(),
      Fp = { mouse: ["mousemove", "mouseup"], pointer: ["pointermove", "pointerup"] },
      Np = Hi.prototype;Np.stopPropagation = Np.stopImmediatePropagation = Np.preventDefault = H;var Hp = { mousedown: function mousedown(t) {
      t = be(this.dom, t), this._mayPointerCapture = [t.zrX, t.zrY], this.trigger("mousedown", t);
    }, mousemove: function mousemove(t) {
      t = be(this.dom, t);var e = this._mayPointerCapture;!e || t.zrX === e[0] && t.zrY === e[1] || Yi(this, true), this.trigger("mousemove", t);
    }, mouseup: function mouseup(t) {
      t = be(this.dom, t), Yi(this, false), this.trigger("mouseup", t);
    }, mouseout: function mouseout(t) {
      t = be(this.dom, t), this._pointerCapturing && (t.zrEventControl = "no_globalout");var e = t.toElement || t.relatedTarget;t.zrIsToLocalDOM = Ni(this, e), this.trigger("mouseout", t);
    }, touchstart: function touchstart(t) {
      t = be(this.dom, t), Ri(t), this._lastTouchMoment = new Date(), this.handler.processGesture(t, "start"), Hp.mousemove.call(this, t), Hp.mousedown.call(this, t);
    }, touchmove: function touchmove(t) {
      t = be(this.dom, t), Ri(t), this.handler.processGesture(t, "change"), Hp.mousemove.call(this, t);
    }, touchend: function touchend(t) {
      t = be(this.dom, t), Ri(t), this.handler.processGesture(t, "end"), Hp.mouseup.call(this, t), +new Date() - this._lastTouchMoment < Ep && Hp.click.call(this, t);
    }, pointerdown: function pointerdown(t) {
      Hp.mousedown.call(this, t);
    }, pointermove: function pointermove(t) {
      Ei(t) || Hp.mousemove.call(this, t);
    }, pointerup: function pointerup(t) {
      Hp.mouseup.call(this, t);
    }, pointerout: function pointerout(t) {
      Ei(t) || Hp.mouseout.call(this, t);
    } };f(["click", "mousewheel", "dblclick", "contextmenu"], function (t) {
    Hp[t] = function (e) {
      e = be(this.dom, e), this.trigger(t, e);
    };
  });var Vp = { pointermove: function pointermove(t) {
      Ei(t) || Vp.mousemove.call(this, t);
    }, pointerup: function pointerup(t) {
      Vp.mouseup.call(this, t);
    }, mousemove: function mousemove(t) {
      this.trigger("mousemove", t);
    }, mouseup: function mouseup(t) {
      var e = this._pointerCapturing;Yi(this, false), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", this.trigger("mouseout", t));
    } },
      Wp = qi.prototype;Wp.dispose = function () {
    Xi(this._localHandlerScope), zp && Xi(this._globalHandlerScope);
  }, Wp.setCursor = function (t) {
    this.dom.style && (this.dom.style.cursor = t || "default");
  }, c(qi, rf);var Gp = !Ed.canvasSupported,
      Xp = { canvas: Lp },
      Yp = {},
      jp = "4.3.1",
      qp = function qp(t, e, n) {
    n = n || {}, this.dom = e, this.id = t;var i = this,
        r = new Jf(),
        a = n.renderer;if (Gp) {
      if (!Xp.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");a = "vml";
    } else a && Xp[a] || (a = "canvas");var o = new Xp[a](e, r, n, t);this.storage = r, this.painter = o;var s = Ed.node || Ed.worker ? null : new qi(o.getViewportRoot(), o.root);this.handler = new vf(r, o, s, o.root), this.animation = new Bp({ stage: { update: y(this.flush, this) } }), this.animation.start(), this._needsRefresh;var l = r.delFromStorage,
        u = r.addToStorage;r.delFromStorage = function (t) {
      l.call(r, t), t && t.removeSelfFromZr(i);
    }, r.addToStorage = function (t) {
      u.call(r, t), t.addSelfToZr(i);
    };
  };qp.prototype = { constructor: qp, getId: function getId() {
      return this.id;
    }, add: function add(t) {
      this.storage.addRoot(t), this._needsRefresh = true;
    }, remove: function remove(t) {
      this.storage.delRoot(t), this._needsRefresh = true;
    }, configLayer: function configLayer(t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = true;
    }, setBackgroundColor: function setBackgroundColor(t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = true;
    }, refreshImmediately: function refreshImmediately() {
      this._needsRefresh = this._needsRefreshHover = false, this.painter.refresh(), this._needsRefresh = this._needsRefreshHover = false;
    }, refresh: function refresh() {
      this._needsRefresh = true;
    }, flush: function flush() {
      var t;this._needsRefresh && (t = true, this.refreshImmediately()), this._needsRefreshHover && (t = true, this.refreshHoverImmediately()), t && this.trigger("rendered");
    }, addHover: function addHover(t, e) {
      if (this.painter.addHover) {
        var n = this.painter.addHover(t, e);return this.refreshHover(), n;
      }
    }, removeHover: function removeHover(t) {
      this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
    }, clearHover: function clearHover() {
      this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
    }, refreshHover: function refreshHover() {
      this._needsRefreshHover = true;
    }, refreshHoverImmediately: function refreshHoverImmediately() {
      this._needsRefreshHover = false, this.painter.refreshHover && this.painter.refreshHover();
    }, resize: function resize(t) {
      t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
    }, clearAnimation: function clearAnimation() {
      this.animation.clear();
    }, getWidth: function getWidth() {
      return this.painter.getWidth();
    }, getHeight: function getHeight() {
      return this.painter.getHeight();
    }, pathToImage: function pathToImage(t, e) {
      return this.painter.pathToImage(t, e);
    }, setCursorStyle: function setCursorStyle(t) {
      this.handler.setCursorStyle(t);
    }, findHover: function findHover(t, e) {
      return this.handler.findHover(t, e);
    }, on: function on(t, e, n) {
      this.handler.on(t, e, n);
    }, off: function off(t, e) {
      this.handler.off(t, e);
    }, trigger: function trigger(t, e) {
      this.handler.trigger(t, e);
    }, clear: function clear() {
      this.storage.delRoot(), this.painter.clear();
    }, dispose: function dispose() {
      this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Qi(this.id);
    } };var Up = (Object.freeze || Object)({ version: jp, init: Ui, dispose: Zi, getInstance: Ki, registerPainter: $i }),
      Zp = f,
      Kp = S,
      $p = x,
      Qp = "series\x00",
      Jp = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
      tg = 0,
      eg = ".",
      ng = "___EC__COMPONENT__CONTAINER___",
      ig = 0,
      rg = function rg(t) {
    for (var e = 0; e < t.length; e++) {
      t[e][1] || (t[e][1] = t[e][0]);
    }return function (e, n, i) {
      for (var r = {}, a = 0; a < t.length; a++) {
        var o = t[a][1];if (!(n && u(n, o) >= 0 || i && u(i, o) < 0)) {
          var s = e.getShallow(o);null != s && (r[t[a][0]] = s);
        }
      }return r;
    };
  },
      ag = rg([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
      og = { getLineStyle: function getLineStyle(t) {
      var e = ag(this, t);return e.lineDash = this.getLineDash(e.lineWidth), e;
    }, getLineDash: function getLineDash(t) {
      null == t && (t = 1);var e = this.get("type"),
          n = Math.max(t, 2),
          i = 4 * t;return "solid" === e || null == e ? false : "dashed" === e ? [i, i] : [n, n];
    } },
      sg = rg([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
      lg = { getAreaStyle: function getAreaStyle(t, e) {
      return sg(this, t, e);
    } },
      ug = Math.pow,
      hg = Math.sqrt,
      cg = 1e-8,
      dg = 1e-4,
      fg = hg(3),
      pg = 0.3333333333333333,
      gg = V(),
      vg = V(),
      mg = V(),
      yg = Math.min,
      _g = Math.max,
      xg = Math.sin,
      wg = Math.cos,
      bg = 2 * Math.PI,
      Sg = V(),
      Mg = V(),
      Tg = V(),
      Ig = [],
      Cg = [],
      kg = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
      Dg = [],
      Ag = [],
      Pg = [],
      Og = [],
      Lg = Math.min,
      Bg = Math.max,
      Eg = Math.cos,
      zg = Math.sin,
      Rg = Math.sqrt,
      Fg = Math.abs,
      Ng = "undefined" != typeof Float32Array,
      Hg = function Hg(t) {
    this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;
  };Hg.prototype = { constructor: Hg, _xi: 0, _yi: 0, _x0: 0, _y0: 0, _ux: 0, _uy: 0, _len: 0, _lineDash: null, _dashOffset: 0, _dashIdx: 0, _dashSum: 0, setScale: function setScale(t, e, n) {
      n = n || 0, this._ux = Fg(n / Wf / t) || 0, this._uy = Fg(n / Wf / e) || 0;
    }, getContext: function getContext() {
      return this._ctx;
    }, beginPath: function beginPath(t) {
      return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;
    }, moveTo: function moveTo(t, e) {
      return this.addData(kg.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
    }, lineTo: function lineTo(t, e) {
      var n = Fg(t - this._xi) > this._ux || Fg(e - this._yi) > this._uy || this._len < 5;return this.addData(kg.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this;
    }, bezierCurveTo: function bezierCurveTo(t, e, n, i, r, a) {
      return this.addData(kg.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this;
    }, quadraticCurveTo: function quadraticCurveTo(t, e, n, i) {
      return this.addData(kg.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this;
    }, arc: function arc(t, e, n, i, r, a) {
      return this.addData(kg.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = Eg(r) * n + t, this._yi = zg(r) * n + e, this;
    }, arcTo: function arcTo(t, e, n, i, r) {
      return this._ctx && this._ctx.arcTo(t, e, n, i, r), this;
    }, rect: function rect(t, e, n, i) {
      return this._ctx && this._ctx.rect(t, e, n, i), this.addData(kg.R, t, e, n, i), this;
    }, closePath: function closePath() {
      this.addData(kg.Z);var t = this._ctx,
          e = this._x0,
          n = this._y0;return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this;
    }, fill: function fill(t) {
      t && t.fill(), this.toStatic();
    }, stroke: function stroke(t) {
      t && t.stroke(), this.toStatic();
    }, setLineDash: function setLineDash(t) {
      if (t instanceof Array) {
        this._lineDash = t, this._dashIdx = 0;for (var e = 0, n = 0; n < t.length; n++) {
          e += t[n];
        }this._dashSum = e;
      }return this;
    }, setLineDashOffset: function setLineDashOffset(t) {
      return this._dashOffset = t, this;
    }, len: function len() {
      return this._len;
    }, setData: function setData(t) {
      var e = t.length;this.data && this.data.length === e || !Ng || (this.data = new Float32Array(e));for (var n = 0; e > n; n++) {
        this.data[n] = t[n];
      }this._len = e;
    }, appendPath: function appendPath(t) {
      t instanceof Array || (t = [t]);for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) {
        n += t[r].len();
      }Ng && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));for (var r = 0; e > r; r++) {
        for (var a = t[r].data, o = 0; o < a.length; o++) {
          this.data[i++] = a[o];
        }
      }this._len = i;
    }, addData: function addData(t) {
      if (this._saveData) {
        var e = this.data;this._len + arguments.length > e.length && (this._expandData(), e = this.data);for (var n = 0; n < arguments.length; n++) {
          e[this._len++] = arguments[n];
        }this._prevCmd = t;
      }
    }, _expandData: function _expandData() {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) {
          t[e] = this.data[e];
        }this.data = t;
      }
    }, _needsDash: function _needsDash() {
      return this._lineDash;
    }, _dashedLineTo: function _dashedLineTo(t, e) {
      var n,
          i,
          r = this._dashSum,
          a = this._dashOffset,
          o = this._lineDash,
          s = this._ctx,
          l = this._xi,
          u = this._yi,
          h = t - l,
          c = e - u,
          d = Rg(h * h + c * c),
          f = l,
          p = u,
          g = o.length;for (h /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * h, p -= a * c; h > 0 && t >= f || 0 > h && f >= t || 0 === h && (c > 0 && e >= p || 0 > c && p >= e);) {
        i = this._dashIdx, n = o[i], f += h * n, p += c * n, this._dashIdx = (i + 1) % g, h > 0 && l > f || 0 > h && f > l || c > 0 && u > p || 0 > c && p > u || s[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? Lg(f, t) : Bg(f, t), c >= 0 ? Lg(p, e) : Bg(p, e));
      }h = f - t, c = p - e, this._dashOffset = -Rg(h * h + c * c);
    }, _dashedBezierTo: function _dashedBezierTo(t, e, n, i, r, a) {
      var o,
          s,
          l,
          u,
          h,
          c = this._dashSum,
          d = this._dashOffset,
          f = this._lineDash,
          p = this._ctx,
          g = this._xi,
          v = this._yi,
          m = Sr,
          y = 0,
          _ = this._dashIdx,
          x = f.length,
          w = 0;for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) {
        s = m(g, t, n, r, o + .1) - m(g, t, n, r, o), l = m(v, e, i, a, o + .1) - m(v, e, i, a, o), y += Rg(s * s + l * l);
      }for (; x > _ && (w += f[_], !(w > d)); _++) {}for (o = (w - d) / y; 1 >= o;) {
        u = m(g, t, n, r, o), h = m(v, e, i, a, o), _ % 2 ? p.moveTo(u, h) : p.lineTo(u, h), o += f[_] / y, _ = (_ + 1) % x;
      }_ % 2 !== 0 && p.lineTo(r, a), s = r - u, l = a - h, this._dashOffset = -Rg(s * s + l * l);
    }, _dashedQuadraticTo: function _dashedQuadraticTo(t, e, n, i) {
      var r = n,
          a = i;n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a);
    }, toStatic: function toStatic() {
      var t = this.data;t instanceof Array && (t.length = this._len, Ng && (this.data = new Float32Array(t)));
    }, getBoundingRect: function getBoundingRect() {
      Dg[0] = Dg[1] = Pg[0] = Pg[1] = Number.MAX_VALUE, Ag[0] = Ag[1] = Og[0] = Og[1] = -Number.MAX_VALUE;for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {
        var o = t[a++];switch (1 === a && (e = t[a], n = t[a + 1], i = e, r = n), o) {case kg.M:
            i = t[a++], r = t[a++], e = i, n = r, Pg[0] = i, Pg[1] = r, Og[0] = i, Og[1] = r;break;case kg.L:
            zr(e, n, t[a], t[a + 1], Pg, Og), e = t[a++], n = t[a++];break;case kg.C:
            Rr(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], Pg, Og), e = t[a++], n = t[a++];break;case kg.Q:
            Fr(e, n, t[a++], t[a++], t[a], t[a + 1], Pg, Og), e = t[a++], n = t[a++];break;case kg.A:
            var s = t[a++],
                l = t[a++],
                u = t[a++],
                h = t[a++],
                c = t[a++],
                d = t[a++] + c;a += 1;var f = 1 - t[a++];1 === a && (i = Eg(c) * u + s, r = zg(c) * h + l), Nr(s, l, u, h, c, d, f, Pg, Og), e = Eg(d) * u + s, n = zg(d) * h + l;break;case kg.R:
            i = e = t[a++], r = n = t[a++];var p = t[a++],
                g = t[a++];zr(i, r, i + p, r + g, Pg, Og);break;case kg.Z:
            e = i, n = r;}oe(Dg, Dg, Pg), se(Ag, Ag, Og);
      }return 0 === a && (Dg[0] = Dg[1] = Ag[0] = Ag[1] = 0), new In(Dg[0], Dg[1], Ag[0] - Dg[0], Ag[1] - Dg[1]);
    }, rebuildPath: function rebuildPath(t) {
      for (var e, n, i, r, a, o, s = this.data, l = this._ux, u = this._uy, h = this._len, c = 0; h > c;) {
        var d = s[c++];switch (1 === c && (i = s[c], r = s[c + 1], e = i, n = r), d) {case kg.M:
            e = i = s[c++], n = r = s[c++], t.moveTo(i, r);break;case kg.L:
            a = s[c++], o = s[c++], (Fg(a - i) > l || Fg(o - r) > u || c === h - 1) && (t.lineTo(a, o), i = a, r = o);break;case kg.C:
            t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case kg.Q:
            t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case kg.A:
            var f = s[c++],
                p = s[c++],
                g = s[c++],
                v = s[c++],
                m = s[c++],
                y = s[c++],
                _ = s[c++],
                x = s[c++],
                w = g > v ? g : v,
                b = g > v ? 1 : g / v,
                S = g > v ? v / g : 1,
                M = Math.abs(g - v) > .001,
                T = m + y;M ? (t.translate(f, p), t.rotate(_), t.scale(b, S), t.arc(0, 0, w, m, T, 1 - x), t.scale(1 / b, 1 / S), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, m, T, 1 - x), 1 === c && (e = Eg(m) * g + f, n = zg(m) * v + p), i = Eg(T) * g + f, r = zg(T) * v + p;break;case kg.R:
            e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);break;case kg.Z:
            t.closePath(), i = e, r = n;}
      }
    } }, Hg.CMD = kg;var Vg = 2 * Math.PI,
      Wg = 2 * Math.PI,
      Gg = Hg.CMD,
      Xg = 2 * Math.PI,
      Yg = 1e-4,
      jg = [-1, -1, -1],
      qg = [-1, -1],
      Ug = up.prototype.getCanvasPattern,
      Zg = Math.abs,
      Kg = new Hg(true);ta.prototype = { constructor: ta, type: "path", __dirtyPath: true, strokeContainThreshold: 5, segmentIgnoreThreshold: 0, subPixelOptimize: false, brush: function brush(t, e) {
      var n = this.style,
          i = this.path || Kg,
          r = n.hasStroke(),
          a = n.hasFill(),
          o = n.fill,
          s = n.stroke,
          l = a && !!o.colorStops,
          u = r && !!s.colorStops,
          h = a && !!o.image,
          c = r && !!s.image;
      if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
        var d;l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, d)), u && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d));
      }l ? t.fillStyle = this._fillGradient : h && (t.fillStyle = Ug.call(o, t)), u ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Ug.call(s, t));var f = n.lineDash,
          p = n.lineDashOffset,
          g = !!t.setLineDash,
          v = this.getGlobalScale();if (i.setScale(v[0], v[1], this.segmentIgnoreThreshold), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, false), this.path && (this.__dirtyPath = false)) : (t.beginPath(), this.path.rebuildPath(t)), a) if (null != n.fillOpacity) {
        var m = t.globalAlpha;t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = m;
      } else i.fill(t);if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != n.strokeOpacity) {
        var m = t.globalAlpha;t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = m;
      } else i.stroke(t);f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
    }, buildPath: function buildPath() {}, createPathProxy: function createPathProxy() {
      this.path = new Hg();
    }, getBoundingRect: function getBoundingRect() {
      var t = this._rect,
          e = this.style,
          n = !t;if (n) {
        var i = this.path;i || (i = this.path = new Hg()), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, false)), t = i.getBoundingRect();
      }if (this._rect = t, e.hasStroke()) {
        var r = this._rectWithStroke || (this._rectWithStroke = t.clone());if (this.__dirty || n) {
          r.copy(t);var a = e.lineWidth,
              o = e.strokeNoScale ? this.getLineScale() : 1;e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2);
        }return r;
      }return t;
    }, contain: function contain(t, e) {
      var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect(),
          r = this.style;if (t = n[0], e = n[1], i.contain(t, e)) {
        var a = this.path.data;if (r.hasStroke()) {
          var o = r.lineWidth,
              s = r.strokeNoScale ? this.getLineScale() : 1;if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Jr(a, o / s, t, e))) return true;
        }if (r.hasFill()) return Qr(a, t, e);
      }return false;
    }, dirty: function dirty(t) {
      null == t && (t = true), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = true, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
    }, animateShape: function animateShape(t) {
      return this.animate("shape", t);
    }, attrKV: function attrKV(t, e) {
      "shape" === t ? (this.setShape(e), this.__dirtyPath = true, this._rect = null) : Ii.prototype.attrKV.call(this, t, e);
    }, setShape: function setShape(t, e) {
      var n = this.shape;if (n) {
        if (S(t)) for (var i in t) {
          t.hasOwnProperty(i) && (n[i] = t[i]);
        } else n[t] = e;this.dirty(true);
      }return this;
    }, getLineScale: function getLineScale() {
      var t = this.transform;return t && Zg(t[0] - 1) > 1e-10 && Zg(t[3] - 1) > 1e-10 ? Math.sqrt(Zg(t[0] * t[3] - t[2] * t[1])) : 1;
    } }, ta.extend = function (t) {
    var e = function e(_e2) {
      ta.call(this, _e2), t.style && this.style.extendFrom(t.style, false);var n = t.shape;if (n) {
        this.shape = this.shape || {};var i = this.shape;for (var r in n) {
          !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r]);
        }
      }t.init && t.init.call(this, _e2);
    };h(e, ta);for (var n in t) {
      "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
    }return e;
  }, h(ta, Ii);var $g = Hg.CMD,
      Qg = [[], [], []],
      Jg = Math.sqrt,
      tv = Math.atan2,
      ev = function ev(t, e) {
    var n,
        i,
        r,
        a,
        o,
        s,
        l = t.data,
        u = $g.M,
        h = $g.C,
        c = $g.L,
        d = $g.R,
        f = $g.A,
        p = $g.Q;for (r = 0, a = 0; r < l.length;) {
      switch (n = l[r++], a = r, i = 0, n) {case u:
          i = 1;break;case c:
          i = 1;break;case h:
          i = 3;break;case p:
          i = 2;break;case f:
          var g = e[4],
              v = e[5],
              m = Jg(e[0] * e[0] + e[1] * e[1]),
              y = Jg(e[2] * e[2] + e[3] * e[3]),
              _ = tv(-e[1] / y, e[0] / m);l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += _, l[r++] += _, r += 2, a = r;break;case d:
          s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1];}for (o = 0; i > o; o++) {
        var s = Qg[o];s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1];
      }
    }
  },
      nv = Math.sqrt,
      iv = Math.sin,
      rv = Math.cos,
      av = Math.PI,
      ov = function ov(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  },
      sv = function sv(t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (ov(t) * ov(e));
  },
      lv = function lv(t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(sv(t, e));
  },
      uv = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
      hv = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
      cv = function cv(t) {
    Ii.call(this, t);
  };cv.prototype = { constructor: cv, type: "text", brush: function brush(t, e) {
      var n = this.style;this.__dirty && li(n, true), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;var i = n.text;return null != i && (i += ""), Ti(i, n) ? (this.setTransform(t), hi(this, t, i, n, null, e), undefined) : undefined;
    }, getBoundingRect: function getBoundingRect() {
      var t = this.style;if (this.__dirty && li(t, true), !this._rect) {
        var e = t.text;null != e ? e += "" : e = "";var n = Yn(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich);if (n.x += t.x || 0, n.y += t.y || 0, wi(t.textStroke, t.textStrokeWidth)) {
          var i = t.textStrokeWidth;n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i;
        }this._rect = n;
      }return this._rect;
    } }, h(cv, Ii);var dv = ta.extend({ type: "circle", shape: { cx: 0, cy: 0, r: 0 }, buildPath: function buildPath(t, e, n) {
      n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, true);
    } }),
      fv = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
      pv = function pv(t) {
    return Ed.browser.ie && Ed.browser.version >= 11 ? function () {
      var e,
          n = this.__clipPaths,
          i = this.style;if (n) for (var r = 0; r < n.length; r++) {
        var a = n[r],
            o = a && a.shape,
            s = a && a.type;if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
          for (var l = 0; l < fv.length; l++) {
            fv[l][2] = i[fv[l][0]], i[fv[l][0]] = fv[l][1];
          }e = true;break;
        }
      }if (t.apply(this, arguments), e) for (var l = 0; l < fv.length; l++) {
        i[fv[l][0]] = fv[l][2];
      }
    } : t;
  },
      gv = ta.extend({ type: "sector", shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: true }, brush: pv(ta.prototype.brush), buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = Math.max(e.r0 || 0, 0),
          a = Math.max(e.r, 0),
          o = e.startAngle,
          s = e.endAngle,
          l = e.clockwise,
          u = Math.cos(o),
          h = Math.sin(o);t.moveTo(u * r + n, h * r + i), t.lineTo(u * a + n, h * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath();
    } }),
      vv = ta.extend({ type: "ring", shape: { cx: 0, cy: 0, r: 0, r0: 0 }, buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = 2 * Math.PI;t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, false), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, true);
    } }),
      mv = function mv(t, e) {
    for (var n = t.length, i = [], r = 0, a = 1; n > a; a++) {
      r += ee(t[a - 1], t[a]);
    }var o = r / 2;o = n > o ? n : o;for (var a = 0; o > a; a++) {
      var s,
          l,
          u,
          h = a / (o - 1) * (e ? n : n - 1),
          c = Math.floor(h),
          d = h - c,
          f = t[c % n];e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], u = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], u = t[c > n - 3 ? n - 1 : c + 2]);var p = d * d,
          g = d * p;i.push([sa(s[0], f[0], l[0], u[0], d, p, g), sa(s[1], f[1], l[1], u[1], d, p, g)]);
    }return i;
  },
      yv = function yv(t, e, n, i) {
    var r,
        a,
        o,
        s,
        l = [],
        u = [],
        h = [],
        c = [];if (i) {
      o = [Infinity, Infinity], s = [-Infinity, -Infinity];for (var d = 0, f = t.length; f > d; d++) {
        oe(o, o, t[d]), se(s, s, t[d]);
      }oe(o, o, i[0]), se(s, s, i[1]);
    }for (var d = 0, f = t.length; f > d; d++) {
      var p = t[d];if (n) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f];else {
        if (0 === d || d === f - 1) {
          l.push(G(t[d]));continue;
        }r = t[d - 1], a = t[d + 1];
      }q(u, a, r), J(u, u, e);var g = ee(p, r),
          v = ee(p, a),
          m = g + v;0 !== m && (g /= m, v /= m), J(h, u, -g), J(c, u, v);var y = Y([], p, h),
          _ = Y([], p, c);i && (se(y, y, o), oe(y, y, s), se(_, _, o), oe(_, _, s)), l.push(y), l.push(_);
    }return n && l.push(l.shift()), l;
  },
      _v = ta.extend({ type: "polygon", shape: { points: null, smooth: false, smoothConstraint: null }, buildPath: function buildPath(t, e) {
      la(t, e, true);
    } }),
      xv = ta.extend({ type: "polyline", shape: { points: null, smooth: false, smoothConstraint: null }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
      la(t, e, false);
    } }),
      wv = Math.round,
      bv = {},
      Sv = ta.extend({ type: "rect", shape: { r: 0, x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n, i, r, a;this.subPixelOptimize ? (ha(bv, e, this.style), n = bv.x, i = bv.y, r = bv.width, a = bv.height, bv.r = e.r, e = bv) : (n = e.x, i = e.y, r = e.width, a = e.height), e.r ? si(t, e) : t.rect(n, i, r, a), t.closePath();
    } }),
      Mv = {},
      Tv = ta.extend({ type: "line", shape: { x1: 0, y1: 0, x2: 0, y2: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
      var n, i, r, a;this.subPixelOptimize ? (ua(Mv, e, this.style), n = Mv.x1, i = Mv.y1, r = Mv.x2, a = Mv.y2) : (n = e.x1, i = e.y1, r = e.x2, a = e.y2);var o = e.percent;0 !== o && (t.moveTo(n, i), 1 > o && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a));
    }, pointAt: function pointAt(t) {
      var e = this.shape;return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
    } }),
      Iv = [],
      Cv = ta.extend({ type: "bezier-curve", shape: { x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
      var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.cpx1,
          s = e.cpy1,
          l = e.cpx2,
          u = e.cpy2,
          h = e.percent;0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (Lr(n, o, r, h, Iv), o = Iv[1], r = Iv[2], Lr(i, s, a, h, Iv), s = Iv[1], a = Iv[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > h && (Cr(n, o, l, r, h, Iv), o = Iv[1], l = Iv[2], r = Iv[3], Cr(i, s, u, a, h, Iv), s = Iv[1], u = Iv[2], a = Iv[3]), t.bezierCurveTo(o, s, l, u, r, a)));
    }, pointAt: function pointAt(t) {
      return da(this.shape, t, false);
    }, tangentAt: function tangentAt(t) {
      var e = da(this.shape, t, true);return te(e, e);
    } }),
      kv = ta.extend({ type: "arc", shape: { cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: true }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = Math.max(e.r, 0),
          a = e.startAngle,
          o = e.endAngle,
          s = e.clockwise,
          l = Math.cos(a),
          u = Math.sin(a);t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, a, o, !s);
    } }),
      Dv = ta.extend({ type: "compound", shape: { paths: null }, _updatePathDirty: function _updatePathDirty() {
      for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) {
        t = t || e[n].__dirtyPath;
      }this.__dirtyPath = t, this.__dirty = this.__dirty || t;
    }, beforeBrush: function beforeBrush() {
      this._updatePathDirty();for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) {
        t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold);
      }
    }, buildPath: function buildPath(t, e) {
      for (var n = e.paths || [], i = 0; i < n.length; i++) {
        n[i].buildPath(t, n[i].shape, true);
      }
    }, afterBrush: function afterBrush() {
      for (var t = this.shape.paths || [], e = 0; e < t.length; e++) {
        t[e].__dirtyPath = false;
      }
    }, getBoundingRect: function getBoundingRect() {
      return this._updatePathDirty(), ta.prototype.getBoundingRect.call(this);
    } }),
      Av = function Av(t) {
    this.colorStops = t || [];
  };Av.prototype = { constructor: Av, addColorStop: function addColorStop(t, e) {
      this.colorStops.push({ offset: t, color: e });
    } };var Pv = function Pv(t, e, n, i, r, a) {
    this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || false, Av.call(this, r);
  };Pv.prototype = { constructor: Pv }, h(Pv, Av);var Ov = function Ov(t, e, n, i, r) {
    this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || false, Av.call(this, i);
  };Ov.prototype = { constructor: Ov }, h(Ov, Av), fa.prototype.incremental = true, fa.prototype.clearDisplaybles = function () {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = false;
  }, fa.prototype.addDisplayable = function (t, e) {
    e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
  }, fa.prototype.addDisplayables = function (t, e) {
    e = e || false;for (var n = 0; n < t.length; n++) {
      this.addDisplayable(t[n], e);
    }
  }, fa.prototype.eachPendingDisplayable = function (t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      t && t(this._displayables[e]);
    }for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      t && t(this._temporaryDisplayables[e]);
    }
  }, fa.prototype.update = function () {
    this.updateTransform();for (var t = this._cursor; t < this._displayables.length; t++) {
      var e = this._displayables[t];e.parent = this, e.update(), e.parent = null;
    }for (var t = 0; t < this._temporaryDisplayables.length; t++) {
      var e = this._temporaryDisplayables[t];e.parent = this, e.update(), e.parent = null;
    }
  }, fa.prototype.brush = function (t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var n = this._displayables[e];n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t);
    }this._cursor = e;for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var n = this._temporaryDisplayables[e];n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), n.afterBrush && n.afterBrush(t);
    }this._temporaryDisplayables = [], this.notClear = true;
  };var Lv = [];fa.prototype.getBoundingRect = function () {
    if (!this._rect) {
      for (var t = new In(Infinity, Infinity, -Infinity, -Infinity), e = 0; e < this._displayables.length; e++) {
        var n = this._displayables[e],
            i = n.getBoundingRect().clone();n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Lv)), t.union(i);
      }this._rect = t;
    }return this._rect;
  }, fa.prototype.contain = function (t, e) {
    var n = this.transformCoordToLocal(t, e),
        i = this.getBoundingRect();if (i.contain(n[0], n[1])) for (var r = 0; r < this._displayables.length; r++) {
      var a = this._displayables[r];if (a.contain(t, e)) return true;
    }return false;
  }, h(fa, Ii);var Bv = Math.max,
      Ev = Math.min,
      zv = {},
      Rv = 1,
      Fv = { color: "textFill", textBorderColor: "textStroke", textBorderWidth: "textStrokeWidth" },
      Nv = "emphasis",
      Hv = "normal",
      Vv = 1,
      Wv = {},
      Gv = {},
      Xv = oa,
      Yv = ca,
      jv = F(),
      qv = 0;va("circle", dv), va("sector", gv), va("ring", vv), va("polygon", _v), va("polyline", xv), va("rect", Sv), va("line", Tv), va("bezierCurve", Cv), va("arc", kv);var Uv = (Object.freeze || Object)({ Z2_EMPHASIS_LIFT: Rv, CACHED_LABEL_STYLE_PROPERTIES: Fv, extendShape: pa, extendPath: ga, registerShape: va, getShapeClass: ma, makePath: ya, makeImage: _a, mergePath: Xv, resizePath: wa, subPixelOptimizeLine: ba, subPixelOptimizeRect: Sa, subPixelOptimize: Yv, setElementHoverStyle: Pa, setHoverStyle: Ra, setAsHighDownDispatcher: Fa, isHighDownDispatcher: Na, getHighlightDigit: Ha, setLabelStyle: Va, modifyLabelStyle: Wa, setTextStyle: Ga, setText: Xa, getFont: $a, updateProps: Ja, initProps: to, getTransform: eo, applyTransform: no, transformDirection: io, groupTransition: ro, clipPointsByRect: ao, clipRectByRect: oo, createIcon: so, linePolygonIntersect: lo, lineLineIntersect: uo, Group: Kf, Image: Ci, Text: cv, Circle: dv, Sector: gv, Ring: vv, Polygon: _v, Polyline: xv, Rect: Sv, Line: Tv, BezierCurve: Cv, Arc: kv, IncrementalDisplayable: fa, CompoundPath: Dv, LinearGradient: Pv, RadialGradient: Ov, BoundingRect: In }),
      Zv = ["textStyle", "color"],
      Kv = { getTextColor: function getTextColor(t) {
      var e = this.ecModel;return this.getShallow("color") || (!t && e ? e.get(Zv) : null);
    }, getFont: function getFont() {
      return $a({ fontStyle: this.getShallow("fontStyle"), fontWeight: this.getShallow("fontWeight"), fontSize: this.getShallow("fontSize"), fontFamily: this.getShallow("fontFamily") }, this.ecModel);
    }, getTextRect: function getTextRect(t) {
      return Yn(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("lineHeight"), this.getShallow("rich"), this.getShallow("truncateText"));
    } },
      $v = rg([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
      Qv = { getItemStyle: function getItemStyle(t, e) {
      var n = $v(this, t, e),
          i = this.getBorderLineDash();return i && (n.lineDash = i), n;
    }, getBorderLineDash: function getBorderLineDash() {
      var t = this.get("borderType");return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1];
    } },
      Jv = c,
      tm = lr();fo.prototype = { constructor: fo, init: null, mergeOption: function mergeOption(t) {
      r(this.option, t, true);
    }, get: function get(t, e) {
      return null == t ? this.option : po(this.option, this.parsePath(t), !e && go(this, t));
    }, getShallow: function getShallow(t, e) {
      var n = this.option,
          i = null == n ? n : n[t],
          r = !e && go(this, t);return null == i && r && (i = r.getShallow(t)), i;
    }, getModel: function getModel(t, e) {
      var n,
          i = null == t ? this.option : po(this.option, t = this.parsePath(t));return e = e || (n = go(this, t)) && n.getModel(t), new fo(i, e, this.ecModel);
    }, isEmpty: function isEmpty() {
      return null == this.option;
    }, restoreData: function restoreData() {}, clone: function clone() {
      var t = this.constructor;return new t(i(this.option));
    }, setReadOnly: function setReadOnly() {}, parsePath: function parsePath(t) {
      return "string" == typeof t && (t = t.split(".")), t;
    }, customizeGetParent: function customizeGetParent(t) {
      tm(this).getParent = t;
    }, isAnimationEnabled: function isAnimationEnabled() {
      if (!Ed.node) {
        if (null != this.option.animation) return !!this.option.animation;if (this.parentModel) return this.parentModel.isAnimationEnabled();
      }
    } }, vr(fo), mr(fo), Jv(fo, og), Jv(fo, lg), Jv(fo, Kv), Jv(fo, Qv);var em = 0,
      nm = 1e-4,
      im = 9007199254740991,
      rm = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
      am = (Object.freeze || Object)({ linearMap: xo, parsePercent: wo, round: bo, asc: So, getPrecision: Mo, getPrecisionSafe: To, getPixelPrecision: Io, getPercentWithPrecision: Co, MAX_SAFE_INTEGER: im, remRadian: ko, isRadianAroundZero: Do, parseDate: Ao, quantity: Po, quantityExponent: Oo, nice: Lo, quantile: Bo, reformIntervals: Eo, isNumeric: zo }),
      om = O,
      sm = /([&<>"'])/g,
      lm = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
      um = ["a", "b", "c", "d", "e", "f", "g"],
      hm = function hm(t, e) {
    return "{" + t + (null == e ? "" : e) + "}";
  },
      cm = $n,
      dm = (Object.freeze || Object)({ addCommas: Ro, toCamelCase: Fo, normalizeCssArray: om, encodeHTML: No, formatTpl: Ho, formatTplSimple: Vo, getTooltipMarker: Wo, formatTime: Xo, capitalFirst: Yo, truncateText: cm, getTextBoundingRect: jo, getTextRect: qo, windowOpen: Uo }),
      fm = f,
      pm = ["left", "right", "top", "bottom", "width", "height"],
      gm = [["width", "left", "right"], ["height", "top", "bottom"]],
      vm = (_(Zo, "vertical"), _(Zo, "horizontal"), { getBoxLayoutParams: function getBoxLayoutParams() {
      return { left: this.get("left"), top: this.get("top"), right: this.get("right"), bottom: this.get("bottom"), width: this.get("width"), height: this.get("height") };
    } }),
      mm = lr(),
      ym = fo.extend({ type: "component", id: "", name: "", mainType: "", subType: "", componentIndex: 0, defaultOption: null, ecModel: null, dependentModels: [], uid: null, layoutMode: null, $constructor: function $constructor(t, e, n, i) {
      fo.call(this, t, e, n, i), this.uid = vo("ec_cpt_model");
    }, init: function init(t, e, n) {
      this.mergeDefaultAndTheme(t, n);
    }, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {
      var n = this.layoutMode,
          i = n ? Qo(t) : {},
          a = e.getTheme();r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), n && $o(t, i, n);
    }, mergeOption: function mergeOption(t) {
      r(this.option, t, true);var e = this.layoutMode;e && $o(this.option, t, e);
    }, optionUpdated: function optionUpdated() {}, getDefaultOption: function getDefaultOption() {
      var t = mm(this);if (!t.defaultOption) {
        for (var e = [], n = this.constructor; n;) {
          var i = n.prototype.defaultOption;i && e.push(i), n = n.superClass;
        }for (var a = {}, o = e.length - 1; o >= 0; o--) {
          a = r(a, e[o], true);
        }t.defaultOption = a;
      }return t.defaultOption;
    }, getReferringComponents: function getReferringComponents(t) {
      return this.ecModel.queryComponents({ mainType: t, index: this.get(t + "Index", true), id: this.get(t + "Id", true) });
    } });xr(ym, { registerWhenExtend: true }), mo(ym), yo(ym, ts), c(ym, vm);var _m = "";"undefined" != typeof navigator && (_m = navigator.platform || "");var xm = { color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"], gradientColor: ["#f6efa6", "#d88273", "#bf444c"], textStyle: { fontFamily: _m.match(/^Win/) ? "Microsoft YaHei" : "sans-serif", fontSize: 12, fontStyle: "normal", fontWeight: "normal" }, blendMode: null, animation: "auto", animationDuration: 1e3, animationDurationUpdate: 300, animationEasing: "exponentialOut", animationEasingUpdate: "cubicOut", animationThreshold: 2e3, progressiveThreshold: 3e3, progressive: 400, hoverLayerThreshold: 3e3, useUTC: false },
      wm = lr(),
      bm = { clearColorPalette: function clearColorPalette() {
      wm(this).colorIdx = 0, wm(this).colorNameMap = {};
    }, getColorFromPalette: function getColorFromPalette(t, e, n) {
      e = e || this;var i = wm(e),
          r = i.colorIdx || 0,
          a = i.colorNameMap = i.colorNameMap || {};if (a.hasOwnProperty(t)) return a[t];var o = Ji(this.get("color", true)),
          s = this.get("colorLayer", true),
          l = null != n && s ? es(s, n) : o;if (l = l || o, l && l.length) {
        var u = l[r];return t && (a[t] = u), i.colorIdx = (r + 1) % l.length, u;
      }
    } },
      Sm = "original",
      Mm = "arrayRows",
      Tm = "objectRows",
      Im = "keyedColumns",
      Cm = "unknown",
      km = "typedArray",
      Dm = "column",
      Am = "row";ns.seriesDataToSource = function (t) {
    return new ns({ data: t, sourceFormat: T(t) ? km : Sm, fromDataset: false });
  }, mr(ns);var Pm = { Must: 1, Might: 2, Not: 3 },
      Om = lr(),
      Lm = "\x00_ec_inner",
      Bm = fo.extend({ init: function init(t, e, n, i) {
      n = n || {}, this.option = null, this._theme = new fo(n), this._optionManager = i;
    }, setOption: function setOption(t, e) {
      L(!(Lm in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null);
    }, resetOption: function resetOption(t) {
      var e = false,
          n = this._optionManager;if (!t || "recreate" === t) {
        var i = n.mountOption("recreate" === t);this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : ms.call(this, i), e = true;
      }if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
        var r = n.getTimelineOption(this);r && (this.mergeOption(r), e = true);
      }if (!t || "recreate" === t || "media" === t) {
        var a = n.getMediaOption(this, this._api);a.length && f(a, function (t) {
          this.mergeOption(t, e = true);
        }, this);
      }return e;
    }, mergeOption: function mergeOption(t) {
      function e(e, i) {
        var r = Ji(t[e]),
            s = ir(a.get(e), r);rr(s), f(s, function (t) {
          var n = t.option;S(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = _s(e, n, t.exist));
        });var l = ys(a, i);n[e] = [], a.set(e, []), f(s, function (t, i) {
          var r = t.exist,
              s = t.option;if (L(S(s) || r, "Empty component definition"), s) {
            var u = ym.getClass(e, t.keyInfo.subType, true);if (r && r.constructor === u) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, false);else {
              var h = o({ dependentModels: l, componentIndex: i }, t.keyInfo);r = new u(s, this, this, h), o(r, h), r.init(s, this, this, h), r.optionUpdated(null, true);
            }
          } else r.mergeOption({}, this), r.optionUpdated({}, false);a.get(e)[i] = r, n[e][i] = r.option;
        }, this), "series" === e && xs(this, a.get("series"));
      }var n = this.option,
          a = this._componentsMap,
          s = [];as(this), f(t, function (t, e) {
        null != t && (ym.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : r(n[e], t, true));
      }), ym.topologicalTravel(s, ym.getAllClassMainTypes(), e, this), this._seriesIndicesMap = F(this._seriesIndices = this._seriesIndices || []);
    }, getOption: function getOption() {
      var t = i(this.option);return f(t, function (e, n) {
        if (ym.hasClass(n)) {
          for (var e = Ji(e), i = e.length - 1; i >= 0; i--) {
            or(e[i]) && e.splice(i, 1);
          }t[n] = e;
        }
      }), delete t[Lm], t;
    }, getTheme: function getTheme() {
      return this._theme;
    }, getComponent: function getComponent(t, e) {
      var n = this._componentsMap.get(t);return n ? n[e || 0] : undefined;
    }, queryComponents: function queryComponents(t) {
      var e = t.mainType;if (!e) return [];var n = t.index,
          i = t.id,
          r = t.name,
          a = this._componentsMap.get(e);if (!a || !a.length) return [];var o;if (null != n) x(n) || (n = [n]), o = v(p(n, function (t) {
        return a[t];
      }), function (t) {
        return !!t;
      });else if (null != i) {
        var s = x(i);o = v(a, function (t) {
          return s && u(i, t.id) >= 0 || !s && t.id === i;
        });
      } else if (null != r) {
        var l = x(r);o = v(a, function (t) {
          return l && u(r, t.name) >= 0 || !l && t.name === r;
        });
      } else o = a.slice();return ws(o, t);
    }, findComponents: function findComponents(t) {
      function e(t) {
        var e = r + "Index",
            n = r + "Id",
            i = r + "Name";return !t || null == t[e] && null == t[n] && null == t[i] ? null : { mainType: r, index: t[e], id: t[n], name: t[i] };
      }function n(e) {
        return t.filter ? v(e, t.filter) : e;
      }var i = t.query,
          r = t.mainType,
          a = e(i),
          o = a ? this.queryComponents(a) : this._componentsMap.get(r);return n(ws(o, t));
    }, eachComponent: function eachComponent(t, e, n) {
      var i = this._componentsMap;if ("function" == typeof t) n = e, e = t, i.each(function (t, i) {
        f(t, function (t, r) {
          e.call(n, i, t, r);
        });
      });else if (b(t)) f(i.get(t), e, n);else if (S(t)) {
        var r = this.findComponents(t);f(r, e, n);
      }
    }, getSeriesByName: function getSeriesByName(t) {
      var e = this._componentsMap.get("series");return v(e, function (e) {
        return e.name === t;
      });
    }, getSeriesByIndex: function getSeriesByIndex(t) {
      return this._componentsMap.get("series")[t];
    }, getSeriesByType: function getSeriesByType(t) {
      var e = this._componentsMap.get("series");return v(e, function (e) {
        return e.subType === t;
      });
    }, getSeries: function getSeries() {
      return this._componentsMap.get("series").slice();
    }, getSeriesCount: function getSeriesCount() {
      return this._componentsMap.get("series").length;
    }, eachSeries: function eachSeries(t, e) {
      f(this._seriesIndices, function (n) {
        var i = this._componentsMap.get("series")[n];t.call(e, i, n);
      }, this);
    }, eachRawSeries: function eachRawSeries(t, e) {
      f(this._componentsMap.get("series"), t, e);
    }, eachSeriesByType: function eachSeriesByType(t, e, n) {
      f(this._seriesIndices, function (i) {
        var r = this._componentsMap.get("series")[i];r.subType === t && e.call(n, r, i);
      }, this);
    }, eachRawSeriesByType: function eachRawSeriesByType(t, e, n) {
      return f(this.getSeriesByType(t), e, n);
    }, isSeriesFiltered: function isSeriesFiltered(t) {
      return null == this._seriesIndicesMap.get(t.componentIndex);
    }, getCurrentSeriesIndices: function getCurrentSeriesIndices() {
      return (this._seriesIndices || []).slice();
    }, filterSeries: function filterSeries(t, e) {
      var n = v(this._componentsMap.get("series"), t, e);xs(this, n);
    }, restoreData: function restoreData(t) {
      var e = this._componentsMap;xs(this, e.get("series"));var n = [];e.each(function (t, e) {
        n.push(e);
      }), ym.topologicalTravel(n, ym.getAllClassMainTypes(), function (n) {
        f(e.get(n), function (e) {
          ("series" !== n || !gs(e, t)) && e.restoreData();
        });
      });
    } });c(Bm, bm);var Em = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
      zm = {};Ss.prototype = { constructor: Ss, create: function create(t, e) {
      var n = [];f(zm, function (i) {
        var r = i.create(t, e);n = n.concat(r || []);
      }), this._coordinateSystems = n;
    }, update: function update(t, e) {
      f(this._coordinateSystems, function (n) {
        n.update && n.update(t, e);
      });
    }, getCoordinateSystems: function getCoordinateSystems() {
      return this._coordinateSystems.slice();
    } }, Ss.register = function (t, e) {
    zm[t] = e;
  }, Ss.get = function (t) {
    return zm[t];
  };var Rm = f,
      Fm = i,
      Nm = p,
      Hm = r,
      Vm = /^(min|max)?(.+)$/;Ms.prototype = { constructor: Ms, setOption: function setOption(t, e) {
      t && f(Ji(t.series), function (t) {
        t && t.data && T(t.data) && E(t.data);
      }), t = Fm(t);var n = this._optionBackup,
          i = Ts.call(this, t, e, !n);this._newBaseOption = i.baseOption, n ? (Ds(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i;
    }, mountOption: function mountOption(t) {
      var e = this._optionBackup;return this._timelineOptions = Nm(e.timelineOptions, Fm), this._mediaList = Nm(e.mediaList, Fm), this._mediaDefault = Fm(e.mediaDefault), this._currentMediaIndices = [], Fm(t ? e.baseOption : this._newBaseOption);
    }, getTimelineOption: function getTimelineOption(t) {
      var e,
          n = this._timelineOptions;if (n.length) {
        var i = t.getComponent("timeline");i && (e = Fm(n[i.getCurrentIndex()], true));
      }return e;
    }, getMediaOption: function getMediaOption() {
      var t = this._api.getWidth(),
          e = this._api.getHeight(),
          n = this._mediaList,
          i = this._mediaDefault,
          r = [],
          a = [];if (!n.length && !i) return a;for (var o = 0, s = n.length; s > o; o++) {
        Is(n[o].query, t, e) && r.push(o);
      }return !r.length && i && (r = [-1]), r.length && !ks(r, this._currentMediaIndices) && (a = Nm(r, function (t) {
        return Fm(-1 === t ? i.option : n[t].option);
      })), this._currentMediaIndices = r, a;
    } };var Wm = f,
      Gm = S,
      Xm = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
      Ym = function Ym(t, e) {
    Wm(zs(t.series), function (t) {
      Gm(t) && Es(t);
    });var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Wm(n, function (e) {
      Wm(zs(t[e]), function (t) {
        t && (Ls(t, "axisLabel"), Ls(t.axisPointer, "label"));
      });
    }), Wm(zs(t.parallel), function (t) {
      var e = t && t.parallelAxisDefault;Ls(e, "axisLabel"), Ls(e && e.axisPointer, "label");
    }), Wm(zs(t.calendar), function (t) {
      Ps(t, "itemStyle"), Ls(t, "dayLabel"), Ls(t, "monthLabel"), Ls(t, "yearLabel");
    }), Wm(zs(t.radar), function (t) {
      Ls(t, "name");
    }), Wm(zs(t.geo), function (t) {
      Gm(t) && (Bs(t), Wm(zs(t.regions), function (t) {
        Bs(t);
      }));
    }), Wm(zs(t.timeline), function (t) {
      Bs(t), Ps(t, "label"), Ps(t, "itemStyle"), Ps(t, "controlStyle", true);var e = t.data;x(e) && f(e, function (t) {
        S(t) && (Ps(t, "label"), Ps(t, "itemStyle"));
      });
    }), Wm(zs(t.toolbox), function (t) {
      Ps(t, "iconStyle"), Wm(t.feature, function (t) {
        Ps(t, "iconStyle");
      });
    }), Ls(Rs(t.axisPointer), "label"), Ls(Rs(t.tooltip).axisPointer, "label");
  },
      jm = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
      qm = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
      Um = function Um(t, e) {
    Ym(t, e), t.series = Ji(t.series), f(t.series, function (t) {
      if (S(t)) {
        var e = t.type;if ("line" === e) null != t.clipOverflow && (t.clip = t.clipOverflow);else if ("pie" === e || "gauge" === e) null != t.clockWise && (t.clockwise = t.clockWise);else if ("gauge" === e) {
          var n = Fs(t, "pointer.color");null != n && Ns(t, "itemStyle.color", n);
        }Hs(t);
      }
    }), t.dataRange && (t.visualMap = t.dataRange), f(qm, function (e) {
      var n = t[e];n && (x(n) || (n = [n]), f(n, function (t) {
        Hs(t);
      }));
    });
  },
      Zm = function Zm(t) {
    var e = F();t.eachSeries(function (t) {
      var n = t.get("stack");if (n) {
        var i = e.get(n) || e.set(n, []),
            r = t.getData(),
            a = { stackResultDimension: r.getCalculationInfo("stackResultDimension"), stackedOverDimension: r.getCalculationInfo("stackedOverDimension"), stackedDimension: r.getCalculationInfo("stackedDimension"), stackedByDimension: r.getCalculationInfo("stackedByDimension"), isStackedByIndex: r.getCalculationInfo("isStackedByIndex"), data: r, seriesModel: t };if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a);
      }
    }), e.each(Vs);
  },
      Km = Ws.prototype;Km.pure = false, Km.persistent = true, Km.getSource = function () {
    return this._source;
  };var $m = { arrayRows_column: { pure: true, count: function count() {
        return Math.max(0, this._data.length - this._source.startIndex);
      }, getItem: function getItem(t) {
        return this._data[t + this._source.startIndex];
      }, appendData: Ys }, arrayRows_row: { pure: true, count: function count() {
        var t = this._data[0];return t ? Math.max(0, t.length - this._source.startIndex) : 0;
      }, getItem: function getItem(t) {
        t += this._source.startIndex;for (var e = [], n = this._data, i = 0; i < n.length; i++) {
          var r = n[i];e.push(r ? r[t] : null);
        }return e;
      }, appendData: function appendData() {
        throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
      } }, objectRows: { pure: true, count: Gs, getItem: Xs, appendData: Ys }, keyedColumns: { pure: true, count: function count() {
        var t = this._source.dimensionsDefine[0].name,
            e = this._data[t];return e ? e.length : 0;
      }, getItem: function getItem(t) {
        for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
          var r = this._data[n[i].name];e.push(r ? r[t] : null);
        }return e;
      }, appendData: function appendData(t) {
        var e = this._data;f(t, function (t, n) {
          for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) {
            i.push(t[r]);
          }
        });
      } }, original: { count: Gs, getItem: Xs, appendData: Ys }, typedArray: { persistent: false, pure: true, count: function count() {
        return this._data ? this._data.length / this._dimSize : 0;
      }, getItem: function getItem(t, e) {
        t -= this._offset, e = e || [];for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) {
          e[i] = this._data[n + i];
        }return e;
      }, appendData: function appendData(t) {
        this._data = t;
      }, clean: function clean() {
        this._offset += this.count(), this._data = null;
      } } },
      Qm = { arrayRows: js, objectRows: function objectRows(t, e, n, i) {
      return null != n ? t[i] : t;
    }, keyedColumns: js, original: function original(t, e, n) {
      var i = er(t);return null != n && i instanceof Array ? i[n] : i;
    }, typedArray: js },
      Jm = { arrayRows: qs, objectRows: function objectRows(t, e) {
      return Us(t[e], this._dimensionInfos[e]);
    }, keyedColumns: qs, original: function original(t, e, n, i) {
      var r = t && (null == t.value ? t : t.value);return !this._rawData.pure && nr(t) && (this.hasItemOption = true), Us(r instanceof Array ? r[i] : r, this._dimensionInfos[e]);
    }, typedArray: function typedArray(t, e, n, i) {
      return t[i];
    } },
      ty = /\{@(.+?)\}/g,
      ey = { getDataParams: function getDataParams(t, e) {
      var n = this.getData(e),
          i = this.getRawValue(t, e),
          r = n.getRawIndex(t),
          a = n.getName(t),
          o = n.getRawDataItem(t),
          s = n.getItemVisual(t, "color"),
          l = n.getItemVisual(t, "borderColor"),
          u = this.ecModel.getComponent("tooltip"),
          h = u && u.get("renderMode"),
          c = fr(h),
          d = this.mainType,
          f = "series" === d,
          p = n.userOutput;return { componentType: d, componentSubType: this.subType, componentIndex: this.componentIndex, seriesType: f ? this.subType : null, seriesIndex: this.seriesIndex, seriesId: f ? this.id : null, seriesName: f ? this.name : null, name: a, dataIndex: r, data: o, dataType: e, value: i, color: s, borderColor: l, dimensionNames: p ? p.dimensionNames : null, encode: p ? p.encode : null, marker: Wo({ color: s, renderMode: c }), $vars: ["seriesName", "name", "value"] };
    }, getFormattedLabel: function getFormattedLabel(t, e, n, i, r) {
      e = e || "normal";var a = this.getData(n),
          o = a.getItemModel(t),
          s = this.getDataParams(t, n);null != i && s.value instanceof Array && (s.value = s.value[i]);var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);if ("function" == typeof l) return s.status = e, s.dimensionIndex = i, l(s);if ("string" == typeof l) {
        var u = Ho(l, s);return u.replace(ty, function (e, n) {
          var i = n.length;return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), Zs(a, t, n);
        });
      }
    }, getRawValue: function getRawValue(t, e) {
      return Zs(this.getData(e), t);
    }, formatTooltip: function formatTooltip() {} },
      ny = $s.prototype;ny.perform = function (t) {
    function e(t) {
      return !(t >= 1) && (t = 1), t;
    }var n = this._upstream,
        i = t && t.skip;if (this._dirty && n) {
      var r = this.context;r.data = r.outputData = n.context.outputData;
    }this.__pipeline && (this.__pipeline.currentTask = this);var a;this._plan && !i && (a = this._plan(this.context));var o = e(this._modBy),
        s = this._modDataCount || 0,
        l = e(t && t.modBy),
        u = t && t.modDataCount || 0;(o !== l || s !== u) && (a = "reset");var h;(this._dirty || "reset" === a) && (this._dirty = false, h = Js(this, i)), this._modBy = l, this._modDataCount = u;var c = t && t.step;if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : Infinity, this._progress) {
      var d = this._dueIndex,
          f = Math.min(null != c ? this._dueIndex + c : Infinity, this._dueEnd);if (!i && (h || f > d)) {
        var p = this._progress;if (x(p)) for (var g = 0; g < p.length; g++) {
          Qs(this, p[g], d, f, l, u);
        } else Qs(this, p, d, f, l, u);
      }this._dueIndex = f;var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;this._outputDueEnd = v;
    } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;return this.unfinished();
  };var iy = function () {
    function t() {
      return n > i ? i++ : null;
    }function e() {
      var t = i % o * r + Math.ceil(i / o),
          e = i >= n ? null : a > t ? t : i;return i++, e;
    }var n,
        i,
        r,
        a,
        o,
        s = { reset: function reset(l, u, h, c) {
        i = l, n = u, r = h, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t;
      } };return s;
  }();ny.dirty = function () {
    this._dirty = true, this._onDirty && this._onDirty(this.context);
  }, ny.unfinished = function () {
    return this._progress && this._dueIndex < this._dueEnd;
  }, ny.pipe = function (t) {
    (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
  }, ny.dispose = function () {
    this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = false, this._disposed = true);
  }, ny.getUpstream = function () {
    return this._upstream;
  }, ny.getDownstream = function () {
    return this._downstream;
  }, ny.setOutputEnd = function (t) {
    this._outputDueEnd = this._settedOutputEnd = t;
  };var ry = lr(),
      ay = ym.extend({ type: "series.__base__", seriesIndex: 0, coordinateSystem: null, defaultOption: null, legendVisualProvider: null, visualColorAccessPath: "itemStyle.color", visualBorderColorAccessPath: "itemStyle.borderColor", layoutMode: null, init: function init(t, e, n) {
      this.seriesIndex = this.componentIndex, this.dataTask = Ks({ count: nl, reset: il }), this.dataTask.context = { model: this }, this.mergeDefaultAndTheme(t, n), os(this);var i = this.getInitialData(t, n);al(i, this), this.dataTask.context.data = i, ry(this).dataBeforeProcessed = i, tl(this);
    }, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {
      var n = this.layoutMode,
          i = n ? Qo(t) : {},
          a = this.subType;ym.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), tr(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && $o(t, i, n);
    }, mergeOption: function mergeOption(t, e) {
      t = r(this.option, t, true), this.fillDataTextStyle(t.data);var n = this.layoutMode;n && $o(this.option, t, n), os(this);var i = this.getInitialData(t, e);al(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, ry(this).dataBeforeProcessed = i, tl(this);
    }, fillDataTextStyle: function fillDataTextStyle(t) {
      if (t && !T(t)) for (var e = ["show"], n = 0; n < t.length; n++) {
        t[n] && t[n].label && tr(t[n], "label", e);
      }
    }, getInitialData: function getInitialData() {}, appendData: function appendData(t) {
      var e = this.getRawData();e.appendData(t.data);
    }, getData: function getData(t) {
      var e = sl(this);if (e) {
        var n = e.context.data;return null == t ? n : n.getLinkedData(t);
      }return ry(this).data;
    }, setData: function setData(t) {
      var e = sl(this);if (e) {
        var n = e.context;n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t);
      }ry(this).data = t;
    }, getSource: function getSource() {
      return rs(this);
    }, getRawData: function getRawData() {
      return ry(this).dataBeforeProcessed;
    }, getBaseAxis: function getBaseAxis() {
      var t = this.coordinateSystem;return t && t.getBaseAxis && t.getBaseAxis();
    }, formatTooltip: function formatTooltip(t, e, n, i) {
      function r(n) {
        function r(t, n) {
          var r = c.getDimensionInfo(n);if (r && r.otherDims.tooltip !== false) {
            var d = r.type,
                f = "sub" + o.seriesIndex + "at" + h,
                p = Wo({ color: y, type: "subItem", renderMode: i, markerId: f }),
                g = "string" == typeof p ? p : p.content,
                v = (a ? g + No(r.displayName || "-") + ": " : "") + No("ordinal" === d ? t + "" : "time" === d ? e ? "" : Xo("yyyy/MM/dd hh:mm:ss", t) : Ro(t));v && s.push(v), l && (u[f] = y, ++h);
          }
        }var a = g(n, function (t, e, n) {
          var i = c.getDimensionInfo(n);return t |= i && i.tooltip !== false && null != i.displayName;
        }, 0),
            s = [];d.length ? f(d, function (e) {
          r(Zs(c, t, e), e);
        }) : f(n, r);var p = a ? l ? "\n" : "<br/>" : "",
            v = p + s.join(p || ", ");return { renderMode: i, content: v, style: u };
      }function a(t) {
        return { renderMode: i, content: No(Ro(t)), style: u };
      }var o = this;i = i || "html";var s = "html" === i ? "<br/>" : "\n",
          l = "richText" === i,
          u = {},
          h = 0,
          c = this.getData(),
          d = c.mapDimension("defaultedTooltip", true),
          p = d.length,
          v = this.getRawValue(t),
          m = x(v),
          y = c.getItemVisual(t, "color");S(y) && y.colorStops && (y = (y.colorStops[0] || {}).color), y = y || "transparent";var _ = p > 1 || m && !p ? r(v) : a(p ? Zs(c, t, d[0]) : m ? v[0] : v),
          w = _.content,
          b = o.seriesIndex + "at" + h,
          M = Wo({ color: y, type: "item", renderMode: i, markerId: b });u[b] = y, ++h;var T = c.getName(t),
          I = this.name;ar(this) || (I = ""), I = I ? No(I) + (e ? ": " : s) : "";var C = "string" == typeof M ? M : M.content,
          k = e ? C + I + w : I + C + (T ? No(T) + ": " + w : w);return { html: k, markers: u };
    }, isAnimationEnabled: function isAnimationEnabled() {
      if (Ed.node) return false;var t = this.getShallow("animation");return t && this.getData().count() > this.getShallow("animationThreshold") && (t = false), t;
    }, restoreData: function restoreData() {
      this.dataTask.dirty();
    }, getColorFromPalette: function getColorFromPalette(t, e, n) {
      var i = this.ecModel,
          r = bm.getColorFromPalette.call(this, t, e, n);return r || (r = i.getColorFromPalette(t, e, n)), r;
    }, coordDimToDataDim: function coordDimToDataDim(t) {
      return this.getRawData().mapDimension(t, true);
    }, getProgressive: function getProgressive() {
      return this.get("progressive");
    }, getProgressiveThreshold: function getProgressiveThreshold() {
      return this.get("progressiveThreshold");
    }, getAxisTooltipData: null, getTooltipPosition: null, pipeTask: null, preventIncremental: null, pipelineContext: null });c(ay, ey), c(ay, bm);var oy = function oy() {
    this.group = new Kf(), this.uid = vo("viewComponent");
  };oy.prototype = { constructor: oy, init: function init() {}, render: function render() {}, dispose: function dispose() {}, filterForExposedEvent: null };var sy = oy.prototype;sy.updateView = sy.updateLayout = sy.updateVisual = function () {}, vr(oy), xr(oy, { registerWhenExtend: true });var ly = function ly() {
    var t = lr();return function (e) {
      var n = t(e),
          i = e.pipelineContext,
          r = n.large,
          a = n.progressiveRender,
          o = n.large = i && i.large,
          s = n.progressiveRender = i && i.progressiveRender;return !!(r ^ o || a ^ s) && "reset";
    };
  },
      uy = lr(),
      hy = ly();ll.prototype = { type: "chart", init: function init() {}, render: function render() {}, highlight: function highlight(t, e, n, i) {
      hl(t.getData(), i, "emphasis");
    }, downplay: function downplay(t, e, n, i) {
      hl(t.getData(), i, "normal");
    }, remove: function remove() {
      this.group.removeAll();
    }, dispose: function dispose() {}, incrementalPrepareRender: null, incrementalRender: null, updateTransform: null, filterForExposedEvent: null };var cy = ll.prototype;cy.updateView = cy.updateLayout = cy.updateVisual = function (t, e, n, i) {
    this.render(t, e, n, i);
  }, vr(ll, ["dispose"]), xr(ll, { registerWhenExtend: true }), ll.markUpdateMethod = function (t, e) {
    uy(t).updateMethod = e;
  };var dy = { incrementalPrepareRender: { progress: function progress(t, e) {
        e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
      } }, render: { forceFirstProgress: true, progress: function progress(t, e) {
        e.view.render(e.model, e.ecModel, e.api, e.payload);
      } } },
      fy = "\x00__throttleOriginMethod",
      py = "\x00__throttleRate",
      gy = "\x00__throttleType",
      vy = { createOnAllSeries: true, performRawSeries: true, reset: function reset(t, e) {
      var n = t.getData(),
          i = (t.visualColorAccessPath || "itemStyle.color").split("."),
          r = t.get(i),
          a = !w(r) || r instanceof Av ? null : r;(!r || a) && (r = t.getColorFromPalette(t.name, null, e.getSeriesCount())), n.setVisual("color", r);var o = (t.visualBorderColorAccessPath || "itemStyle.borderColor").split("."),
          s = t.get(o);if (n.setVisual("borderColor", s), !e.isSeriesFiltered(t)) {
        a && n.each(function (e) {
          n.setItemVisual(e, "color", a(t.getDataParams(e)));
        });var l = function l(t, e) {
          var n = t.getItemModel(e),
              r = n.get(i, true),
              a = n.get(o, true);null != r && t.setItemVisual(e, "color", r), null != a && t.setItemVisual(e, "borderColor", a);
        };return { dataEach: n.hasItemOption ? l : null };
      }
    } },
      my = { legend: { selector: { all: "全选", inverse: "反选" } }, toolbox: { brush: { title: { rect: "矩形选择", polygon: "圈选", lineX: "横向选择", lineY: "纵向选择", keep: "保持选择", clear: "清除选择" } }, dataView: { title: "数据视图", lang: ["数据视图", "关闭", "刷新"] }, dataZoom: { title: { zoom: "区域缩放", back: "区域缩放还原" } }, magicType: { title: { line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺" } }, restore: { title: "还原" }, saveAsImage: { title: "保存为图片", lang: ["右键另存为图片"] } }, series: { typeNames: { pie: "饼图", bar: "柱状图", line: "折线图", scatter: "散点图", effectScatter: "涟漪散点图", radar: "雷达图", tree: "树图", treemap: "矩形树图", boxplot: "箱型图", candlestick: "K线图", k: "K线图", heatmap: "热力图", map: "地图", parallel: "平行坐标图", lines: "线图", graph: "关系图", sankey: "桑基图", funnel: "漏斗图", gauge: "仪表盘图", pictorialBar: "象形柱图", themeRiver: "主题河流图", sunburst: "旭日图" } }, aria: { general: { withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，" }, series: { single: { prefix: "", withName: "图表类型是{seriesType}，表示{seriesName}。", withoutName: "图表类型是{seriesType}。" }, multiple: { prefix: "它由{seriesCount}个图表系列组成。", withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，", withoutName: "第{seriesId}个系列是一个{seriesType}，", separator: { middle: "；", end: "。" } } }, data: { allData: "其数据是——", partialData: "其中，前{displayCnt}项是——", withName: "{name}的数据是{value}", withoutName: "{value}", separator: { middle: "，", end: "" } } } },
      yy = function yy(t, e) {
    function n(t, e) {
      if ("string" != typeof t) return t;var n = t;return f(e, function (t, e) {
        n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);
      }), n;
    }function i(t) {
      var e = o.get(t);if (null == e) {
        for (var n = t.split("."), i = my.aria, r = 0; r < n.length; ++r) {
          i = i[n[r]];
        }return i;
      }return e;
    }function r() {
      var t = e.getModel("title").option;return t && t.length && (t = t[0]), t && t.text;
    }function a(t) {
      return my.series.typeNames[t] || "自定义图";
    }var o = e.getModel("aria");if (o.get("show")) {
      if (o.get("description")) return undefined;var s = 0;e.eachSeries(function () {
        ++s;
      }, this);var l,
          u = o.get("data.maxCount") || 10,
          h = o.get("series.maxCount") || 10,
          c = Math.min(s, h);if (!(1 > s)) {
        var d = r();l = d ? n(i("general.withTitle"), { title: d }) : i("general.withoutTitle");var p = [],
            g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";l += n(i(g), { seriesCount: s }), e.eachSeries(function (t, e) {
          if (c > e) {
            var r,
                o = t.get("name"),
                l = "series." + (s > 1 ? "multiple" : "single") + ".";r = i(o ? l + "withName" : l + "withoutName"), r = n(r, { seriesId: t.seriesIndex, seriesName: t.get("name"), seriesType: a(t.subType) });var h = t.getData();window.data = h, r += h.count() > u ? n(i("data.partialData"), { displayCnt: u }) : i("data.allData");for (var d = [], f = 0; f < h.count(); f++) {
              if (u > f) {
                var g = h.getName(f),
                    v = Zs(h, f);d.push(n(i(g ? "data.withName" : "data.withoutName"), { name: g, value: v }));
              }
            }r += d.join(i("data.separator.middle")) + i("data.separator.end"), p.push(r);
          }
        }), l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", l);
      }
    }
  },
      _y = Math.PI,
      xy = function xy(t, e) {
    e = e || {}, s(e, { text: "loading", textColor: "#000", fontSize: "12px", maskColor: "rgba(255, 255, 255, 0.8)", showSpinner: true, color: "#c23531", spinnerRadius: 10, lineWidth: 5, zlevel: 0 });var n = new Kf(),
        i = new Sv({ style: { fill: e.maskColor }, zlevel: e.zlevel, z: 1e4 });n.add(i);var r = e.fontSize + " sans-serif",
        a = new Sv({ style: { fill: "none", text: e.text, font: r, textPosition: "right", textDistance: 10, textFill: e.textColor }, zlevel: e.zlevel, z: 10001 });if (n.add(a), e.showSpinner) {
      var o = new kv({ shape: { startAngle: -_y / 2, endAngle: -_y / 2 + .1, r: e.spinnerRadius }, style: { stroke: e.color, lineCap: "round", lineWidth: e.lineWidth }, zlevel: e.zlevel, z: 10001 });o.animateShape(true).when(1e3, { endAngle: 3 * _y / 2 }).start("circularInOut"), o.animateShape(true).when(1e3, { startAngle: 3 * _y / 2 }).delay(300).start("circularInOut"), n.add(o);
    }return n.resize = function () {
      var n = Xn(e.text, r),
          s = e.showSpinner ? e.spinnerRadius : 0,
          l = (t.getWidth() - 2 * s - (e.showSpinner && n ? 10 : 0) - n) / 2 - (e.showSpinner ? 0 : n / 2),
          u = t.getHeight() / 2;e.showSpinner && o.setShape({ cx: l, cy: u }), a.setShape({ x: l - s, y: u - s, width: 2 * s, height: 2 * s }), i.setShape({ x: 0, y: 0, width: t.getWidth(), height: t.getHeight() });
    }, n.resize(), n;
  },
      wy = gl.prototype;wy.restoreData = function (t, e) {
    t.restoreData(e), this._stageTaskMap.each(function (t) {
      var e = t.overallTask;e && e.dirty();
    });
  }, wy.getPerformArgs = function (t, e) {
    if (t.__pipeline) {
      var n = this._pipelineMap.get(t.__pipeline.id),
          i = n.context,
          r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
          a = r ? n.step : null,
          o = i && i.modDataCount,
          s = null != o ? Math.ceil(o / a) : null;return { step: a, modBy: s, modDataCount: o };
    }
  }, wy.getPipeline = function (t) {
    return this._pipelineMap.get(t);
  }, wy.updateStreamModes = function (t, e) {
    var n = this._pipelineMap.get(t.uid),
        i = t.getData(),
        r = i.count(),
        a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
        o = t.get("large") && r >= t.get("largeThreshold"),
        s = "mod" === t.get("progressiveChunkMode") ? r : null;t.pipelineContext = n.context = { progressiveRender: a, modDataCount: s, large: o };
  }, wy.restorePipelines = function (t) {
    var e = this,
        n = e._pipelineMap = F();t.eachSeries(function (t) {
      var i = t.getProgressive(),
          r = t.uid;n.set(r, { id: r, head: null, tail: null, threshold: t.getProgressiveThreshold(), progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()), blockIndex: -1, step: Math.round(i || 700), count: 0 }), Cl(e, t, t.dataTask);
    });
  }, wy.prepareStageTasks = function () {
    var t = this._stageTaskMap,
        e = this.ecInstance.getModel(),
        n = this.api;f(this._allHandlers, function (i) {
      var r = t.get(i.uid) || t.set(i.uid, []);i.reset && ml(this, i, r, e, n), i.overallReset && yl(this, i, r, e, n);
    }, this);
  }, wy.prepareView = function (t, e, n, i) {
    var r = t.renderTask,
        a = r.context;a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, Cl(this, e, r);
  }, wy.performDataProcessorTasks = function (t, e) {
    vl(this, this._dataProcessorHandlers, t, e, { block: true });
  }, wy.performVisualTasks = function (t, e, n) {
    vl(this, this._visualHandlers, t, e, n);
  }, wy.performSeriesTasks = function (t) {
    var e;t.eachSeries(function (t) {
      e |= t.dataTask.perform();
    }), this.unfinished |= e;
  }, wy.plan = function () {
    this._pipelineMap.each(function (t) {
      var e = t.tail;do {
        if (e.__block) {
          t.blockIndex = e.__idxInPipeline;break;
        }e = e.getUpstream();
      } while (e);
    });
  };var by = wy.updatePayload = function (t, e) {
    "remain" !== e && (t.context.payload = e);
  },
      Sy = Tl(0);gl.wrapStageHandler = function (t, e) {
    return w(t) && (t = { overallReset: t, seriesType: kl(t) }), t.uid = vo("stageHandler"), e && (t.visualType = e), t;
  };var My,
      Ty = {},
      Iy = {};Dl(Ty, Bm), Dl(Iy, bs), Ty.eachSeriesByType = Ty.eachRawSeriesByType = function (t) {
    My = t;
  }, Ty.eachComponent = function (t) {
    "series" === t.mainType && t.subType && (My = t.subType);
  };var Cy = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
      ky = { color: Cy, colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Cy] },
      Dy = "#eee",
      Ay = function Ay() {
    return { axisLine: { lineStyle: { color: Dy } }, axisTick: { lineStyle: { color: Dy } }, axisLabel: { textStyle: { color: Dy } }, splitLine: { lineStyle: { type: "dashed", color: "#aaa" } }, splitArea: { areaStyle: { color: Dy } } };
  },
      Py = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
      Oy = { color: Py, backgroundColor: "#333", tooltip: { axisPointer: { lineStyle: { color: Dy }, crossStyle: { color: Dy }, label: { color: "#000" } } }, legend: { textStyle: { color: Dy } }, textStyle: { color: Dy }, title: { textStyle: { color: Dy } }, toolbox: { iconStyle: { normal: { borderColor: Dy } } }, dataZoom: { textStyle: { color: Dy } }, visualMap: { textStyle: { color: Dy } }, timeline: { lineStyle: { color: Dy }, itemStyle: { normal: { color: Py[1] } }, label: { normal: { textStyle: { color: Dy } } }, controlStyle: { normal: { color: Dy, borderColor: Dy } } }, timeAxis: Ay(), logAxis: Ay(), valueAxis: Ay(), categoryAxis: Ay(), line: { symbol: "circle" }, graph: { color: Py }, gauge: { title: { textStyle: { color: Dy } } }, candlestick: { itemStyle: { normal: { color: "#FD1050", color0: "#0CF49B", borderColor: "#FD1050", borderColor0: "#0CF49B" } } } };Oy.categoryAxis.splitLine.show = false, ym.extend({ type: "dataset", defaultOption: { seriesLayoutBy: Dm, sourceHeader: null, dimensions: null, source: null }, optionUpdated: function optionUpdated() {
      is(this);
    } }), oy.extend({ type: "dataset" });var Ly = ta.extend({ type: "ellipse", shape: { cx: 0, cy: 0, rx: 0, ry: 0 }, buildPath: function buildPath(t, e) {
      var n = .5522848,
          i = e.cx,
          r = e.cy,
          a = e.rx,
          o = e.ry,
          s = a * n,
          l = o * n;t.moveTo(i - a, r), t.bezierCurveTo(i - a, r - l, i - s, r - o, i, r - o), t.bezierCurveTo(i + s, r - o, i + a, r - l, i + a, r), t.bezierCurveTo(i + a, r + l, i + s, r + o, i, r + o), t.bezierCurveTo(i - s, r + o, i - a, r + l, i - a, r), t.closePath();
    } }),
      By = /[\s,]+/;Pl.prototype.parse = function (t, e) {
    e = e || {};var n = Al(t);if (!n) throw new Error("Illegal svg");var i = new Kf();this._root = i;var r = n.getAttribute("viewBox") || "",
        a = parseFloat(n.getAttribute("width") || e.width),
        o = parseFloat(n.getAttribute("height") || e.height);isNaN(a) && (a = null), isNaN(o) && (o = null), El(n, i, null, true);for (var s = n.firstChild; s;) {
      this._parseNode(s, i), s = s.nextSibling;
    }var l, u;if (r) {
      var h = B(r).split(By);h.length >= 4 && (l = { x: parseFloat(h[0] || 0), y: parseFloat(h[1] || 0), width: parseFloat(h[2]), height: parseFloat(h[3]) });
    }if (l && null != a && null != o && (u = Nl(l, a, o), !e.ignoreViewBox)) {
      var c = i;i = new Kf(), i.add(c), c.scale = u.scale.slice(), c.position = u.position.slice();
    }return e.ignoreRootClip || null == a || null == o || i.setClipPath(new Sv({ shape: { x: 0, y: 0, width: a, height: o } })), { root: i, width: a, height: o, viewBoxRect: l, viewBoxTransform: u };
  }, Pl.prototype._parseNode = function (t, e) {
    var n = t.nodeName.toLowerCase();"defs" === n ? this._isDefine = true : "text" === n && (this._isText = true);var i;if (this._isDefine) {
      var r = zy[n];if (r) {
        var a = r.call(this, t),
            o = t.getAttribute("id");o && (this._defs[o] = a);
      }
    } else {
      var r = Ey[n];r && (i = r.call(this, t, e), e.add(i));
    }for (var s = t.firstChild; s;) {
      1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;
    }"defs" === n ? this._isDefine = false : "text" === n && (this._isText = false);
  }, Pl.prototype._parseText = function (t, e) {
    if (1 === t.nodeType) {
      var n = t.getAttribute("dx") || 0,
          i = t.getAttribute("dy") || 0;this._textX += parseFloat(n), this._textY += parseFloat(i);
    }var r = new cv({ style: { text: t.textContent, transformText: true }, position: [this._textX || 0, this._textY || 0] });Ll(e, r), El(t, r, this._defs);var a = r.style.fontSize;a && 9 > a && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= a / 9, r.scale[1] *= a / 9);var o = r.getBoundingRect();return this._textX += o.width, e.add(r), r;
  };var Ey = { g: function g(t, e) {
      var n = new Kf();return Ll(e, n), El(t, n, this._defs), n;
    }, rect: function rect(t, e) {
      var n = new Sv();return Ll(e, n), El(t, n, this._defs), n.setShape({ x: parseFloat(t.getAttribute("x") || 0), y: parseFloat(t.getAttribute("y") || 0), width: parseFloat(t.getAttribute("width") || 0), height: parseFloat(t.getAttribute("height") || 0) }), n;
    }, circle: function circle(t, e) {
      var n = new dv();return Ll(e, n), El(t, n, this._defs), n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), r: parseFloat(t.getAttribute("r") || 0) }), n;
    }, line: function line(t, e) {
      var n = new Tv();return Ll(e, n), El(t, n, this._defs), n.setShape({ x1: parseFloat(t.getAttribute("x1") || 0), y1: parseFloat(t.getAttribute("y1") || 0), x2: parseFloat(t.getAttribute("x2") || 0), y2: parseFloat(t.getAttribute("y2") || 0) }), n;
    }, ellipse: function ellipse(t, e) {
      var n = new Ly();return Ll(e, n), El(t, n, this._defs), n.setShape({ cx: parseFloat(t.getAttribute("cx") || 0), cy: parseFloat(t.getAttribute("cy") || 0), rx: parseFloat(t.getAttribute("rx") || 0), ry: parseFloat(t.getAttribute("ry") || 0) }), n;
    }, polygon: function polygon(t, e) {
      var n = t.getAttribute("points");n && (n = Bl(n));var i = new _v({ shape: { points: n || [] } });return Ll(e, i), El(t, i, this._defs), i;
    }, polyline: function polyline(t, e) {
      var n = new ta();Ll(e, n), El(t, n, this._defs);var i = t.getAttribute("points");i && (i = Bl(i));var r = new xv({ shape: { points: i || [] } });return r;
    }, image: function image(t, e) {
      var n = new Ci();return Ll(e, n), El(t, n, this._defs), n.setStyle({ image: t.getAttribute("xlink:href"), x: t.getAttribute("x"), y: t.getAttribute("y"), width: t.getAttribute("width"), height: t.getAttribute("height") }), n;
    }, text: function text(t, e) {
      var n = t.getAttribute("x") || 0,
          i = t.getAttribute("y") || 0,
          r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0;this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(a);var o = new Kf();return Ll(e, o), El(t, o, this._defs), o;
    }, tspan: function tspan(t, e) {
      var n = t.getAttribute("x"),
          i = t.getAttribute("y");null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));var r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0,
          o = new Kf();return Ll(e, o), El(t, o, this._defs), this._textX += r, this._textY += a, o;
    }, path: function path(t, e) {
      var n = t.getAttribute("d") || "",
          i = ra(n);return Ll(e, i), El(t, i, this._defs), i;
    } },
      zy = { lineargradient: function lineargradient(t) {
      var e = parseInt(t.getAttribute("x1") || 0, 10),
          n = parseInt(t.getAttribute("y1") || 0, 10),
          i = parseInt(t.getAttribute("x2") || 10, 10),
          r = parseInt(t.getAttribute("y2") || 0, 10),
          a = new Pv(e, n, i, r);return Ol(t, a), a;
    }, radialgradient: function radialgradient() {} },
      Ry = { fill: "fill", stroke: "stroke", "stroke-width": "lineWidth", opacity: "opacity", "fill-opacity": "fillOpacity", "stroke-opacity": "strokeOpacity", "stroke-dasharray": "lineDash", "stroke-dashoffset": "lineDashOffset", "stroke-linecap": "lineCap", "stroke-linejoin": "lineJoin", "stroke-miterlimit": "miterLimit", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "text-align": "textAlign", "alignment-baseline": "textBaseline" },
      Fy = /url\(\s*#(.*?)\)/,
      Ny = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
      Hy = /([^\s:;]+)\s*:\s*([^:;]+)/g,
      Vy = F(),
      Wy = { registerMap: function registerMap(t, e, n) {
      var i;return x(e) ? i = e : e.svg ? i = [{ type: "svg", source: e.svg, specialAreas: e.specialAreas }] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{ type: "geoJSON", source: e, specialAreas: n }]), f(i, function (t) {
        var e = t.type;"geoJson" === e && (e = t.type = "geoJSON");var n = Gy[e];n(t);
      }), Vy.set(t, i);
    }, retrieveMap: function retrieveMap(t) {
      return Vy.get(t);
    } },
      Gy = { geoJSON: function geoJSON(t) {
      var e = t.source;t.geoJSON = b(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e;
    }, svg: function svg(t) {
      t.svgXML = Al(t.source);
    } },
      Xy = L,
      Yy = f,
      jy = w,
      qy = S,
      Uy = ym.parseClassType,
      Zy = "4.8.0",
      Ky = { zrender: "4.3.1" },
      $y = 1,
      Qy = 1e3,
      Jy = 800,
      t_ = 900,
      e_ = 5e3,
      n_ = 1e3,
      i_ = 1100,
      r_ = 2e3,
      a_ = 3e3,
      o_ = 3500,
      s_ = 4e3,
      l_ = 5e3,
      u_ = { PROCESSOR: { FILTER: Qy, SERIES_FILTER: Jy, STATISTIC: e_ }, VISUAL: { LAYOUT: n_, PROGRESSIVE_LAYOUT: i_, GLOBAL: r_, CHART: a_, POST_CHART_LAYOUT: o_, COMPONENT: s_, BRUSH: l_ } },
      h_ = "__flagInMainProcess",
      c_ = "__optionUpdated",
      d_ = /^[a-zA-Z0-9_]+$/;Vl.prototype.on = Hl("on", true), Vl.prototype.off = Hl("off", true), Vl.prototype.one = Hl("one", true), c(Vl, rf);var f_ = Wl.prototype;f_._onframe = function () {
    if (!this._disposed) {
      var t = this._scheduler;if (this[c_]) {
        var e = this[c_].silent;this[h_] = true, Xl(this), p_.update.call(this), this[h_] = false, this[c_] = false, Ul.call(this, e), Zl.call(this, e);
      } else if (t.unfinished) {
        var n = $y,
            i = this._model,
            r = this._api;t.unfinished = false;do {
          var a = +new Date();t.performSeriesTasks(i), t.performDataProcessorTasks(i), jl(this, i), t.performVisualTasks(i), eu(this, this._model, r, "remain"), n -= +new Date() - a;
        } while (n > 0 && t.unfinished);t.unfinished || this._zr.flush();
      }
    }
  }, f_.getDom = function () {
    return this._dom;
  }, f_.getZr = function () {
    return this._zr;
  }, f_.setOption = function (t, e, n) {
    if (!this._disposed) {
      var i;if (qy(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[h_] = true, !this._model || e) {
        var r = new Ms(this._api),
            a = this._theme,
            o = this._model = new Bm();o.scheduler = this._scheduler, o.init(null, null, a, r);
      }this._model.setOption(t, __), n ? (this[c_] = { silent: i }, this[h_] = false) : (Xl(this), p_.update.call(this), this._zr.flush(), this[c_] = false, this[h_] = false, Ul.call(this, i), Zl.call(this, i));
    }
  }, f_.setTheme = function () {
    console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
  }, f_.getModel = function () {
    return this._model;
  }, f_.getOption = function () {
    return this._model && this._model.getOption();
  }, f_.getWidth = function () {
    return this._zr.getWidth();
  }, f_.getHeight = function () {
    return this._zr.getHeight();
  }, f_.getDevicePixelRatio = function () {
    return this._zr.painter.dpr || window.devicePixelRatio || 1;
  }, f_.getRenderedCanvas = function (t) {
    if (Ed.canvasSupported) {
      t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");var e = this._zr;return e.painter.getRenderedCanvas(t);
    }
  }, f_.getSvgDataURL = function () {
    if (Ed.svgSupported) {
      var t = this._zr,
          e = t.storage.getDisplayList();return f(e, function (t) {
        t.stopAnimation(true);
      }), t.painter.toDataURL();
    }
  }, f_.getDataURL = function (t) {
    if (!this._disposed) {
      t = t || {};var e = t.excludeComponents,
          n = this._model,
          i = [],
          r = this;Yy(e, function (t) {
        n.eachComponent({ mainType: t }, function (t) {
          var e = r._componentsMap[t.__viewId];e.group.ignore || (i.push(e), e.group.ignore = true);
        });
      });var a = "svg" === this._zr.painter.getType() ? this.getSvgDataURL() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));return Yy(i, function (t) {
        t.group.ignore = false;
      }), a;
    }
  }, f_.getConnectedDataURL = function (t) {
    if (!this._disposed && Ed.canvasSupported) {
      var e = "svg" === t.type,
          n = this.group,
          r = Math.min,
          a = Math.max,
          o = Infinity;if (T_[n]) {
        var s = o,
            l = o,
            u = -Infinity,
            h = -Infinity,
            c = [],
            d = t && t.pixelRatio || 1;f(M_, function (o) {
          if (o.group === n) {
            var d = e ? o.getZr().painter.getSvgDom().innerHTML : o.getRenderedCanvas(i(t)),
                f = o.getDom().getBoundingClientRect();s = r(f.left, s), l = r(f.top, l), u = a(f.right, u), h = a(f.bottom, h), c.push({ dom: d, left: f.left, top: f.top });
          }
        }), s *= d, l *= d, u *= d, h *= d;var p = u - s,
            g = h - l,
            v = jd(),
            m = Ui(v, { renderer: e ? "svg" : "canvas" });if (m.resize({ width: p, height: g }), e) {
          var y = "";return Yy(c, function (t) {
            var e = t.left - s,
                n = t.top - l;y += '<g transform="translate(' + e + "," + n + ')">' + t.dom + "</g>";
          }), m.painter.getSvgRoot().innerHTML = y, t.connectedBackgroundColor && m.painter.setBackgroundColor(t.connectedBackgroundColor), m.refreshImmediately(), m.painter.toDataURL();
        }return t.connectedBackgroundColor && m.add(new Sv({ shape: { x: 0, y: 0, width: p, height: g }, style: { fill: t.connectedBackgroundColor } })), Yy(c, function (t) {
          var e = new Ci({ style: { x: t.left * d - s, y: t.top * d - l, image: t.dom } });m.add(e);
        }), m.refreshImmediately(), v.toDataURL("image/" + (t && t.type || "png"));
      }return this.getDataURL(t);
    }
  }, f_.convertToPixel = _(Gl, "convertToPixel"), f_.convertFromPixel = _(Gl, "convertFromPixel"), f_.containPixel = function (t, e) {
    if (!this._disposed) {
      var n,
          i = this._model;return t = ur(i, t), f(t, function (t, i) {
        i.indexOf("Models") >= 0 && f(t, function (t) {
          var r = t.coordinateSystem;if (r && r.containPoint) n |= !!r.containPoint(e);else if ("seriesModels" === i) {
            var a = this._chartsMap[t.__viewId];a && a.containPoint && (n |= a.containPoint(e, t));
          }
        }, this);
      }, this), !!n;
    }
  }, f_.getVisual = function (t, e) {
    var n = this._model;t = ur(n, t, { defaultMainType: "series" });var i = t.seriesModel,
        r = i.getData(),
        a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;return null != a ? r.getItemVisual(a, e) : r.getVisual(e);
  }, f_.getViewOfComponentModel = function (t) {
    return this._componentsMap[t.__viewId];
  }, f_.getViewOfSeriesModel = function (t) {
    return this._chartsMap[t.__viewId];
  };var p_ = { prepareAndUpdate: function prepareAndUpdate(t) {
      Xl(this), p_.update.call(this, t);
    }, update: function update(t) {
      var e = this._model,
          n = this._api,
          i = this._zr,
          r = this._coordSysMgr,
          a = this._scheduler;if (e) {
        a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), jl(this, e), r.update(e, n), Ql(e), a.performVisualTasks(e, t), Jl(this, e, n, t);var o = e.get("backgroundColor") || "transparent";if (Ed.canvasSupported) i.setBackgroundColor(o);else {
          var s = Je(o);o = un(s, "rgb"), 0 === s[3] && (o = "transparent");
        }nu(e, n);
      }
    }, updateTransform: function updateTransform(t) {
      var e = this._model,
          n = this,
          i = this._api;if (e) {
        var r = [];e.eachComponent(function (a, o) {
          var s = n.getViewOfComponentModel(o);if (s && s.__alive) if (s.updateTransform) {
            var l = s.updateTransform(o, e, i, t);l && l.update && r.push(s);
          } else r.push(s);
        });var a = F();e.eachSeries(function (r) {
          var o = n._chartsMap[r.__viewId];if (o.updateTransform) {
            var s = o.updateTransform(r, e, i, t);s && s.update && a.set(r.uid, 1);
          } else a.set(r.uid, 1);
        }), Ql(e), this._scheduler.performVisualTasks(e, t, { setDirty: true, dirtyMap: a }), eu(n, e, i, t, a), nu(e, this._api);
      }
    }, updateView: function updateView(t) {
      var e = this._model;e && (ll.markUpdateMethod(t, "updateView"), Ql(e), this._scheduler.performVisualTasks(e, t, { setDirty: true }), Jl(this, this._model, this._api, t), nu(e, this._api));
    }, updateVisual: function updateVisual(t) {
      p_.update.call(this, t);
    }, updateLayout: function updateLayout(t) {
      p_.update.call(this, t);
    } };f_.resize = function (t) {
    if (!this._disposed) {
      this._zr.resize(t);var e = this._model;if (this._loadingFX && this._loadingFX.resize(), e) {
        var n = e.resetOption("media"),
            i = t && t.silent;this[h_] = true, n && Xl(this), p_.update.call(this), this[h_] = false, Ul.call(this, i), Zl.call(this, i);
      }
    }
  }, f_.showLoading = function (t, e) {
    if (!this._disposed && (qy(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), S_[t])) {
      var n = S_[t](this._api, e),
          i = this._zr;this._loadingFX = n, i.add(n);
    }
  }, f_.hideLoading = function () {
    this._disposed || (this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null);
  }, f_.makeActionFromEvent = function (t) {
    var e = o({}, t);return e.type = m_[t.type], e;
  }, f_.dispatchAction = function (t, e) {
    if (!this._disposed && (qy(e) || (e = { silent: !!e }), v_[t.type] && this._model)) {
      if (this[h_]) return undefined;ql.call(this, t, e.silent), e.flush ? this._zr.flush(true) : e.flush !== false && Ed.browser.weChat && this._throttledZrFlush(), Ul.call(this, e.silent), Zl.call(this, e.silent);
    }
  }, f_.appendData = function (t) {
    if (!this._disposed) {
      var e = t.seriesIndex,
          n = this.getModel(),
          i = n.getSeriesByIndex(e);i.appendData(t), this._scheduler.unfinished = true;
    }
  }, f_.on = Hl("on", false), f_.off = Hl("off", false), f_.one = Hl("one", false);var g_ = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];f_._initEvents = function () {
    Yy(g_, function (t) {
      var e = function e(_e3) {
        var n,
            i = this.getModel(),
            r = _e3.target,
            a = "globalout" === t;if (a) n = {};else if (r && null != r.dataIndex) {
          var s = r.dataModel || i.getSeriesByIndex(r.seriesIndex);n = s && s.getDataParams(r.dataIndex, r.dataType, r) || {};
        } else r && r.eventData && (n = o({}, r.eventData));if (n) {
          var l = n.componentType,
              u = n.componentIndex;("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", u = n.seriesIndex);var h = l && null != u && i.getComponent(l, u),
              c = h && this["series" === h.mainType ? "_chartsMap" : "_componentsMap"][h.__viewId];n.event = _e3, n.type = t, this._ecEventProcessor.eventInfo = { targetEl: r, packedEvent: n, model: h, view: c }, this.trigger(t, n);
        }
      };e.zrEventfulCallAtLast = true, this._zr.on(t, e, this);
    }, this), Yy(m_, function (t, e) {
      this._messageCenter.on(e, function (t) {
        this.trigger(e, t);
      }, this);
    }, this);
  }, f_.isDisposed = function () {
    return this._disposed;
  }, f_.clear = function () {
    this._disposed || this.setOption({ series: [] }, true);
  }, f_.dispose = function () {
    if (!this._disposed) {
      this._disposed = true, cr(this.getDom(), k_, "");var t = this._api,
          e = this._model;Yy(this._componentsViews, function (n) {
        n.dispose(e, t);
      }), Yy(this._chartsViews, function (n) {
        n.dispose(e, t);
      }), this._zr.dispose(), delete M_[this.id];
    }
  }, c(Wl, rf), su.prototype = { constructor: su, normalizeQuery: function normalizeQuery(t) {
      var e = {},
          n = {},
          i = {};if (b(t)) {
        var r = Uy(t);e.mainType = r.main || null, e.subType = r.sub || null;
      } else {
        var a = ["Index", "Name", "Id"],
            o = { name: 1, dataIndex: 1, dataType: 1 };f(t, function (t, r) {
          for (var s = false, l = 0; l < a.length; l++) {
            var u = a[l],
                h = r.lastIndexOf(u);if (h > 0 && h === r.length - u.length) {
              var c = r.slice(0, h);"data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = true);
            }
          }o.hasOwnProperty(r) && (n[r] = t, s = true), s || (i[r] = t);
        });
      }return { cptQuery: e, dataQuery: n, otherQuery: i };
    }, filter: function filter(t, e) {
      function n(t, e, n, i) {
        return null == t[n] || e[i || n] === t[n];
      }var i = this.eventInfo;if (!i) return true;var r = i.targetEl,
          a = i.packedEvent,
          o = i.model,
          s = i.view;if (!o || !s) return true;var l = e.cptQuery,
          u = e.dataQuery;return n(l, o, "mainType") && n(l, o, "subType") && n(l, o, "index", "componentIndex") && n(l, o, "name") && n(l, o, "id") && n(u, a, "name") && n(u, a, "dataIndex") && n(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a));
    }, afterTrigger: function afterTrigger() {
      this.eventInfo = null;
    } };var v_ = {},
      m_ = {},
      y_ = [],
      __ = [],
      x_ = [],
      w_ = [],
      b_ = {},
      S_ = {},
      M_ = {},
      T_ = {},
      I_ = new Date() - 0,
      C_ = new Date() - 0,
      k_ = "_echarts_instance_",
      D_ = cu;Su(r_, vy), vu(Um), mu(t_, Zm), Tu("default", xy), _u({ type: "highlight", event: "highlight", update: "highlight" }, H), _u({ type: "downplay", event: "downplay", update: "downplay" }, H), gu("light", ky), gu("dark", Oy);var A_ = {};Bu.prototype = { constructor: Bu, add: function add(t) {
      return this._add = t, this;
    }, update: function update(t) {
      return this._update = t, this;
    }, remove: function remove(t) {
      return this._remove = t, this;
    }, execute: function execute() {
      var t,
          e = this._old,
          n = this._new,
          i = {},
          r = {},
          a = [],
          o = [];for (Eu(e, i, a, "_oldKeyGetter", this), Eu(n, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
        var s = a[t],
            l = r[s];if (null != l) {
          var u = l.length;u ? (1 === u && (r[s] = null), l = l.shift()) : r[s] = null, this._update && this._update(l, t);
        } else this._remove && this._remove(t);
      }for (var t = 0; t < o.length; t++) {
        var s = o[t];if (r.hasOwnProperty(s)) {
          var l = r[s];if (null == l) continue;if (l.length) for (var h = 0, u = l.length; u > h; h++) {
            this._add && this._add(l[h]);
          } else this._add && this._add(l);
        }
      }
    } };var P_ = F(["tooltip", "label", "itemName", "itemId", "seriesName"]),
      O_ = S,
      L_ = "undefined",
      B_ = -1,
      E_ = "e\x00\x00",
      z_ = { "float": (typeof Float64Array === "undefined" ? "undefined" : _typeof(Float64Array)) === L_ ? Array : Float64Array, "int": (typeof Int32Array === "undefined" ? "undefined" : _typeof(Int32Array)) === L_ ? Array : Int32Array, ordinal: Array, number: Array, time: Array },
      R_ = (typeof Uint32Array === "undefined" ? "undefined" : _typeof(Uint32Array)) === L_ ? Array : Uint32Array,
      F_ = (typeof Int32Array === "undefined" ? "undefined" : _typeof(Int32Array)) === L_ ? Array : Int32Array,
      N_ = (typeof Uint16Array === "undefined" ? "undefined" : _typeof(Uint16Array)) === L_ ? Array : Uint16Array,
      H_ = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
      V_ = ["_extent", "_approximateExtent", "_rawExtent"],
      W_ = function W_(t, e) {
    t = t || ["x", "y"];for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
      var o = t[a];b(o) ? o = new Hu({ name: o }) : o instanceof Hu || (o = new Hu(o));var s = o.name;o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = []);
    }this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = zu(this), this._invertedIndicesMap = r, this._calculationInfo = {}, this.userOutput = this._dimensionsSummary.userOutput;
  },
      G_ = W_.prototype;G_.type = "list", G_.hasItemOption = true, G_.getDimension = function (t) {
    return ("number" == typeof t || !isNaN(t) && !this._dimensionInfos.hasOwnProperty(t)) && (t = this.dimensions[t]), t;
  }, G_.getDimensionInfo = function (t) {
    return this._dimensionInfos[this.getDimension(t)];
  }, G_.getDimensionsOnCoord = function () {
    return this._dimensionsSummary.dataDimsOnCoord.slice();
  }, G_.mapDimension = function (t, e) {
    var n = this._dimensionsSummary;if (null == e) return n.encodeFirstDimNotExtra[t];var i = n.encode[t];return e === true ? (i || []).slice() : i && i[e];
  }, G_.initData = function (t, e, n) {
    var i = ns.isInstance(t) || d(t);
    i && (t = new Ws(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = false), this.defaultDimValueGetter = Jm[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._dimValueGetterArrayRows = Jm.arrayRows, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = false);
  }, G_.getProvider = function () {
    return this._rawData;
  }, G_.appendData = function (t) {
    var e = this._rawData,
        n = this.count();e.appendData(t);var i = e.count();e.persistent || (i += n), this._initDataFromProvider(n, i);
  }, G_.appendValues = function (t, e) {
    for (var n = this._chunkSize, i = this._storage, r = this.dimensions, a = r.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e ? e.length : 0), u = this._chunkCount, h = 0; a > h; h++) {
      var c = r[h];o[c] || (o[c] = Ju()), i[c] || (i[c] = []), Xu(i, this._dimensionInfos[c], n, u, l), this._chunkCount = i[c].length;
    }for (var d = new Array(a), f = s; l > f; f++) {
      for (var p = f - s, g = Math.floor(f / n), v = f % n, m = 0; a > m; m++) {
        var c = r[m],
            y = this._dimValueGetterArrayRows(t[p] || d, c, p, m);i[c][g][v] = y;var _ = o[c];y < _[0] && (_[0] = y), y > _[1] && (_[1] = y);
      }e && (this._nameList[f] = e[p]);
    }this._rawCount = this._count = l, this._extent = {}, Yu(this);
  }, G_._initDataFromProvider = function (t, e) {
    if (!(t >= e)) {
      for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, u = this._nameList, h = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = 0; s > p; p++) {
        var g = o[p];c[g] || (c[g] = Ju());var v = l[g];0 === v.otherDims.itemName && (n = this._nameDimIdx = p), 0 === v.otherDims.itemId && (this._idDimIdx = p), a[g] || (a[g] = []), Xu(a, v, i, f, e), this._chunkCount = a[g].length;
      }for (var m = new Array(s), y = t; e > y; y++) {
        m = r.getItem(y, m);for (var _ = Math.floor(y / i), x = y % i, w = 0; s > w; w++) {
          var g = o[w],
              b = a[g][_],
              S = this._dimValueGetter(m, g, y, w);b[x] = S;var M = c[g];S < M[0] && (M[0] = S), S > M[1] && (M[1] = S);
        }if (!r.pure) {
          var T = u[y];if (m && null == T) if (null != m.name) u[y] = T = m.name;else if (null != n) {
            var I = o[n],
                C = a[I][_];if (C) {
              T = C[x];var k = l[I].ordinalMeta;k && k.categories.length && (T = k.categories[T]);
            }
          }var D = null == m ? null : m.id;null == D && null != T && (d[T] = d[T] || 0, D = T, d[T] > 0 && (D += "__ec__" + d[T]), d[T]++), null != D && (h[y] = D);
        }
      }!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, Yu(this);
    }
  }, G_.count = function () {
    return this._count;
  }, G_.getIndices = function () {
    var t,
        e = this._indices;if (e) {
      var n = e.constructor,
          i = this._count;if (n === Array) {
        t = new n(i);for (var r = 0; i > r; r++) {
          t[r] = e[r];
        }
      } else t = new n(e.buffer, 0, i);
    } else for (var n = Vu(this), t = new n(this.count()), r = 0; r < t.length; r++) {
      t[r] = r;
    }return t;
  }, G_.get = function (t, e) {
    if (!(e >= 0 && e < this._count)) return NaN;var n = this._storage;if (!n[t]) return NaN;e = this.getRawIndex(e);var i = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = n[t][i],
        o = a[r];return o;
  }, G_.getByRawIndex = function (t, e) {
    if (!(e >= 0 && e < this._rawCount)) return NaN;var n = this._storage[t];if (!n) return NaN;var i = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = n[i];return a[r];
  }, G_._getFast = function (t, e) {
    var n = Math.floor(e / this._chunkSize),
        i = e % this._chunkSize,
        r = this._storage[t][n];return r[i];
  }, G_.getValues = function (t, e) {
    var n = [];x(t) || (e = t, t = this.dimensions);for (var i = 0, r = t.length; r > i; i++) {
      n.push(this.get(t[i], e));
    }return n;
  }, G_.hasValue = function (t) {
    for (var e = this._dimensionsSummary.dataDimsOnCoord, n = 0, i = e.length; i > n; n++) {
      if (isNaN(this.get(e[n], t))) return false;
    }return true;
  }, G_.getDataExtent = function (t) {
    t = this.getDimension(t);var e = this._storage[t],
        n = Ju();if (!e) return n;var i,
        r = this.count(),
        a = !this._indices;if (a) return this._rawExtent[t].slice();if (i = this._extent[t]) return i.slice();i = n;for (var o = i[0], s = i[1], l = 0; r > l; l++) {
      var u = this._getFast(t, this.getRawIndex(l));o > u && (o = u), u > s && (s = u);
    }return i = [o, s], this._extent[t] = i, i;
  }, G_.getApproximateExtent = function (t) {
    return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);
  }, G_.setApproximateExtent = function (t, e) {
    e = this.getDimension(e), this._approximateExtent[e] = t.slice();
  }, G_.getCalculationInfo = function (t) {
    return this._calculationInfo[t];
  }, G_.setCalculationInfo = function (t, e) {
    O_(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e;
  }, G_.getSum = function (t) {
    var e = this._storage[t],
        n = 0;if (e) for (var i = 0, r = this.count(); r > i; i++) {
      var a = this.get(t, i);isNaN(a) || (n += a);
    }return n;
  }, G_.getMedian = function (t) {
    var e = [];this.each(t, function (t) {
      isNaN(t) || e.push(t);
    });var n = [].concat(e).sort(function (t, e) {
      return t - e;
    }),
        i = this.count();return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;
  }, G_.rawIndexOf = function (t, e) {
    var n = t && this._invertedIndicesMap[t],
        i = n[e];return null == i || isNaN(i) ? B_ : i;
  }, G_.indexOfName = function (t) {
    for (var e = 0, n = this.count(); n > e; e++) {
      if (this.getName(e) === t) return e;
    }return -1;
  }, G_.indexOfRawIndex = function (t) {
    if (t >= this._rawCount || 0 > t) return -1;if (!this._indices) return t;var e = this._indices,
        n = e[t];if (null != n && n < this._count && n === t) return t;for (var i = 0, r = this._count - 1; r >= i;) {
      var a = (i + r) / 2 | 0;if (e[a] < t) i = a + 1;else {
        if (!(e[a] > t)) return a;r = a - 1;
      }
    }return -1;
  }, G_.indicesOfNearest = function (t, e, n) {
    var i = this._storage,
        r = i[t],
        a = [];if (!r) return a;null == n && (n = Infinity);for (var o = Infinity, s = -1, l = 0, u = 0, h = this.count(); h > u; u++) {
      var c = e - this.get(t, u),
          d = Math.abs(c);n >= d && ((o > d || d === o && c >= 0 && 0 > s) && (o = d, s = c, l = 0), c === s && (a[l++] = u));
    }return a.length = l, a;
  }, G_.getRawIndex = qu, G_.getRawDataItem = function (t) {
    if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));for (var e = [], n = 0; n < this.dimensions.length; n++) {
      var i = this.dimensions[n];e.push(this.get(i, t));
    }return e;
  }, G_.getName = function (t) {
    var e = this.getRawIndex(t);return this._nameList[e] || ju(this, this._nameDimIdx, e) || "";
  }, G_.getId = function (t) {
    return Zu(this, this.getRawIndex(t));
  }, G_.each = function (t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(Ku(t), this.getDimension, this);for (var r = t.length, a = 0; a < this.count(); a++) {
        switch (r) {case 0:
            e.call(n, a);break;case 1:
            e.call(n, this.get(t[0], a), a);break;case 2:
            e.call(n, this.get(t[0], a), this.get(t[1], a), a);break;default:
            for (var o = 0, s = []; r > o; o++) {
              s[o] = this.get(t[o], a);
            }s[o] = a, e.apply(n, s);}
      }
    }
  }, G_.filterSelf = function (t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(Ku(t), this.getDimension, this);for (var r = this.count(), a = Vu(this), o = new a(r), s = [], l = t.length, u = 0, h = t[0], c = 0; r > c; c++) {
        var d,
            f = this.getRawIndex(c);if (0 === l) d = e.call(n, c);else if (1 === l) {
          var g = this._getFast(h, f);d = e.call(n, g, c);
        } else {
          for (var v = 0; l > v; v++) {
            s[v] = this._getFast(h, f);
          }s[v] = c, d = e.apply(n, s);
        }d && (o[u++] = f);
      }return r > u && (this._indices = o), this._count = u, this._extent = {}, this.getRawIndex = this._indices ? Uu : qu, this;
    }
  }, G_.selectRange = function (t) {
    if (this._count) {
      var e = [];for (var n in t) {
        t.hasOwnProperty(n) && e.push(n);
      }var i = e.length;if (i) {
        var r = this.count(),
            a = Vu(this),
            o = new a(r),
            s = 0,
            l = e[0],
            u = t[l][0],
            h = t[l][1],
            c = false;if (!this._indices) {
          var d = 0;if (1 === i) {
            for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++) {
              for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m];(y >= u && h >= y || isNaN(y)) && (o[s++] = d), d++;
              }
            }c = true;
          } else if (2 === i) {
            for (var f = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++) {
              for (var g = f[p], b = _[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m],
                    S = b[m];(y >= u && h >= y || isNaN(y)) && (S >= x && w >= S || isNaN(S)) && (o[s++] = d), d++;
              }
            }c = true;
          }
        }if (!c) if (1 === i) for (var m = 0; r > m; m++) {
          var M = this.getRawIndex(m),
              y = this._getFast(l, M);(y >= u && h >= y || isNaN(y)) && (o[s++] = M);
        } else for (var m = 0; r > m; m++) {
          for (var T = true, M = this.getRawIndex(m), p = 0; i > p; p++) {
            var I = e[p],
                y = this._getFast(n, M);(y < t[I][0] || y > t[I][1]) && (T = false);
          }T && (o[s++] = this.getRawIndex(m));
        }return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? Uu : qu, this;
      }
    }
  }, G_.mapArray = function (t, e, n, i) {
    "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;var r = [];return this.each(t, function () {
      r.push(e && e.apply(this, arguments));
    }, n), r;
  }, G_.map = function (t, e, n, i) {
    n = n || i || this, t = p(Ku(t), this.getDimension, this);var r = $u(this, t);r._indices = this._indices, r.getRawIndex = r._indices ? Uu : qu;for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, u = this.count(), h = [], c = r._rawExtent, d = 0; u > d; d++) {
      for (var f = 0; l > f; f++) {
        h[f] = this.get(t[f], d);
      }h[l] = d;var g = e && e.apply(n, h);if (null != g) {
        "object" != (typeof g === "undefined" ? "undefined" : _typeof(g)) && (o[0] = g, g = o);for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {
          var x = t[_],
              w = g[_],
              b = c[x],
              S = a[x];S && (S[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w);
        }
      }
    }return r;
  }, G_.downSample = function (t, e, n, i) {
    for (var r = $u(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], u = this.count(), h = this._chunkSize, c = r._rawExtent[t], d = new (Vu(this))(u), f = 0, p = 0; u > p; p += s) {
      s > u - p && (s = u - p, o.length = s);for (var g = 0; s > g; g++) {
        var v = this.getRawIndex(p + g),
            m = Math.floor(v / h),
            y = v % h;o[g] = l[m][y];
      }var _ = n(o),
          x = this.getRawIndex(Math.min(p + i(o, _) || 0, u - 1)),
          w = Math.floor(x / h),
          b = x % h;l[w][b] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), d[f++] = x;
    }return r._count = f, r._indices = d, r.getRawIndex = Uu, r;
  }, G_.getItemModel = function (t) {
    var e = this.hostModel;return new fo(this.getRawDataItem(t), e, e && e.ecModel);
  }, G_.diff = function (t) {
    var e = this;return new Bu(t ? t.getIndices() : [], this.getIndices(), function (e) {
      return Zu(t, e);
    }, function (t) {
      return Zu(e, t);
    });
  }, G_.getVisual = function (t) {
    var e = this._visual;return e && e[t];
  }, G_.setVisual = function (t, e) {
    if (O_(t)) for (var n in t) {
      t.hasOwnProperty(n) && this.setVisual(n, t[n]);
    } else this._visual = this._visual || {}, this._visual[t] = e;
  }, G_.setLayout = function (t, e) {
    if (O_(t)) for (var n in t) {
      t.hasOwnProperty(n) && this.setLayout(n, t[n]);
    } else this._layout[t] = e;
  }, G_.getLayout = function (t) {
    return this._layout[t];
  }, G_.getItemLayout = function (t) {
    return this._itemLayouts[t];
  }, G_.setItemLayout = function (t, e, n) {
    this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e;
  }, G_.clearItemLayouts = function () {
    this._itemLayouts.length = 0;
  }, G_.getItemVisual = function (t, e, n) {
    var i = this._itemVisuals[t],
        r = i && i[e];return null != r || n ? r : this.getVisual(e);
  }, G_.setItemVisual = function (t, e, n) {
    var i = this._itemVisuals[t] || {},
        r = this.hasItemVisual;if (this._itemVisuals[t] = i, O_(e)) for (var a in e) {
      e.hasOwnProperty(a) && (i[a] = e[a], r[a] = true);
    } else i[e] = n, r[e] = true;
  }, G_.clearAllVisual = function () {
    this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {};
  };var X_ = function X_(t) {
    t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType;
  };G_.setItemGraphicEl = function (t, e) {
    var n = this.hostModel;e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(X_, e)), this._graphicEls[t] = e;
  }, G_.getItemGraphicEl = function (t) {
    return this._graphicEls[t];
  }, G_.eachItemGraphicEl = function (t, e) {
    f(this._graphicEls, function (n, i) {
      n && t && t.call(e, n, i);
    });
  }, G_.cloneShallow = function (t) {
    if (!t) {
      var e = p(this.dimensions, this.getDimensionInfo, this);t = new W_(e, this.hostModel);
    }if (t._storage = this._storage, Gu(t, this), this._indices) {
      var n = this._indices.constructor;t._indices = new n(this._indices);
    } else t._indices = null;return t.getRawIndex = t._indices ? Uu : qu, t;
  }, G_.wrapMethod = function (t, e) {
    var n = this[t];"function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
      var t = n.apply(this, arguments);return e.apply(this, [t].concat(P(arguments)));
    });
  }, G_.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], G_.CHANGABLE_METHODS = ["filterSelf", "selectRange"];var Y_ = function Y_(t, e) {
    return e = e || {}, th(e.coordDimensions || [], t, { dimsDef: e.dimensionsDefine || t.dimensionsDefine, encodeDef: e.encodeDefine || t.encodeDefine, dimCount: e.dimensionsCount, encodeDefaulter: e.encodeDefaulter, generateCoord: e.generateCoord, generateCoordCount: e.generateCoordCount });
  },
      j_ = { cartesian2d: function cartesian2d(t, e, n, i) {
      var r = t.getReferringComponents("xAxis")[0],
          a = t.getReferringComponents("yAxis")[0];e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), ah(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), ah(a) && (i.set("y", a), null == e.firstCategoryDimIndex & (e.firstCategoryDimIndex = 1));
    }, singleAxis: function singleAxis(t, e, n, i) {
      var r = t.getReferringComponents("singleAxis")[0];e.coordSysDims = ["single"], n.set("single", r), ah(r) && (i.set("single", r), e.firstCategoryDimIndex = 0);
    }, polar: function polar(t, e, n, i) {
      var r = t.getReferringComponents("polar")[0],
          a = r.findAxisModel("radiusAxis"),
          o = r.findAxisModel("angleAxis");e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), ah(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0), ah(o) && (i.set("angle", o), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1));
    }, geo: function geo(t, e) {
      e.coordSysDims = ["lng", "lat"];
    }, parallel: function parallel(t, e, n, i) {
      var r = t.ecModel,
          a = r.getComponent("parallel", t.get("parallelIndex")),
          o = e.coordSysDims = a.dimensions.slice();f(a.parallelAxisIndex, function (t, a) {
        var s = r.getComponent("parallelAxis", t),
            l = o[a];n.set(l, s), ah(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a);
      });
    } };dh.prototype.parse = function (t) {
    return t;
  }, dh.prototype.getSetting = function (t) {
    return this._setting[t];
  }, dh.prototype.contain = function (t) {
    var e = this._extent;return t >= e[0] && t <= e[1];
  }, dh.prototype.normalize = function (t) {
    var e = this._extent;return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
  }, dh.prototype.scale = function (t) {
    var e = this._extent;return t * (e[1] - e[0]) + e[0];
  }, dh.prototype.unionExtent = function (t) {
    var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
  }, dh.prototype.unionExtentFromData = function (t, e) {
    this.unionExtent(t.getApproximateExtent(e));
  }, dh.prototype.getExtent = function () {
    return this._extent.slice();
  }, dh.prototype.setExtent = function (t, e) {
    var n = this._extent;isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
  }, dh.prototype.isBlank = function () {
    return this._isBlank;
  }, dh.prototype.setBlank = function (t) {
    this._isBlank = t;
  }, dh.prototype.getLabel = null, vr(dh), xr(dh, { registerWhenExtend: true }), fh.createByAxisModel = function (t) {
    var e = t.option,
        n = e.data,
        i = n && p(n, gh);return new fh({ categories: i, needCollect: !i, deduplication: e.dedplication !== false });
  };var q_ = fh.prototype;q_.getOrdinal = function (t) {
    return ph(this).get(t);
  }, q_.parseAndCollect = function (t) {
    var e,
        n = this._needCollect;if ("string" != typeof t && !n) return t;if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;var i = ph(this);return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = NaN), e;
  };var U_ = dh.prototype,
      Z_ = dh.extend({ type: "ordinal", init: function init(t, e) {
      (!t || x(t)) && (t = new fh({ categories: t })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1];
    }, parse: function parse(t) {
      return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
    }, contain: function contain(t) {
      return t = this.parse(t), U_.contain.call(this, t) && null != this._ordinalMeta.categories[t];
    }, normalize: function normalize(t) {
      return U_.normalize.call(this, this.parse(t));
    }, scale: function scale(t) {
      return Math.round(U_.scale.call(this, t));
    }, getTicks: function getTicks() {
      for (var t = [], e = this._extent, n = e[0]; n <= e[1];) {
        t.push(n), n++;
      }return t;
    }, getLabel: function getLabel(t) {
      return this.isBlank() ? undefined : this._ordinalMeta.categories[t];
    }, count: function count() {
      return this._extent[1] - this._extent[0] + 1;
    }, unionExtentFromData: function unionExtentFromData(t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }, getOrdinalMeta: function getOrdinalMeta() {
      return this._ordinalMeta;
    }, niceTicks: H, niceExtent: H });Z_.create = function () {
    return new Z_();
  };var K_ = bo,
      $_ = bo,
      Q_ = dh.extend({ type: "interval", _interval: 0, _intervalPrecision: 2, setExtent: function setExtent(t, e) {
      var n = this._extent;isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
    }, unionExtent: function unionExtent(t) {
      var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Q_.prototype.setExtent.call(this, e[0], e[1]);
    }, getInterval: function getInterval() {
      return this._interval;
    }, setInterval: function setInterval(t) {
      this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = mh(t);
    }, getTicks: function getTicks(t) {
      var e = this._interval,
          n = this._extent,
          i = this._niceExtent,
          r = this._intervalPrecision,
          a = [];if (!e) return a;var o = 1e4;n[0] < i[0] && a.push(t ? $_(i[0] - e, r) : n[0]);for (var s = i[0]; s <= i[1] && (a.push(s), s = $_(s + e, r), s !== a[a.length - 1]);) {
        if (a.length > o) return [];
      }var l = a.length ? a[a.length - 1] : i[1];return n[1] > l && a.push(t ? $_(l + e, r) : n[1]), a;
    }, getMinorTicks: function getMinorTicks(t) {
      for (var e = this.getTicks(true), n = [], i = this.getExtent(), r = 1; r < e.length; r++) {
        for (var a = e[r], o = e[r - 1], s = 0, l = [], u = a - o, h = u / t; t - 1 > s;) {
          var c = bo(o + (s + 1) * h);c > i[0] && c < i[1] && l.push(c), s++;
        }n.push(l);
      }return n;
    }, getLabel: function getLabel(t, e) {
      if (null == t) return "";var n = e && e.precision;return null == n ? n = To(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = $_(t, n, true), Ro(t);
    }, niceTicks: function niceTicks(t, e, n) {
      t = t || 5;var i = this._extent,
          r = i[1] - i[0];if (isFinite(r)) {
        0 > r && (r = -r, i.reverse());var a = vh(i, t, e, n);this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent;
      }
    }, niceExtent: function niceExtent(t) {
      var e = this._extent;if (e[0] === e[1]) if (0 !== e[0]) {
        var n = e[0];t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2);
      } else e[1] = 1;var i = e[1] - e[0];isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var r = this._interval;t.fixMin || (e[0] = $_(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = $_(Math.ceil(e[1] / r) * r));
    } });Q_.create = function () {
    return new Q_();
  };var J_ = "__ec_stack_",
      tx = .5,
      ex = "undefined" != typeof Float32Array ? Float32Array : Array,
      nx = ({ seriesType: "bar", plan: ly(), reset: function reset(t) {
      function e(t, e) {
        for (var n, d = t.count, f = new ex(2 * d), p = new ex(2 * d), g = new ex(d), v = [], m = [], y = 0, _ = 0; null != (n = t.next());) {
          m[h] = e.get(s, n), m[1 - h] = e.get(l, n), v = i.dataToPoint(m, null, v), p[y] = u ? r.x + r.width : v[0], f[y++] = v[0], p[y] = u ? v[1] : r.y + r.height, f[y++] = v[1], g[_++] = n;
        }e.setLayout({ largePoints: f, largeDataIndices: g, largeBackgroundPoints: p, barWidth: c, valueAxisStart: Dh(a, o, false), backgroundStart: u ? r.x : r.y, valueAxisHorizontal: u });
      }if (Ch(t) && kh(t)) {
        var n = t.getData(),
            i = t.coordinateSystem,
            r = i.grid.getRect(),
            a = i.getBaseAxis(),
            o = i.getOtherAxis(a),
            s = n.mapDimension(o.dim),
            l = n.mapDimension(a.dim),
            u = o.isHorizontal(),
            h = u ? 0 : 1,
            c = Ih(Mh([t]), a, t).width;return c > tx || (c = tx), { progress: e };
      }
    } }, Q_.prototype),
      ix = Math.ceil,
      rx = Math.floor,
      ax = 1e3,
      ox = 60000,
      sx = 3600000,
      lx = 86400000,
      ux = function ux(t, e, n, i) {
    for (; i > n;) {
      var r = n + i >>> 1;t[r][1] < e ? n = r + 1 : i = r;
    }return n;
  },
      hx = Q_.extend({ type: "time", getLabel: function getLabel(t) {
      var e = this._stepLvl,
          n = new Date(t);return Xo(e[0], n, this.getSetting("useUTC"));
    }, niceExtent: function niceExtent(t) {
      var e = this._extent;if (e[0] === e[1] && (e[0] -= lx, e[1] += lx), e[1] === -Infinity && Infinity === e[0]) {
        var n = new Date();e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - lx;
      }this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var i = this._interval;t.fixMin || (e[0] = bo(rx(e[0] / i) * i)), t.fixMax || (e[1] = bo(ix(e[1] / i) * i));
    }, niceTicks: function niceTicks(t, e, n) {
      t = t || 10;var i = this._extent,
          r = i[1] - i[0],
          a = r / t;null != e && e > a && (a = e), null != n && a > n && (a = n);var o = cx.length,
          s = ux(cx, a, 0, o),
          l = cx[Math.min(s, o - 1)],
          u = l[1];if ("year" === l[0]) {
        var h = r / u,
            c = Lo(h / t, true);u *= c;
      }var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
          f = [Math.round(ix((i[0] - d) / u) * u + d), Math.round(rx((i[1] - d) / u) * u + d)];_h(f, i), this._stepLvl = l, this._interval = u, this._niceExtent = f;
    }, parse: function parse(t) {
      return +Ao(t);
    } });f(["contain", "normalize"], function (t) {
    hx.prototype[t] = function (e) {
      return nx[t].call(this, this.parse(e));
    };
  });var cx = [["hh:mm:ss", ax], ["hh:mm:ss", 5000], ["hh:mm:ss", 10000], ["hh:mm:ss", 15000], ["hh:mm:ss", 30000], ["hh:mm\nMM-dd", ox], ["hh:mm\nMM-dd", 300000], ["hh:mm\nMM-dd", 600000], ["hh:mm\nMM-dd", 900000], ["hh:mm\nMM-dd", 1800000], ["hh:mm\nMM-dd", sx], ["hh:mm\nMM-dd", 7200000], ["hh:mm\nMM-dd", 21600000], ["hh:mm\nMM-dd", 43200000], ["MM-dd\nyyyy", lx], ["MM-dd\nyyyy", 172800000], ["MM-dd\nyyyy", 259200000], ["MM-dd\nyyyy", 345600000], ["MM-dd\nyyyy", 432000000], ["MM-dd\nyyyy", 518400000], ["week", 604800000], ["MM-dd\nyyyy", 864000000], ["week", 1209600000], ["week", 1814400000], ["month", 2678400000], ["week", 3628800000], ["month", 5356800000], ["week", 6048000000], ["quarter", 8208000000], ["month", 10713600000], ["month", 13392000000], ["half-year", 16416000000], ["month", 21427200000], ["month", 26784000000], ["year", 32832000000]];hx.create = function (t) {
    return new hx({ useUTC: t.ecModel.get("useUTC") });
  };var dx = dh.prototype,
      fx = Q_.prototype,
      px = To,
      gx = bo,
      vx = Math.floor,
      mx = Math.ceil,
      yx = Math.pow,
      _x = Math.log,
      xx = dh.extend({ type: "log", base: 10, $constructor: function $constructor() {
      dh.apply(this, arguments), this._originalScale = new Q_();
    }, getTicks: function getTicks(t) {
      var e = this._originalScale,
          n = this._extent,
          i = e.getExtent();return p(fx.getTicks.call(this, t), function (t) {
        var r = bo(yx(this.base, t));return r = t === n[0] && e.__fixMin ? Ah(r, i[0]) : r, r = t === n[1] && e.__fixMax ? Ah(r, i[1]) : r;
      }, this);
    }, getMinorTicks: fx.getMinorTicks, getLabel: fx.getLabel, scale: function scale(t) {
      return t = dx.scale.call(this, t), yx(this.base, t);
    }, setExtent: function setExtent(t, e) {
      var n = this.base;t = _x(t) / _x(n), e = _x(e) / _x(n), fx.setExtent.call(this, t, e);
    }, getExtent: function getExtent() {
      var t = this.base,
          e = dx.getExtent.call(this);e[0] = yx(t, e[0]), e[1] = yx(t, e[1]);var n = this._originalScale,
          i = n.getExtent();return n.__fixMin && (e[0] = Ah(e[0], i[0])), n.__fixMax && (e[1] = Ah(e[1], i[1])), e;
    }, unionExtent: function unionExtent(t) {
      this._originalScale.unionExtent(t);var e = this.base;t[0] = _x(t[0]) / _x(e), t[1] = _x(t[1]) / _x(e), dx.unionExtent.call(this, t);
    }, unionExtentFromData: function unionExtentFromData(t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }, niceTicks: function niceTicks(t) {
      t = t || 10;var e = this._extent,
          n = e[1] - e[0];if (!(Infinity === n || 0 >= n)) {
        var i = Po(n),
            r = t / n * i;for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) {
          i *= 10;
        }var a = [bo(mx(e[0] / i) * i), bo(vx(e[1] / i) * i)];this._interval = i, this._niceExtent = a;
      }
    }, niceExtent: function niceExtent(t) {
      fx.niceExtent.call(this, t);var e = this._originalScale;e.__fixMin = t.fixMin, e.__fixMax = t.fixMax;
    } });f(["contain", "normalize"], function (t) {
    xx.prototype[t] = function (e) {
      return e = _x(e) / _x(this.base), dx[t].call(this, e);
    };
  }), xx.create = function () {
    return new xx();
  };var bx = { getMin: function getMin(t) {
      var e = this.option,
          n = t || null == e.rangeStart ? e.min : e.rangeStart;return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !C(n) && (n = this.axis.scale.parse(n)), n;
    }, getMax: function getMax(t) {
      var e = this.option,
          n = t || null == e.rangeEnd ? e.max : e.rangeEnd;return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !C(n) && (n = this.axis.scale.parse(n)), n;
    }, getNeedCrossZero: function getNeedCrossZero() {
      var t = this.option;return null != t.rangeStart || null != t.rangeEnd ? false : !t.scale;
    }, getCoordSysModel: H, setRange: function setRange(t, e) {
      this.option.rangeStart = t, this.option.rangeEnd = e;
    }, resetRange: function resetRange() {
      this.option.rangeStart = this.option.rangeEnd = null;
    } },
      Sx = pa({ type: "triangle", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath();
    } }),
      Mx = pa({ type: "diamond", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath();
    } }),
      Tx = pa({ type: "pin", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.x,
          i = e.y,
          r = e.width / 5 * 3,
          a = Math.max(r, e.height),
          o = r / 2,
          s = o * o / (a - o),
          l = i - a + o + s,
          u = Math.asin(s / o),
          h = Math.cos(u) * o,
          c = Math.sin(u),
          d = Math.cos(u),
          f = .6 * o,
          p = .7 * o;t.moveTo(n - h, l + s), t.arc(n, l, o, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - h + c * f, l + s + d * f, n - h, l + s), t.closePath();
    } }),
      Ix = pa({ type: "arrow", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.height,
          i = e.width,
          r = e.x,
          a = e.y,
          o = i / 3 * 2;t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath();
    } }),
      Cx = { line: Tv, rect: Sv, roundRect: Sv, square: Sv, circle: dv, diamond: Mx, pin: Tx, arrow: Ix, triangle: Sx },
      kx = { line: function line(t, e, n, i, r) {
      r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2;
    }, rect: function rect(t, e, n, i, r) {
      r.x = t, r.y = e, r.width = n, r.height = i;
    }, roundRect: function roundRect(t, e, n, i, r) {
      r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4;
    }, square: function square(t, e, n, i, r) {
      var a = Math.min(n, i);r.x = t, r.y = e, r.width = a, r.height = a;
    }, circle: function circle(t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2;
    }, diamond: function diamond(t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
    }, pin: function pin(t, e, n, i, r) {
      r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
    }, arrow: function arrow(t, e, n, i, r) {
      r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
    }, triangle: function triangle(t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
    } },
      Dx = {};f(Cx, function (t, e) {
    Dx[e] = new t();
  });var Ax = pa({ type: "symbol", shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 }, calculateTextPosition: function calculateTextPosition(t, e, n) {
      var i = Kn(t, e, n),
          r = this.shape;return r && "pin" === r.symbolType && "inside" === e.textPosition && (i.y = n.y + .4 * n.height), i;
    }, buildPath: function buildPath(t, e, n) {
      var i = e.symbolType;if ("none" !== i) {
        var r = Dx[i];r || (i = "rect", r = Dx[i]), kx[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n);
      }
    } }),
      Px = { isDimensionStacked: sh, enableDataStack: oh, getStackedDimension: lh },
      Ox = (Object.freeze || Object)({ createList: Vh, getLayoutRect: Ko, dataStack: Px, createScale: Wh, mixinAxisModelCommonMethods: Gh, completeDimensions: th, createDimensions: Y_, createSymbol: Hh }),
      Lx = 1e-8;jh.prototype = { constructor: jh, properties: null, getBoundingRect: function getBoundingRect() {
      var t = this._rect;if (t) return t;for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++) {
        if ("polygon" === o[s].type) {
          var l = o[s].exterior;Er(l, r, a), oe(n, n, r), se(i, i, a);
        }
      }return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new In(n[0], n[1], i[0] - n[0], i[1] - n[1]);
    }, contain: function contain(t) {
      var e = this.getBoundingRect(),
          n = this.geometries;if (!e.contain(t[0], t[1])) return false;t: for (var i = 0, r = n.length; r > i; i++) {
        if ("polygon" === n[i].type) {
          var a = n[i].exterior,
              o = n[i].interiors;if (Yh(a, t[0], t[1])) {
            for (var s = 0; s < (o ? o.length : 0); s++) {
              if (Yh(o[s])) continue t;
            }return true;
          }
        }
      }return false;
    }, transformTo: function transformTo(t, e, n, i) {
      var r = this.getBoundingRect(),
          a = r.width / r.height;n ? i || (i = n / a) : n = a * i;for (var o = new In(t, e, n, i), s = r.calculateTransform(o), l = this.geometries, u = 0; u < l.length; u++) {
        if ("polygon" === l[u].type) {
          for (var h = l[u].exterior, c = l[u].interiors, d = 0; d < h.length; d++) {
            ae(h[d], h[d], s);
          }for (var f = 0; f < (c ? c.length : 0); f++) {
            for (var d = 0; d < c[f].length; d++) {
              ae(c[f][d], c[f][d], s);
            }
          }
        }
      }r = this._rect, r.copy(o), this.center = [r.x + r.width / 2, r.y + r.height / 2];
    }, cloneShallow: function cloneShallow(t) {
      null == t && (t = this.name);var e = new jh(t, this.geometries, this.center);return e._rect = this._rect, e.transformTo = null, e;
    } };var Bx = function Bx(t, e) {
    return qh(t), p(v(t.features, function (t) {
      return t.geometry && t.properties && t.geometry.coordinates.length > 0;
    }), function (t) {
      var n = t.properties,
          i = t.geometry,
          r = i.coordinates,
          a = [];"Polygon" === i.type && a.push({ type: "polygon", exterior: r[0], interiors: r.slice(1) }), "MultiPolygon" === i.type && f(r, function (t) {
        t[0] && a.push({ type: "polygon", exterior: t[0], interiors: t.slice(1) });
      });var o = new jh(n[e || "name"], a, n.cp);return o.properties = n, o;
    });
  },
      Ex = lr(),
      zx = [0, 1],
      Rx = function Rx(t, e, n) {
    this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = false, this.onBand = false;
  };Rx.prototype = { constructor: Rx, contain: function contain(t) {
      var e = this._extent,
          n = Math.min(e[0], e[1]),
          i = Math.max(e[0], e[1]);return t >= n && i >= t;
    }, containData: function containData(t) {
      return this.scale.contain(t);
    }, getExtent: function getExtent() {
      return this._extent.slice();
    }, getPixelPrecision: function getPixelPrecision(t) {
      return Io(t || this.scale.getExtent(), this._extent);
    }, setExtent: function setExtent(t, e) {
      var n = this._extent;n[0] = t, n[1] = e;
    }, dataToCoord: function dataToCoord(t, e) {
      var n = this._extent,
          i = this.scale;return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), uc(n, i.count())), xo(t, zx, n, e);
    }, coordToData: function coordToData(t, e) {
      var n = this._extent,
          i = this.scale;this.onBand && "ordinal" === i.type && (n = n.slice(), uc(n, i.count()));var r = xo(t, n, zx, e);return this.scale.scale(r);
    }, pointToData: function pointToData() {}, getTicksCoords: function getTicksCoords(t) {
      t = t || {};var e = t.tickModel || this.getTickModel(),
          n = Kh(this, e),
          i = n.ticks,
          r = p(i, function (t) {
        return { coord: this.dataToCoord(t), tickValue: t };
      }, this),
          a = e.get("alignWithLabel");return hc(this, r, a, t.clamp), r;
    }, getMinorTicksCoords: function getMinorTicksCoords() {
      if ("ordinal" === this.scale.type) return [];var t = this.model.getModel("minorTick"),
          e = t.get("splitNumber");e > 0 && 100 > e || (e = 5);var n = this.scale.getMinorTicks(e),
          i = p(n, function (t) {
        return p(t, function (t) {
          return { coord: this.dataToCoord(t), tickValue: t };
        }, this);
      }, this);return i;
    }, getViewLabels: function getViewLabels() {
      return Zh(this).labels;
    }, getLabelModel: function getLabelModel() {
      return this.model.getModel("axisLabel");
    }, getTickModel: function getTickModel() {
      return this.model.getModel("axisTick");
    }, getBandWidth: function getBandWidth() {
      var t = this._extent,
          e = this.scale.getExtent(),
          n = e[1] - e[0] + (this.onBand ? 1 : 0);0 === n && (n = 1);var i = Math.abs(t[1] - t[0]);return Math.abs(i) / n;
    }, isHorizontal: null, getRotate: null, calculateCategoryInterval: function calculateCategoryInterval() {
      return ac(this);
    } };var Fx = Bx,
      Nx = {};f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
    Nx[t] = Zd[t];
  });var Hx = {};f(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "registerShape", "getShapeClass", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function (t) {
    Hx[t] = Uv[t];
  }), h(cc, Rx), dc.prototype.getIndicatorAxes = function () {
    return this._indicatorAxes;
  }, dc.prototype.dataToPoint = function (t, e) {
    var n = this._indicatorAxes[e];return this.coordToPoint(n.dataToCoord(t), e);
  }, dc.prototype.coordToPoint = function (t, e) {
    var n = this._indicatorAxes[e],
        i = n.angle,
        r = this.cx + t * Math.cos(i),
        a = this.cy - t * Math.sin(i);return [r, a];
  }, dc.prototype.pointToData = function (t) {
    var e = t[0] - this.cx,
        n = t[1] - this.cy,
        i = Math.sqrt(e * e + n * n);e /= i, n /= i;for (var r, a = Math.atan2(-n, e), o = Infinity, s = -1, l = 0; l < this._indicatorAxes.length; l++) {
      var u = this._indicatorAxes[l],
          h = Math.abs(a - u.angle);o > h && (r = u, s = l, o = h);
    }return [s, +(r && r.coordToData(i))];
  }, dc.prototype.resize = function (t, e) {
    var n = t.get("center"),
        i = e.getWidth(),
        r = e.getHeight(),
        a = Math.min(i, r) / 2;this.cx = wo(n[0], i), this.cy = wo(n[1], r), this.startAngle = t.get("startAngle") * Math.PI / 180;var o = t.get("radius");("string" == typeof o || "number" == typeof o) && (o = [0, o]), this.r0 = wo(o[0], a), this.r = wo(o[1], a), f(this._indicatorAxes, function (t, e) {
      t.setExtent(this.r0, this.r);var n = this.startAngle + e * Math.PI * 2 / this._indicatorAxes.length;n = Math.atan2(Math.sin(n), Math.cos(n)), t.angle = n;
    }, this);
  }, dc.prototype.update = function (t) {
    function e(t) {
      var e = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)),
          n = t / e;return 2 === n ? n = 5 : n *= 2, n * e;
    }var n = this._indicatorAxes,
        i = this._model;f(n, function (t) {
      t.scale.setExtent(Infinity, -Infinity);
    }), t.eachSeriesByType("radar", function (e) {
      if ("radar" === e.get("coordinateSystem") && t.getComponent("radar", e.get("radarIndex")) === i) {
        var r = e.getData();f(n, function (t) {
          t.scale.unionExtentFromData(r, r.mapDimension(t.dim));
        });
      }
    }, this);var r = i.get("splitNumber");f(n, function (t) {
      var n = Ph(t.scale, t.model).extent;Lh(t.scale, t.model);var i = t.model,
          a = t.scale,
          o = i.getMin(),
          s = i.getMax(),
          l = a.getInterval();if (null != o && null != s) a.setExtent(+o, +s), a.setInterval((s - o) / r);else if (null != o) {
        var u;do {
          u = o + l * r, a.setExtent(+o, u), a.setInterval(l), l = e(l);
        } while (u < n[1] && isFinite(u) && isFinite(n[1]));
      } else if (null != s) {
        var h;do {
          h = s - l * r, a.setExtent(h, +s), a.setInterval(l), l = e(l);
        } while (h > n[0] && isFinite(h) && isFinite(n[0]));
      } else {
        var c = a.getTicks().length - 1;c > r && (l = e(l));var u = Math.ceil(n[1] / l) * l,
            h = bo(u - l * r);a.setExtent(h, u), a.setInterval(l);
      }
    });
  }, dc.dimensions = [], dc.create = function (t, e) {
    var n = [];return t.eachComponent("radar", function (i) {
      var r = new dc(i, t, e);n.push(r), i.coordinateSystem = r;
    }), t.eachSeriesByType("radar", function (t) {
      "radar" === t.get("coordinateSystem") && (t.coordinateSystem = n[t.get("radarIndex") || 0]);
    }), n;
  }, Ss.register("radar", dc);var Vx = { show: true, zlevel: 0, z: 0, inverse: false, name: "", nameLocation: "end", nameRotate: null, nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." }, nameTextStyle: {}, nameGap: 15, silent: false, triggerEvent: false, tooltip: { show: false }, axisPointer: {}, axisLine: { show: true, onZero: true, onZeroAxisIndex: null, lineStyle: { color: "#333", width: 1, type: "solid" }, symbol: ["none", "none"], symbolSize: [10, 15] }, axisTick: { show: true, inside: false, length: 5, lineStyle: { width: 1 } }, axisLabel: { show: true, inside: false, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12 }, splitLine: { show: true, lineStyle: { color: ["#ccc"], width: 1, type: "solid" } }, splitArea: { show: false, areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] } } },
      Wx = {};Wx.categoryAxis = r({ boundaryGap: true, deduplication: null, splitLine: { show: false }, axisTick: { alignWithLabel: false, interval: "auto" }, axisLabel: { interval: "auto" } }, Vx), Wx.valueAxis = r({ boundaryGap: [0, 0], splitNumber: 5, minorTick: { show: false, splitNumber: 5, length: 3, lineStyle: {} }, minorSplitLine: { show: false, lineStyle: { color: "#eee", width: 1 } } }, Vx), Wx.timeAxis = s({ scale: true, min: "dataMin", max: "dataMax" }, Wx.valueAxis), Wx.logAxis = s({ scale: true, logBase: 10 }, Wx.valueAxis);var Gx = Wx.valueAxis,
      Xx = (Iu({ type: "radar", optionUpdated: function optionUpdated() {
      var t = this.get("boundaryGap"),
          e = this.get("splitNumber"),
          n = this.get("scale"),
          a = this.get("axisLine"),
          l = this.get("axisTick"),
          u = this.get("axisType"),
          h = this.get("axisLabel"),
          c = this.get("name"),
          d = this.get("name.show"),
          f = this.get("name.formatter"),
          g = this.get("nameGap"),
          v = this.get("triggerEvent"),
          m = p(this.get("indicator") || [], function (p) {
        null != p.max && p.max > 0 && !p.min ? p.min = 0 : null != p.min && p.min < 0 && !p.max && (p.max = 0);
        var m = c;if (null != p.color && (m = s({ color: p.color }, c)), p = r(i(p), { boundaryGap: t, splitNumber: e, scale: n, axisLine: a, axisTick: l, axisType: u, axisLabel: h, name: p.text, nameLocation: "end", nameGap: g, nameTextStyle: m, triggerEvent: v }, false), d || (p.name = ""), "string" == typeof f) {
          var y = p.name;p.name = f.replace("{value}", null != y ? y : "");
        } else "function" == typeof f && (p.name = f(p.name, p));var _ = o(new fo(p, null, this.ecModel), bx);return _.mainType = "radar", _.componentIndex = this.componentIndex, _;
      }, this);this.getIndicatorModels = function () {
        return m;
      };
    }, defaultOption: { zlevel: 0, z: 0, center: ["50%", "50%"], radius: "75%", startAngle: 90, name: { show: true }, boundaryGap: [0, 0], splitNumber: 5, nameGap: 15, scale: false, shape: "polygon", axisLine: r({ lineStyle: { color: "#bbb" } }, Gx.axisLine), axisLabel: fc(Gx.axisLabel, false), axisTick: fc(Gx.axisTick, false), axisType: "interval", splitLine: fc(Gx.splitLine, true), splitArea: fc(Gx.splitArea, true), indicator: [] } }), Math.PI),
      Yx = function Yx(t, e) {
    this.opt = e, this.axisModel = t, s(e, { labelOffset: 0, nameDirection: 1, tickDirection: 1, labelDirection: 1, silent: true }), this.group = new Kf();var n = new Kf({ position: e.position.slice(), rotation: e.rotation });n.updateTransform(), this._transform = n.transform, this._dumbGroup = n;
  };Yx.prototype = { constructor: Yx, hasBuilder: function hasBuilder(t) {
      return !!jx[t];
    }, add: function add(t) {
      jx[t].call(this);
    }, getGroup: function getGroup() {
      return this.group;
    } };var jx = { axisLine: function axisLine() {
      var t = this.opt,
          e = this.axisModel;if (e.get("axisLine.show")) {
        var n = this.axisModel.axis.getExtent(),
            i = this._transform,
            r = [n[0], 0],
            a = [n[1], 0];i && (ae(r, r, i), ae(a, a, i));var s = o({ lineCap: "round" }, e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new Tv({ anid: "line", subPixelOptimize: true, shape: { x1: r[0], y1: r[1], x2: a[0], y2: a[1] }, style: s, strokeContainThreshold: t.strokeContainThreshold || 5, silent: true, z2: 1 }));var l = e.get("axisLine.symbol"),
            u = e.get("axisLine.symbolSize"),
            h = e.get("axisLine.symbolOffset") || 0;if ("number" == typeof h && (h = [h, h]), null != l) {
          "string" == typeof l && (l = [l, l]), ("string" == typeof u || "number" == typeof u) && (u = [u, u]);var c = u[0],
              d = u[1];f([{ rotate: t.rotation + Math.PI / 2, offset: h[0], r: 0 }, { rotate: t.rotation - Math.PI / 2, offset: h[1], r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1])) }], function (e, n) {
            if ("none" !== l[n] && null != l[n]) {
              var i = Hh(l[n], -c / 2, -d / 2, c, d, s.stroke, true),
                  a = e.r + e.offset,
                  o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];i.attr({ rotation: e.rotate, position: o, silent: true, z2: 11 }), this.group.add(i);
            }
          }, this);
        }
      }
    }, axisTickLabel: function axisTickLabel() {
      var t = this.axisModel,
          e = this.opt,
          n = xc(this, t, e),
          i = bc(this, t, e);gc(t, i, n), wc(this, t, e);
    }, axisName: function axisName() {
      var t = this.opt,
          e = this.axisModel,
          n = k(t.axisName, e.get("name"));if (n) {
        var i,
            r = e.get("nameLocation"),
            a = t.nameDirection,
            s = e.getModel("nameTextStyle"),
            l = e.get("nameGap") || 0,
            u = this.axisModel.axis.getExtent(),
            h = u[0] > u[1] ? -1 : 1,
            c = ["start" === r ? u[0] - h * l : "end" === r ? u[1] + h * l : (u[0] + u[1]) / 2, yc(r) ? t.labelOffset + a * l : 0],
            d = e.get("nameRotate");null != d && (d = d * Xx / 180);var f;yc(r) ? i = Ux(t.rotation, null != d ? d : t.rotation, a) : (i = pc(t, r, d || 0, u), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));var p = s.getFont(),
            g = e.get("nameTruncate", true) || {},
            v = g.ellipsis,
            m = k(t.nameTruncateMaxWidth, g.maxWidth, f),
            y = null != v && null != m ? cm(n, m, p, v, { minChar: 2, placeholder: g.placeholder }) : n,
            _ = e.get("tooltip", true),
            x = e.mainType,
            w = { componentType: x, name: n, $vars: ["name"] };w[x + "Index"] = e.componentIndex;var b = new cv({ anid: "name", __fullText: n, __truncatedText: y, position: c, rotation: i.rotation, silent: Zx(e), z2: 1, tooltip: _ && _.show ? o({ content: n, formatter: function formatter() {
              return n;
            }, formatterParams: w }, _) : null });Ga(b.style, s, { text: y, textFont: p, textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"), textAlign: s.get("align") || i.textAlign, textVerticalAlign: s.get("verticalAlign") || i.textVerticalAlign }), e.get("triggerEvent") && (b.eventData = qx(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform();
      }
    } },
      qx = Yx.makeAxisEventDataBase = function (t) {
    var e = { componentType: t.mainType, componentIndex: t.componentIndex };return e[t.mainType + "Index"] = t.componentIndex, e;
  },
      Ux = Yx.innerTextLayout = function (t, e, n) {
    var i,
        r,
        a = ko(e - t);return Do(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : Do(a - Xx) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && Xx > a ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), { rotation: a, textAlign: i, textVerticalAlign: r };
  },
      Zx = Yx.isLabelSilent = function (t) {
    var e = t.get("tooltip");return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
  },
      Kx = ["axisLine", "axisTickLabel", "axisName"];Cu({ type: "radar", render: function render(t) {
      var e = this.group;e.removeAll(), this._buildAxes(t), this._buildSplitLineAndArea(t);
    }, _buildAxes: function _buildAxes(t) {
      var e = t.coordinateSystem,
          n = e.getIndicatorAxes(),
          i = p(n, function (t) {
        var n = new Yx(t.model, { position: [e.cx, e.cy], rotation: t.angle, labelDirection: -1, tickDirection: -1, nameDirection: 1 });return n;
      });f(i, function (t) {
        f(Kx, t.add, t), this.group.add(t.getGroup());
      }, this);
    }, _buildSplitLineAndArea: function _buildSplitLineAndArea(t) {
      function e(t, e, n) {
        var i = n % e.length;return t[i] = t[i] || [], i;
      }var n = t.coordinateSystem,
          i = n.getIndicatorAxes();if (i.length) {
        var r = t.get("shape"),
            a = t.getModel("splitLine"),
            o = t.getModel("splitArea"),
            l = a.getModel("lineStyle"),
            u = o.getModel("areaStyle"),
            h = a.get("show"),
            c = o.get("show"),
            d = l.get("color"),
            g = u.get("color");d = x(d) ? d : [d], g = x(g) ? g : [g];var v = [],
            m = [];if ("circle" === r) for (var y = i[0].getTicksCoords(), _ = n.cx, w = n.cy, b = 0; b < y.length; b++) {
          if (h) {
            var S = e(v, d, b);v[S].push(new dv({ shape: { cx: _, cy: w, r: y[b].coord } }));
          }if (c && b < y.length - 1) {
            var S = e(m, g, b);m[S].push(new vv({ shape: { cx: _, cy: w, r0: y[b].coord, r: y[b + 1].coord } }));
          }
        } else for (var M, T = p(i, function (t, e) {
          var i = t.getTicksCoords();return M = null == M ? i.length - 1 : Math.min(i.length - 1, M), p(i, function (t) {
            return n.coordToPoint(t.coord, e);
          });
        }), I = [], b = 0; M >= b; b++) {
          for (var C = [], k = 0; k < i.length; k++) {
            C.push(T[k][b]);
          }if (C[0] && C.push(C[0].slice()), h) {
            var S = e(v, d, b);v[S].push(new xv({ shape: { points: C } }));
          }if (c && I) {
            var S = e(m, g, b - 1);m[S].push(new _v({ shape: { points: C.concat(I) } }));
          }I = C.slice().reverse();
        }var D = l.getLineStyle(),
            A = u.getAreaStyle();f(m, function (t, e) {
          this.group.add(Xv(t, { style: s({ stroke: "none", fill: g[e % g.length] }, A), silent: true }));
        }, this), f(v, function (t, e) {
          this.group.add(Xv(t, { style: s({ fill: "none", stroke: d[e % d.length] }, D), silent: true }));
        }, this);
      }
    } });var $x = function $x(t, e, n) {
    e = x(e) && { coordDimensions: e } || o({}, e);var i = t.getSource(),
        r = Y_(i, e),
        a = new W_(r, t);return a.initData(i, n), a;
  },
      Qx = ay.extend({ type: "series.radar", dependencies: ["radar"], init: function init() {
      Qx.superApply(this, "init", arguments), this.legendVisualProvider = new Sc(y(this.getData, this), y(this.getRawData, this));
    }, getInitialData: function getInitialData() {
      return $x(this, { generateCoord: "indicator_", generateCoordCount: Infinity });
    }, formatTooltip: function formatTooltip(t) {
      var e = this.getData(),
          n = this.coordinateSystem,
          i = n.getIndicatorAxes(),
          r = this.getData().getName(t);return No("" === r ? this.name : r) + "<br/>" + p(i, function (n) {
        var i = e.get(e.mapDimension(n.dim), t);return No(n.name + " : " + i);
      }).join("<br />");
    }, getTooltipPosition: function getTooltipPosition(t) {
      if (null != t) for (var e = this.getData(), n = this.coordinateSystem, i = e.getValues(p(n.dimensions, function (t) {
        return e.mapDimension(t);
      }), t, true), r = 0, a = i.length; a > r; r++) {
        if (!isNaN(i[r])) {
          var o = n.getIndicatorAxes();return n.coordToPoint(o[r].dataToCoord(i[r]), r);
        }
      }
    }, defaultOption: { zlevel: 0, z: 2, coordinateSystem: "radar", legendHoverLink: true, radarIndex: 0, lineStyle: { width: 2, type: "solid" }, label: { position: "top" }, symbol: "emptyCircle", symbolSize: 4 } });Du({ type: "radar", render: function render(t) {
      function e(t, e) {
        var n = t.getItemVisual(e, "symbol") || "circle",
            i = t.getItemVisual(e, "color");if ("none" !== n) {
          var r = Mc(t.getItemVisual(e, "symbolSize")),
              a = Hh(n, -1, -1, 2, 2, i);return a.attr({ style: { strokeNoScale: true }, z2: 100, scale: [r[0] / 2, r[1] / 2] }), a;
        }
      }function n(n, i, r, a, o, s) {
        r.removeAll();for (var l = 0; l < i.length - 1; l++) {
          var u = e(a, o);u && (u.__dimIdx = l, n[l] ? (u.attr("position", n[l]), Uv[s ? "initProps" : "updateProps"](u, { position: i[l] }, t, o)) : u.attr("position", i[l]), r.add(u));
        }
      }function r(t) {
        return p(t, function () {
          return [a.cx, a.cy];
        });
      }var a = t.coordinateSystem,
          o = this.group,
          l = t.getData(),
          u = this._data;l.diff(u).add(function (e) {
        var i = l.getItemLayout(e);if (i) {
          var a = new _v(),
              o = new xv(),
              s = { shape: { points: i } };a.shape.points = r(i), o.shape.points = r(i), to(a, s, t, e), to(o, s, t, e);var u = new Kf(),
              h = new Kf();u.add(o), u.add(a), u.add(h), n(o.shape.points, i, h, l, e, true), l.setItemGraphicEl(e, u);
        }
      }).update(function (e, i) {
        var r = u.getItemGraphicEl(i),
            a = r.childAt(0),
            o = r.childAt(1),
            s = r.childAt(2),
            h = { shape: { points: l.getItemLayout(e) } };h.shape.points && (n(a.shape.points, h.shape.points, s, l, e, false), Ja(a, h, t), Ja(o, h, t), l.setItemGraphicEl(e, r));
      }).remove(function (t) {
        o.remove(u.getItemGraphicEl(t));
      }).execute(), l.eachItemGraphicEl(function (t, e) {
        var n = l.getItemModel(e),
            r = t.childAt(0),
            a = t.childAt(1),
            u = t.childAt(2),
            h = l.getItemVisual(e, "color");o.add(t), r.useStyle(s(n.getModel("lineStyle").getLineStyle(), { fill: "none", stroke: h })), r.hoverStyle = n.getModel("emphasis.lineStyle").getLineStyle();var c = n.getModel("areaStyle"),
            d = n.getModel("emphasis.areaStyle"),
            f = c.isEmpty() && c.parentModel.isEmpty(),
            p = d.isEmpty() && d.parentModel.isEmpty();p = p && f, a.ignore = f, a.useStyle(s(c.getAreaStyle(), { fill: h, opacity: .7 })), a.hoverStyle = d.getAreaStyle();var g = n.getModel("itemStyle").getItemStyle(["color"]),
            v = n.getModel("emphasis.itemStyle").getItemStyle(),
            m = n.getModel("label"),
            y = n.getModel("emphasis.label");u.eachChild(function (t) {
          t.setStyle(g), t.hoverStyle = i(v);var n = l.get(l.dimensions[t.__dimIdx], e);(null == n || isNaN(n)) && (n = ""), Va(t.style, t.hoverStyle, m, y, { labelFetcher: l.hostModel, labelDataIndex: e, labelDimIndex: t.__dimIdx, defaultText: n, autoColor: h, isRectText: true });
        }), t.highDownOnUpdate = function (t, e) {
          a.attr("ignore", "emphasis" === e ? p : f);
        }, Ra(t);
      }), this._data = l;
    }, remove: function remove() {
      this.group.removeAll(), this._data = null;
    }, dispose: function dispose() {} });var Jx = function Jx(t) {
    return { getTargetSeries: function getTargetSeries(e) {
        var n = {},
            i = F();return e.eachSeriesByType(t, function (t) {
          t.__paletteScope = n, i.set(t.uid, t);
        }), i;
      }, reset: function reset(t) {
        var e = t.getRawData(),
            n = {},
            i = t.getData();i.each(function (t) {
          var e = i.getRawIndex(t);n[e] = t;
        }), e.each(function (r) {
          var a,
              o = n[r],
              s = null != o && i.getItemVisual(o, "color", true),
              l = null != o && i.getItemVisual(o, "borderColor", true);if (s && l || (a = e.getItemModel(r)), !s) {
            var u = a.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());null != o && i.setItemVisual(o, "color", u);
          }if (!l) {
            var h = a.get("itemStyle.borderColor");null != o && i.setItemVisual(o, "borderColor", h);
          }
        });
      } };
  },
      tw = function tw(t, e, n) {
    return { seriesType: t, performRawSeries: true, reset: function reset(t, i) {
        function r(e, n) {
          if (f) {
            var i = t.getRawValue(n),
                r = t.getDataParams(n);h && e.setItemVisual(n, "symbol", o(i, r)), c && e.setItemVisual(n, "symbolSize", s(i, r)), d && e.setItemVisual(n, "symbolRotate", u(i, r));
          }if (e.hasItemOption) {
            var a = e.getItemModel(n),
                l = a.getShallow("symbol", true),
                p = a.getShallow("symbolSize", true),
                g = a.getShallow("symbolRotate", true),
                v = a.getShallow("symbolKeepAspect", true);null != l && e.setItemVisual(n, "symbol", l), null != p && e.setItemVisual(n, "symbolSize", p), null != g && e.setItemVisual(n, "symbolRotate", g), null != v && e.setItemVisual(n, "symbolKeepAspect", v);
          }
        }var a = t.getData(),
            o = t.get("symbol"),
            s = t.get("symbolSize"),
            l = t.get("symbolKeepAspect"),
            u = t.get("symbolRotate"),
            h = w(o),
            c = w(s),
            d = w(u),
            f = h || c || d,
            p = !h && o ? o : e,
            g = c ? null : s;return a.setVisual({ legendSymbol: n || p, symbol: p, symbolSize: g, symbolKeepAspect: l, symbolRotate: u }), i.isSeriesFiltered(t) ? undefined : { dataEach: a.hasItemOption || f ? r : null };
      } };
  },
      ew = function ew(t) {
    t.eachSeriesByType("radar", function (t) {
      var e = t.getData(),
          n = [],
          i = t.coordinateSystem;if (i) {
        var r = i.getIndicatorAxes();f(r, function (t, a) {
          e.each(e.mapDimension(r[a].dim), function (t, e) {
            n[e] = n[e] || [];var r = i.dataToPoint(t, a);n[e][a] = Tc(r) ? r : Ic(i);
          });
        }), e.each(function (t) {
          var r = m(n[t], function (t) {
            return Tc(t);
          }) || Ic(i);n[t].push(r.slice()), e.setItemLayout(t, n[t]);
        });
      }
    });
  },
      nw = function nw(t) {
    return { seriesType: t, reset: function reset(t, e) {
        var n = e.findComponents({ mainType: "legend" });if (n && n.length) {
          var i = t.getData();i.filterSelf(function (t) {
            for (var e = i.getName(t), r = 0; r < n.length; r++) {
              if (!n[r].isSelected(e)) return false;
            }return true;
          });
        }
      } };
  },
      iw = function iw(t) {
    var e = t.polar;if (e) {
      x(e) || (e = [e]);var n = [];f(e, function (e) {
        e.indicator ? (e.type && !e.shape && (e.shape = e.type), t.radar = t.radar || [], x(t.radar) || (t.radar = [t.radar]), t.radar.push(e)) : n.push(e);
      }), t.polar = n;
    }f(t.series, function (t) {
      t && "radar" === t.type && t.polarIndex && (t.radarIndex = t.polarIndex);
    });
  };Su(Jx("radar")), Su(tw("radar", "circle")), bu(ew), mu(nw("radar")), vu(iw);var rw = f,
      aw = _,
      ow = function ow(t, e) {
    var n,
        i = [],
        r = t.seriesIndex;if (null == r || !(n = e.getSeriesByIndex(r))) return { point: [] };var a = n.getData(),
        o = sr(a, t);if (null == o || 0 > o || x(o)) return { point: [] };var s = a.getItemGraphicEl(o),
        l = n.coordinateSystem;if (n.getTooltipPosition) i = n.getTooltipPosition(o) || [];else if (l && l.dataToPoint) i = l.dataToPoint(a.getValues(p(l.dimensions, function (t) {
      return a.mapDimension(t);
    }), o, true)) || [];else if (s) {
      var u = s.getBoundingRect().clone();u.applyTransform(s.transform), i = [u.x + u.width / 2, u.y + u.height / 2];
    }return { point: i, el: s };
  },
      sw = f,
      lw = _,
      uw = lr(),
      hw = function hw(t, e, n) {
    var i = t.currTrigger,
        r = [t.x, t.y],
        a = t,
        o = t.dispatchAction || y(n.dispatchAction, n),
        s = e.getComponent("axisPointer").coordSysAxesInfo;if (s) {
      qc(r) && (r = ow({ seriesIndex: a.seriesIndex, dataIndex: a.dataIndex }, e).point);var l = qc(r),
          u = a.axesInfo,
          h = s.axesInfo,
          c = "leave" === i || qc(r),
          d = {},
          f = {},
          p = { list: [], map: {} },
          g = { showPointer: lw(Hc, f), showTooltip: lw(Vc, p) };sw(s.coordSysMap, function (t, e) {
        var n = l || t.containPoint(r);sw(s.coordSysAxesInfo[e], function (t) {
          var e = t.axis,
              i = Yc(u, t);if (!c && n && (!u || i)) {
            var a = i && i.value;null != a || l || (a = e.pointToData(r)), null != a && Fc(t, a, g, false, d);
          }
        });
      });var v = {};return sw(h, function (t, e) {
        var n = t.linkGroup;n && !f[e] && sw(n.axesInfo, function (e, i) {
          var r = f[i];if (e !== t && r) {
            var a = r.value;n.mapper && (a = t.axis.scale.parse(n.mapper(a, jc(e), jc(t)))), v[t.key] = a;
          }
        });
      }), sw(v, function (t, e) {
        Fc(h[e], t, g, true, d);
      }), Wc(f, h, d), Gc(p, r, t, o), Xc(h, o, n), d;
    }
  },
      cw = (Iu({ type: "axisPointer", coordSysAxesInfo: null, defaultOption: { show: "auto", triggerOn: null, zlevel: 0, z: 50, type: "line", snap: false, triggerTooltip: true, value: null, status: null, link: [], animation: null, animationDurationUpdate: 200, lineStyle: { color: "#aaa", width: 1, type: "solid" }, shadowStyle: { color: "rgba(150,150,150,0.3)" }, label: { show: true, formatter: null, precision: "auto", margin: 3, color: "#fff", padding: [5, 7, 5, 7], backgroundColor: "auto", borderColor: null, borderWidth: 0, shadowBlur: 3, shadowColor: "#aaa" }, handle: { show: false, icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z", size: 45, margin: 50, color: "#333", shadowBlur: 3, shadowColor: "#aaa", shadowOffsetX: 0, shadowOffsetY: 2, throttle: 40 } } }), lr()),
      dw = f,
      fw = Cu({ type: "axisPointer", render: function render(t, e, n) {
      var i = e.getComponent("tooltip"),
          r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";Uc("axisPointer", n, function (t, e, n) {
        "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({ type: "updateAxisPointer", currTrigger: t, x: e && e.offsetX, y: e && e.offsetY });
      });
    }, remove: function remove(t, e) {
      td(e.getZr(), "axisPointer"), fw.superApply(this._model, "remove", arguments);
    }, dispose: function dispose(t, e) {
      td("axisPointer", e), fw.superApply(this._model, "dispose", arguments);
    } }),
      pw = lr(),
      gw = i,
      vw = y;ed.prototype = { _group: null, _lastGraphicKey: null, _handle: null, _dragging: false, _lastValue: null, _lastStatus: null, _payloadInfo: null, animationThreshold: 15, render: function render(t, e, n, i) {
      var r = e.get("value"),
          a = e.get("status");if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== a) {
        this._lastValue = r, this._lastStatus = a;var o = this._group,
            s = this._handle;if (!a || "hide" === a) return o && o.hide(), undefined;o && o.show(), s && s.show();var l = {};this.makeElOption(l, r, t, e, n);var u = l.graphicKey;u !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = u;var h = this._moveAnimation = this.determineAnimation(t, e);if (o) {
          var c = _(nd, e, h);this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e);
        } else o = this._group = new Kf(), this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), n.getZr().add(o);od(o, e, true), this._renderHandle(r);
      }
    }, remove: function remove(t) {
      this.clear(t);
    }, dispose: function dispose(t) {
      this.clear(t);
    }, determineAnimation: function determineAnimation(t, e) {
      var n = e.get("animation"),
          i = t.axis,
          r = "category" === i.type,
          a = e.get("snap");if (!a && !r) return false;if ("auto" === n || null == n) {
        var o = this.animationThreshold;if (r && i.getBandWidth() > o) return true;if (a) {
          var s = Bc(t).seriesDataCount,
              l = i.getExtent();return Math.abs(l[0] - l[1]) / s > o;
        }return false;
      }return n === true;
    }, makeElOption: function makeElOption() {}, createPointerEl: function createPointerEl(t, e) {
      var n = e.pointer;if (n) {
        var i = pw(t).pointerEl = new Uv[n.type](gw(e.pointer));t.add(i);
      }
    }, createLabelEl: function createLabelEl(t, e, n, i) {
      if (e.label) {
        var r = pw(t).labelEl = new Sv(gw(e.label));t.add(r), rd(r, i);
      }
    }, updatePointerEl: function updatePointerEl(t, e, n) {
      var i = pw(t).pointerEl;i && e.pointer && (i.setStyle(e.pointer.style), n(i, { shape: e.pointer.shape }));
    }, updateLabelEl: function updateLabelEl(t, e, n, i) {
      var r = pw(t).labelEl;r && (r.setStyle(e.label.style), n(r, { shape: e.label.shape, position: e.label.position }), rd(r, i));
    }, _renderHandle: function _renderHandle(t) {
      if (!this._dragging && this.updateHandleTransform) {
        var e = this._axisPointerModel,
            n = this._api.getZr(),
            i = this._handle,
            r = e.getModel("handle"),
            a = e.get("status");if (!r.get("show") || !a || "hide" === a) return i && n.remove(i), undefined;var o;this._handle || (o = true, i = this._handle = so(r.get("icon"), { cursor: "move", draggable: true, onmousemove: function onmousemove(t) {
            cf(t.event);
          }, onmousedown: vw(this._onHandleDragMove, this, 0, 0), drift: vw(this._onHandleDragMove, this), ondragend: vw(this._onHandleDragEnd, this) }), n.add(i)), od(i, e, false);var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];i.setStyle(r.getItemStyle(null, s));var l = r.get("size");x(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), pl(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o);
      }
    }, _moveHandleToValue: function _moveHandleToValue(t, e) {
      nd(this._axisPointerModel, !e && this._moveAnimation, this._handle, ad(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    }, _onHandleDragMove: function _onHandleDragMove(t, e) {
      var n = this._handle;if (n) {
        this._dragging = true;var i = this.updateHandleTransform(ad(n), [t, e], this._axisModel, this._axisPointerModel);this._payloadInfo = i, n.stopAnimation(), n.attr(ad(i)), pw(n).lastProp = null, this._doDispatchAxisPointer();
      }
    }, _doDispatchAxisPointer: function _doDispatchAxisPointer() {
      var t = this._handle;if (t) {
        var e = this._payloadInfo,
            n = this._axisModel;this._api.dispatchAction({ type: "updateAxisPointer", x: e.cursorPoint[0], y: e.cursorPoint[1], tooltipOption: e.tooltipOption, axesInfo: [{ axisDim: n.axis.dim, axisIndex: n.componentIndex }] });
      }
    }, _onHandleDragEnd: function _onHandleDragEnd() {
      this._dragging = false;var t = this._handle;if (t) {
        var e = this._axisPointerModel.get("value");this._moveHandleToValue(e), this._api.dispatchAction({ type: "hideTip" });
      }
    }, getHandleTransform: null, updateHandleTransform: null, clear: function clear(t) {
      this._lastValue = null, this._lastStatus = null;var e = t.getZr(),
          n = this._group,
          i = this._handle;e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null);
    }, doClear: function doClear() {}, buildLabel: function buildLabel(t, e, n) {
      return n = n || 0, { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] };
    } }, ed.prototype.constructor = ed, vr(ed);var mw = Cu({ type: "axis", _axisPointer: null, axisPointerClass: null, render: function render(t, e, n, i) {
      this.axisPointerClass && Lc(t), mw.superApply(this, "render", arguments), vd(this, t, e, n, i, true);
    }, updateAxisPointer: function updateAxisPointer(t, e, n, i) {
      vd(this, t, e, n, i, false);
    }, remove: function remove(t, e) {
      var n = this._axisPointer;n && n.remove(e), mw.superApply(this, "remove", arguments);
    }, dispose: function dispose(t, e) {
      md(this, e), mw.superApply(this, "dispose", arguments);
    } }),
      yw = [];mw.registerAxisPointerClass = function (t, e) {
    yw[t] = e;
  }, mw.getAxisPointerClass = function (t) {
    return t && yw[t];
  };var _w = ed.extend({ makeElOption: function makeElOption(t, e, n, i, r) {
      var a = n.axis,
          o = a.grid,
          s = i.get("type"),
          l = yd(o, a).getOtherAxis(a).getGlobalExtent(),
          u = a.toGlobalCoord(a.dataToCoord(e, true));if (s && "none" !== s) {
        var h = sd(i),
            c = xw[s](a, u, l);c.style = h, t.graphicKey = c.type, t.pointer = c;
      }var d = gd(o.model, n);dd(e, t, d, n, i, r);
    }, getHandleTransform: function getHandleTransform(t, e, n) {
      var i = gd(e.axis.grid.model, e, { labelInside: false });return i.labelMargin = n.get("handle.margin"), { position: cd(e.axis, t, i), rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0) };
    }, updateHandleTransform: function updateHandleTransform(t, e, n) {
      var i = n.axis,
          r = i.grid,
          a = i.getGlobalExtent(true),
          o = yd(r, i).getOtherAxis(i).getGlobalExtent(),
          s = "x" === i.dim ? 0 : 1,
          l = t.position;l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);var u = (o[1] + o[0]) / 2,
          h = [u, u];h[s] = l[s];var c = [{ verticalAlign: "middle" }, { align: "center" }];return { position: l, rotation: t.rotation, cursorPoint: h, tooltipOption: c[s] };
    } }),
      xw = { line: function line(t, e, n) {
      var i = fd([e, n[0]], [e, n[1]], _d(t));return { type: "Line", subPixelOptimize: true, shape: i };
    }, shadow: function shadow(t, e, n) {
      var i = Math.max(1, t.getBandWidth()),
          r = n[1] - n[0];return { type: "Rect", shape: pd([e - i / 2, n[0]], [i, r], _d(t)) };
    } };mw.registerAxisPointerClass("CartesianAxisPointer", _w), vu(function (t) {
    if (t) {
      (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});var e = t.axisPointer.link;e && !x(e) && (t.axisPointer.link = [e]);
    }
  }), mu(u_.PROCESSOR.STATISTIC, function (t, e) {
    t.getComponent("axisPointer").coordSysAxesInfo = Cc(t, e);
  }), _u({ type: "updateAxisPointer", event: "updateAxisPointer", update: ":updateAxisPointer" }, hw), Iu({ type: "tooltip", dependencies: ["axisPointer"], defaultOption: { zlevel: 0, z: 60, show: true, showContent: true, trigger: "item", triggerOn: "mousemove|click", alwaysShowContent: false, displayMode: "single", renderMode: "auto", confine: false, showDelay: 0, hideDelay: 100, transitionDuration: .4, enterable: false, backgroundColor: "rgba(50,50,50,0.7)", borderColor: "#333", borderRadius: 4, borderWidth: 0, padding: 5, extraCssText: "", axisPointer: { type: "line", axis: "auto", animation: "auto", animationDurationUpdate: 200, animationEasingUpdate: "exponentialOut", crossStyle: { color: "#999", width: 1, type: "dashed", textStyle: {} } }, textStyle: { color: "#fff", fontSize: 14 } } });var ww = f,
      bw = Fo,
      Sw = ["", "-webkit-", "-moz-", "-o-"],
      Mw = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";Md.prototype = { constructor: Md, _enterable: true, update: function update() {
      var t = this._container,
          e = t.currentStyle || document.defaultView.getComputedStyle(t),
          n = t.style;"absolute" !== n.position && "absolute" !== e.position && (n.position = "relative");
    }, show: function show(t) {
      clearTimeout(this._hideTimeout);var e = this.el,
          n = this._styleCoord;e.style.cssText = Mw + bd(t) + ";left:" + n[0] + "px;top:" + n[1] + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = true;
    }, setContent: function setContent(t) {
      this.el.innerHTML = null == t ? "" : t;
    }, setEnterable: function setEnterable(t) {
      this._enterable = t;
    }, getSize: function getSize() {
      var t = this.el;return [t.clientWidth, t.clientHeight];
    }, moveTo: function moveTo(t, e) {
      var n = this._styleCoord;Sd(n, this._zr, this._appendToBody, t, e);var i = this.el.style;i.left = n[0] + "px", i.top = n[1] + "px";
    }, hide: function hide() {
      this.el.style.display = "none", this._show = false;
    }, hideLater: function hideLater(t) {
      !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = false, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide());
    }, isShow: function isShow() {
      return this._show;
    }, dispose: function dispose() {
      this.el.parentNode.removeChild(this.el);
    }, getOuterSize: function getOuterSize() {
      var t = this.el.clientWidth,
          e = this.el.clientHeight;if (document.defaultView && document.defaultView.getComputedStyle) {
        var n = document.defaultView.getComputedStyle(this.el);n && (t += parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), e += parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10));
      }return { width: t, height: e };
    } }, Td.prototype = { constructor: Td, _enterable: true, update: function update() {}, show: function show() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", true), this._show = true;
    }, setContent: function setContent(t, e, n) {
      this.el && this._zr.remove(this.el);for (var i = {}, r = t, a = "{marker", o = "|}", s = r.indexOf(a); s >= 0;) {
        var l = r.indexOf(o),
            u = r.substr(s + a.length, l - s - a.length);i["marker" + u] = u.indexOf("sub") > -1 ? { textWidth: 4, textHeight: 4, textBorderRadius: 2, textBackgroundColor: e[u], textOffset: [3, 0] } : { textWidth: 10, textHeight: 10, textBorderRadius: 5, textBackgroundColor: e[u] }, r = r.substr(l + 1), s = r.indexOf("{marker");
      }this.el = new cv({ style: { rich: i, text: t, textLineHeight: 20, textBackgroundColor: n.get("backgroundColor"), textBorderRadius: n.get("borderRadius"), textFill: n.get("textStyle.color"), textPadding: n.get("padding") }, z: n.get("z") }), this._zr.add(this.el);var h = this;this.el.on("mouseover", function () {
        h._enterable && (clearTimeout(h._hideTimeout), h._show = true), h._inContent = true;
      }), this.el.on("mouseout", function () {
        h._enterable && h._show && h.hideLater(h._hideDelay), h._inContent = false;
      });
    }, setEnterable: function setEnterable(t) {
      this._enterable = t;
    }, getSize: function getSize() {
      var t = this.el.getBoundingRect();return [t.width, t.height];
    }, moveTo: function moveTo(t, e) {
      this.el && this.el.attr("position", [t, e]);
    }, hide: function hide() {
      this.el && this.el.hide(), this._show = false;
    }, hideLater: function hideLater(t) {
      !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = false, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide());
    }, isShow: function isShow() {
      return this._show;
    }, getOuterSize: function getOuterSize() {
      var t = this.getSize();return { width: t[0], height: t[1] };
    } };var Tw = y,
      Iw = f,
      Cw = wo,
      kw = new Sv({ shape: { x: -1, y: -1, width: 2, height: 2 } });Cu({ type: "tooltip", init: function init(t, e) {
      if (!Ed.node) {
        var n = t.getComponent("tooltip"),
            i = n.get("renderMode");this._renderMode = fr(i);var r;"html" === this._renderMode ? (r = new Md(e.getDom(), e, { appendToBody: n.get("appendToBody", true) }), this._newLine = "<br/>") : (r = new Td(e), this._newLine = "\n"), this._tooltipContent = r;
      }
    }, render: function render(t, e, n) {
      if (!Ed.node) {
        this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");var i = this._tooltipContent;i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow();
      }
    }, _initGlobalListener: function _initGlobalListener() {
      var t = this._tooltipModel,
          e = t.get("triggerOn");Uc("itemTooltip", this._api, Tw(function (t, n, i) {
        "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i));
      }, this));
    }, _keepShow: function _keepShow() {
      var t = this._tooltipModel,
          e = this._ecModel,
          n = this._api;if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
        var i = this;clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
          !n.isDisposed() && i.manuallyShowTip(t, e, n, { x: i._lastX, y: i._lastY });
        });
      }
    }, manuallyShowTip: function manuallyShowTip(t, e, n, i) {
      if (i.from !== this.uid && !Ed.node) {
        var r = Cd(i, n);this._ticket = "";var a = i.dataByCoordSys;if (i.tooltip && null != i.x && null != i.y) {
          var o = kw;o.position = [i.x, i.y], o.update(), o.tooltip = i.tooltip, this._tryShow({ offsetX: i.x, offsetY: i.y, target: o }, r);
        } else if (a) this._tryShow({ offsetX: i.x, offsetY: i.y, position: i.position, dataByCoordSys: i.dataByCoordSys, tooltipOption: i.tooltipOption }, r);else if (null != i.seriesIndex) {
          if (this._manuallyAxisShowTip(t, e, n, i)) return;var s = ow(i, e),
              l = s.point[0],
              u = s.point[1];null != l && null != u && this._tryShow({ offsetX: l, offsetY: u, position: i.position, target: s.el }, r);
        } else null != i.x && null != i.y && (n.dispatchAction({ type: "updateAxisPointer", x: i.x, y: i.y }), this._tryShow({ offsetX: i.x, offsetY: i.y, position: i.position, target: n.getZr().findHover(i.x, i.y).target }, r));
      }
    }, manuallyHideTip: function manuallyHideTip(t, e, n, i) {
      var r = this._tooltipContent;!this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(Cd(i, n));
    }, _manuallyAxisShowTip: function _manuallyAxisShowTip(t, e, n, i) {
      var r = i.seriesIndex,
          a = i.dataIndex,
          o = e.getComponent("axisPointer").coordSysAxesInfo;if (null != r && null != a && null != o) {
        var s = e.getSeriesByIndex(r);if (s) {
          var l = s.getData(),
              t = Id([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);if ("axis" === t.get("trigger")) return n.dispatchAction({ type: "updateAxisPointer", seriesIndex: r, dataIndex: a, position: i.position }), true;
        }
      }
    }, _tryShow: function _tryShow(t, e) {
      var n = t.target,
          i = this._tooltipModel;if (i) {
        this._lastX = t.offsetX, this._lastY = t.offsetY;var r = t.dataByCoordSys;r && r.length ? this._showAxisTooltip(r, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e));
      }
    }, _showOrMove: function _showOrMove(t, e) {
      var n = t.get("showDelay");e = y(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e();
    }, _showAxisTooltip: function _showAxisTooltip(t, e) {
      var n = this._ecModel,
          i = this._tooltipModel,
          a = [e.offsetX, e.offsetY],
          o = [],
          s = [],
          l = Id([e.tooltipOption, i]),
          u = this._renderMode,
          h = this._newLine,
          c = {};Iw(t, function (t) {
        Iw(t.dataByAxis, function (t) {
          var e = n.getComponent(t.axisDim + "Axis", t.axisIndex),
              i = t.value,
              a = [];if (e && null != i) {
            var l = hd(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);f(t.seriesDataIndices, function (o) {
              var h = n.getSeriesByIndex(o.seriesIndex),
                  d = o.dataIndexInside,
                  f = h && h.getDataParams(d);if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = zh(e.axis, i), f.axisValueLabel = l, f) {
                s.push(f);var p,
                    g = h.formatTooltip(d, true, null, u);if (S(g)) {
                  p = g.html;var v = g.markers;r(c, v);
                } else p = g;a.push(p);
              }
            });var d = l;o.push("html" !== u ? a.join(h) : (d ? No(d) + h : "") + a.join(h));
          }
        });
      }, this), o.reverse(), o = o.join(this._newLine + this._newLine);var d = e.position;this._showOrMove(l, function () {
        this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(l, o, s, Math.random(), a[0], a[1], d, undefined, c);
      });
    }, _showSeriesItemTooltip: function _showSeriesItemTooltip(t, e, n) {
      var i = this._ecModel,
          r = e.seriesIndex,
          a = i.getSeriesByIndex(r),
          o = e.dataModel || a,
          s = e.dataIndex,
          l = e.dataType,
          u = o.getData(l),
          h = Id([u.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel]),
          c = h.get("trigger");if (null == c || "item" === c) {
        var d,
            f,
            p = o.getDataParams(s, l),
            g = o.formatTooltip(s, false, l, this._renderMode);S(g) ? (d = g.html, f = g.markers) : (d = g, f = null);var v = "item_" + o.name + "_" + s;this._showOrMove(h, function () {
          this._showTooltipContent(h, d, p, v, t.offsetX, t.offsetY, t.position, t.target, f);
        }), n({ type: "showTip", dataIndexInside: s, dataIndex: u.getRawIndex(s), seriesIndex: r, from: this.uid });
      }
    }, _showComponentItemTooltip: function _showComponentItemTooltip(t, e, n) {
      var i = e.tooltip;if ("string" == typeof i) {
        var r = i;i = { content: r, formatter: r };
      }var a = new fo(i, this._tooltipModel, this._ecModel),
          o = a.get("content"),
          s = Math.random();this._showOrMove(a, function () {
        this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e);
      }), n({ type: "showTip", from: this.uid });
    }, _showTooltipContent: function _showTooltipContent(t, e, n, i, r, a, o, s, l) {
      if (this._ticket = "", t.get("showContent") && t.get("show")) {
        var u = this._tooltipContent,
            h = t.get("formatter");o = o || t.get("position");var c = e;if (h && "string" == typeof h) c = Ho(h, n, true);else if ("function" == typeof h) {
          var d = Tw(function (e, i) {
            e === this._ticket && (u.setContent(i, l, t), this._updatePosition(t, o, r, a, u, n, s));
          }, this);this._ticket = i, c = h(n, i, d);
        }u.setContent(c, l, t), u.show(t), this._updatePosition(t, o, r, a, u, n, s);
      }
    }, _updatePosition: function _updatePosition(t, e, n, i, r, a, o) {
      var s = this._api.getWidth(),
          l = this._api.getHeight();e = e || t.get("position");var u = r.getSize(),
          h = t.get("align"),
          c = t.get("verticalAlign"),
          d = o && o.getBoundingRect().clone();if (o && d.applyTransform(o.transform), "function" == typeof e && (e = e([n, i], a, r.el, d, { viewSize: [s, l], contentSize: u.slice() })), x(e)) n = Cw(e[0], s), i = Cw(e[1], l);else if (S(e)) {
        e.width = u[0], e.height = u[1];var f = Ko(e, { width: s, height: l });n = f.x, i = f.y, h = null, c = null;
      } else if ("string" == typeof e && o) {
        var p = Ad(e, d, u);n = p[0], i = p[1];
      } else {
        var p = kd(n, i, r, s, l, h ? null : 20, c ? null : 20);n = p[0], i = p[1];
      }if (h && (n -= Pd(h) ? u[0] / 2 : "right" === h ? u[0] : 0), c && (i -= Pd(c) ? u[1] / 2 : "bottom" === c ? u[1] : 0), t.get("confine")) {
        var p = Dd(n, i, r, s, l);n = p[0], i = p[1];
      }r.moveTo(n, i);
    }, _updateContentNotChangedOnAxis: function _updateContentNotChangedOnAxis(t) {
      var e = this._lastDataByCoordSys,
          n = !!e && e.length === t.length;return n && Iw(e, function (e, i) {
        var r = e.dataByAxis || {},
            a = t[i] || {},
            o = a.dataByAxis || [];n &= r.length === o.length, n && Iw(r, function (t, e) {
          var i = o[e] || {},
              r = t.seriesDataIndices || [],
              a = i.seriesDataIndices || [];n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === a.length, n && Iw(r, function (t, e) {
            var i = a[e];n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex;
          });
        });
      }), this._lastDataByCoordSys = t, !!n;
    }, _hide: function _hide(t) {
      this._lastDataByCoordSys = null, t({ type: "hideTip", from: this.uid });
    }, dispose: function dispose(t, e) {
      Ed.node || (this._tooltipContent.dispose(), td("itemTooltip", e));
    } }), _u({ type: "showTip", event: "showTip", update: "tooltip:manuallyShowTip" }, function () {}), _u({ type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip" }, function () {}), t.version = Zy, t.dependencies = Ky, t.PRIORITY = u_, t.init = uu, t.connect = hu, t.disConnect = cu, t.disconnect = D_, t.dispose = du, t.getInstanceByDom = fu, t.getInstanceById = pu, t.registerTheme = gu, t.registerPreprocessor = vu, t.registerProcessor = mu, t.registerPostUpdate = yu, t.registerAction = _u, t.registerCoordinateSystem = xu, t.getCoordinateSystemDimensions = wu, t.registerLayout = bu, t.registerVisual = Su, t.registerLoading = Tu, t.extendComponentModel = Iu, t.extendComponentView = Cu, t.extendSeriesModel = ku, t.extendChartView = Du, t.setCanvasCreator = Au, t.registerMap = Pu, t.getMap = Ou, t.dataTool = A_, t.zrender = Up, t.number = am, t.format = dm, t.throttle = fl, t.helper = Ox, t.matrix = yf, t.vector = ef, t.color = Rf, t.parseGeoJSON = Bx, t.parseGeoJson = Fx, t.util = Nx, t.graphic = Hx, t.List = W_, t.Model = fo, t.Axis = Rx, t.env = Ed;
});

/***/ })

}]);