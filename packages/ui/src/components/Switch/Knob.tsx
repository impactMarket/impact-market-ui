import * as React from "react"
import Svg, { Circle } from "react-native-svg"
import { colors } from "../styles"

function Knob() {
    return (
        <Svg
            width={22}
            height={22}
            fill="none"
            style={{
                // shadow android
                elevation: 6,
                // shadown ios
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                //
                borderRadius: 11
            }}
        >
            <Circle cx={11} cy={11} r={11} fill={colors.brand.white} />
        </Svg>
    )
}

export default Knob
