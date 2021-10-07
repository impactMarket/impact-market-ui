import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarIcon(props: { height?: number, width?: number, color?: string }) {
    const { height, width, color = "#FFC278" } = props;
    return (
        <Svg
            width={width || "18"}
            height={height || "17"}
            viewBox="0 0 18 17"
            fill="none"
        >
            <Path
                d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 00.951.69h4.188c.969 0 1.371 1.24.588 1.81L13.584 9.87a1 1 0 00-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 00-1.176 0L5.024 16.09c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 00-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 00.95-.69L8.05.927z"
                fill={color}
            />
        </Svg>
    )
}

export default StarIcon
