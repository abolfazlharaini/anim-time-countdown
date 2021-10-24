"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TimeCountDown = _interopRequireDefault(require("./TimeCountDown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// App
//
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    children: "anim-time-countdown"
  }), /*#__PURE__*/_react.default.createElement(_TimeCountDown.default, {
    defaultValueSeconds: 50000,
    classes: {
      wrapper: 'wrapper',
      numberClasses: {
        root: 'number-item',
        topSide: 'topSide',
        bottomSide: 'bottomSide'
      }
    }
  })));
}

var _default = App;
exports.default = _default;