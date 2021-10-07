import { CloseIcon, colors, HackerIcon, Input } from '@impact-market/ui-kit'
import React from 'react'
import { ScrollView, View } from 'react-native'

export default function IconsScreen() {
    return (
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <CloseIcon />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <HackerIcon hasBackground />
                <HackerIcon />
                <HackerIcon color={colors.ui.error} />
                <HackerIcon height={20} color={colors.ui.error} />
            </View>
        </ScrollView>
    )
}
