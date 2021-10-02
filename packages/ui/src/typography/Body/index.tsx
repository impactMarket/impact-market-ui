import React from 'react'
import { Text, TextProps, TextStyle, StyleProp } from 'react-native'

interface BodyProps extends TextProps {
    variant?: 'micro' | 'small' | 'normal' | 'large',
    children?: JSX.Element | string,
}

export function bodyStyle(variant?: 'micro' | 'small' | 'normal' | 'large'): StyleProp<TextStyle> {
    const commonStyle: StyleProp<TextStyle> = {
        fontFamily: 'Inter_400Regular',
        textAlignVertical: 'center',
    };
    if (variant === 'micro') {
        return {
            ...commonStyle,
            fontSize: 10,
            lineHeight: 19,
        }
    }
    else if (variant === 'small') {
        return {
            ...commonStyle,
            fontSize: 12,
            lineHeight: 20,
        }
    }
    else if (variant === 'large') {
        return {
            ...commonStyle,
            fontSize: 18,
            lineHeight: 32,
        }
    }
    return {
        ...commonStyle,
        fontSize: 15,
        lineHeight: 24,
    }
}

export default function Body(props: BodyProps) {
    return (
        <Text {...props} style={[bodyStyle(props.variant), props.style]} />
    )
}
