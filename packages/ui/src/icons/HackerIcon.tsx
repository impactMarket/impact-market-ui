import * as React from "react"
import Svg, {
  Circle,
  G,
  Path,
  Defs,
  ClipPath,
} from "react-native-svg"
import { colors } from "../components/styles";

function HackerIcon(props: {height?: number, width?: number, color?: string, hasBackground?: boolean}) {
    const {height, width, color, hasBackground} = props;
  return (
    <Svg
      width={width || "33.6"}
      height={height || "33.6"}
      viewBox="0 0 33.6 33.6"
      fill="none"
    >
      {hasBackground && <Circle cx={17.2} cy={16.8} r={16.8} fill={colors.background.secondary} />}
      <G clipPath="url(#prefix__clip0)" fill={color ? color : colors.brand.black}>
        <Path d="M24.635 15.214l-1.484-.344.473-1.481-.035-.012a14.478 14.478 0 00-1.885-.48A4.342 4.342 0 0117.4 16.71a4.342 4.342 0 01-4.292-3.723c-.675.142-1.312.318-1.892.528l.433 1.356-1.485.344L7.4 20.31v3.102h3.294V18.18h13.412v5.232H27.4v-3.13l-2.765-5.068zM22.282 9.186a5.379 5.379 0 00-3.834-3.035 5.338 5.338 0 00-2.096 0 5.379 5.379 0 00-3.834 3.035l-1.428 3.13c1.745-.584 3.957-.919 6.274-.945 2.302-.025 4.513.256 6.276.793l-1.358-2.978z" />
        <Path d="M14.263 12.78a3.168 3.168 0 003.137 2.757 3.168 3.168 0 003.145-2.82 23.932 23.932 0 00-6.282.064zM11.866 25.953h11.068v-6.601H11.866v6.601zm5.534-4.13l.829.83-.829.828-.829-.829.829-.828z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(7.4 6)" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HackerIcon
