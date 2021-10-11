import React, { Component } from 'react'
import { View } from 'react-native'
import { RadioButtonContext } from './context';

interface RadioButtonGroupProps {
    onValueChange: (value: string) => void;
    value: string;
    children?: JSX.Element[];
}
class RadioButtonGroup extends Component<RadioButtonGroupProps, {}> {
    render() {
        const { value, onValueChange, children } = this.props;
        return (
            <RadioButtonContext.Provider value={{ value, onValueChange }}>
                <View accessible accessibilityRole="radiogroup">
                    {children}
                </View>
            </RadioButtonContext.Provider>
        )
    }
}

export default RadioButtonGroup;