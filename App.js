import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Icon } from 'react-native-elements';

import HomeScreen from './src/screens/HomeScreen';
import HistoryScreen from './src/screens/HistoryScreen';
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
        name="History"
        component={HistoryScreen}
         options={{
            tabBarLabel: 'Historique',
            tabBarIcon: () => <Icon name="filetext1" type="antdesign" />
         }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
