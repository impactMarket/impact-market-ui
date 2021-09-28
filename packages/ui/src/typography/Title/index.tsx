import React from 'react'
import { View, Text, TextProps } from 'react-native'

export default function Title(props: { textProps?: TextProps, children?: string }) {
    return (
        <Text {...props.textProps} style={[{
            fontSize: 12,
            lineHeight: 20,
            fontFamily: 'Manrope_800ExtraBold'
        }, props.textProps?.style]}>{props.children}</Text>
    )
}
