import React from 'react'
import { View } from 'react-native'
import Body from '../../typography/Body';
import StarIcon from '../../icons/StarIcon';
import { colors } from '../styles';

export default function NUX(props: { children?: JSX.Element | string, variant?: 'micro' | 'small', color?: string, star?: string }) {
    const { children, variant = 'micro', color = colors.ui.error, star = null } = props;

    return (
        <View style={{
            flexDirection: 'row'
        }}>
            <View style={{
                backgroundColor: color,
                paddingHorizontal: variant === 'micro' ? 4 : 8,
                paddingVertical: variant === 'micro' ? 2 : 4,
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                {star ? <View style={{ marginRight: 4 }}><StarIcon height={10} width={10} color={star} /></View> : null}
                {typeof (children) === 'string' ? <Body variant={variant} style={{ color: colors.brand.white }}>{children.toUpperCase()}</Body> : children}
            </View>
        </View>
    )
}
