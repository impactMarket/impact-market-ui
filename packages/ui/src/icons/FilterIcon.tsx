import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function FilterIcon(props: { height?: number, width?: number }) {
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
                d="M9.094 14.187H23.69c.612 0 1.093-.48 1.093-1.093S24.303 12 23.69 12H9.094C8.48 12 8 12.481 8 13.094c0 .612.481 1.093 1.094 1.093zM21.502 16.9H11.094c-.613 0-1.094.48-1.094 1.093s.481 1.094 1.094 1.094h10.408c.613 0 1.094-.481 1.094-1.094 0-.612-.481-1.093-1.094-1.093zM19.337 21.799h-6.243c-.613 0-1.094.481-1.094 1.094 0 .612.481 1.093 1.094 1.093h6.243c.612 0 1.094-.481 1.094-1.093 0-.613-.482-1.094-1.094-1.094z"
                fill="#172B4D"
            />
        </Svg>
    )
}

export default FilterIcon
