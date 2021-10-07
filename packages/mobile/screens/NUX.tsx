import { colors, NUX } from '@impact-market/ui-kit'
import React from 'react'
import { ScrollView, Alert, View, Text } from 'react-native'
import Example from '../components/Example'

export default function NUXScreen() {
    return (
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Example description="A simple NUX">
                <NUX>Example</NUX>
            </Example>
            <Example description="A simple NUX with different color">
                <NUX color={colors.ui.warning}>Example</NUX>
            </Example>
            <Example description="A simple NUX with star">
                <NUX star={colors.brand.white}>Example</NUX>
            </Example>
        </ScrollView>
    )
}
