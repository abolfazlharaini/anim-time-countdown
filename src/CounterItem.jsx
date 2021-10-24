import styled from 'styled-components';
import React from 'react';
import { memo } from 'react';

// App
//
import NumberCountDown from "./NumberCountDown";


export const TimeItem = memo((props) => {
    const arrValue = `${props.value}`.split('');
    const leftValue = arrValue.length > 1 ? parseInt(arrValue[0]) : 0;
    let rightValue = arrValue.length > 1 ? parseInt(arrValue[1]) : parseInt(arrValue[0]);
    if (isNaN(rightValue))
        rightValue = 0;

    return (
        <TimeItemWrapper className={props.classes?.wrapper} numberStyles={props.numberStyles}>
            <NumberCountDown
                value={leftValue}
                classes={props.classes?.numberClasses}
                styles={props.numberStyles} />
            <NumberCountDown
                value={rightValue}
                classes={props.classes?.numberClasses}
                styles={props.numberStyles} />
        </TimeItemWrapper>
    );
});

export const Days = memo((props) => {
    const arrValue = `${props.value}`.split('');

    return (
        <DaysWrapper className={props.classes?.wrapper}>
            {arrValue.map((num, index) =>
                <NumberCountDown
                    key={`NumberItem_${index}`}
                    value={parseInt(num)}
                    classes={props.classes?.numberClasses}
                    styles={props.numberStyles} />
            )}
        </DaysWrapper>
    );
});

const TimeItemWrapper = styled.div`
align-items: center;
display: flex;
& + &:before {
    color: ${props => props.numberStyles?.bgColor ?? '#151515'};
    content: ':';
    font-size: ${props => props.numberStyles?.fontSize ?? '58px'};
    font-weight: bold;
    line-height: ${props => props.numberStyles?.height ?? '80px'};
    margin-right: 6px;
    margin-left: 6px;
}
`;
const DaysWrapper = styled.div`
align-items: center;
display: flex;
margin-right: 25px;
`;