declare module 'anim-time-countdown' {

    export type NumberClasses = {
        root?: string,
        topSide?: string,
        bottomSide?: string,
    }

    export type NumberStyles = {
        bgColor?: string,
        color?: string,
        fontSize?: string,
        height?: string,
        sideBottomBgColor?: string,
        width?: string,
    }

    export type CounterItemClasses = {
        wrapper?: string,
        numberClasses?: NumberClasses,
    }

    export type TimeCountDownClasses = CounterItemClasses & {
        container?: string,
    }

    export type TimeCountDownProps = {
        classes?: TimeCountDownClasses,
        defaultValueSeconds?: number,
        numberStyles?: NumberStyles,
        onTimeout?: () => void,
    }

    export const TimeCountDown: React.FunctionComponent<TimeCountDownProps>;

}