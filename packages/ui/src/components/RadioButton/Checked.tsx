import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function Checked() {
    return (
        <Svg
            width={12}
            height={12}
            fill="none"
        >
            <Circle cx={6} cy={6} r={6} fill="#2362FB" />
        </Svg>
    )
}

export default Checked;