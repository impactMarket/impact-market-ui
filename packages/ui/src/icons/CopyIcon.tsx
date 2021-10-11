import * as React from "react"
import Svg, {
    Ellipse,
    G,
    Path,
    Defs,
    ClipPath,
} from "react-native-svg"

function CopyIcon(props: { height?: number, width?: number, hasBackground?: boolean }) {
    if (props.hasBackground) {
        const { width = 33, height = 34 } = props;
        return (
            <Svg
                width={width}
                height={height}
                viewBox="0 0 33 34"
                scale={width / 33}
                fill="none"
            >
                <Ellipse cx={16.5} cy={16.8} rx={16.5} ry={16.8} fill="#E9EDF4" />
                <G clipPath="url(#prefix__clip0)" fill="#172B4D">
                    <Path d="M20.386 7H10.023c-.955 0-1.728.773-1.728 1.727v12.091h1.728V8.728h10.363V7z" />
                    <Path d="M22.977 10.455h-9.5c-.954 0-1.727.772-1.727 1.727v12.09c0 .955.773 1.728 1.727 1.728h9.5c.955 0 1.728-.773 1.728-1.727V12.182c0-.954-.773-1.727-1.728-1.727zm0 13.818h-9.5V12.182h9.5v12.09z" />
                </G>
                <Defs>
                    <ClipPath id="prefix__clip0">
                        <Path fill="#fff" transform="translate(7 7)" d="M0 0h19v19H0z" />
                    </ClipPath>
                </Defs>
            </Svg>
        )
    }
    const { width = 17, height = 19 } = props;
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 17 19"
            scale={width / 17}
            fill="none"
        >
            <Path
                d="M12.386 0H2.023C1.068 0 .295.773.295 1.727v12.091h1.728V1.728h10.363V0z"
                fill="#172B4D"
            />
            <Path
                d="M14.977 3.455h-9.5c-.954 0-1.727.773-1.727 1.727v12.09c0 .955.773 1.728 1.727 1.728h9.5c.955 0 1.728-.773 1.728-1.727V5.182c0-.954-.773-1.727-1.728-1.727zm0 13.818h-9.5V5.182h9.5v12.09z"
                fill="#172B4D"
            />
        </Svg>
    )
}

export default CopyIcon
