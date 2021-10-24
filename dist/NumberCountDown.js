"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _NumberCountDownLogic = _interopRequireDefault(require("./NumberCountDownLogic"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const NumberCountDown = props => {
  var _props$classes, _props$classes2, _props$classes3;

  const {
    value,
    prevValue,
    topIsFlip,
    bottomIsFlip
  } = (0, _NumberCountDownLogic.default)(props);
  return /*#__PURE__*/_react.default.createElement(Number, {
    className: (_props$classes = props.classes) === null || _props$classes === void 0 ? void 0 : _props$classes.root,
    styles: props.styles
  }, /*#__PURE__*/_react.default.createElement(TopSide, {
    className: (_props$classes2 = props.classes) === null || _props$classes2 === void 0 ? void 0 : _props$classes2.topSide,
    styles: props.styles
  }, /*#__PURE__*/_react.default.createElement(TopSideValue, {
    children: value,
    isFlip: topIsFlip,
    styles: props.styles
  }), /*#__PURE__*/_react.default.createElement(TopSidePrevValue, {
    children: prevValue,
    isFlip: topIsFlip,
    styles: props.styles
  })), /*#__PURE__*/_react.default.createElement(DownSide, {
    className: (_props$classes3 = props.classes) === null || _props$classes3 === void 0 ? void 0 : _props$classes3.bottomSide,
    styles: props.styles
  }, /*#__PURE__*/_react.default.createElement(DownSidePrevValue, {
    children: prevValue,
    isFlip: bottomIsFlip,
    styles: props.styles
  }), /*#__PURE__*/_react.default.createElement(DownSideValue, {
    children: value,
    isFlip: bottomIsFlip,
    styles: props.styles
  })));
};

var _default = /*#__PURE__*/(0, _react.memo)(NumberCountDown);

exports.default = _default;

const Number = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\ncolor: ", ";\nfont-size: ", ";\nfont-weight: bold;\nfont-family: sans-serif;\nheight: ", ";\nposition: relative;\nwidth: ", ";\n& + & {\n    margin-left: 4px;\n}\n&:before{\n    background-color: ", ";\n    border-radius: 10px;\n    content: '';\n    height: 1px;\n    position: absolute;\n    right: 0;\n    transform: translateY(-50%);\n    top: 50%;\n    width: 100%;\n    z-index: 4;\n}\n"])), props => {
  var _props$styles$color, _props$styles;

  return (_props$styles$color = (_props$styles = props.styles) === null || _props$styles === void 0 ? void 0 : _props$styles.color) !== null && _props$styles$color !== void 0 ? _props$styles$color : '#fff';
}, props => {
  var _props$styles$fontSiz, _props$styles2;

  return (_props$styles$fontSiz = (_props$styles2 = props.styles) === null || _props$styles2 === void 0 ? void 0 : _props$styles2.fontSize) !== null && _props$styles$fontSiz !== void 0 ? _props$styles$fontSiz : '58px';
}, props => {
  var _props$styles$height, _props$styles3;

  return (_props$styles$height = (_props$styles3 = props.styles) === null || _props$styles3 === void 0 ? void 0 : _props$styles3.height) !== null && _props$styles$height !== void 0 ? _props$styles$height : '80px';
}, props => {
  var _props$styles$width, _props$styles4;

  return (_props$styles$width = (_props$styles4 = props.styles) === null || _props$styles4 === void 0 ? void 0 : _props$styles4.width) !== null && _props$styles$width !== void 0 ? _props$styles$width : '50px';
}, props => {
  var _props$styles$bgColor, _props$styles5;

  return (_props$styles$bgColor = (_props$styles5 = props.styles) === null || _props$styles5 === void 0 ? void 0 : _props$styles5.bgColor) !== null && _props$styles$bgColor !== void 0 ? _props$styles$bgColor : '#151515';
});

const Side = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nheight: 50%;\nposition: absolute;\nright: 0;\nwidth: 100%;\nz-index: 1;\n"])));

const Value = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\nheight: 100%;\noverflow: hidden;\nposition: absolute;\nright: 0;\nwidth: 100%;\ntext-align: center;\n"])));

const TopSide = (0, _styledComponents.default)(Side)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\nline-height: ", ";\ntop: 0;\n"])), props => {
  var _props$styles$height2, _props$styles6;

  return (_props$styles$height2 = (_props$styles6 = props.styles) === null || _props$styles6 === void 0 ? void 0 : _props$styles6.height) !== null && _props$styles$height2 !== void 0 ? _props$styles$height2 : '80px';
});
const TopSideValue = (0, _styledComponents.default)(Value)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\nbackground-color: ", ";\nborder-top-right-radius: 4px;\nborder-top-left-radius: 4px;\ntop: 0;\n", ";\n"])), props => {
  var _props$styles$bgColor2, _props$styles7;

  return (_props$styles$bgColor2 = (_props$styles7 = props.styles) === null || _props$styles7 === void 0 ? void 0 : _props$styles7.bgColor) !== null && _props$styles$bgColor2 !== void 0 ? _props$styles$bgColor2 : '#151515';
}, props => props.isFlip ? '' : 'z-index: 2;');
const TopSidePrevValue = (0, _styledComponents.default)(TopSideValue)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\nbackface-visibility: hidden;\ntext-align: center;\ntransform-origin: bottom;\ntransform-style: preserve-3d;\ntransform: rotateX(", ") ", ";\ntransition: ", ";\nz-index: ", ";\n"])), props => props.isFlip ? '90deg' : '0', props => props.isFlip ? 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0.008, 0, 0, 1, 0, 0, 0, 0, 1)' : '', props => props.isFlip ? 'all .25s ease-in' : 'none', props => props.isFlip ? '3' : '1');
const DownSide = (0, _styledComponents.default)(Side)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\nline-height: 0;\nbottom: 0;\n"])));
const DownSidePrevValue = (0, _styledComponents.default)(Value)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\nbottom: 0;\nbackground-color: ", ";\nborder-bottom-right-radius: 4px;\nborder-bottom-left-radius: 4px;\n", ";\n"])), props => {
  var _props$styles$sideBot, _props$styles8;

  return (_props$styles$sideBot = (_props$styles8 = props.styles) === null || _props$styles8 === void 0 ? void 0 : _props$styles8.sideBottomBgColor) !== null && _props$styles$sideBot !== void 0 ? _props$styles$sideBot : '#252525';
}, props => props.isFlip ? '' : 'z-index: 2;');
const DownSideValue = (0, _styledComponents.default)(DownSidePrevValue)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\nbackface-visibility: hidden;\ntext-align: center;\ntransform-origin: top;\ntransform-style: preserve-3d;\ntransform: rotateX(", ") ", ";\ntransition: ", ";\nz-index: ", ";\n"])), props => props.isFlip ? '0' : '-90deg', props => props.isFlip ? '' : 'matrix3d(1, 0, 0, 0, 0, 1, 0, -0.008, 0, 0, 1, 0, 0, 0, 0, 1)', props => props.isFlip ? 'all .25s ease-out' : 'none', props => props.isFlip ? '3' : '1');