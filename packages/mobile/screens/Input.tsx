import { HackerIcon, Input } from '@impact-market/ui-kit'
import React from 'react'
import { ScrollView, Alert, View } from 'react-native'
import { useTheme } from '@react-navigation/native';
import Example from '../components/Example';

export default function InputScreen() {
    const { colors } = useTheme();
    return (
        <ScrollView style={{paddingHorizontal: 20, paddingTop: 20}}>
            <Example description="A simple input with placeholder">
                <Input placeholder="Your input here" />
            </Example>
            <Example description="A simple input with label">
                <Input label="whatever" containerLabelStyle={{backgroundColor: colors.background}} />
            </Example>
            <Example description="A simple input with label and help">
                <Input label="whatever" containerLabelStyle={{backgroundColor: colors.background}} onPressHelp={() => Alert.alert('Hello')} />
            </Example>
            <Example description="A simple input with error">
                <Input placeholder="Your input here" error="Incomplete!" />
            </Example>
            <Example description="A simple input with help and error">
                <Input label="whatever" containerLabelStyle={{backgroundColor: colors.background}} onPressHelp={() => Alert.alert('Hello')} error="Incomplete!" />
            </Example>
            <Example description="A simple input right helper">
                <Input label="whatever" containerLabelStyle={{backgroundColor: colors.background}} onPressHelp={() => Alert.alert('Hello')} rightContent="You right info" />
            </Example>
            <Example description="A simple input right component helper">
                <Input label="whatever" containerLabelStyle={{backgroundColor: colors.background}} onPressHelp={() => Alert.alert('Hello')} rightContent={<View style={{alignContent: 'center', height: 24, width: 24 }}><HackerIcon height={24} width={24} hasBackground /></View>} />
            </Example>
            <Example description="A simple input with multiline">
                <Input placeholder="Your input here" multiline numberOfLines={3} />
            </Example>
            <Example description="A simple input with multiline, help and error">
                <Input label="whatever" containerLabelStyle={{backgroundColor: colors.background}} onPressHelp={() => Alert.alert('Hello')} error="Incomplete!" multiline numberOfLines={3} />
            </Example>
        </ScrollView>
    )
}
