import React, { PureComponent } from 'react';
import { StyleProp, TextStyle, ViewStyle, Text, Pressable, GestureResponderEvent, StyleSheet, View } from 'react-native';
import { colors } from '../styles/index';
import Color from 'color';
import Body from '../../typography/Body';

export interface IButtonProps {
    onPress?: (event: GestureResponderEvent) => void
    accessibilityLabel?: string;
    disabled?: boolean;
    testID?: string;

    /**
     * Button mode. Default is `default`.
     */
    mode?: 'green' | 'gray' | 'text' | 'default';

    /**
     * Text bold font
     */
    bold?: boolean;

    /**
     * Button style
     */
    style?: StyleProp<ViewStyle>;

    /**
     * Text style, only applies to text field
     */
    textStyle?: StyleProp<TextStyle>;

    /**
     * Can be a React Element, or a string.
     */
    children?: JSX.Element | string;

    /**
     * Button's text. Can use a children element instead.
     */
    text?: string;
}

/**
 * Example:
 * ```
 * <Button
 *   bold
 *   onPress={() => {}}
 *   accessibilityLabel="Learn more about this button"
 * >
 *   Learn more
 * </Button>
 * ```
 */
export default class Button extends PureComponent<IButtonProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { onPress, style, disabled } = this.props;
        return (
            <Pressable
                style={[styles({ buttonColor: this.buttomColor() }).container, style]}
                onPress={onPress}
                disabled={disabled}
            >
                <this.Content />
            </Pressable>
        );
    }

    private buttomColor() {
        let color = colors.brand.primary;
        switch (this.props.mode) {
            case 'green':
                color = colors.ui.success;
                break;
            case 'gray':
                color = colors.background.secondary;
                break;
            case 'text':
                color = 'transparent';
                break;
        }
        return this.props.disabled ? Color(color).alpha(0.5).string() : color;
    }

    private textColor() {
        let color = colors.brand.white;
        switch (this.props.mode) {
            case 'gray':
                color = colors.text.primary;
                break;
            case 'text':
                color = colors.brand.primary;
                break;
        }
        return color;
    }

    private Content = () => {
        const { children, text, textStyle, bold } = this.props;

        if (children !== undefined && typeof (children) === 'string') {
            return <Body style={[styles({ textColor: this.textColor(), bold }).text, textStyle]}>{children}</Body>
        } else if (text !== undefined) {
            return <Body style={[styles({ textColor: this.textColor(), bold }).text, textStyle]}>{text}</Body>
        } else if (children === undefined) {
            return null;
        }
        return children as JSX.Element;
    }
}

const styles = (props: { buttonColor?: string, bold?: boolean, textColor?: string }) => StyleSheet.create({
    container: {
        backgroundColor: props.buttonColor,
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 23,
    },
    text: {
        color: props.textColor,
        textAlign: 'center',
        fontFamily: props.bold ? 'Inter_600SemiBold' : 'Inter_400Regular',
    }
});
