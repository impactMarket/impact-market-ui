import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ImageIconError(props: { height?: number, width?: number }) {
    const { height, width } = props;
    return (
        <Svg
            width={width || "24"}
            height={height || "28"}
            viewBox="0 0 24 28"
            fill="none"
        >
            <Path
                d="M6 12.5a2 2 0 100-4 2 2 0 000 4zM17.908 4.5l-.593 2H22v15h-9.129l-.593 2H24v-19h-6.092z"
                fill="#8A9FC2"
            />
            <Path
                d="M13.167 20.5H21v-2.857c-1.997-2.776-2.954-6.657-4.883-7.098l-2.95 9.955zM15.041.216L13.771 4.5H0v19h8.143l-1.102 3.716 1.918.568 8-27-1.918-.568zM10.31 16.182c-.668-.861-1.34-1.396-2.06-1.396-1.955 0-2.674 4.157-5.25 4.999v.715H9.031l-.296 1H2v-15h11.18l-2.87 9.682z"
                fill="#8A9FC2"
            />
        </Svg>
    )
}

export default ImageIconError
