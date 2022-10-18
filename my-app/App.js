import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Coordenador from './src/pages/CoordLogin';



const Stack = createNativeStackNavigator();

export default function App({}) {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Coordenador'>
            <Stack.Screen  name="Home" component={Home} options={{ Title: '', headerTransparent: true, headerShown: false,}}/>
            <Stack.Screen name="Coordenador" component={Coordenador} options={{ Title: '', headerTransparent: true, headerShown: false,}}/>
          </Stack.Navigator>
        </NavigationContainer>
  );
}


