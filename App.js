
import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TestScheduler } from '@jest/core';

import Nav from './screens/NavBar'
import Home from './screens/Index'
import Event from './screens/Event'
import AddEvent from './screens/EventsScreen/AddEvent'
import { navigationRef } from './screens/Navigation/RootNavigation';


const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Nav/>
    </NavigationContainer>

  );
}


export default App;