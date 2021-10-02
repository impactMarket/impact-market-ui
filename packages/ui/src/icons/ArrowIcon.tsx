import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowIcon(props: { height?: number, width?: number, color?:string, direction: 'up' | 'down' | 'left' | 'right' }) {
    const { height, width, color, direction } = props
    if (direction === 'right') {
        return (
            <Svg
                width={width || "7"}
                height={height || "12"}
                viewBox="0 0 7 12"
                fill="none"
                {...props}
            >
                <Path
                    d="M4.648 5.997L.19 10.487a.653.653 0 00-.19.464c0 .176.068.34.19.464l.39.393a.644.644 0 00.462.192.644.644 0 00.46-.192L6.81 6.463A.653.653 0 007 5.998a.653.653 0 00-.19-.466L1.508.192A.644.644 0 001.047 0a.645.645 0 00-.461.192l-.39.393a.66.66 0 000 .928l4.452 4.484z"
                    fill={color || "#172B4D"}
                />
            </Svg>
        );
    }
    // down
    return (
        <Svg
            width={width || "13"}
            height={height || "8"}
            viewBox="0 0 13 8"
            fill="none"
            {...props}
        >
            <Path
                d="M6.503 5.148L2.013.69A.653.653 0 001.55.5a.654.654 0 00-.464.19l-.393.39a.644.644 0 00-.192.462c0 .174.068.338.192.46L6.037 7.31c.124.123.29.19.465.19a.653.653 0 00.466-.19l5.34-5.302a.644.644 0 00.192-.461.645.645 0 00-.192-.461l-.393-.39a.66.66 0 00-.928 0L6.503 5.147z"
                fill={color || "#172B4D"}
            />
        </Svg>
    )
}

export default ArrowIcon
