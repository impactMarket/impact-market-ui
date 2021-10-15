import React, { Component } from 'react'
import { View, ViewProps } from 'react-native'
import { colors } from '../styles';

export default class index extends Component<ViewProps & { progress: number }, {}> {
    render() {
        return (
            <View {...this.props.style}>
                <View
                    style={{
                        height: 6,
                        width: '100%',
                        backgroundColor: colors.background.secondary,
                        borderRadius: 3,
                    }}
                >
                    <View
                        style={{
                            height: 6,
                            width: `${this.props.progress * 100}%`,
                            backgroundColor: colors.brand.primary,
                            borderRadius: 3,
                        }}
                    />
                </View>
            </View>
        );
    }
}
