import { Body, Button, colors, ArrowIcon, Pill, Switch } from '@impact-market/ui-kit'
import React, { useState } from 'react'
import { ScrollView, Alert, View, Text } from 'react-native'
import Example from '../components/Example'

export default function SwitchScreen() {
    const [example1, setExample1] = useState(true);
    return (
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Example description="A simple switch">
                <Switch value={example1} onValueChange={setExample1} />
            </Example>
        </ScrollView>
    )
}
