import { useEffect, useState } from 'react';


let timeCountDownInterval;

const TimeCountDownLogic = (props) => {

    const generateStateValue = (timeSeconds) => {
        const totalSeconds = timeSeconds % 3600;
        return ({
            timeSeconds: timeSeconds,
            days: Math.floor(timeSeconds / 86400),
            hours: Math.floor(timeSeconds / 3600),
            minutes: Math.floor(totalSeconds / 60),
            seconds: totalSeconds % 60
        });
    }
    const [state, setState] = useState(() => generateStateValue(props.defaultValueSeconds));

    useEffect(() => {
        if (timeCountDownInterval)
            clearInterval(timeCountDownInterval);

        timeCountDownInterval = window.setInterval(() => {

            setState((currentState) => {

                if (currentState.timeSeconds === 0) {
                    clearInterval(timeCountDownInterval);

                    if (props.onTimeout)
                        props.onTimeout();
                }

                return currentState.timeSeconds > 0 ?
                    generateStateValue(currentState.timeSeconds - 1) :
                    currentState;
            });
        }, 1_000);
    }, [props.defaultValueSeconds]);

    return {
        days: state.days,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds
    };
}
export default TimeCountDownLogic;