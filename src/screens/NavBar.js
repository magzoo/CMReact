import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Index from './Index';
import EventNavigator from '../Navigation/EventNavigator';


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Calendário" component={Index} />
      <Tab.Screen name="Eventos" component={EventNavigator} />
      <Tab.Screen name="Perfil" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;