import { ArrowIcon, CloseIcon, colors, HackerIcon, FaqIcon, SortIcon, FilterIcon, ShareIcon, QRCodeIcon, CopyIcon, FlagIcon, TrashIcon } from '@impact-market/ui-kit'
import React from 'react'
import { ScrollView, View } from 'react-native'

export default function IconsScreen() {
    return (
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CloseIcon hasBackground />
                <CloseIcon hasBackground width={20}/>
                <CloseIcon />
                <CloseIcon width={10} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ArrowIcon direction="left" hasBackground />
                <ArrowIcon direction="left" backgroundColor={colors.brand.primary} color={colors.brand.white} hasBackground />
                <ArrowIcon direction="left" height={20} width={20} backgroundColor={colors.brand.primary} color={colors.brand.white} hasBackground />
                <ArrowIcon direction="left" />
                <ArrowIcon direction="left" height={10} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <HackerIcon hasBackground />
                <HackerIcon />
                <HackerIcon color={colors.ui.error} />
                <HackerIcon width={10} color={colors.ui.error} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FaqIcon />
                <FaqIcon width={20} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <SortIcon />
                <SortIcon width={20} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FilterIcon />
                <FilterIcon width={20} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ShareIcon />
                <ShareIcon width={20} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <QRCodeIcon />
                <QRCodeIcon width={20} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CopyIcon hasBackground/>
                <CopyIcon hasBackground width={20} />
                <CopyIcon/>
                <CopyIcon width={10} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FlagIcon />
                <FlagIcon width={20} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TrashIcon />
                <TrashIcon width={20} />
            </View>
        </ScrollView>
    )
}
