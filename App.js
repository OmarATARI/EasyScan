import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Icon } from 'react-native-elements';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProductScreen from './src/screens/ProductScreen';
import Scan from './src/components/ScanBarCode';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
    )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name="Main"
        component={HomeStack}
        options={{
            tabBarLabel: 'Bienvenue !',
            tabBarIcon: () => <Icon name="home" type="ionicons" />
        }} />
       <Tab.Screen
       name="Scan"
       component={Scan}
       options={{
           tabBarLabel: 'Scanner',
           tabBarIcon: () => <Icon name="barcode" type="antdesign" />
       }} />
        <Tab.Screen
        name="Settings"
        component={SettingsScreen}
         options={{
            tabBarLabel: 'Paramètres',
            tabBarIcon: () => <Icon name="settings" type="ionicons" />
         }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
