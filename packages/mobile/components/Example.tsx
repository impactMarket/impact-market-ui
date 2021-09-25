import { colors } from '@impact-market/ui'
import React from 'react'
import { View, Text } from 'react-native'

export default function Example(props: { description: string; children?: JSX.Element}) {
    return (
        <View style={{marginBottom: 50}}>
            <Text style={{marginBottom: 20, fontFamily: 'Inter_400Regular', color: colors.text.primary}}>{props.description}</Text>
            {props.children}
        </View>
    )
}
