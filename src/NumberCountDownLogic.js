import { useEffect, useState } from "react";


const NumberCountDownLogic = (props) => {

    const [state, setState] = useState({ value: 0, prevValue: 0, topIsFlip: false, bottomIsFlip: false });

    useEffect(() => {
        setState((currentState) => ({
            value: props.value,
            prevValue: currentState.value,
            topIsFlip: true
        }));
        window.setTimeout(() => {
            setState((currentState) => ({ ...currentState, topIsFlip: false, bottomIsFlip: true }));
            window.setTimeout(() => {
                setState((currentState) => ({ value: currentState.value, prevValue: currentState.value }));
            }, 250);
        }, 250);
    }, [props.value]);

    return {
        value: state.value,
        prevValue: state.prevValue,
        topIsFlip: state.topIsFlip,
        bottomIsFlip: state.bottomIsFlip,
    }
}
export default NumberCountDownLogic;