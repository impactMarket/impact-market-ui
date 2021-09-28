import React from 'react'
import { View, Text, TextProps } from 'react-native'

export default function Heading(props: { variant?: 'normal' | 'large', textProps?: TextProps, children?: string }) {
    const variantStyle = () => {
        const { variant } = props;
        if (variant === 'large') {
            return {
                fontSize: 18,
                lineHeight: 28,
            }
        }
        return {
            fontSize: 16,
            lineHeight: 24,
        }
    }
    return (
        <Text {...props.textProps} style={[variantStyle(), { fontFamily: 'Manrope_800ExtraBold' }, props.textProps?.style]}>{props.children}</Text>
    )
}
