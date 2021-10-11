import React, { Component, } from 'react';
import {
    GestureResponderEvent,
    View,
    Pressable,
} from 'react-native';
import Input from '../Input';
import ArrowIcon from '../../icons/ArrowIcon';
import type { IInputProps } from '../Input';
import { colors } from '../styles/index';

interface ISelectProps extends IInputProps {
    onPress?: (event: GestureResponderEvent) => void;
}
export default class Select extends Component<ISelectProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        // editable={false} makes the input editable, which allows to use the outside Pressable
        // although, that results in some dead areas on iOS.
        // To solve that issue with iOS, pointerEvents="none" is added. This is not used alone,
        // since it behaves differently in android, and needs to be in an outside view
        return (
            <Pressable onPress={this.props.onPress}>
                <Input {...this.props} pointerEvents="none" editable={false} rightContent={
                    <View style={{ alignSelf: 'center' }}>
                        <ArrowIcon direction='down' color={colors.brand.secondary} />
                    </View>
                } />
            </Pressable>
        );
    }
}