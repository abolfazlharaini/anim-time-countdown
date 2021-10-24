"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

let timeCountDownInterval;

const TimeCountDownLogic = props => {
  const generateStateValue = timeSeconds => {
    const totalSeconds = timeSeconds % 3600;
    return {
      timeSeconds: timeSeconds,
      days: Math.floor(timeSeconds / 86400),
      hours: Math.floor(timeSeconds / 3600),
      minutes: Math.floor(totalSeconds / 60),
      seconds: totalSeconds % 60
    };
  };

  const [state, setState] = (0, _react.useState)(() => generateStateValue(props.defaultValueSeconds));
  (0, _react.useEffect)(() => {
    if (timeCountDownInterval) clearInterval(timeCountDownInterval);
    timeCountDownInterval = window.setInterval(() => {
      setState(currentState => {
        if (currentState.timeSeconds === 0) {
          clearInterval(timeCountDownInterval);
          if (props.onTimeout) props.onTimeout();
        }

        return currentState.timeSeconds > 0 ? generateStateValue(currentState.timeSeconds - 1) : currentState;
      });
    }, 1000);
  }, [props.defaultValueSeconds]);
  return {
    days: state.days,
    hours: state.hours,
    minutes: state.minutes,
    seconds: state.seconds
  };
};

var _default = TimeCountDownLogic;
exports.default = _default;