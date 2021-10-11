import * as React from "react"
import Svg, { SvgProps, Rect } from "react-native-svg"

function Disabled(props: SvgProps) {
    return (
        <Svg
            width={14}
            height={4}
            fill="none"
        >
            <Rect width={14} height={4} rx={2} fill="#D3D7DF" />
        </Svg>
    )
}

export default Disabled
