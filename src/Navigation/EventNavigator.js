import * as React from "react";
import {View, ScrollView} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';



import EventScreen from '../screens/Event'
import AddEvent from '../screens/AddEvent';
import EditEvent from '../screens/EditEvent'


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EventosLista" component={EventScreen}/>
      <Stack.Screen name="AddEvent" component={AddEvent} />
      <Stack.Screen name="EditEvent" component={EditEvent} />
    </Stack.Navigator>
  );
}

export default MyStack;

