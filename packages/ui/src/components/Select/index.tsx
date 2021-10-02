import React, { Component, } from 'react';
import {
    GestureResponderEvent,
    View,
    Pressable,
} from 'react-native';
import Input from '../Input';
import ArrowIcon from '../../icons/ArrowIcon';
import { IInputProps } from '../Input';
import { colors } from '../styles/index';

interface ISelectProps extends IInputProps {
    onPress?: (event: GestureResponderEvent) => void;
}
export default class Select extends Component<ISelectProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Pressable onPress={this.props.onPress} hitSlop={20}>
                <Input pointerEvents="none" {...this.props} rightContent={
                    <View style={{ alignSelf: 'center' }}>
                        <ArrowIcon direction='down' color={colors.brand.secondary} />
                    </View>
                } />
            </Pressable>
        );
    }
}