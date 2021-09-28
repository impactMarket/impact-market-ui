import React from 'react'
import { View, Text, TextProps } from 'react-native'

export default function Body(props: { variant?: 'micro' | 'small' | 'normal' | 'large', textProps?: TextProps, children?: string }) {
    const variantStyle = () => {
        const { variant } = props;
        if (variant === 'micro') {
            return {
                fontSize: 10,
                lineHeight: 19,
            }
        }
        else if (variant === 'small') {
            return {
                fontSize: 12,
                lineHeight: 20,
            }
        }
        else if (variant === 'large') {
            return {
                fontSize: 18,
                lineHeight: 32,
            }
        }
        return {
            fontSize: 15,
            lineHeight: 24,
        }
    }
    return (
        <Text {...props.textProps} style={[variantStyle(), { fontFamily: 'Inter_400Regular' }, props.textProps?.style]}>{props.children}</Text>
    )
}
