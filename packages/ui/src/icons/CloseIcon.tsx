import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function CloseIcon(props: { height?: number, width?: number, hasBackground?: boolean }) {
    const { hasBackground } = props;
    if (hasBackground) {
        const { height = 34, width = 35 } = props;
        return (
            <Svg
                width={width}
                height={height}
                viewBox="0 0 35 34"
                scale={width / 35}
                fill="none"
            >
                <Circle cx={17.4} cy={16.8} r={16.8} fill="#E9EDF4" />
                <Path
                    stroke="#172B4D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    d="M11.377 23.164l12.728-12.728"
                />
                <Path
                    stroke="#172B4D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M24.105 23.164L11.377 10.436"
                />
            </Svg>
        )
    }
    const { height = 16, width = 16 } = props;
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            scale={width / 16}
            fill="none"
        >
            <Path
                stroke="#172B4D"
                strokeWidth={2}
                strokeLinecap="round"
                d="M1.377 14.164L14.105 1.436"
            />
            <Path
                stroke="#172B4D"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.105 14.164L1.377 1.436"
            />
        </Svg>
    );
}

export default CloseIcon
