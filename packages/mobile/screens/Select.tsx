import { Body, Button, colors, HackerIcon, Select } from '@impact-market/ui'
import { useTheme } from '@react-navigation/native';
import React from 'react'
import { ScrollView, Alert, View } from 'react-native'
import Example from '../components/Example'

export default function SelectScreen() {
    const { colors } = useTheme();
    return (
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Example description="A simple select in default mode">
                <Select value="Example" onPress={() => Alert.alert('Hello')}/>
            </Example>
            <Example description="A simple select with a label">
                <Select value="Example" label="whatever" containerLabelStyle={{backgroundColor: colors.background}} onPress={() => Alert.alert('Hello onPress')}/>
            </Example>
            <Example description="A simple select with label and help">
                <Select value="Example" label="whatever" containerLabelStyle={{backgroundColor: colors.background}} onPressHelp={() => Alert.alert('Hello')} onPress={() => Alert.alert('Hello onPress')} />
            </Example>
            <Example description="A simple select with error">
                <Select value="Example" error="Incomplete!" onPress={() => Alert.alert('Hello onPress')} />
            </Example>
            <Example description="A simple select with help and error">
                <Select value="Example" label="whatever" containerLabelStyle={{backgroundColor: colors.background}} onPressHelp={() => Alert.alert('Hello')} onPress={() => Alert.alert('Hello onPress')} error="Incomplete!" />
            </Example>
        </ScrollView>
    )
}
