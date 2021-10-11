import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from '@expo-google-fonts/inter';
import {Host} from 'react-native-portalize';
import { fontMap } from '@impact-market/ui-kit';
import HomeScreen from './screens/Home';
import ButtomScreen from './screens/Button';
import InputScreen from './screens/Input';
import IconsScreen from './screens/Icons';
import ModalScreen from './screens/Modal';
import TypographyScreen from './screens/Typography';
import SelectScreen from './screens/Select';
import PillScreen from './screens/Pill';
import LabelScreen from './screens/Label';
import ImageScreen from './screens/Image';
import RadioButtonScreen from './screens/RadioButton';

const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts(fontMap);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Host>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Button" component={ButtomScreen} />
          <Stack.Screen name="Input" component={InputScreen} />
          <Stack.Screen name="Select" component={SelectScreen} />
          <Stack.Screen name="Modal" component={ModalScreen} />
          <Stack.Screen name="Image" component={ImageScreen} />
          <Stack.Screen name="Pill" component={PillScreen} />
          <Stack.Screen name="Label" component={LabelScreen} />
          <Stack.Screen name="RadioButton" component={RadioButtonScreen} />
          <Stack.Screen name="Typography" component={TypographyScreen} />
          <Stack.Screen name="Icons" component={IconsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Host>
  );
}
