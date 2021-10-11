import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function FaqIcon(props: { height?: number, width?: number }) {
    const { height = 34, width = 35 } = props;
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 35 34"
            scale={width / 35}
        >
            <Circle cx={17.6} cy={16.8} r={16.8} fill="#E9EDF4" />
            <Circle cx={17.8} cy={24} r={1} fill="#172B4D" />
            <Path
                d="M17.8 9c-2.757 0-5 2.05-5 4.571 0 .632.56 1.143 1.25 1.143s1.25-.511 1.25-1.143c0-1.26 1.122-2.285 2.5-2.285s2.5 1.025 2.5 2.285c0 1.26-1.122 2.286-2.5 2.286-.69 0-1.25.512-1.25 1.143v2.857c0 .631.56 1.143 1.25 1.143s1.25-.512 1.25-1.143v-1.859c2.154-.509 3.75-2.3 3.75-4.427 0-2.52-2.243-4.571-5-4.571z"
                fill="#172B4D"
            />
        </Svg>
    )
}

export default FaqIcon
