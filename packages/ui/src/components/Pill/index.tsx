import React from 'react'
import { View, Pressable, GestureResponderEvent } from 'react-native'
import ButtonText from '../../typography/ButtonText'
import { colors } from '../styles'

export default function Pill(props: { onPress?: (event: GestureResponderEvent) => void, color?: string; children?: JSX.Element | string; right?: JSX.Element; left?: JSX.Element }) {
    const { onPress, color = colors.background.secondary, children = null, right = null, left = null } = props;
    return (
        <Pressable onPress={onPress} style={{ flexDirection: 'row' }}>
            <View style={{
                alignItems: 'center',
                flexDirection: 'row',
                paddingVertical: 4,
                paddingHorizontal: 16,
                backgroundColor: color,
                borderRadius: 46,
            }}>
                {left}
                {typeof (children) === 'string' ? <ButtonText style={{ color: color !== colors.background.secondary ? colors.brand.white : colors.text.primary }}>{children}</ButtonText> : children}
                {right}
            </View>
        </Pressable>
    )
}
