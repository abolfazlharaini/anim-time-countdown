import styled from 'styled-components';
import React from 'react';

// App
//
import TimeCountDownLogic from "./TimeCountDownLogic";
import { Days, TimeItem } from "./CounterItem";


const TimeCountDown = (props) => {

    const {
        days,
        hours,
        minutes,
        seconds
    } = TimeCountDownLogic(props);

    return (
        <TimeContainer className={props.classes?.container}>
            {days > 0 &&
                <Days
                    value={days}
                    classes={props.classes}
                    numberStyles={props.numberStyles} />
            }
            {hours > 0 &&
                <TimeItem
                    value={hours}
                    classes={props.classes}
                    numberStyles={props.numberStyles} />
            }
            {minutes > 0 &&
                <TimeItem
                    value={minutes}
                    classes={props.classes}
                    numberStyles={props.numberStyles} />
            }
            <TimeItem
                value={seconds}
                classes={props.classes}
                numberStyles={props.numberStyles} />
        </TimeContainer>
    );
}
export default TimeCountDown;

const TimeContainer = styled.div`
align-items: center;
display: flex;
justify-content : center;
`;