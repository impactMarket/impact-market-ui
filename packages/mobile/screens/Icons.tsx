import { CloseIcon, Input } from '@impact-market/ui'
import React from 'react'
import { ScrollView, Alert } from 'react-native'
import { useTheme } from '@react-navigation/native';
import Example from '../components/Example';

export default function IconsScreen() {
    const { colors } = useTheme();
    return (
        <ScrollView style={{paddingHorizontal: 20, paddingTop: 20}}>
            <CloseIcon />
        </ScrollView>
    )
}
