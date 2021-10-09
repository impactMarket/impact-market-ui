import { colors, Image } from '@impact-market/ui-kit'
import React from 'react'
import { ScrollView, Alert, View, Text, Image as RNImage } from 'react-native'
import Example from '../components/Example'

export default function ImageScreen() {
    return (
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Example description="A simple uri Image successfully loaded">
                <Image style={{ backgroundColor: colors.background.modals, borderRadius: 8 }} height={250} width={250} source={{ uri: 'https://www.impactmarket.com/img/hero.png' }} />
            </Example>
            <Example description="A simple uri Image with error loading">
                <Image style={{ borderRadius: 8 }} height={250} width={250} source={{ uri: 'ola.jpg' }} />
            </Example>
            <Example description="A simple local Image">
                <Image style={{ borderRadius: 8 }} height={250} width={250} source={require('../assets/icon.png')} />
            </Example>
        </ScrollView>
    )
}
