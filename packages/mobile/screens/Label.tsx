import { colors, Label } from '@impact-market/ui-kit'
import React from 'react'
import { ScrollView, Alert, View, Text } from 'react-native'
import Example from '../components/Example'

export default function LabelScreen() {
    return (
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Example description="A simple Label">
                <Label>Example</Label>
            </Example>
            <Example description="A simple Label with different color">
                <Label color={colors.ui.warning}>Example</Label>
            </Example>
            <Example description="A simple Label with star">
                <Label star={colors.brand.white}>Example</Label>
            </Example>
        </ScrollView>
    )
}
