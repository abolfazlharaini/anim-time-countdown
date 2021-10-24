"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _TimeCountDownLogic = _interopRequireDefault(require("./TimeCountDownLogic"));

var _CounterItem = require("./CounterItem");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const TimeCountDown = props => {
  var _props$classes;

  const {
    days,
    hours,
    minutes,
    seconds
  } = (0, _TimeCountDownLogic.default)(props);
  return /*#__PURE__*/_react.default.createElement(TimeContainer, {
    className: (_props$classes = props.classes) === null || _props$classes === void 0 ? void 0 : _props$classes.container
  }, days > 0 && /*#__PURE__*/_react.default.createElement(_CounterItem.Days, {
    value: days,
    classes: props.classes,
    numberStyles: props.numberStyles
  }), hours > 0 && /*#__PURE__*/_react.default.createElement(_CounterItem.TimeItem, {
    value: hours,
    classes: props.classes,
    numberStyles: props.numberStyles
  }), minutes > 0 && /*#__PURE__*/_react.default.createElement(_CounterItem.TimeItem, {
    value: minutes,
    classes: props.classes,
    numberStyles: props.numberStyles
  }), /*#__PURE__*/_react.default.createElement(_CounterItem.TimeItem, {
    value: seconds,
    classes: props.classes,
    numberStyles: props.numberStyles
  }));
};

var _default = TimeCountDown;
exports.default = _default;

const TimeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nalign-items: center;\ndisplay: flex;\njustify-content : center;\n"])));