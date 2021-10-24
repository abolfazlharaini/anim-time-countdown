"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeItem = exports.Days = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.parse-int.js");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _NumberCountDown = _interopRequireDefault(require("./NumberCountDown"));

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const TimeItem = /*#__PURE__*/(0, _react.memo)(props => {
  var _props$classes, _props$classes2, _props$classes3;

  const arrValue = "".concat(props.value).split('');
  const leftValue = arrValue.length > 1 ? parseInt(arrValue[0]) : 0;
  let rightValue = arrValue.length > 1 ? parseInt(arrValue[1]) : parseInt(arrValue[0]);
  if (isNaN(rightValue)) rightValue = 0;
  return /*#__PURE__*/_react.default.createElement(TimeItemWrapper, {
    className: (_props$classes = props.classes) === null || _props$classes === void 0 ? void 0 : _props$classes.wrapper,
    numberStyles: props.numberStyles
  }, /*#__PURE__*/_react.default.createElement(_NumberCountDown.default, {
    value: leftValue,
    classes: (_props$classes2 = props.classes) === null || _props$classes2 === void 0 ? void 0 : _props$classes2.numberClasses,
    styles: props.numberStyles
  }), /*#__PURE__*/_react.default.createElement(_NumberCountDown.default, {
    value: rightValue,
    classes: (_props$classes3 = props.classes) === null || _props$classes3 === void 0 ? void 0 : _props$classes3.numberClasses,
    styles: props.numberStyles
  }));
});
exports.TimeItem = TimeItem;
const Days = /*#__PURE__*/(0, _react.memo)(props => {
  var _props$classes4;

  const arrValue = "".concat(props.value).split('');
  return /*#__PURE__*/_react.default.createElement(DaysWrapper, {
    className: (_props$classes4 = props.classes) === null || _props$classes4 === void 0 ? void 0 : _props$classes4.wrapper
  }, arrValue.map((num, index) => {
    var _props$classes5;

    return /*#__PURE__*/_react.default.createElement(_NumberCountDown.default, {
      key: "NumberItem_".concat(index),
      value: parseInt(num),
      classes: (_props$classes5 = props.classes) === null || _props$classes5 === void 0 ? void 0 : _props$classes5.numberClasses,
      styles: props.numberStyles
    });
  }));
});
exports.Days = Days;

const TimeItemWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nalign-items: center;\ndisplay: flex;\n& + &:before {\n    color: ", ";\n    content: ':';\n    font-size: ", ";\n    font-weight: bold;\n    line-height: ", ";\n    margin-right: 6px;\n    margin-left: 6px;\n}\n"])), props => {
  var _props$numberStyles$b, _props$numberStyles;

  return (_props$numberStyles$b = (_props$numberStyles = props.numberStyles) === null || _props$numberStyles === void 0 ? void 0 : _props$numberStyles.bgColor) !== null && _props$numberStyles$b !== void 0 ? _props$numberStyles$b : '#151515';
}, props => {
  var _props$numberStyles$f, _props$numberStyles2;

  return (_props$numberStyles$f = (_props$numberStyles2 = props.numberStyles) === null || _props$numberStyles2 === void 0 ? void 0 : _props$numberStyles2.fontSize) !== null && _props$numberStyles$f !== void 0 ? _props$numberStyles$f : '58px';
}, props => {
  var _props$numberStyles$h, _props$numberStyles3;

  return (_props$numberStyles$h = (_props$numberStyles3 = props.numberStyles) === null || _props$numberStyles3 === void 0 ? void 0 : _props$numberStyles3.height) !== null && _props$numberStyles$h !== void 0 ? _props$numberStyles$h : '80px';
});

const DaysWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nalign-items: center;\ndisplay: flex;\nmargin-right: 25px;\n"])));