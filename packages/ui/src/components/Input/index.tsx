import React, { PureComponent } from 'react';
import {
    TextInput,
    Text,
    TextInputProps,
    View,
    StyleSheet,
    GestureResponderEvent,
    Pressable,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';
import Body, { bodyStyle } from '../../typography/Body';
import { colors } from '../styles/index';

export interface IInputProps extends TextInputProps {
    label?: string;
    onPressHelp?: (event: GestureResponderEvent) => void;
    containerStyle?: StyleProp<ViewStyle>;
    containerLabelStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<TextStyle>;
    labelStyle?: StyleProp<TextStyle>;
    error?: string;
    rightContent?: JSX.Element | string;
}
export default class Input extends PureComponent<IInputProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { error, style, containerStyle, multiline } = this.props;

        return (
            <View>
                <View style={[
                    containerStyle,
                    {
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        height: multiline ? 115 : undefined, // TODO: edit this once we need different sizes
                    }
                ]}>
                    <View style={styles({error: error?.length > 0}).outline} />
                    <this.Label />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <TextInput
                            {...this.props}
                            style={[
                                bodyStyle(),
                                styles({ multiline }).textInput, 
                                {
                                    // react-native text input doesn't handle line height very well
                                    // so we make undefined and replace with height
                                    height: multiline ? 115 : 24, 
                                    lineHeight: undefined
                                },
                                style
                            ]}
                            placeholderTextColor={colors.text.secondary}
                        />
                        <this.Right />
                    </View>
                </View>
                <this.Error />
            </View>
        );
    }

    private Right = () => {
        const { rightContent } = this.props;
        if (typeof(rightContent) === 'string') {
            return <Body variant="small" style={{ color: colors.brand.secondary }}>{rightContent}</Body>;
        } else if (rightContent) {
            return rightContent;
        }
        return null;
    }

    private Label = () => {
        const { label, labelStyle, containerLabelStyle, onPressHelp } = this.props;
        if (label) {
            const Help = () => {
                if (onPressHelp) {
                    return <Pressable onPress={onPressHelp} hitSlop={20}>
                        <Body variant="small" style={{ paddingLeft: 3, color: colors.brand.primary }}>[?]</Body>
                    </Pressable>
                }
                return null;
            }

            return (
                <View style={[styles({}).labelView, containerLabelStyle]}>
                    <Body variant="small" style={[{ color: colors.brand.secondary }, labelStyle]}>{label}</Body>
                    <Help/>
                </View>
            )
        }
        return null;
    }

    private Error = () => {
        const { error} = this.props;
        return error ? <Body variant="small" style={[{ color: colors.ui.error, paddingTop: 2 }]}>{error}</Body> : null;
    }
}

const styles = (props: { multiline?: boolean, error?:boolean }) => StyleSheet.create({
    outline: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flexDirection: 'row',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor:props.error
            ? colors.ui.error
            : colors.brand.secondary,
    },
    textInput: {
        alignSelf: 'center',
        zIndex: 1,
        flex: 1,
        color: colors.text.primary,
        textAlignVertical: props.multiline
            ? 'top'
            : undefined,
    },
    labelView: {
        position: 'absolute',
        left: 12,
        top: -10,
        paddingHorizontal: 4,
        backgroundColor: '#FFFFFF',
        zIndex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
});
