import { Body, Button, ButtonText, colors, HackerIcon } from '@impact-market/ui-kit'
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
            <Example description="A simple outlined mode button">
                <Button mode="outlined" onPress={() => Alert.alert('Hello')}>Button</Button>
            </Example>
            <Example description="A simple button with JSX element">
                <Button onPress={() => Alert.alert('Hello')}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <HackerIcon height={15} width={15} color={colors.brand.white} />
                        <ButtonText style={{ color: colors.brand.white }}>Button</ButtonText>
                    </View>
                </Button>
            </Example>
            <Example description="A simple button with different height">
                <Button style={{height: 52}} onPress={() => Alert.alert('Hello')}>Button</Button>
            </Example>
            <Example description="A simple button with loading">
                <Button style={{height: 52}} onPress={() => Alert.alert('Hello')} loading>Button</Button>
            </Example>
        </ScrollView>
    )
}
