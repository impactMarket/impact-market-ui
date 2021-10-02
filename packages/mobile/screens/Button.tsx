import { Body, Button, colors, HackerIcon } from '@impact-market/ui'
import React from 'react'
import { ScrollView, Alert, View } from 'react-native'
import Example from '../components/Example'

export default function ButtomScreen() {
    return (
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Example description="A simple button in default mode">
                <Button onPress={() => Alert.alert('Hello')}>Button</Button>
            </Example>
            <Example description="A simple button in default mode using text prop">
                <Button onPress={() => Alert.alert('Hello')} text="Button"/>
            </Example>
            <Example description="A simple button in default mode with bold font">
                <Button bold onPress={() => Alert.alert('Hello')}>Button</Button>
            </Example>
            <Example description="A simple button with green mode">
                <Button mode="green" onPress={() => Alert.alert('Hello')}>Button</Button>
            </Example>
            <Example description="A simple button with gray mode">
                <Button mode="gray" onPress={() => Alert.alert('Hello')}>Button</Button>
            </Example>
            <Example description="A simple default disabled button">
                <Button disabled={true} onPress={() => Alert.alert('Hello')}>Button</Button>
            </Example>
            <Example description="A simple green disabled button">
                <Button mode="green" disabled={true} onPress={() => Alert.alert('Hello')}>Button</Button>
            </Example>
            <Example description="A simple text mode button">
                <Button mode="text" onPress={() => Alert.alert('Hello')}>Button</Button>
            </Example>
            <Example description="A simple button with JSX element">
                <Button onPress={() => Alert.alert('Hello')}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <HackerIcon color={colors.brand.white} />
                        <Body style={{ color: colors.brand.white }}>Button</Body>
                    </View>
                </Button>
            </Example>
        </ScrollView>
    )
}
