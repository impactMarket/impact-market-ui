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
import { colors } from '../styles/index';

interface IInputProps extends TextInputProps {
    label?: string;
    onPressHelp?: (event: GestureResponderEvent) => void;
    containerStyle?: StyleProp<ViewStyle>;
    containerLabelStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<TextStyle>;
    labelStyle?: StyleProp<TextStyle>;
    error?: string;
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
                        height: multiline ? 115 : undefined, // TODO: edit this once we need different sizes
                    }
                ]}>
                    <View
                        style={[
                            styles({}).outline,
                            {
                                borderColor: error
                                    ? colors.ui.error
                                    : colors.brand.secondary,
                            },
                        ]}
                    />
                    <this.Label />
                    <TextInput
                        {...this.props}
                        style={[styles({}).textInput, style]}
                        placeholderTextColor={colors.text.secondary}
                    />
                </View>
                <this.Error />
            </View>
        );
    }

    private Label = () => {
        const { label, labelStyle, containerLabelStyle, onPressHelp } = this.props;
        if (label) {
            const Help = () => {
                if (onPressHelp) {
                    return <Pressable onPress={onPressHelp} hitSlop={20}>
                        <Text
                            style={{
                                color: colors.brand.primary,
                                fontSize: 12,
                                paddingLeft: 3,
                            }}
                        >
                            [?]
                        </Text>
                    </Pressable>
                }
                return null;
            }

            return (
                <View style={[styles({}).labelView, containerLabelStyle]}>
                    <Text style={[styles({}).labelText, labelStyle]} >
                        {label}
                    </Text>
                    <Help/>
                </View>
            )
        }
        return null;
    }

    private Error = () => {
        const { error} = this.props;
        if (error) {
            return <Text
                style={styles({}).errorText}
            >
                {error}
            </Text>;
        }
        return null;
    }
}

const styles = (props: {multiline?: boolean}) => StyleSheet.create({
    outline: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 12,
        borderRadius: 6,
        borderWidth: 0.5,
    },
    textInput: {
        height: props.multiline ? 115 : undefined, // TODO: edit this once we need different sizes
        minHeight: 38,
        paddingHorizontal: 10,
        marginVertical: 5,
        zIndex: 1,
        fontSize: 15,
        fontFamily: 'Inter_400Regular',
        color: colors.text.primary,
        textAlignVertical: props.multiline
            ? 'top'
            : undefined,
    },
    labelView: {
        position: 'absolute',
        left: 12,
        top: -8,
        paddingHorizontal: 4,
        backgroundColor: '#FFFFFF',
        zIndex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    labelText: {
        fontFamily: 'Inter_400Regular',
        color: colors.text.secondary,
        fontSize: 12,
        lineHeight: 14,
    },
    errorText: {
        color: '#EB5757',
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'Inter_400Regular',
        alignSelf: 'flex-start',
    }
});
