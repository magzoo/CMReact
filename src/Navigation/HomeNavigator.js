import * as React from "react";
import {View, ScrollView} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';



import Home from '../screens/Index'
import AddSchedule from '../screens/AddSchedule';
import RemoveSchedule from '../screens/RemoveSchedule'
import EditSchedule from "../screens/EditSchedule";
import ShareSchedule from "../screens/ShareSchedule";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home}/>
      <Stack.Screen name="AddSchedule" component={AddSchedule} />
      <Stack.Screen name="RemoveSchedule" component={RemoveSchedule}/>
      <Stack.Screen name="EditSchedule" component={EditSchedule}/>
      <Stack.Screen name="ShareSchedule" component={ShareSchedule} />
    </Stack.Navigator>
  );
}

export default MyStack;