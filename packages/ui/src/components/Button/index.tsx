import React, { PureComponent } from 'react';
import { StyleProp, TextStyle, ViewStyle, Text, Pressable, GestureResponderEvent, StyleSheet, View, ViewProps } from 'react-native';
import { colors } from '../styles/index';
import ButtonText from '../../typography/ButtonText';

export interface IButtonProps {
    onPress?: (event: GestureResponderEvent) => void
    accessibilityLabel?: string;
    disabled?: boolean;
    testID?: string;

    /**
     * Button mode. Default is `default`.
     */
    mode?: 'green' | 'gray' | 'text' | 'outlined' | 'default';

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
    constructor(props: IButtonProps) {
        super(props);
    }

    render() {
        const { onPress, style, disabled, mode } = this.props;
        let outlinedStyle: StyleProp<ViewStyle> = {};
        if (mode === 'outlined') {
            outlinedStyle = {
                borderColor: colors.brand.primary,
                borderWidth: 2,
                borderStyle: 'solid'
            }
        }
        return (
            <Pressable
                style={[styles({ buttonColor: this.buttomColor(), disabled }).container, style, outlinedStyle]}
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
            case 'outlined':
                color = 'transparent';
                break;
        }
        return color;
    }

    private textColor() {
        let color = colors.brand.white;
        switch (this.props.mode) {
            case 'gray':
                color = colors.text.primary;
                break;
            case 'text':
            case 'outlined':
                color = colors.brand.primary;
                break;
        }
        return color;
    }

    private Content = () => {
        const { children, text, textStyle } = this.props;

        if (children !== undefined && typeof (children) === 'string') {
            return <ButtonText style={[styles({ textColor: this.textColor() }).text, textStyle]}>{children}</ButtonText>
        } else if (text !== undefined) {
            return <ButtonText style={[styles({ textColor: this.textColor() }).text, textStyle]}>{text}</ButtonText>
        } else if (children === undefined) {
            return null;
        }
        return children as JSX.Element;
    }
}

const styles = (props: { buttonColor?: string, disabled?: boolean, textColor?: string }) => StyleSheet.create({
    container: {
        backgroundColor: props.buttonColor,
        opacity: props.disabled ? 0.5 : 1,
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 23,
    },
    text: {
        color: props.textColor,
        textAlign: 'center'
    }
});
