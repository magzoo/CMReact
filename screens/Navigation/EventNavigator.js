import * as React from "react";
import {View, ScrollView} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';



import EventScreen from '../Event'
import AddEvent from '../EventsScreen/AddEvent';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Eventos" component={EventScreen}/>
      <Stack.Screen name="AddEvent" component={AddEvent} />
    </Stack.Navigator>
  );
}

export default MyStack;

