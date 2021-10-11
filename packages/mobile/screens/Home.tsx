import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function HomeScreen(props: { navigation?: NavigationProp<any, any, any, any, any>}) {
    // const navigation = useNavigation();
    const { navigation } = props;
    const [items, setItems] = React.useState([
    { name: 'BUTTON', code: '#1abc9c', screen: 'Button' },
    { name: 'INPUT', code: '#2ecc71', screen: 'Input' },
    { name: 'SELECT', code: '#f1c40f', screen: 'Select' },
    { name: 'MODAL', code: '#9b59b6', screen: 'Modal' },
    { name: 'IMAGE', code: '#95a5a6', screen: 'Image' },
    { name: 'PILL', code: '#d35400', screen: 'Pill' },
    { name: 'LABEL', code: '#2c3e50', screen: 'Label' },
    { name: 'SWITCH', code: '#16a085', screen: 'Switch' },
    { name: 'RADIOBUTTON', code: '#e67e22', screen: 'RadioButton' },
    { name: 'TYPOGRAPHY', code: '#34495e', screen: 'Typography' },
    { name: 'ICONS', code: '#3498db', screen: 'Icons' },
    // { name: 'NEPHRITIS', code: '#27ae60' },
    // { name: 'BELIZE HOLE', code: '#2980b9' },
    // { name: 'WISTERIA', code: '#8e44ad' },
    // { name: 'ALIZARIN', code: '#e74c3c' },
    // { name: 'ORANGE', code: '#f39c12' },
    // { name: 'POMEGRANATE', code: '#c0392b' },
    // { name: 'SILVER', code: '#bdc3c7' },
    // { name: 'ASBESTOS', code: '#7f8c8d' },
    ]);

    return (
    <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({ item }) => (
            <Pressable onPress={() => navigation?.navigate(item.screen)}>
                <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>
            </Pressable>
        )}
    />
    );
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
});
