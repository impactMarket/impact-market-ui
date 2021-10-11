import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function ShareIcon(props: { height?: number, width?: number }) {
    const { width = 33, height = 34 } = props;
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 33 34"
            scale={width / 33}
        >
            <Ellipse cx={16.5} cy={16.8} rx={16.5} ry={16.8} fill="#E9EDF4" />
            <Path
                d="M18.55 10.162a.55.55 0 00-.602-.12.557.557 0 00-.34.515v2.97c-2.985.12-4.48 1.365-4.709 1.573a8.45 8.45 0 00-2.907 4.904 8.7 8.7 0 00-.099 2.827v.003l.004.025.118.68a.551.551 0 001.018.19l.352-.59c1.081-1.81 2.428-3.01 4.005-3.567a5.766 5.766 0 012.218-.327v3.076a.55.55 0 00.944.392l5.84-5.912a.56.56 0 00-.001-.787l-5.84-5.852z"
                fill="#172B4D"
            />
        </Svg>
    )
}

export default ShareIcon
