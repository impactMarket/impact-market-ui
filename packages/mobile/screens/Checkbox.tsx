import { colors, Checkbox } from '@impact-market/ui-kit'
import React from 'react'
import { ScrollView, Alert, View, Text } from 'react-native'
import Example from '../components/Example'

export default function CheckboxScreen() {
    return (
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Example description="A simple checked checkbox">
                <Checkbox value={true} />
            </Example>
            <Example description="A simple unchecked checkbox">
                <Checkbox value={false} />
            </Example>
            <Example description="A simple disabled checkbox">
                <Checkbox value={false} disabled />
            </Example>
        </ScrollView>
    )
}
