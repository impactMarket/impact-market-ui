import React, { Component } from 'react'
import { Pressable, View } from 'react-native'
import { colors } from '../styles'
import Check from './Check';
import Disabled from './Disabled';

interface CheckboxProps {
    value: boolean;
    onValueChange?: (value: boolean) => void;
    disabled?: boolean;
    testID?: string;
}
interface CheckboxState {
    value: boolean;
}
export default class Checkbox extends Component<CheckboxProps, CheckboxState> {
    constructor(props: CheckboxProps) {
        super(props);
        this.state = {
            value: this.props.value,
        }
    }

    changeCheckbox = () => {
        const { value } = this.state;
        this.props.onValueChange?.(!value);
        this.setState({ value: !value });
    }

    Content = () => {
        const { disabled = false } = this.props;
        const { value } = this.state;
        if (disabled) {
            return (
                <View style={{
                    paddingHorizontal: 7,
                    paddingVertical: 12,
                }}>
                    <Disabled />
                </View>
            )
        }
        if (value) {
            return (
                <View style={{
                    paddingHorizontal: 7,
                    paddingVertical: 8,
                }}>
                    <Check />
                </View>
            )
        }
        return null;
    }

    render() {
        const { disabled = false } = this.props;

        return (
            <View style={{ flexDirection: 'row' }}>
                <Pressable
                    style={{
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: colors.background.modals,
                        borderRadius: 8,
                        paddingVertical: 8,
                        paddingHorizontal: 7,
                        height: 44, // 12 + 16 * 2
                        width: 43 // 14 + 14 * 2
                    }}
                    disabled={disabled}
                    onPress={this.changeCheckbox}
                >
                    <this.Content />
                </Pressable>
            </View>
        )
    }
}
