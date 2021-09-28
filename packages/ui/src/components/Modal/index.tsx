import React, { Component, ReactNode } from 'react';
import {
    View,
    Keyboard,
    LayoutAnimation,
    Platform,
    Pressable,
    Text,
    StyleProp,
    Modal as ModalRN,
    Dimensions,
} from 'react-native';
import CloseIcon from '../../icons/CloseIcon';
import Button, { IButtonProps } from '../Button';
import { colors } from '../styles/index';

interface IModalProps {
    visible: boolean;
    onDismiss?: () => void;
    title: string;
    buttons?: {
        inline?: boolean;
        props: IButtonProps[];
    };
    children?: ReactNode;
}
interface IModalState {
    keyboardOpen: boolean;
    bottom: number;
    width: number;
}
export default class Modal extends Component<IModalProps, IModalState> {
    private keyboardShowListener: any;
    private keyboardHideListener: any;

    constructor(props: any) {
        super(props);
        this.state = {
            keyboardOpen: false,
            bottom: 0,
            width: Dimensions.get('screen').width - 40,
        };
    }

    componentDidMount() {
        this.keyboardShowListener = Keyboard.addListener(
            'keyboardWillShow',
            this.keyboardShow
        );
        this.keyboardHideListener = Keyboard.addListener(
            'keyboardWillHide',
            this.keyboardHide
        );
    }

    componentWillUnmount() {
        this.keyboardShowListener && this.keyboardShowListener.remove();
        this.keyboardHideListener && this.keyboardHideListener.remove();
    }

    keyboardShow = (e: any) => {
        LayoutAnimation.easeInEaseOut();
        this.setState({ keyboardOpen: true, bottom: e.endCoordinates.height });
    };

    keyboardHide = (_e: any) => {
        LayoutAnimation.easeInEaseOut();
        this.setState({ keyboardOpen: false, bottom: 0 });
    };

    Buttons = () => {
        const { buttons } = this.props;
        const inlineButtonsStyle = buttons.inline ? { flex: 1 } : {};
        if (buttons) {
            return (
                <View style={{ flexDirection: buttons.inline ? 'row' : 'column', justifyContent: 'space-between', marginTop: 22 }}>
                    {buttons.props.map((button, index) => <Button
                        key={index}
                        {...button}
                        style={[
                            button.style,
                            inlineButtonsStyle,
                            index > 0 ? { marginTop: buttons.inline ? 0 : 10, marginLeft: buttons.inline ? 10 : 0 } : {}
                        ]}
                    >
                        {button.children}
                    </Button>)}
                </View>
            );
        }
        return null;
    }

    render() {
        const { visible, onDismiss, title, buttons, children } = this.props;
        const { keyboardOpen, bottom, width } = this.state;

        // yeah, modals on iOS get hidden below the keyboard
        let modalStyle: StyleProp<any> = {};
        if (Platform.OS === 'ios') {
            if (keyboardOpen) {
                modalStyle = {
                    ...modalStyle,
                    bottom: +bottom / 2,
                };
            }
        }

        return (
            <ModalRN
                visible={visible}
                onDismiss={onDismiss}
                transparent
            >
                <View
                    style={{
                        backgroundColor: "#00000099",
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View style={{
                        backgroundColor: "#f9fafb",
                        width,
                        borderRadius: 12,
                        paddingHorizontal: 20,
                        paddingBottom: 16,
                        paddingTop: 10,
                    }}>
                        <View
                            style={{
                                height: 24,
                                marginTop: 4,
                                marginBottom: 19,
                                // backgroundColor: 'blue'
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'Manrope_800ExtraBold',
                                        fontSize: 22,
                                        lineHeight: 28,
                                        height: 28,
                                        color: colors.text.primary,
                                    }}
                                >
                                    {title}
                                </Text>
                                {onDismiss !== undefined && (
                                    <Pressable
                                        hitSlop={15}
                                        onPress={onDismiss}
                                        testID="close-modal"
                                    >
                                        <CloseIcon style={{ height: 33.6, width: 33.6 }} />
                                    </Pressable>
                                )}
                            </View>
                        </View>
                        {children}
                        <this.Buttons />
                    </View>
                </View>
            </ModalRN>
        );
    }
}
