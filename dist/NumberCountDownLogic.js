"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const NumberCountDownLogic = props => {
  const [state, setState] = (0, _react.useState)({
    value: 0,
    prevValue: 0,
    topIsFlip: false,
    bottomIsFlip: false
  });
  (0, _react.useEffect)(() => {
    setState(currentState => ({
      value: props.value,
      prevValue: currentState.value,
      topIsFlip: true
    }));
    window.setTimeout(() => {
      setState(currentState => _objectSpread(_objectSpread({}, currentState), {}, {
        topIsFlip: false,
        bottomIsFlip: true
      }));
      window.setTimeout(() => {
        setState(currentState => ({
          value: currentState.value,
          prevValue: currentState.value
        }));
      }, 250);
    }, 250);
  }, [props.value]);
  return {
    value: state.value,
    prevValue: state.prevValue,
    topIsFlip: state.topIsFlip,
    bottomIsFlip: state.bottomIsFlip
  };
};

var _default = NumberCountDownLogic;
exports.default = _default;