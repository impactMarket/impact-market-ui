import { Body, Title, Heading } from '@impact-market/ui-kit'
import React from 'react'
import { ScrollView, Alert } from 'react-native'
import { useTheme } from '@react-navigation/native';
import Example from '../components/Example';

export default function TypographyScreen() {
    const { colors } = useTheme();
    return (
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Example description="Body - Micro">
                <Body variant="micro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sem dolor, et vehicula lectus scelerisque sed. Suspendisse elementum erat fringilla, ultrices nunc mattis, fermentum massa. Phasellus ac convallis felis. Aliquam malesuada pretium vehicula. Phasellus tincidunt imperdiet dui id scelerisque.
                </Body>
            </Example>
            <Example description="Body - Small">
                <Body variant="small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sem dolor, et vehicula lectus scelerisque sed. Suspendisse elementum erat fringilla, ultrices nunc mattis, fermentum massa. Phasellus ac convallis felis. Aliquam malesuada pretium vehicula. Phasellus tincidunt imperdiet dui id scelerisque.
                </Body>
            </Example>
            <Example description="Body - Normal">
                <Body variant="normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sem dolor, et vehicula lectus scelerisque sed. Suspendisse elementum erat fringilla, ultrices nunc mattis, fermentum massa. Phasellus ac convallis felis. Aliquam malesuada pretium vehicula. Phasellus tincidunt imperdiet dui id scelerisque.
                </Body>
            </Example>
            <Example description="Body - Large">
                <Body variant="large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sem dolor, et vehicula lectus scelerisque sed. Suspendisse elementum erat fringilla, ultrices nunc mattis, fermentum massa. Phasellus ac convallis felis. Aliquam malesuada pretium vehicula. Phasellus tincidunt imperdiet dui id scelerisque.
                </Body>
            </Example>
            <Example description="Title">
                <Title>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sem dolor, et vehicula lectus scelerisque sed. Suspendisse elementum erat fringilla, ultrices nunc mattis, fermentum massa. Phasellus ac convallis felis. Aliquam malesuada pretium vehicula. Phasellus tincidunt imperdiet dui id scelerisque.
                </Title>
            </Example>
            <Example description="Heading - Normal">
                <Heading>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sem dolor, et vehicula lectus scelerisque sed. Suspendisse elementum erat fringilla, ultrices nunc mattis, fermentum massa. Phasellus ac convallis felis. Aliquam malesuada pretium vehicula. Phasellus tincidunt imperdiet dui id scelerisque.
                </Heading>
            </Example>
            <Example description="Heading - Large">
                <Heading variant="large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sem dolor, et vehicula lectus scelerisque sed. Suspendisse elementum erat fringilla, ultrices nunc mattis, fermentum massa. Phasellus ac convallis felis. Aliquam malesuada pretium vehicula. Phasellus tincidunt imperdiet dui id scelerisque.
                </Heading>
            </Example>
        </ScrollView>
    )
}
