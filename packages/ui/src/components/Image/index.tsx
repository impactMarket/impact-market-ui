import React, { Component } from 'react'
import { Image as RNImage, ImageProps, View } from 'react-native'
import { colors } from '../styles';
import ImageErrorIcon from '../../icons/ImageErrorIcon';

export default class Image extends Component<ImageProps, { error: boolean }> {
    constructor(props: ImageProps) {
        super(props);
        this.state = {
            error: false,
        }
    }

    onError = (error) => {
        this.setState({ error: true });
        this.props.onError?.(error);
    }

    render() {
        const { error } = this.state;
        const { height, width, style } = this.props;
        if (error) {
            return <View style={[
                {
                    height,
                    width,
                    backgroundColor: colors.background.secondary,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                style
            ]}>
                <ImageErrorIcon />
            </View>
        }
        return (
            <RNImage onError={this.onError} {...this.props} style={[{ height, width }, style]} />
        )
    }
}
