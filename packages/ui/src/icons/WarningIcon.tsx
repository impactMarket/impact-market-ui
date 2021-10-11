import * as React from "react"
import Svg, { Path } from "react-native-svg"

function WarningIcon(props: { height?: number, width?: number, color: string }) {
    const { color, height, width } = props;
    return (
        <Svg
            width={width || 16}
            height={height || 16}
            viewBox="0 0 16 16"
            scale={width ? width / 16 : 1}
            fill="none"
        >
            <Path
                d="M15.22 11.537L9.73 1.147a2.244 2.244 0 00-3.917 0l-5.49 10.39c-.902 1.562.19 3.54 1.958 3.54h10.981c1.766 0 2.86-1.976 1.958-3.54zM7.77 13.203c-.502 0-.91-.421-.91-.938 0-.517.408-.937.91-.937s.911.42.911.937c0 .517-.409.938-.91.938zm.911-3.75c0 .516-.409.937-.91.937-.503 0-.911-.42-.911-.937V4.765c0-.517.408-.937.91-.937s.911.42.911.937v4.688z"
                fill={color}
            />
        </Svg>
    )
}

export default WarningIcon
