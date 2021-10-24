import styled from "styled-components";
import React from 'react';
import { memo } from "react";

// App
//
import NumberCountDownLogic from "./NumberCountDownLogic";


const NumberCountDown = (props) => {

    const { value, prevValue, topIsFlip, bottomIsFlip } = NumberCountDownLogic(props);

    return (
        <Number
            className={props.classes?.root}
            styles={props.styles}>
            <TopSide
                className={props.classes?.topSide}
                styles={props.styles}>
                <TopSideValue
                    children={value}
                    isFlip={topIsFlip}
                    styles={props.styles} />
                <TopSidePrevValue
                    children={prevValue}
                    isFlip={topIsFlip}
                    styles={props.styles} />
            </TopSide>
            <DownSide
                className={props.classes?.bottomSide}
                styles={props.styles}>
                <DownSidePrevValue
                    children={prevValue}
                    isFlip={bottomIsFlip}
                    styles={props.styles} />
                <DownSideValue
                    children={value}
                    isFlip={bottomIsFlip}
                    styles={props.styles} />
            </DownSide>
        </Number>
    );
}
export default memo(NumberCountDown);

const Number = styled.div`
color: ${props => props.styles?.color ?? '#fff'};
font-size: ${props => props.styles?.fontSize ?? '58px'};
font-weight: bold;
font-family: sans-serif;
height: ${props => props.styles?.height ?? '80px'};
position: relative;
width: ${props => props.styles?.width ?? '50px'};
& + & {
    margin-left: 4px;
}
&:before{
    background-color: ${props => props.styles?.bgColor ?? '#151515'};
    border-radius: 10px;
    content: '';
    height: 1px;
    position: absolute;
    right: 0;
    transform: translateY(-50%);
    top: 50%;
    width: 100%;
    z-index: 4;
}
`;
const Side = styled.div`
height: 50%;
position: absolute;
right: 0;
width: 100%;
z-index: 1;
`;
const Value = styled.span`
height: 100%;
overflow: hidden;
position: absolute;
right: 0;
width: 100%;
text-align: center;
`;

const TopSide = styled(Side)`
line-height: ${props => props.styles?.height ?? '80px'};
top: 0;
`;
const TopSideValue = styled(Value)`
background-color: ${props => props.styles?.bgColor ?? '#151515'};
border-top-right-radius: 4px;
border-top-left-radius: 4px;
top: 0;
${props => props.isFlip ? '' : 'z-index: 2;'};
`;
const TopSidePrevValue = styled(TopSideValue)`
backface-visibility: hidden;
text-align: center;
transform-origin: bottom;
transform-style: preserve-3d;
transform: rotateX(${props => props.isFlip ? '90deg' : '0'}) ${props => props.isFlip ? 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0.008, 0, 0, 1, 0, 0, 0, 0, 1)' : ''};
transition: ${props => props.isFlip ? 'all .25s ease-in' : 'none'};
z-index: ${props => props.isFlip ? '3' : '1'};
`;

const DownSide = styled(Side)`
line-height: 0;
bottom: 0;
`;
const DownSidePrevValue = styled(Value)`
bottom: 0;
background-color: ${props => props.styles?.sideBottomBgColor ?? '#252525'};
border-bottom-right-radius: 4px;
border-bottom-left-radius: 4px;
${props => props.isFlip ? '' : 'z-index: 2;'};
`;
const DownSideValue = styled(DownSidePrevValue)`
backface-visibility: hidden;
text-align: center;
transform-origin: top;
transform-style: preserve-3d;
transform: rotateX(${props => props.isFlip ? '0' : '-90deg'}) ${props => props.isFlip ? '' : 'matrix3d(1, 0, 0, 0, 0, 1, 0, -0.008, 0, 0, 1, 0, 0, 0, 0, 1)'};
transition: ${props => props.isFlip ? 'all .25s ease-out' : 'none'};
z-index: ${props => props.isFlip ? '3' : '1'};
`;