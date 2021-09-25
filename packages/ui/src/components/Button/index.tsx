import React, { PureComponent } from 'react';
import { StyleProp, TextStyle, ViewStyle, Text, Pressable, GestureResponderEvent, StyleSheet } from 'react-native';
import { colors } from '../styles/index';

interface IButtonProps {
    onPress?: (event: GestureResponderEvent) => void
    accessibilityLabel?: string;
    disabled?: boolean;
    testID?: string;

    /**
     * Button color. Default is `default`.
     */
    mode?: 'green' | 'gray' | 'default';

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
    chidren?: JSX.Element | string;
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
        const { onPress, style } = this.props;
        return (
            <Pressable
                style={[styles({buttonColor: this.buttomColor()}).container, style]}
                onPress={onPress}
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
        }
        return color;
    }

    private textColor() {
        let color = colors.brand.white;
        switch (this.props.mode) {
            case 'gray':
                color = colors.text.primary;
                break;
        }
        return color;
    }

    private Content = () => {
        const { children, textStyle, bold } = this.props;

        if (typeof(children) === 'string') {
            return <Text style={[styles({textColor: this.textColor(), bold}).text, textStyle]}>{children}</Text>
        }
        return children as JSX.Element;
    }
}

const styles = (props: {buttonColor?: string, bold?: boolean, textColor?: string}) => StyleSheet.create({
    container : {
        backgroundColor: props.buttonColor,
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 23,
    },
    text: {
        color: props.textColor,
        fontSize: 15,
        lineHeight: 28,
        textAlign: 'center',
        fontFamily: props.bold ? 'Inter_600SemiBold' : 'Inter_400Regular',
    }
});
