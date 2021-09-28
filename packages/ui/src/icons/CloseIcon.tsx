import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

function CloseIcon(props: SvgProps) {
  return (
    <Svg
      width={35}
      height={34}
      fill="none"
      {...props}
    >
      <Circle cx={17.4} cy={16.8} r={16.8} fill="#E9EDF4" />
      <Path
        stroke="#172B4D"
        strokeWidth={2}
        strokeLinecap="round"
        d="M11.377 23.164l12.728-12.728"
      />
      <Path
        stroke="#172B4D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M24.105 23.164L11.377 10.436"
      />
    </Svg>
  )
}

export default CloseIcon
