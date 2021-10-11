import React, { Component } from 'react'
import { Pressable, View } from 'react-native'
import { colors } from '../styles';
import Checked from './Checked';
import { RadioButtonContext, RadioButtonContextType } from './context';

interface RadioButtonItemProps {
    value: string;
    onPress?: () => void;
}
class RadioButtonItem extends Component<RadioButtonItemProps, {}> {
    render() {
        const { value, onPress } = this.props;
        return (
            <RadioButtonContext.Consumer>
                {(context?: RadioButtonContextType) => {
                    return (
                        <Pressable
                            onPress={() => {
                                context.onValueChange(value);
                                onPress?.();
                            }}
                            hitSlop={10}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{
                                    borderStyle: 'solid',
                                    borderColor: colors.background.modals,
                                    borderWidth: 1,
                                    padding: 4,
                                    height: 22,
                                    width: 22,
                                    borderRadius: 11
                                }}>
                                    {context.value === value ? <Checked /> : null}
                                </View>
                            </View>
                        </Pressable>
                    );
                }}
            </RadioButtonContext.Consumer>
        )
    }
}

export default RadioButtonItem;