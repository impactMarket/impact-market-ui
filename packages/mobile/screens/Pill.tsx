import { Body, Button, colors, ArrowIcon, Pill } from '@impact-market/ui'
import React from 'react'
import { ScrollView, Alert, View, Text } from 'react-native'
import Example from '../components/Example'

export default function PillScreen() {
    return (
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Example description="A simple pill">
                <Pill>Example</Pill>
            </Example>
            <Example description="A simple pill with dark background">
                <Pill color={colors.background.dark}>Example</Pill>
            </Example>
            <Example description="A simple pill with icon">
                <Pill right={
                    <View style={{ marginLeft: 10 }}>
                        <ArrowIcon direction='down' color={colors.brand.secondary} />
                    </View>
                }>Example</Pill>
            </Example>
        </View>
    )
}
