import { Button } from '@impact-market/ui'
import React from 'react'
import { View, Text, ScrollView, Alert } from 'react-native'
import Example from '../components/Example'

export default function ButtomScreen() {
    return (
        <ScrollView style={{paddingHorizontal: 20, paddingTop: 20}}>
            <Example description="A simple button in default mode">
                <Button mode="default" onPress={() => Alert.alert('Hello')}>Button</Button>
            </Example>
            <Example description="A simple button in default mode with bold font">
                <Button mode="default" bold onPress={() => Alert.alert('Hello')}>Button</Button>
            </Example>
            <Example description="A simple button with green mode">
                <Button mode="green" onPress={() => Alert.alert('Hello')}>Button</Button>
            </Example>
            <Example description="A simple button with gray mode">
                <Button mode="gray" onPress={() => Alert.alert('Hello')}>Button</Button>
            </Example>
        </ScrollView>
    )
}
