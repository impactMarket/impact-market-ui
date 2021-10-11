import { Body, Button, colors, ArrowIcon, Pill, RadioButton } from '@impact-market/ui-kit'
import React, { useState } from 'react'
import { ScrollView, Alert, View, Text } from 'react-native'
import Example from '../components/Example'

export default function RadioButtonScreen() {
    const [example1, setExample1] = useState('ola')
    return (
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Example description="A simple radio button">
                <RadioButton.Group value={example1} onValueChange={(value) => setExample1(value)}>
                    <View style={{marginVertical: 10}}>
                        <RadioButton.Item value="ola">
                            ola
                        </RadioButton.Item>
                    </View>
                    <View style={{marginVertical: 10}}>
                        <RadioButton.Item value="xau">
                            xau
                        </RadioButton.Item>
                    </View>
                    <View style={{marginVertical: 10}}>
                        <RadioButton.Item value="yay">
                            yay
                        </RadioButton.Item>
                    </View>
                </RadioButton.Group>
            </Example>
        </ScrollView>
    )
}
