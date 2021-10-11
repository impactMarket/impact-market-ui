import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Check() {
    return (
        <Svg
            width={14}
            height={12}
            fill="none"
        >
            <Path
                d="M6.337 11.385c-.635.725-1.664.725-2.299 0L.476 7.314c-.635-.725-.635-1.902 0-2.628.634-.725 1.664-.725 2.3 0l2.121 2.426c.16.182.42.182.581 0L11.225.544c.634-.725 1.664-.725 2.299 0A2 2 0 0114 1.858a2 2 0 01-.476 1.313l-7.187 8.214z"
                fill="#2362FB"
            />
        </Svg>
    )
}

export default Check
