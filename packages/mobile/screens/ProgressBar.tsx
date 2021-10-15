import { colors, ProgressBar } from '@impact-market/ui-kit'
import React from 'react'
import { ScrollView, Alert, View, Text } from 'react-native'
import Example from '../components/Example'

export default function ProgressBarScreen() {
    return (
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Example description="A simple ProgressBar">
                <ProgressBar progress={0.3} />
            </Example>
            <Example description="A simple shorter ProgressBar">
                <View style={{ width: '50%' }}>
                    <ProgressBar progress={0.3} />
                </View>
            </Example>
        </ScrollView>
    )
}
