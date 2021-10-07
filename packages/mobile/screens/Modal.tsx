import { Button, Modal, Body } from '@impact-market/ui-kit'
import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { useTheme } from '@react-navigation/native';
import Example from '../components/Example';
import { Portal } from 'react-native-portalize';

export default function ModalScreen() {
    const { colors } = useTheme();
    const [modalType, setModalType] = useState(-1);
    return (
        <>
            <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <Example description="Modal with close and two buttons inline">
                    <Button onPress={() => setModalType(0)}>Open</Button>
                </Example>
                <Example description="Modal without close and one button only">
                    <Button onPress={() => setModalType(1)}>Open</Button>
                </Example>
                <Example description="Modal with close and two buttons not inline">
                    <Button onPress={() => setModalType(2)}>Open</Button>
                </Example>
            </ScrollView>
            <Portal>
                <Modal
                    title="Lorem ipsum dolor"
                    visible={modalType === 0}
                    onDismiss={() => setModalType(-1)}
                    buttons={{
                        inline: true,
                        props: [
                            { text: 'Close', onPress: () => setModalType(-1) },
                            { text: 'None', mode: 'gray', onPress: () => setModalType(-1) }
                        ]
                    }}
                >
                    <Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sem dolor, et vehicula lectus scelerisque sed. Suspendisse elementum erat fringilla, ultrices nunc mattis, fermentum massa. Phasellus ac convallis felis. Aliquam malesuada pretium vehicula. Phasellus tincidunt imperdiet dui id scelerisque.
                    </Body>
                </Modal>
                <Modal
                    title="Lorem ipsum dolor"
                    visible={modalType === 1}
                    buttons={{
                        props: [
                            { text: 'Close', onPress: () => setModalType(-1) }
                        ]
                    }}
                >
                    <Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sem dolor, et vehicula lectus scelerisque sed. Suspendisse elementum erat fringilla, ultrices nunc mattis, fermentum massa. Phasellus ac convallis felis. Aliquam malesuada pretium vehicula. Phasellus tincidunt imperdiet dui id scelerisque.
                    </Body>
                </Modal>
                <Modal
                    title="Lorem ipsum dolor"
                    visible={modalType === 2}
                    onDismiss={() => setModalType(-1)}
                    buttons={{
                        props: [
                            { text: 'Close', onPress: () => setModalType(-1) },
                            { text: 'None', mode: 'gray', onPress: () => setModalType(-1) }
                        ]
                    }}
                >
                    <Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sem dolor, et vehicula lectus scelerisque sed. Suspendisse elementum erat fringilla, ultrices nunc mattis, fermentum massa. Phasellus ac convallis felis. Aliquam malesuada pretium vehicula. Phasellus tincidunt imperdiet dui id scelerisque.
                    </Body>
                </Modal>
            </Portal>
        </>
    )
}
