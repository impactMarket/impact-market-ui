import { Input } from '@impact-market/ui'
import React from 'react'
import { ScrollView, Alert } from 'react-native'
import { useTheme } from '@react-navigation/native';
import Example from '../components/Example';

export default function InputScreen() {
    const { colors } = useTheme();
    return (
        <ScrollView style={{paddingHorizontal: 20, paddingTop: 20}}>
            <Example description="A simple input with placeholder">
                <Input placeholder="Your input here" style={{width: 200}} />
            </Example>
            <Example description="A simple input with label">
                <Input style={{width: 200}} label="whatever" containerLabelStyle={{backgroundColor: colors.background}} />
            </Example>
            <Example description="A simple input with label and help">
                <Input style={{width: 200}} label="whatever" containerLabelStyle={{backgroundColor: colors.background}} onPressHelp={() => Alert.alert('Hello')} />
            </Example>
            <Example description="A simple input with error">
                <Input placeholder="Your input here" style={{width: 200}} error="Incomplete!" />
            </Example>
            <Example description="A simple input with help and error">
                <Input style={{width: 200}} label="whatever" containerLabelStyle={{backgroundColor: colors.background}} onPressHelp={() => Alert.alert('Hello')} error="Incomplete!" />
            </Example>
            <Example description="A simple input with multiline">
                <Input placeholder="Your input here" style={{width: 250}} multiline numberOfLines={3} />
            </Example>
            <Example description="A simple input with multiline, help and error">
                <Input style={{width: 250}} label="whatever" containerLabelStyle={{backgroundColor: colors.background}} onPressHelp={() => Alert.alert('Hello')} error="Incomplete!" multiline numberOfLines={3} />
            </Example>
        </ScrollView>
    )
}
