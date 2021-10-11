import * as React from "react"
import Svg, {
    Circle,
    G,
    Path,
    Defs,
    ClipPath,
} from "react-native-svg"
import { colors } from "../components/styles";

function HackerIcon(props: { height?: number, width?: number, color?: string, hasBackground?: boolean }) {
    const { color, hasBackground } = props;
    if (hasBackground) {
        const { height = 33.6, width = 33.6 } = props;
        return (
            <Svg
                width={width}
                height={height}
                viewBox="0 0 33.6 33.6"
                scale={width / 33.6}
                fill="none"
            >
                <Circle cx={17.2} cy={16.8} r={16.8} fill={colors.background.secondary} />
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
    const { height = 20, width = 21 } = props;
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 21 20"
            scale={width / 21}
            fill="none"
        >
            <G clipPath="url(#prefix__clip0)" fill={color ? color : colors.brand.black}>
                <Path d="M17.635 9.214l-1.484-.344.473-1.481-.035-.012a14.485 14.485 0 00-1.885-.48A4.342 4.342 0 0110.4 10.71a4.342 4.342 0 01-4.292-3.723c-.675.142-1.312.318-1.892.528L4.65 8.87l-1.485.344L.4 14.31v3.102h3.294V12.18h13.412v5.232H20.4v-3.13l-2.765-5.068zM15.282 3.186A5.379 5.379 0 0011.448.151a5.338 5.338 0 00-2.096 0 5.379 5.379 0 00-3.834 3.035L4.09 6.316c1.745-.584 3.957-.919 6.274-.944 2.302-.026 4.513.255 6.276.792l-1.358-2.978z" />
                <Path d="M7.263 6.78A3.168 3.168 0 0010.4 9.538a3.168 3.168 0 003.145-2.82 23.93 23.93 0 00-6.282.064zM4.866 19.953h11.068v-6.601H4.866v6.601zm5.534-4.13l.829.83-.829.828-.829-.829.829-.828z" />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(.4)" d="M0 0h20v20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default HackerIcon
