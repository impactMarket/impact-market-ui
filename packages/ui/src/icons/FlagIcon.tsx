import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function FlagIcon(props: { height?: number, width?: number }) {
    const { width = 34, height = 34 } = props;
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 34 34"
            scale={width / 34}
            fill="none"
        >
            <Ellipse cx={17.1} cy={16.8} rx={16.5} ry={16.8} fill="#E9EDF4" />
            <Path
                d="M10.488 9.696a.925.925 0 00-.444-.57.993.993 0 00-.733-.094c-.51.137-.817.651-.677 1.149l4.494 16.352c.07.257.35.467.628.467h.997c.277 0 .439-.21.369-.467L10.488 9.696zm16.094 9.327l-2.188-7.955c-.07-.257-.32-.579-.566-.695-4.511-2.121-7.081 2.812-11.72.223.813 2.966 1.63 5.933 2.443 8.894 4.634 2.585 7.208-2.344 11.714-.227.25.12.387.022.317-.24z"
                fill="#172B4D"
            />
        </Svg>
    )
}

export default FlagIcon
