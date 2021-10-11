import React, { Component } from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors } from '../styles'
import Knob from './Knob'

interface SwitchProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
}
export default class Switch extends Component<SwitchProps, {}> {
    render() {
        const { value, onValueChange } = this.props;
        return (
            <Pressable
                style={{
                    backgroundColor: !value ? colors.brand.white : colors.brand.primary,
                    width: 51,
                    height: 32,
                    paddingVertical: 5,
                    paddingLeft: !value ? 5 : 24,
                    borderRadius: 16
                }}
                onPress={() => onValueChange(!value)}
            >
                <Knob />
            </Pressable>
        )
    }
}
