import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function ArrowIcon(props: { height?: number, width?: number, color?: string, backgroundColor?: string, hasBackground?: boolean; direction: 'up' | 'down' | 'left' | 'right' }) {
    const { height, width, color, backgroundColor, hasBackground, direction } = props
    if (direction === 'left') {
        if (hasBackground) {
            return (
                <Svg
                    width={width || 34}
                    height={height || 34}
                    viewBox="0 0 34 34"
                    scale={width ? width / 34 : 1}
                    fill="none"
                >
                    <Circle cx={16.8} cy={16.8} r={16.8} fill={backgroundColor || "#E9EDF4"} />
                    <Path
                        d="M13.696 17.04l7.005-6.761a.963.963 0 000-1.398l-.614-.592A1.035 1.035 0 0019.363 8c-.274 0-.532.103-.724.289l-8.34 8.05a.963.963 0 00-.299.7c0 .266.105.515.299.702l8.332 8.042c.193.186.45.288.724.288.275 0 .532-.102.725-.288l.613-.593a.966.966 0 000-1.398l-6.997-6.753z"
                        fill={color || "#172B4D"}
                    />
                </Svg>
            )
        }
        return (
            <Svg
                width={width || 11}
                height={height || 19}
                viewBox="0 0 11 19"
                scale={width ? width / 11 : 1}
            >
                <Path
                    d="M3.696 9.04l7.005-6.761a.963.963 0 000-1.398l-.614-.592A1.035 1.035 0 009.363 0c-.274 0-.531.103-.724.289l-8.34 8.05a.963.963 0 00-.299.7c0 .266.105.515.299.702l8.332 8.042c.193.186.45.288.724.288.275 0 .532-.102.725-.288l.613-.593a.966.966 0 000-1.398L3.696 9.04z"
                    fill={color || "#172B4D"}
                />
            </Svg>
        )
    }
    return (
        <Svg
            width={width || 13}
            height={height || 8}
            viewBox="0 0 13 8"
            scale={width ? width / 13 : 1}
        >
            <Path
                d="M6.503 5.148L2.013.69A.653.653 0 001.55.5a.654.654 0 00-.464.19l-.393.39a.644.644 0 00-.192.462c0 .174.068.338.192.46L6.037 7.31c.124.123.29.19.465.19a.653.653 0 00.466-.19l5.34-5.302a.644.644 0 00.192-.461.645.645 0 00-.192-.461l-.393-.39a.66.66 0 00-.928 0L6.503 5.147z"
                fill="#172B4D"
            />
        </Svg>
    );
}

export default ArrowIcon
