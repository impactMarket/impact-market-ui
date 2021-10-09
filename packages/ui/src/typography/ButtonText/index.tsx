import React from 'react'
import { Text, TextProps, TextStyle, StyleProp } from 'react-native'

export default function ButtonText(props: TextProps & { children: JSX.Element | string }) {
    return (
        <Text {...props} style={[props.style, { fontSize: 15, lineHeight: 28, fontFamily: 'Manrope_600SemiBold' }]} />
    )
}
